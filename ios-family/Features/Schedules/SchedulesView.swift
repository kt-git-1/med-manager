import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false

    var body: some View {
        NavigationStack {
            ZStack {
                Form {
                    FamilyHeaderSection(
                        systemImage: "clock.fill",
                        title: "予定を管理",
                        subtitle: "患者を選択して予定を追加します。"
                    )
                    FamilyPatientSection(
                        isLoadingPatients: isLoadingPatients,
                        patients: patients,
                        selectedPatientId: $selectedPatientId,
                        familyJwtToken: familyJwtToken,
                        errorMessage: nil,
                        actionTitle: nil,
                        onAction: nil
                    )
                    Section(header: Text("予定一覧")) {
                        if let errorMessage {
                            Text(errorMessage).foregroundStyle(.red)
                        }
                        if schedules.isEmpty {
                            Text("まだ予定が登録されていません。")
                                .foregroundStyle(.secondary)
                        } else {
                            ForEach(schedules, id: \.id) { schedule in
                                VStack(alignment: .leading, spacing: 4) {
                                    if let medicationName = medicationName(for: schedule.medicationId) {
                                        Text(medicationName)
                                            .font(.subheadline)
                                            .foregroundStyle(.secondary)
                                    } else {
                                        Text("薬名: 取得中...")
                                            .font(.subheadline)
                                            .foregroundStyle(.secondary)
                                    }
                                    Text(schedule.timeSlots.joined(separator: " / "))
                                        .font(.headline)
                                    Text("開始日: \(schedule.startDate)")
                                        .font(.caption)
                                        .foregroundStyle(.secondary)
                                }
                                .padding(.vertical, 4)
                            }
                        }
                    }
                }
                .navigationTitle("予定")
                .tint(.teal)
                .listStyle(.insetGrouped)
                FamilyLoadingOverlay(isLoading: isLoading)
            }
            .toolbar {
                ToolbarItemGroup(placement: .navigationBarTrailing) {
                    Button("更新") {
                        Task { await reloadAll() }
                    }
                    .disabled(isLoading)
                    Button("ログアウト") {
                        Task { await handleSignOut() }
                    }
                }
            }
            .task {
                await reloadAll()
            }
            .onChange(of: selectedPatientId) { newValue in
                guard !newValue.isEmpty else {
                    medications = []
                    schedules = []
                    return
                }
                Task {
                    await loadMedications()
                    await loadSchedules()
                }
            }
        }
    }

    private func handleSignOut() async {
        await SupabaseAuthService.signOut()
        familyJwtToken = ""
        storedPatientId = ""
        selectedPatientId = ""
    }

    private func loadPatients() async {
        errorMessage = nil
        isLoadingPatients = true
        defer { isLoadingPatients = false }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let result = try await client.listPatients()
            patients = result
            if !storedPatientId.isEmpty, result.contains(where: { $0.id == storedPatientId }) {
                selectedPatientId = storedPatientId
            } else if selectedPatientId.isEmpty, let first = result.first?.id {
                selectedPatientId = first
            }
        } catch {
            errorMessage = "患者一覧の取得に失敗しました。"
        }
    }

    private func loadSchedules() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            schedules = try await client.listSchedules(patientId: selectedPatientId)
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "予定一覧の取得に失敗しました。"
        }
    }

    private func loadMedications() async {
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            medications = try await client.listMedications(patientId: selectedPatientId)
        } catch {
            medications = []
        }
    }

    private func reloadAll() async {
        isLoading = true
        defer { isLoading = false }
        await loadPatients()
        if !selectedPatientId.isEmpty {
            await loadMedications()
            await loadSchedules()
        }
    }

    private func medicationName(for medicationId: String) -> String? {
        medications.first(where: { $0.id == medicationId })
            .map { "\($0.name) \($0.dosage)" }
    }

}

#Preview {
    SchedulesView()
}
