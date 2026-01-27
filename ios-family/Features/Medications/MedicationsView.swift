import SwiftUI

struct MedicationsView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var name: String = ""
    @State private var dosage: String = ""
    @State private var doseCountPerIntake: String = ""
    @State private var startDate: String = Self.todayString()
    @State private var endDate: String = ""
    @State private var notes: String = ""
    @State private var inventoryCount: String = ""
    @State private var timeSlots: String = ""
    @State private var timesPerDay: String = ""
    @State private var selectedWeekdays = Set([0, 1, 2, 3, 4, 5, 6])
    @State private var errorMessage: String?
    @State private var showToast = false
    @State private var toastMessage = ""
    @State private var editingItem: MedicationEditItem?

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    HStack(spacing: 12) {
                        Image(systemName: "pills.fill")
                            .foregroundStyle(.white, .teal)
                            .font(.title2)
                        VStack(alignment: .leading, spacing: 4) {
                            Text("薬を管理")
                                .font(.headline)
                            Text("患者を選択して薬の一覧と追加ができます。")
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
                    Button("薬一覧を読み込む") {
                        Task {
                            await loadMedications()
                            await loadSchedules()
                        }
                    }
                    .buttonStyle(.bordered)
                    .tint(.teal)
                    .disabled(selectedPatientId.isEmpty || familyJwtToken.isEmpty)
                }
                Section(header: Text("薬一覧")) {
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                    if medications.isEmpty {
                        Text("まだ薬が登録されていません。")
                            .foregroundStyle(.secondary)
                    } else {
                        ForEach(medications, id: \.id) { med in
                            HStack(alignment: .top, spacing: 12) {
                                VStack(alignment: .leading, spacing: 4) {
                                    Text("\(med.name) \(med.dosage)")
                                        .font(.headline)
                                    if let summary = scheduleSummary(for: med.id) {
                                        Text(summary)
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                    Text("開始日: \(med.startDate)")
                                        .font(.caption)
                                        .foregroundStyle(.secondary)
                                }
                                Spacer()
                                Button("編集") {
                                    openEditor(for: med)
                                }
                                .buttonStyle(.bordered)
                                .tint(.teal)
                            }
                            .padding(.vertical, 4)
                        }
                    }
                }
                Section(header: Text("薬追加")) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("名前")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 血圧の薬", text: $name)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("用量")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 5mg", text: $dosage)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("服用数/回")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 1", text: $doseCountPerIntake)
                            .keyboardType(.numberPad)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("在庫数")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 30", text: $inventoryCount)
                            .keyboardType(.numberPad)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("開始日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $startDate)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("終了日 (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $endDate)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("メモ (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 食後に服用", text: $notes)
                    }
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
                    VStack(alignment: .leading, spacing: 4) {
                        Text("時間 (例: 08:00,20:00)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("HH:MM をカンマ区切り", text: $timeSlots)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("回数/日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 2", text: $timesPerDay)
                            .keyboardType(.numberPad)
                    }
                    Button("追加する") {
                        Task { await createMedication() }
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(.teal)
                    .disabled(
                        selectedPatientId.isEmpty ||
                        name.isEmpty ||
                        dosage.isEmpty ||
                        startDate.isEmpty ||
                        timeSlots.isEmpty ||
                        selectedWeekdays.isEmpty ||
                        familyJwtToken.isEmpty
                    )
                }
            }
            .navigationTitle("薬")
            .tint(.teal)
            .listStyle(.insetGrouped)
            .overlay(alignment: .bottom) {
                if showToast {
                    Text(toastMessage)
                        .font(.subheadline)
                        .padding(.horizontal, 16)
                        .padding(.vertical, 10)
                        .background(.ultraThinMaterial, in: Capsule())
                        .padding(.bottom, 24)
                        .transition(.move(edge: .bottom).combined(with: .opacity))
                }
            }
            .animation(.easeInOut(duration: 0.2), value: showToast)
            .sheet(item: $editingItem) { item in
                MedicationEditSheet(
                    medication: item.medication,
                    schedule: item.schedule,
                    onSave: { result in
                        await saveMedicationEdit(result)
                    }
                )
            }
            .toolbar {
                ToolbarItemGroup(placement: .navigationBarTrailing) {
                    Button("更新") {
                        Task {
                            await loadPatients()
                            if !selectedPatientId.isEmpty {
                                await loadMedications()
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
                    await loadMedications()
                    await loadSchedules()
                }
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

    private func loadMedications() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            medications = try await client.listMedications(patientId: selectedPatientId)
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "薬一覧の取得に失敗しました。"
        }
    }

    private func loadSchedules() async {
        guard !selectedPatientId.isEmpty else {
            schedules = []
            return
        }
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            schedules = try await client.listSchedules(patientId: selectedPatientId)
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "予定一覧の取得に失敗しました。"
        }
    }

    private func createMedication() async {
        errorMessage = nil
        let slots = timeSlots
            .split(separator: ",")
            .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
            .filter { !$0.isEmpty }
        let count = Int(timesPerDay) ?? slots.count
        guard count > 0, slots.count == count else {
            errorMessage = "時間の数が回数/日と一致していません。"
            return
        }
        let inventory = Int(inventoryCount) ?? 0
        let days = selectedWeekdays.sorted()
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let med = try await client.createMedication(
                patientId: selectedPatientId,
                name: name,
                dosage: dosage,
                doseCountPerIntake: Int(doseCountPerIntake) ?? 1,
                startDate: startDate,
                endDate: endDate.isEmpty ? nil : endDate,
                notes: notes.isEmpty ? nil : notes
            )
            let schedule = try await client.createSchedule(
                patientId: selectedPatientId,
                medicationId: med.id,
                daysOfWeek: days,
                timesPerDay: count,
                timeSlots: slots,
                startDate: startDate,
                endDate: endDate.isEmpty ? nil : endDate
            )
            if inventory > 0 {
                _ = try await client.createInventoryAdjustment(
                    medicationId: med.id,
                    delta: inventory,
                    reason: "restock"
                )
            }
            medications.insert(med, at: 0)
            schedules.insert(schedule, at: 0)
            storedPatientId = selectedPatientId
            name = ""
            dosage = ""
            notes = ""
            timeSlots = ""
            timesPerDay = ""
            inventoryCount = ""
            showToast(message: "薬を追加しました。")
        } catch {
            errorMessage = "薬の追加または予定/在庫設定に失敗しました。"
            showToast(message: "薬の追加に失敗しました。")
        }
    }

    @MainActor
    private func saveMedicationEdit(_ result: MedicationEditResult) async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let updatedMedication = try await client.updateMedication(
                medicationId: result.medicationId,
                name: result.name,
                dosage: result.dosage,
                doseCountPerIntake: result.doseCountPerIntake,
                startDate: result.startDate,
                endDate: result.endDate,
                notes: result.notes
            )
            let updatedSchedule: FamilyScheduleDTO
            if let scheduleId = result.scheduleId {
                updatedSchedule = try await client.updateSchedule(
                    scheduleId: scheduleId,
                    daysOfWeek: result.daysOfWeek,
                    timesPerDay: result.timesPerDay,
                    timeSlots: result.timeSlots,
                    startDate: result.scheduleStartDate,
                    endDate: result.scheduleEndDate
                )
            } else {
                updatedSchedule = try await client.createSchedule(
                    patientId: selectedPatientId,
                    medicationId: result.medicationId,
                    daysOfWeek: result.daysOfWeek,
                    timesPerDay: result.timesPerDay,
                    timeSlots: result.timeSlots,
                    startDate: result.scheduleStartDate,
                    endDate: result.scheduleEndDate
                )
            }
            if let index = medications.firstIndex(where: { $0.id == updatedMedication.id }) {
                medications[index] = updatedMedication
            }
            if let index = schedules.firstIndex(where: { $0.id == updatedSchedule.id }) {
                schedules[index] = updatedSchedule
            } else {
                schedules.insert(updatedSchedule, at: 0)
            }
            editingItem = nil
            showToast(message: "薬の内容を更新しました。")
        } catch {
            errorMessage = "薬の更新に失敗しました。"
            showToast(message: "薬の更新に失敗しました。")
        }
    }

    private static func todayString() -> String {
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.timeZone = TimeZone.current
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.string(from: Date())
    }

    private let weekdayLabels = ["日", "月", "火", "水", "木", "金", "土"]

    private func toggleWeekday(_ index: Int) {
        if selectedWeekdays.contains(index) {
            selectedWeekdays.remove(index)
        } else {
            selectedWeekdays.insert(index)
        }
    }

    private func scheduleSummary(for medicationId: String) -> String? {
        guard let schedule = schedules.first(where: { $0.medicationId == medicationId }) else {
            return "予定: 未設定"
        }
        let days = (schedule.daysOfWeek ?? weekdayLabels.indices.map { $0 }).sorted()
        let labels = days.compactMap { weekdayLabels.indices.contains($0) ? weekdayLabels[$0] : nil }
        let dayText = labels.count == 7 ? "毎日" : labels.joined(separator: "・")
        let timeText = schedule.timeSlots.joined(separator: " / ")
        if timeText.isEmpty {
            return "予定: 未設定"
        }
        return "予定: \(timeText) (\(dayText))"
    }

    private func openEditor(for medication: FamilyMedicationDTO) {
        let schedule = schedules.first(where: { $0.medicationId == medication.id })
        editingItem = MedicationEditItem(medication: medication, schedule: schedule)
    }

    private func showToast(message: String) {
        toastMessage = message
        showToast = true
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            showToast = false
        }
    }
}

private struct MedicationEditItem: Identifiable {
    let medication: FamilyMedicationDTO
    let schedule: FamilyScheduleDTO?

    var id: String { medication.id }
}

private struct MedicationEditResult {
    let medicationId: String
    let name: String
    let dosage: String
    let doseCountPerIntake: Int
    let startDate: String
    let endDate: String?
    let notes: String?
    let scheduleId: String?
    let daysOfWeek: [Int]
    let timesPerDay: Int
    let timeSlots: [String]
    let scheduleStartDate: String
    let scheduleEndDate: String?
}

private struct MedicationEditSheet: View {
    let medication: FamilyMedicationDTO
    let schedule: FamilyScheduleDTO?
    let onSave: (MedicationEditResult) async -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var name: String
    @State private var dosage: String
    @State private var doseCountPerIntake: String
    @State private var startDate: String
    @State private var endDate: String
    @State private var notes: String
    @State private var scheduleTimeSlots: String
    @State private var scheduleTimesPerDay: String
    @State private var scheduleWeekdays: Set<Int>
    @State private var scheduleStartDate: String
    @State private var scheduleEndDate: String
    @State private var errorMessage: String?
    @State private var isSaving = false

    init(
        medication: FamilyMedicationDTO,
        schedule: FamilyScheduleDTO?,
        onSave: @escaping (MedicationEditResult) async -> Void
    ) {
        self.medication = medication
        self.schedule = schedule
        self.onSave = onSave
        _name = State(initialValue: medication.name)
        _dosage = State(initialValue: medication.dosage)
        _doseCountPerIntake = State(initialValue: String(medication.doseCountPerIntake))
        _startDate = State(initialValue: medication.startDate)
        _endDate = State(initialValue: medication.endDate ?? "")
        _notes = State(initialValue: medication.notes ?? "")
        _scheduleTimeSlots = State(initialValue: schedule?.timeSlots.joined(separator: ",") ?? "")
        _scheduleTimesPerDay = State(initialValue: String(schedule?.timesPerDay ?? 1))
        _scheduleWeekdays = State(initialValue: Set(schedule?.daysOfWeek ?? [0, 1, 2, 3, 4, 5, 6]))
        _scheduleStartDate = State(initialValue: schedule?.startDate ?? medication.startDate)
        _scheduleEndDate = State(initialValue: schedule?.endDate ?? "")
    }

    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("薬情報")) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("名前")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 血圧の薬", text: $name)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("用量")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 5mg", text: $dosage)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("服用数/回")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 1", text: $doseCountPerIntake)
                            .keyboardType(.numberPad)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("開始日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $startDate)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("終了日 (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $endDate)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("メモ (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 食後に服用", text: $notes)
                    }
                }

                Section(header: Text("予定")) {
                    VStack(alignment: .leading, spacing: 8) {
                        Text("接種曜日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        HStack(spacing: 8) {
                            ForEach(weekdayLabels.indices, id: \.self) { index in
                                let isSelected = scheduleWeekdays.contains(index)
                                Button(weekdayLabels[index]) {
                                    toggleWeekday(index)
                                }
                                .buttonStyle(.bordered)
                                .tint(isSelected ? .teal : .gray)
                            }
                        }
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("時間 (例: 08:00,20:00)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("HH:MM をカンマ区切り", text: $scheduleTimeSlots)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("回数/日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("例: 2", text: $scheduleTimesPerDay)
                            .keyboardType(.numberPad)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("開始日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $scheduleStartDate)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("終了日 (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        TextField("YYYY-MM-DD", text: $scheduleEndDate)
                    }
                }

                if let errorMessage {
                    Section {
                        Text(errorMessage)
                            .foregroundStyle(.red)
                    }
                }
            }
            .navigationTitle("薬を編集")
            .tint(.teal)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("閉じる") {
                        dismiss()
                    }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button(isSaving ? "保存中..." : "保存") {
                        Task { await handleSave() }
                    }
                    .disabled(isSaving)
                }
            }
        }
    }

    private let weekdayLabels = ["日", "月", "火", "水", "木", "金", "土"]

    private func toggleWeekday(_ index: Int) {
        if scheduleWeekdays.contains(index) {
            scheduleWeekdays.remove(index)
        } else {
            scheduleWeekdays.insert(index)
        }
    }

    private func handleSave() async {
        errorMessage = nil
        let slots = scheduleTimeSlots
            .split(separator: ",")
            .map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
            .filter { !$0.isEmpty }
        let timesPerDay = Int(scheduleTimesPerDay) ?? slots.count
        guard !name.isEmpty, !dosage.isEmpty, !startDate.isEmpty else {
            errorMessage = "薬情報が未入力です。"
            return
        }
        guard let intakeCount = Int(doseCountPerIntake), intakeCount > 0 else {
            errorMessage = "服用数/回を入力してください。"
            return
        }
        guard !slots.isEmpty, timesPerDay > 0, slots.count == timesPerDay else {
            errorMessage = "時間の数が回数/日と一致していません。"
            return
        }
        guard !scheduleWeekdays.isEmpty else {
            errorMessage = "接種曜日を選択してください。"
            return
        }
        guard !scheduleStartDate.isEmpty else {
            errorMessage = "予定の開始日を入力してください。"
            return
        }

        isSaving = true
        defer { isSaving = false }
        let result = MedicationEditResult(
            medicationId: medication.id,
            name: name,
            dosage: dosage,
            doseCountPerIntake: intakeCount,
            startDate: startDate,
            endDate: endDate.isEmpty ? nil : endDate,
            notes: notes.isEmpty ? nil : notes,
            scheduleId: schedule?.id,
            daysOfWeek: scheduleWeekdays.sorted(),
            timesPerDay: timesPerDay,
            timeSlots: slots,
            scheduleStartDate: scheduleStartDate,
            scheduleEndDate: scheduleEndDate.isEmpty ? nil : scheduleEndDate
        )
        await onSave(result)
    }
}

#Preview {
    MedicationsView()
}
