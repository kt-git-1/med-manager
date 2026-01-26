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
    static func signIn(email: String, password: String) async throws -> String {
        let client = try makeClient()
        AppLogger.auth.info("Supabase sign-in started")
        do {
            let session = try await client.auth.signIn(email: email, password: password)
            AppLogger.auth.info("Supabase sign-in succeeded")
            return session.accessToken
        } catch {
            AppLogger.auth.error("Supabase sign-in failed: \(error.localizedDescription, privacy: .public)")
            throw error
        }
    }

    private static func makeClient() throws -> SupabaseClient {
        guard
            let urlString = Bundle.main.object(forInfoDictionaryKey: "SUPABASE_URL") as? String,
            let key = Bundle.main.object(forInfoDictionaryKey: "SUPABASE_ANON_KEY") as? String,
            let url = URL(string: urlString)
        else {
            throw SupabaseAuthError.missingConfig
        }

        return SupabaseClient(supabaseURL: url, supabaseKey: key)
    }
}
