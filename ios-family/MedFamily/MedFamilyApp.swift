import SwiftUI

@main
struct MedFamilyApp: App {
    @UIApplicationDelegateAdaptor(FamilyNotificationAppDelegate.self)
    private var notificationDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
