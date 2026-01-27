import SwiftUI

struct HistoryView: View {
    let apiBaseURL: String
    @ObservedObject var sessionStore: PatientSessionStore
    @State private var adherenceItems: [AdherenceLogDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    private let refreshTimer = Timer.publish(every: 30, on: .main, in: .common).autoconnect()

    var body: some View {
        NavigationStack {
            List {
                Section {
                    HStack(spacing: 12) {
                        Image(systemName: "calendar.circle.fill")
                            .foregroundStyle(.white, .teal)
                            .font(.title2)
                        VStack(alignment: .leading, spacing: 4) {
                            Text("服薬履歴")
                                .font(.headline)
                            Text("直近の記録を表示します。")
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
                Section(header: Text("履歴")) {
                    if adherenceItems.isEmpty {
                        Text("履歴がありません")
                    } else {
                        ForEach(adherenceItems, id: \.id) { item in
                            VStack(alignment: .leading, spacing: 8) {
                                Text(item.medicationName ?? "お薬")
                                    .font(.headline)
                                HStack(spacing: 8) {
                                    Text(formatDateTime(item.takenAt))
                                        .font(.subheadline)
                                        .foregroundStyle(.secondary)
                                    if let timeSlot = formatTimeSlot(item.takenAt),
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
                                if item.action == "taken" {
                                    Label("服用済み", systemImage: "checkmark.circle.fill")
                                        .foregroundStyle(.green)
                                } else if item.action == "skipped" {
                                    Label("スキップ済み", systemImage: "minus.circle.fill")
                                        .foregroundStyle(.secondary)
                                }
                            }
                        }
                    }
                }
            }
            .navigationTitle("履歴")
            .tint(.teal)
            .listStyle(.insetGrouped)
            .toolbar {
                Button("ログアウト") {
                    sessionStore.clear()
                }
            }
            .refreshable {
                await reload()
            }
            .task {
                await reload()
            }
            .onReceive(refreshTimer) { _ in
                guard !isLoading else { return }
                Task { await reload() }
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
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let response = try await client.getAdherence(from: nil, to: nil, cursor: nil, limit: 30)
            adherenceItems = response.items.sorted { $0.takenAt > $1.takenAt }
        } catch {
            errorMessage = "履歴取得に失敗しました。"
        }
    }

    private func formatDateTime(_ value: String) -> String {
        guard let date = ISO8601DateFormatter().date(from: value) else { return value }
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.locale = Locale(identifier: "ja_JP")
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "yyyy-MM-dd/HH:mm"
        return formatter.string(from: date)
    }

    private func formatTimeSlot(_ value: String) -> String? {
        guard let date = ISO8601DateFormatter().date(from: value) else { return nil }
        let formatter = DateFormatter()
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
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
    HistoryView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
