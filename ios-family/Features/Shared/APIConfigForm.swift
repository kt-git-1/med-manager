import SwiftUI

struct APIConfigForm: View {
    @Binding var apiBaseURL: String
    @Binding var authToken: String

    var body: some View {
        Section(header: Text("API設定")) {
            TextField("API_BASE_URL", text: $apiBaseURL)
                .textInputAutocapitalization(.never)
                .keyboardType(.URL)
            SecureField("Family JWT", text: $authToken)
        }
    }
}

#Preview {
    Form {
        APIConfigForm(apiBaseURL: .constant("http://localhost:3000"), authToken: .constant(""))
    }
}
