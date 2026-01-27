import SwiftUI

struct ContentView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""

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
                    LinkingCodeView()
                        .tabItem {
                            Label("患者/連携", systemImage: "person.badge.plus")
                        }
                }
                .tint(.teal)
            }
        }
        .onAppear {
            Task {
                await SupabaseAuthService.restoreSessionIfNeeded()
            }
        }
    }
}

#Preview {
    ContentView()
}
