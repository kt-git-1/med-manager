import SwiftUI

struct LinkingView: View {
    let apiBaseURL: String
    @ObservedObject var sessionStore: PatientSessionStore
    @State private var code: String = ""
    @State private var isLoading = false
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("連携コード")) {
                    TextField("6桁コード", text: $code)
                        .keyboardType(.numberPad)
                }
                if let errorMessage {
                    Text(errorMessage)
                        .foregroundStyle(.red)
                }
                Button(isLoading ? "連携中..." : "連携する") {
                    Task { await link() }
                }
                .disabled(code.count < 6 || isLoading || apiBaseURL.isEmpty)
            }
            .navigationTitle("連携")
        }
    }

    private func link() async {
        isLoading = true
        defer { isLoading = false }
        errorMessage = nil
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let session = try await client.verifyLinkCode(code)
            sessionStore.save(token: session.accessToken)
        } catch {
            errorMessage = "連携に失敗しました。コードを確認してください。"
        }
    }
}

#Preview {
    LinkingView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
