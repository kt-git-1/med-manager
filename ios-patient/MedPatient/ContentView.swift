import SwiftUI

private struct LocalTabBarInteractionBlockKey: PreferenceKey {
    static var defaultValue: Bool = false
    static func reduce(value: inout Bool, nextValue: () -> Bool) {
        // Prefer the latest value set in the view hierarchy
        value = nextValue() || value
    }
}

#if canImport(UIKit)
import UIKit
#endif

struct ContentView: View {
    @StateObject private var sessionStore = PatientSessionStore()
    @State private var hasBootstrapped = false
    @State private var isTabInteractionBlocked = false

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
                .overlay {
                    if isTabInteractionBlocked {
                        Color.black.opacity(0.001)
                            .ignoresSafeArea()
                    }
                }
                .onPreferenceChange(LocalTabBarInteractionBlockKey.self) { (value: Bool) in
                    isTabInteractionBlocked = value
                }
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

private struct TabBarInteractionBlocker: ViewModifier {
    let isBlocked: Bool
    func body(content: Content) -> some View {
        content.preference(key: LocalTabBarInteractionBlockKey.self, value: isBlocked)
    }
}

extension View {
    func tabBarInteractionBlocked(_ isBlocked: Bool) -> some View {
        modifier(TabBarInteractionBlocker(isBlocked: isBlocked))
    }
}

#Preview {
    ContentView()
}
