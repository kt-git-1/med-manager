import SwiftUI

struct TodayView: View {
    let apiBaseURL: String
    @ObservedObject var sessionStore: PatientSessionStore
    @State private var doseInstances: [DoseInstanceDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var sendingIds: Set<String> = []
    private let offlineQueue = OfflineQueue()
    private let scheduler = NotificationScheduler()

    var body: some View {
        NavigationStack {
            List {
                Section {
                    HStack(spacing: 12) {
                        Image(systemName: "sun.max.fill")
                            .foregroundStyle(.white, .teal)
                            .font(.title2)
                        VStack(alignment: .leading, spacing: 4) {
                            Text("今日の服薬")
                                .font(.headline)
                            Text("予定に合わせて反応を記録します。")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .padding(.vertical, 4)
                }
                if let errorMessage {
                    Text(errorMessage)
                        .foregroundStyle(.red)
                }
                Section(header: Text("今日の予定")) {
                    if doseInstances.isEmpty {
                        Text("予定がありません")
                    } else {
                        ForEach(doseInstances, id: \.id) { item in
                            VStack(alignment: .leading, spacing: 8) {
                                Text(item.medicationName ?? "お薬")
                                    .font(.headline)
                                HStack(spacing: 8) {
                                    Text(formatTime(item.scheduledFor))
                                        .font(.subheadline)
                                        .foregroundStyle(.secondary)
                                    if let timeSlot = formatTimeSlot(item.scheduledFor),
                                       let presetLabel = presetLabel(for: timeSlot) {
                                        Text(presetLabel)
                                            .font(.caption)
                                            .padding(.horizontal, 8)
                                            .padding(.vertical, 4)
                                            .background(.teal.opacity(0.12))
                                            .clipShape(Capsule())
                                            .foregroundStyle(.teal)
                                    }
                                }
                                if item.status == "taken" {
                                    Label("服用済み", systemImage: "checkmark.circle.fill")
                                        .foregroundStyle(.green)
                                } else if item.status == "skipped" {
                                    Label("スキップ済み", systemImage: "minus.circle.fill")
                                        .foregroundStyle(.secondary)
                                } else {
                                    HStack {
                                        Button("服用済み") {
                                            Task { await sendAdherence(item, action: "taken") }
                                        }
                                        .buttonStyle(.borderedProminent)
                                        .tint(.teal)
                                        .disabled(sendingIds.contains(item.id) || isLoading)
                                        Button("スキップ") {
                                            Task { await sendAdherence(item, action: "skipped") }
                                        }
                                        .buttonStyle(.bordered)
                                        .tint(.teal)
                                        .disabled(sendingIds.contains(item.id) || isLoading)
                                        if sendingIds.contains(item.id) {
                                            ProgressView()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .navigationTitle("今日")
            .tint(.teal)
            .listStyle(.insetGrouped)
            .toolbar {
                Button("更新") {
                    Task { await reload() }
                }
                .disabled(isLoading)
                Button("ログアウト") {
                    sessionStore.clear()
                }
            }
            .task {
                await reload()
            }
        }
    }

    private func reload() async {
        guard !apiBaseURL.isEmpty else {
            errorMessage = "API_BASE_URLが未設定です。"
            return
        }
        await sessionStore.refreshIfNeeded(apiBaseURL: apiBaseURL)
        isLoading = true
        defer { isLoading = false }
        errorMessage = nil
        await flushOfflineQueue()
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let today = isoDate()
            let items = try await client.getTodayDoseInstances(date: today)
            doseInstances = items
            try await scheduler.requestAuthorization()
            let times = items.compactMap { parseDate($0.scheduledFor) }
            await scheduler.scheduleTodayNotifications(
                times: times,
                title: "服用リマインド",
                body: "予定の服薬時間です"
            )
        } catch {
            errorMessage = "今日の予定取得に失敗しました。"
        }
    }

    private func sendAdherence(_ item: DoseInstanceDTO, action: String) async {
        await MainActor.run {
            sendingIds.insert(item.id)
            doseInstances = doseInstances.map { instance in
                guard instance.id == item.id else { return instance }
                return DoseInstanceDTO(
                    id: instance.id,
                    medicationId: instance.medicationId,
                    scheduleId: instance.scheduleId,
                    scheduledFor: instance.scheduledFor,
                    status: action == "taken" ? "taken" : "skipped",
                    medicationName: instance.medicationName
                )
            }
        }
        await sessionStore.refreshIfNeeded(apiBaseURL: apiBaseURL)
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let payload = [
                "doseInstanceId": item.id,
                "action": action,
                "takenAt": isoDateTime(),
                "clientUuid": UUID().uuidString,
            ]
            _ = try await client.createAdherence(
                doseInstanceId: item.id,
                action: action,
                takenAt: payload["takenAt"] ?? isoDateTime(),
                clientUuid: payload["clientUuid"] ?? UUID().uuidString
            )
            await reload()
            await MainActor.run {
                sendingIds.remove(item.id)
            }
            return
        } catch {
            let payload = [
                "doseInstanceId": item.id,
                "action": action,
                "takenAt": isoDateTime(),
                "clientUuid": UUID().uuidString,
            ]
            if let data = try? JSONSerialization.data(withJSONObject: payload, options: []) {
                offlineQueue.enqueue(PendingAdherence(clientUuid: UUID(uuidString: payload["clientUuid"] ?? "") ?? UUID(), payload: data))
                errorMessage = "オフラインのため送信待ちに保存しました。"
            } else {
                errorMessage = "送信に失敗しました。"
            }
            await MainActor.run {
                sendingIds.remove(item.id)
            }
        }
    }

    private func flushOfflineQueue() async {
        guard !apiBaseURL.isEmpty else { return }
        let items = offlineQueue.all()
        guard !items.isEmpty else { return }
        for item in items {
            guard
                let payload = try? JSONSerialization.jsonObject(with: item.payload) as? [String: String],
                let doseInstanceId = payload["doseInstanceId"],
                let action = payload["action"],
                let takenAt = payload["takenAt"],
                let clientUuid = payload["clientUuid"]
            else {
                offlineQueue.remove(clientUuid: item.clientUuid)
                continue
            }
            do {
                let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
                _ = try await client.createAdherence(
                    doseInstanceId: doseInstanceId,
                    action: action,
                    takenAt: takenAt,
                    clientUuid: clientUuid
                )
                offlineQueue.remove(clientUuid: item.clientUuid)
            } catch {
                continue
            }
        }
    }

    private func isoDate() -> String {
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.timeZone = TimeZone.current
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.string(from: Date())
    }

    private func isoDateTime() -> String {
        ISO8601DateFormatter().string(from: Date())
    }

    private func parseDate(_ value: String) -> Date? {
        ISO8601DateFormatter().date(from: value)
    }

    private func formatTime(_ value: String) -> String {
        guard let date = parseDate(value) else { return value }
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.locale = Locale(identifier: "ja_JP")
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "yyyy-MM-dd/HH:mm"
        return formatter.string(from: date)
    }

    private func formatTimeSlot(_ value: String) -> String? {
        guard let date = parseDate(value) else { return nil }
        let formatter = DateFormatter()
        formatter.timeZone = TimeZone.current
        formatter.dateFormat = "HH:mm"
        return formatter.string(from: date)
    }

    private func presetLabel(for timeSlot: String) -> String? {
        switch timeSlot {
        case "08:00":
            return "朝"
        case "12:00":
            return "昼"
        case "20:00":
            return "夜"
        default:
            return nil
        }
    }
}

#Preview {
    TodayView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
