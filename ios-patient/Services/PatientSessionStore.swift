import Foundation

@MainActor
final class PatientSessionStore: ObservableObject {
    @Published var token: String?
    @Published var expiresAt: Date?
    private let keychain = KeychainStore()
    private var refreshTask: Task<Void, Never>?
    private let expiryStorageKey = "patientTokenExpiresAt"
    private let refreshLeewaySeconds: TimeInterval = 300

    func load() {
        AppLogger.auth.info("Session load started")
        do {
            token = try keychain.readToken()
            expiresAt = loadExpiry()
            AppLogger.auth.info("Session load completed")
        } catch {
            AppLogger.auth.error("Session load failed: \(error.localizedDescription, privacy: .public)")
            token = nil
            expiresAt = nil
        }
    }

    func save(token: String, expiresIn: Int) {
        AppLogger.auth.info("Session save started")
        do {
            try keychain.saveToken(token)
            self.token = token
            let expiry = Date().addingTimeInterval(TimeInterval(expiresIn))
            storeExpiry(expiry)
            expiresAt = expiry
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
            expiresAt = nil
            clearExpiry()
            refreshTask?.cancel()
            refreshTask = nil
            AppLogger.auth.info("Session clear completed")
        } catch {
            AppLogger.auth.error("Session clear failed: \(error.localizedDescription, privacy: .public)")
        }
    }

    func startAutoRefresh(apiBaseURL: String) {
        refreshTask?.cancel()
        refreshTask = Task { [weak self] in
            guard let self else { return }
            while !Task.isCancelled {
                guard token != nil else { break }
                await refreshIfNeeded(apiBaseURL: apiBaseURL)
                guard let expiresAt else {
                    try? await Task.sleep(for: .seconds(60))
                    continue
                }
                let refreshAt = expiresAt.addingTimeInterval(-refreshLeewaySeconds)
                let waitSeconds = max(5, refreshAt.timeIntervalSince(Date()))
                try? await Task.sleep(for: .seconds(waitSeconds))
                if Task.isCancelled { break }
            }
        }
    }

    func refreshIfNeeded(apiBaseURL: String) async {
        guard token != nil else { return }
        if expiresAt == nil || (expiresAt?.timeIntervalSinceNow ?? 0) <= refreshLeewaySeconds {
            await refreshNow(apiBaseURL: apiBaseURL)
        }
    }

    private func refreshNow(apiBaseURL: String) async {
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: keychain)
            let session = try await client.refreshPatientSession()
            await MainActor.run {
                self.save(token: session.accessToken, expiresIn: session.expiresIn)
            }
        } catch {
            AppLogger.auth.error(
                "Session refresh failed: \(error.localizedDescription, privacy: .public)"
            )
            try? await Task.sleep(for: .seconds(60))
        }
    }

    private func storeExpiry(_ date: Date) {
        UserDefaults.standard.set(date.timeIntervalSince1970, forKey: expiryStorageKey)
    }

    private func loadExpiry() -> Date? {
        let stored = UserDefaults.standard.double(forKey: expiryStorageKey)
        return stored > 0 ? Date(timeIntervalSince1970: stored) : nil
    }

    private func clearExpiry() {
        UserDefaults.standard.removeObject(forKey: expiryStorageKey)
    }
}
