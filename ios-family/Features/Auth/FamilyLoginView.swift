import SwiftUI

struct FamilyLoginView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var isLoading = false
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    HStack(spacing: 12) {
                        Image(systemName: "lock.shield.fill")
                            .foregroundStyle(.teal)
                            .font(.title2)
                        VStack(alignment: .leading, spacing: 4) {
                            Text("家族アカウントでログイン")
                                .font(.headline)
                            Text("ログイン後に患者登録や連携コード発行ができます。")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .padding(.vertical, 4)
                }

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
                    .buttonStyle(.borderedProminent)
                    .tint(.teal)
                    .disabled(isLoading || email.isEmpty || password.isEmpty)
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                }

            }
            .navigationTitle("家族ログイン")
            .tint(.teal)
            .listStyle(.insetGrouped)
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
