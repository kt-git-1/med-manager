import SwiftUI

struct ContentView: View {
    @StateObject private var sessionStore = PatientSessionStore()
    @State private var hasBootstrapped = false

    private var apiBaseURL: String {
        Bundle.main.object(forInfoDictionaryKey: "API_BASE_URL") as? String ?? ""
    }

    var body: some View {
        Group {
            if sessionStore.token == nil {
                LinkingView(apiBaseURL: apiBaseURL, sessionStore: sessionStore)
            } else {
                TabView {
                    TodayView(apiBaseURL: apiBaseURL, sessionStore: sessionStore)
                        .tabItem {
                            Label("今日", systemImage: "checkmark.circle")
                        }
                    HistoryView(apiBaseURL: apiBaseURL, sessionStore: sessionStore)
                        .tabItem {
                            Label("履歴", systemImage: "calendar")
                        }
                }
                .tint(.teal)
            }
        }
        .onAppear {
            guard !hasBootstrapped else { return }
            hasBootstrapped = true
            sessionStore.loadAsync()
            Task {
                await sessionStore.refreshIfNeeded(apiBaseURL: apiBaseURL)
                sessionStore.startAutoRefresh(apiBaseURL: apiBaseURL)
            }
        }
    }
}

#Preview {
    ContentView()
}
