import Foundation

@MainActor
final class PatientSessionStore: ObservableObject {
    @Published var token: String?
    private let keychain = KeychainStore()

    func load() {
        token = try? keychain.readToken()
    }

    func save(token: String) {
        try? keychain.saveToken(token)
        self.token = token
    }

    func clear() {
        try? keychain.deleteToken()
        token = nil
    }
}
