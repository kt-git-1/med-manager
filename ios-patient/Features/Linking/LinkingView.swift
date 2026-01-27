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
                Section {
                    HStack(spacing: 12) {
                        Image(systemName: "person.crop.circle.badge.checkmark")
                            .foregroundStyle(.white, .teal)
                            .font(.title2)
                        VStack(alignment: .leading, spacing: 4) {
                            Text("本人アプリの連携")
                                .font(.headline)
                            Text("家族から受け取った6桁コードを入力してください。")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .padding(.vertical, 4)
                }
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
                .buttonStyle(.borderedProminent)
                .tint(.teal)
                .disabled(code.count < 6 || isLoading || apiBaseURL.isEmpty)
            }
            .navigationTitle("連携")
            .tint(.teal)
            .listStyle(.insetGrouped)
        }
    }

    private func link() async {
        isLoading = true
        defer { isLoading = false }
        errorMessage = nil
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let session = try await client.verifyLinkCode(code)
            sessionStore.save(token: session.accessToken, expiresIn: session.expiresIn)
            sessionStore.startAutoRefresh(apiBaseURL: apiBaseURL)
        } catch {
            errorMessage = "連携に失敗しました。コードを確認してください。"
        }
    }
}

#Preview {
    LinkingView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
