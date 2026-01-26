import SwiftUI

struct MedicationsView: View {
    @AppStorage("familyApiBaseURL") private var apiBaseURL: String = ""
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var patientId: String = ""
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var name: String = ""
    @State private var dosage: String = ""
    @State private var doseCountPerIntake: String = "1"
    @State private var startDate: String = ""
    @State private var endDate: String = ""
    @State private var notes: String = ""
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                APIConfigForm(apiBaseURL: $apiBaseURL, authToken: $familyJwtToken)
                Section(header: Text("対象患者")) {
                    TextField("patientId", text: $patientId)
                        .textInputAutocapitalization(.never)
                    Button("薬一覧を読み込む") {
                        Task { await loadMedications() }
                    }
                    .disabled(patientId.isEmpty || apiBaseURL.isEmpty || familyJwtToken.isEmpty)
                }
                Section(header: Text("薬一覧")) {
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                    ForEach(medications, id: \.id) { med in
                        VStack(alignment: .leading) {
                            Text("\(med.name) \(med.dosage)")
                            Text("開始日: \(med.startDate)")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                }
                Section(header: Text("薬追加")) {
                    TextField("名前", text: $name)
                    TextField("用量", text: $dosage)
                    TextField("服用数/回", text: $doseCountPerIntake)
                        .keyboardType(.numberPad)
                    TextField("開始日 YYYY-MM-DD", text: $startDate)
                    TextField("終了日 YYYY-MM-DD (任意)", text: $endDate)
                    TextField("メモ (任意)", text: $notes)
                    Button("追加する") {
                        Task { await createMedication() }
                    }
                    .disabled(
                        patientId.isEmpty ||
                        name.isEmpty ||
                        dosage.isEmpty ||
                        startDate.isEmpty ||
                        apiBaseURL.isEmpty ||
                        familyJwtToken.isEmpty
                    )
                }
            }
            .navigationTitle("薬")
        }
    }

    private func loadMedications() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            medications = try await client.listMedications(patientId: patientId)
        } catch {
            errorMessage = "薬一覧の取得に失敗しました。"
        }
    }

    private func createMedication() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            let count = Int(doseCountPerIntake) ?? 1
            let med = try await client.createMedication(
                patientId: patientId,
                name: name,
                dosage: dosage,
                doseCountPerIntake: count,
                startDate: startDate,
                endDate: endDate.isEmpty ? nil : endDate,
                notes: notes.isEmpty ? nil : notes
            )
            medications.insert(med, at: 0)
            name = ""
            dosage = ""
            notes = ""
        } catch {
            errorMessage = "薬の追加に失敗しました。"
        }
    }
}

#Preview {
    MedicationsView()
}
