import SwiftUI

struct LinkingCodeView: View {
    @AppStorage("familyApiBaseURL") private var apiBaseURL: String = ""
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var patientId: String = ""
    @State private var code: String = "------"
    @State private var expiresAt: String = ""
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                APIConfigForm(apiBaseURL: $apiBaseURL, authToken: $familyJwtToken)
                Section(header: Text("対象患者")) {
                    TextField("patientId", text: $patientId)
                        .textInputAutocapitalization(.never)
                }
                Section(header: Text("連携コード")) {
                    Text(code)
                        .font(.title2)
                        .monospacedDigit()
                    if !expiresAt.isEmpty {
                        Text("有効期限: \(expiresAt)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                }
                Button("発行する") {
                    Task { await issueCode() }
                }
                .disabled(patientId.isEmpty || apiBaseURL.isEmpty || familyJwtToken.isEmpty)
            }
            .navigationTitle("連携")
        }
    }

    private func issueCode() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            let result = try await client.createLinkCode(patientId: patientId)
            code = result.code
            expiresAt = result.expiresAt
        } catch {
            errorMessage = "連携コードの発行に失敗しました。"
        }
    }
}

#Preview {
    LinkingCodeView()
}
