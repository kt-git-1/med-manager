import Foundation
import Supabase

enum SupabaseAuthError: LocalizedError {
    case missingConfig

    var errorDescription: String? {
        switch self {
        case .missingConfig:
            return "Supabaseの設定が不足しています。"
        }
    }
}

enum SupabaseAuthService {
    private static let accessTokenKey = "familyJwtToken"
    private static let refreshTokenKey = "familyRefreshToken"
    private static var cachedClient: SupabaseClient?
    private static var authStateTask: Task<Void, Never>?
    private static var isAutoRefreshStarted = false

    static func signIn(email: String, password: String) async throws -> String {
        let client = try client()
        AppLogger.auth.info("Supabase sign-in started")
        do {
            let session = try await client.auth.signIn(email: email, password: password)
            storeSession(session)
            await startAutoRefreshIfNeeded(client: client)
            AppLogger.auth.info("Supabase sign-in succeeded")
            return session.accessToken
        } catch {
            AppLogger.auth.error("Supabase sign-in failed: \(error.localizedDescription, privacy: .public)")
            throw error
        }
    }

    static func restoreSessionIfNeeded() async {
        guard let stored = loadStoredSessionTokens() else {
            return
        }

        do {
            let client = try client()
            let session = try await client.auth.setSession(
                accessToken: stored.accessToken,
                refreshToken: stored.refreshToken
            )
            storeSession(session)
            await startAutoRefreshIfNeeded(client: client)
            AppLogger.auth.info("Supabase session restored")
        } catch {
            AppLogger.auth.error("Supabase session restore failed: \(error.localizedDescription, privacy: .public)")
            clearStoredSessionTokens()
        }
    }

    static func signOut() async {
        do {
            let client = try client()
            await client.auth.stopAutoRefresh()
            try await client.auth.signOut()
        } catch {
            AppLogger.auth.error("Supabase sign-out failed: \(error.localizedDescription, privacy: .public)")
        }

        authStateTask?.cancel()
        authStateTask = nil
        isAutoRefreshStarted = false
        clearStoredSessionTokens()
    }

    private static func client() throws -> SupabaseClient {
        if let cachedClient {
            return cachedClient
        }
        let newClient = try makeClient()
        cachedClient = newClient
        return newClient
    }

    private static func startAutoRefreshIfNeeded(client: SupabaseClient) async {
        if !isAutoRefreshStarted {
            await client.auth.startAutoRefresh()
            isAutoRefreshStarted = true
        }
        startAuthStateListener(client: client)
    }

    private static func startAuthStateListener(client: SupabaseClient) {
        authStateTask?.cancel()
        authStateTask = Task {
            for await (event, session) in await client.auth.authStateChanges {
                if event == .signedOut {
                    clearStoredSessionTokens()
                    AppLogger.auth.info("Supabase auth event: signedOut")
                    continue
                }
                guard let session else { continue }
                if event == .initialSession, session.isExpired {
                    clearStoredSessionTokens()
                    AppLogger.auth.info("Supabase auth event: initialSession expired")
                    continue
                }
                storeSession(session)
                AppLogger.auth.info("Supabase auth event: \(String(describing: event))")
            }
        }
    }

    private static func storeSession(_ session: Session) {
        let defaults = UserDefaults.standard
        defaults.set(session.accessToken, forKey: accessTokenKey)
        defaults.set(session.refreshToken, forKey: refreshTokenKey)
    }

    private static func loadStoredSessionTokens() -> (accessToken: String, refreshToken: String)? {
        let defaults = UserDefaults.standard
        guard
            let accessToken = defaults.string(forKey: accessTokenKey),
            let refreshToken = defaults.string(forKey: refreshTokenKey),
            !accessToken.isEmpty,
            !refreshToken.isEmpty
        else {
            return nil
        }
        return (accessToken, refreshToken)
    }

    private static func clearStoredSessionTokens() {
        let defaults = UserDefaults.standard
        defaults.removeObject(forKey: accessTokenKey)
        defaults.removeObject(forKey: refreshTokenKey)
    }

    private static func makeClient() throws -> SupabaseClient {
        guard
            let urlString = Bundle.main.object(forInfoDictionaryKey: "SUPABASE_URL") as? String,
            let key = Bundle.main.object(forInfoDictionaryKey: "SUPABASE_ANON_KEY") as? String,
            let url = URL(string: urlString)
        else {
            throw SupabaseAuthError.missingConfig
        }

        let options = SupabaseClientOptions(
            auth: .init(emitLocalSessionAsInitialSession: true)
        )
        return SupabaseClient(supabaseURL: url, supabaseKey: key, options: options)
    }
}
