import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
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
            .toolbar {
                ToolbarItemGroup(placement: .navigationBarTrailing) {
                    Button("更新") {
                        Task {
                            await loadPatients()
                            if !selectedPatientId.isEmpty {
                                await loadSchedules()
                            }
                        }
                    }
                    Button("ログアウト") {
                        Task { await handleSignOut() }
                    }
                }
            }
            .task {
                await loadPatients()
                if !selectedPatientId.isEmpty {
                    await loadSchedules()
                }
            }
            .onChange(of: selectedPatientId) { newValue in
                guard !newValue.isEmpty else {
                    schedules = []
                    return
                }
                Task { await loadSchedules() }
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

}

#Preview {
    SchedulesView()
}
