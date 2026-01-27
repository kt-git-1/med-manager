import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var selectedPatientId: String = ""
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
                        subtitle: "患者タブで選択中の患者の予定を確認します。"
                    )
                    FamilySelectedPatientSection(
                        selectedPatientId: selectedPatientId,
                        selectedPatientName: storedPatientName
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
            .onChange(of: storedPatientId) { _ in
                Task { await reloadAll() }
            }
        }
    }

    private func handleSignOut() async {
        await SupabaseAuthService.signOut()
        familyJwtToken = ""
        storedPatientId = ""
        selectedPatientId = ""
    }

    private func loadSchedules() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            schedules = try await client.listSchedules(patientId: selectedPatientId)
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
        selectedPatientId = storedPatientId
        guard !selectedPatientId.isEmpty else {
            medications = []
            schedules = []
            errorMessage = nil
            return
        }
        await loadMedications()
        await loadSchedules()
    }

    private func medicationName(for medicationId: String) -> String? {
        medications.first(where: { $0.id == medicationId })
            .map { "\($0.name) \($0.dosage)" }
    }

}

#Preview {
    SchedulesView()
}
