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
                    Section {
                        HStack(spacing: 12) {
                            Image(systemName: "clock.fill")
                                .foregroundStyle(.white, .teal)
                                .font(.title2)
                            VStack(alignment: .leading, spacing: 4) {
                                Text("予定を管理")
                                    .font(.headline)
                                Text("患者を選択して予定を追加します。")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                        }
                        .padding(.vertical, 4)
                    }

                    Section(header: Text("対象患者")) {
                        if isLoadingPatients {
                            Text("読み込み中...")
                                .foregroundStyle(.secondary)
                        } else if patients.isEmpty {
                            Text("患者が見つかりません。連携タブで患者を追加してください。")
                                .foregroundStyle(.secondary)
                        } else {
                            Picker("患者", selection: $selectedPatientId) {
                                ForEach(patients, id: \.id) { patient in
                                    Text(patient.displayName).tag(patient.id)
                                }
                            }
                        }
                    }
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
                if isLoading {
                    Color.black.opacity(0.2)
                        .ignoresSafeArea()
                    VStack(spacing: 12) {
                        Image("AppLogo")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 64, height: 64)
                        ProgressView()
                        Text("更新中")
                            .font(.headline)
                    }
                    .padding(20)
                    .background(.ultraThinMaterial)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .shadow(radius: 8)
                }
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
