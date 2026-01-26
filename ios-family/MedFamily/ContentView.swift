import SwiftUI

struct ContentView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""

    var body: some View {
        if familyJwtToken.isEmpty {
            FamilyLoginView()
        } else {
            TabView {
                PatientsView()
                    .tabItem {
                        Label("患者", systemImage: "person.2")
                    }
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
                        Label("連携", systemImage: "link")
                    }
            }
        }
    }
}

#Preview {
    ContentView()
}
