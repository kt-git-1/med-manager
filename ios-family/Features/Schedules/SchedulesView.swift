import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var medicationId: String = ""
    @State private var timesPerDay: String = "1"
    @State private var timeSlots: String = ""
    @State private var selectedWeekdays = Set([0, 1, 2, 3, 4, 5, 6])
    @State private var startDate: String = ""
    @State private var endDate: String = ""
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
                    Button("予定一覧を読み込む") {
                        Task { await loadSchedules() }
                    }
                    .buttonStyle(.bordered)
                    .tint(.teal)
                    .disabled(selectedPatientId.isEmpty || familyJwtToken.isEmpty)
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
                Section(header: Text("予定追加")) {
                    TextField("medicationId", text: $medicationId)
                        .textInputAutocapitalization(.never)
                    TextField("回数/日", text: $timesPerDay)
                        .keyboardType(.numberPad)
                    TextField("時間 (例: 08:00,20:00)", text: $timeSlots)
                    VStack(alignment: .leading, spacing: 8) {
                        Text("接種曜日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        HStack(spacing: 8) {
                            ForEach(weekdayLabels.indices, id: \.self) { index in
                                let isSelected = selectedWeekdays.contains(index)
                                Button(weekdayLabels[index]) {
                                    toggleWeekday(index)
                                }
                                .buttonStyle(.bordered)
                                .tint(isSelected ? .teal : .gray)
                            }
                        }
                    }
                    TextField("開始日 YYYY-MM-DD", text: $startDate)
                    TextField("終了日 YYYY-MM-DD (任意)", text: $endDate)
                    Button("追加する") {
                        Task { await createSchedule() }
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(.teal)
                    .disabled(
                        selectedPatientId.isEmpty ||
                        medicationId.isEmpty ||
                        timeSlots.isEmpty ||
                        selectedWeekdays.isEmpty ||
                        startDate.isEmpty ||
                        familyJwtToken.isEmpty
                    )
                }
            }
            .navigationTitle("予定")
            .tint(.teal)
            .listStyle(.insetGrouped)
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

    private func createSchedule() async {
        errorMessage = nil
        let slots = timeSlots
            .split(separator: ",")
            .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
            .filter { !$0.isEmpty }
        let count = Int(timesPerDay) ?? slots.count
        guard slots.count == count else {
            errorMessage = "時間の数が回数/日と一致していません。"
            return
        }
        let days = selectedWeekdays.sorted()
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let schedule = try await client.createSchedule(
                patientId: selectedPatientId,
                medicationId: medicationId,
                daysOfWeek: days,
                timesPerDay: count,
                timeSlots: slots,
                startDate: startDate,
                endDate: endDate.isEmpty ? nil : endDate
            )
            schedules.insert(schedule, at: 0)
            storedPatientId = selectedPatientId
            medicationId = ""
            timeSlots = ""
        } catch {
            errorMessage = "予定の追加に失敗しました。"
        }
    }

    private let weekdayLabels = ["日", "月", "火", "水", "木", "金", "土"]

    private func toggleWeekday(_ index: Int) {
        if selectedWeekdays.contains(index) {
            selectedWeekdays.remove(index)
        } else {
            selectedWeekdays.insert(index)
        }
    }
}

#Preview {
    SchedulesView()
}
