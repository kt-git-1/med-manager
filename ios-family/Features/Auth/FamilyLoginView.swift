import SwiftUI

struct FamilyLoginView: View {
    @AppStorage("familyApiBaseURL") private var apiBaseURL: String = ""
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var isLoading = false
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("ログイン")) {
                    TextField("メールアドレス", text: $email)
                        .textInputAutocapitalization(.never)
                        .textContentType(.emailAddress)
                        .keyboardType(.emailAddress)
                        .autocorrectionDisabled()
                    SecureField("パスワード", text: $password)
                        .textContentType(.password)
                    Button(isLoading ? "ログイン中..." : "ログイン") {
                        Task { await signIn() }
                    }
                    .disabled(isLoading || email.isEmpty || password.isEmpty)
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                }

                APIConfigForm(apiBaseURL: $apiBaseURL, authToken: $familyJwtToken)
            }
            .navigationTitle("家族ログイン")
        }
    }

    @MainActor
    private func signIn() async {
        errorMessage = nil
        isLoading = true
        defer { isLoading = false }

        do {
            let token = try await SupabaseAuthService.signIn(email: email, password: password)
            familyJwtToken = token
            password = ""
        } catch {
            errorMessage = error.localizedDescription
        }
    }
}

#Preview {
    FamilyLoginView()
}
