import SwiftUI

struct PatientsView: View {
    @AppStorage("familyApiBaseURL") private var apiBaseURL: String = ""
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var displayName: String = ""
    @State private var timezone: String = "Asia/Tokyo"
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                APIConfigForm(apiBaseURL: $apiBaseURL, authToken: $familyJwtToken)
                Section(header: Text("患者一覧")) {
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                    ForEach(patients, id: \.id) { patient in
                        VStack(alignment: .leading) {
                            Text(patient.displayName)
                            Text(patient.timezone)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                }
                Section(header: Text("患者追加")) {
                    TextField("表示名", text: $displayName)
                    TextField("タイムゾーン", text: $timezone)
                    Button("追加する") {
                        Task { await createPatient() }
                    }
                    .disabled(displayName.isEmpty || apiBaseURL.isEmpty || familyJwtToken.isEmpty)
                }
            }
            .navigationTitle("患者")
            .toolbar {
                Button("更新") {
                    Task { await loadPatients() }
                }
            }
            .task {
                await loadPatients()
            }
        }
    }

    private func loadPatients() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            patients = try await client.listPatients()
        } catch {
            errorMessage = "患者一覧の取得に失敗しました。"
        }
    }

    private func createPatient() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            let patient = try await client.createPatient(displayName: displayName, timezone: timezone)
            patients.insert(patient, at: 0)
            displayName = ""
        } catch {
            errorMessage = "患者の追加に失敗しました。"
        }
    }
}

#Preview {
    PatientsView()
}
