import SwiftUI

struct HistoryView: View {
    @ObservedObject var sessionStore: PatientSessionStore

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
                Section(header: Text("履歴")) {
                    Text("2026-01-25 08:00 服用")
                    Text("2026-01-24 20:00 服用")
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
        }
    }
}

#Preview {
    HistoryView(sessionStore: PatientSessionStore())
}
