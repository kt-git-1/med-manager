import Foundation

@MainActor
final class PatientSessionStore: ObservableObject {
    @Published var token: String?
    private let keychain = KeychainStore()

    func load() {
        AppLogger.auth.info("Session load started")
        do {
            token = try keychain.readToken()
            AppLogger.auth.info("Session load completed")
        } catch {
            AppLogger.auth.error("Session load failed: \(error.localizedDescription, privacy: .public)")
            token = nil
        }
    }

    func save(token: String) {
        AppLogger.auth.info("Session save started")
        do {
            try keychain.saveToken(token)
            self.token = token
            AppLogger.auth.info("Session save completed")
        } catch {
            AppLogger.auth.error("Session save failed: \(error.localizedDescription, privacy: .public)")
        }
    }

    func clear() {
        AppLogger.auth.info("Session clear started")
        do {
            try keychain.deleteToken()
            token = nil
            AppLogger.auth.info("Session clear completed")
        } catch {
            AppLogger.auth.error("Session clear failed: \(error.localizedDescription, privacy: .public)")
        }
    }
}
