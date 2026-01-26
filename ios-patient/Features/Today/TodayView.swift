import SwiftUI

struct TodayView: View {
    let apiBaseURL: String
    @ObservedObject var sessionStore: PatientSessionStore
    @State private var doseInstances: [DoseInstanceDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    private let offlineQueue = OfflineQueue()
    private let scheduler = NotificationScheduler()

    var body: some View {
        NavigationStack {
            List {
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
                                Text(formatTime(item.scheduledFor))
                                    .font(.headline)
                                HStack {
                                    Button("服用済み") {
                                        Task { await sendAdherence(item, action: "taken") }
                                    }
                                    .buttonStyle(.borderedProminent)
                                    Button("スキップ") {
                                        Task { await sendAdherence(item, action: "skipped") }
                                    }
                                    .buttonStyle(.bordered)
                                }
                            }
                        }
                    }
                }
            }
            .navigationTitle("今日")
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
        isLoading = true
        defer { isLoading = false }
        errorMessage = nil
        await flushOfflineQueue()
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let today = isoDate()
            let items = try await client.getTodayDoseInstances(date: today)
            doseInstances = items
            await scheduler.requestAuthorization()
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
        formatter.timeStyle = .short
        formatter.dateStyle = .none
        return formatter.string(from: date)
    }
}

#Preview {
    TodayView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
