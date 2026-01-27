import SwiftUI
#if canImport(UIKit)
import UIKit
#endif

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
        .dismissKeyboardOnTap()
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

extension View {
    func dismissKeyboardOnTap() -> some View {
        modifier(DismissKeyboardOnTapModifier())
    }
}

private struct DismissKeyboardOnTapModifier: ViewModifier {
    func body(content: Content) -> some View {
        content.simultaneousGesture(
            TapGesture().onEnded {
                #if canImport(UIKit)
                UIApplication.shared.sendAction(
                    #selector(UIResponder.resignFirstResponder),
                    to: nil,
                    from: nil,
                    for: nil
                )
                #endif
            }
        )
    }
}

#Preview {
    ContentView()
}
