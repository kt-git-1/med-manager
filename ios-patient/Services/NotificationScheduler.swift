import Foundation
import UserNotifications

final class NotificationScheduler {
    private let center = UNUserNotificationCenter.current()

    func requestAuthorization() async throws {
        _ = try await center.requestAuthorization(options: [.alert, .badge, .sound])
    }

    func scheduleDailyNotifications(times: [Date], title: String, body: String) async {
        await clearAll()
        for (index, time) in times.enumerated() {
            let content = UNMutableNotificationContent()
            content.title = title
            content.body = body
            content.sound = .default

            let components = Calendar.current.dateComponents([.hour, .minute], from: time)
            let trigger = UNCalendarNotificationTrigger(dateMatching: components, repeats: true)
            let request = UNNotificationRequest(
                identifier: "med_reminder_\(index)",
                content: content,
                trigger: trigger
            )
            try? await center.add(request)
        }
    }

    func scheduleTodayNotifications(times: [Date], title: String, body: String) async {
        await clearAll()
        for (index, time) in times.enumerated() {
            let content = UNMutableNotificationContent()
            content.title = title
            content.body = body
            content.sound = .default

            let components = Calendar.current.dateComponents(
                [.year, .month, .day, .hour, .minute, .second],
                from: time
            )
            let trigger = UNCalendarNotificationTrigger(dateMatching: components, repeats: false)
            let request = UNNotificationRequest(
                identifier: "med_today_\(index)",
                content: content,
                trigger: trigger
            )
            try? await center.add(request)
        }
    }

    func clearAll() async {
        let identifiers = await center.pendingNotificationRequests().map { $0.identifier }
        center.removePendingNotificationRequests(withIdentifiers: identifiers)
    }
}
