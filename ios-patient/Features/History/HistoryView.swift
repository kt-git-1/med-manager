import SwiftUI

struct HistoryView: View {
    var body: some View {
        NavigationStack {
            List {
                Section(header: Text("履歴")) {
                    Text("2026-01-25 08:00 服用")
                    Text("2026-01-24 20:00 服用")
                }
            }
            .navigationTitle("履歴")
        }
    }
}

#Preview {
    HistoryView()
}
