import SwiftUI
#if canImport(UIKit)
import UIKit
#endif

struct ContentView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var hasBootstrapped = false

    var body: some View {
        Group {
            if familyJwtToken.isEmpty {
                FamilyLoginView()
            } else {
                TabView {
                    MedicationsView()
                        .tabItem {
                            Label("薬", systemImage: "pills")
                        }
                    SchedulesView()
                        .tabItem {
                            Label("予定", systemImage: "clock")
                        }
                    HistoryView()
                        .tabItem {
                            Label("履歴", systemImage: "calendar")
                        }
                    InventoryView()
                        .tabItem {
                            Label("在庫", systemImage: "tray.full")
                        }
                    LinkingCodeView()
                        .tabItem {
                            Label("患者/連携", systemImage: "person.badge.plus")
                        }
                }
                .tint(.teal)
            }
        }
        .dismissKeyboardOnTap()
        .onAppear {
            guard !hasBootstrapped else { return }
            hasBootstrapped = true
            Task {
                await SupabaseAuthService.restoreSessionIfNeeded()
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
