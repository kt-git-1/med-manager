import Foundation
import Security

final class KeychainStore {
    private let service = "com.medmanager.patient"
    private let account = "patientSessionToken"

    func saveToken(_ token: String) throws {
        AppLogger.auth.info("Keychain save started")
        let data = Data(token.utf8)
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
            kSecValueData as String: data,
        ]

        SecItemDelete(query as CFDictionary)
        let status = SecItemAdd(query as CFDictionary, nil)
        if status != errSecSuccess {
            AppLogger.auth.error("Keychain save failed: \(status, privacy: .public)")
            throw NSError(domain: "KeychainStore", code: Int(status))
        }
        AppLogger.auth.info("Keychain save succeeded")
    }

    func readToken() throws -> String? {
        AppLogger.auth.info("Keychain read started")
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
            kSecReturnData as String: true,
            kSecMatchLimit as String: kSecMatchLimitOne,
        ]

        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        if status == errSecItemNotFound {
            AppLogger.auth.info("Keychain read not found")
            return nil
        }
        if status != errSecSuccess {
            AppLogger.auth.error("Keychain read failed: \(status, privacy: .public)")
            throw NSError(domain: "KeychainStore", code: Int(status))
        }
        guard let data = result as? Data else { return nil }
        AppLogger.auth.info("Keychain read succeeded")
        return String(data: data, encoding: .utf8)
    }

    func deleteToken() throws {
        AppLogger.auth.info("Keychain delete started")
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
        ]
        let status = SecItemDelete(query as CFDictionary)
        if status != errSecSuccess && status != errSecItemNotFound {
            AppLogger.auth.error("Keychain delete failed: \(status, privacy: .public)")
            throw NSError(domain: "KeychainStore", code: Int(status))
        }
        AppLogger.auth.info("Keychain delete succeeded")
    }
}
