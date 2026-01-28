import SwiftUI

struct MedicationsView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var selectedPatientId: String = ""
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var name: String = ""
    @State private var dosage: String = ""
    @State private var doseCountPerIntake: Int = 1
    @State private var startDate: Date = Date()
    @State private var endDate: Date = Date()
    @State private var hasEndDate = false
    @State private var notes: String = ""
    @State private var inventoryCount: Int = 0
    @State private var selectedPresetTimes = Set([PresetTime.morning])
    @State private var selectedWeekdays = Set([0, 1, 2, 3, 4, 5, 6])
    @State private var errorMessage: String?
    @State private var showToast = false
    @State private var toastMessage = ""
    @State private var editingItem: MedicationEditItem?
    @State private var isLoading = false

    private enum Formatters {
        static let isoDate: DateFormatter = {
            let formatter = DateFormatter()
            formatter.calendar = Calendar(identifier: .gregorian)
            formatter.timeZone = TimeZone.current
            formatter.dateFormat = "yyyy-MM-dd"
            return formatter
        }()
    }

    var body: some View {
        NavigationStack {
            ZStack {
                Form {
                    headerSection
                    FamilySelectedPatientSection(
                        selectedPatientId: selectedPatientId,
                        selectedPatientName: storedPatientName
                    )
                    listSection
                    addSection
                    signOutSection
                }
                .navigationTitle("薬")
                .tint(.teal)
                .listStyle(.insetGrouped)
                .overlay(alignment: .bottom) {
                    if showToast {
                        ToastBanner(message: toastMessage)
                    }
                }
                .animation(.easeInOut(duration: 0.2), value: showToast)
                .disabled(isLoading)
                .sheet(item: $editingItem) { item in
                    MedicationEditSheet(
                        medication: item.medication,
                        schedule: item.schedule,
                        onSave: { result in
                            await saveMedicationEdit(result)
                        },
                        onDelete: { medicationId in
                            await deleteMedication(medicationId)
                        }
                    )
                }
                if isLoading {
                    Color.black.opacity(0.2)
                        .ignoresSafeArea()
                    VStack(spacing: 12) {
                        FamilyAppLogo(size: 80)
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
            .blockTabBarInteraction(isLoading)
            .toolbar {
                ToolbarItemGroup(placement: .navigationBarTrailing) {
                    Button("更新") {
                        Task { await reloadAll() }
                    }
                    .disabled(isLoading)
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

    private var headerSection: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: "pills.fill")
                    .foregroundStyle(.teal)
                    .font(.title2)
                VStack(alignment: .leading, spacing: 4) {
                    Text("薬を管理")
                        .font(.headline)
                    Text("患者タブで選択中の患者の薬を管理します。")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .padding(.vertical, 4)
        }
    }

    private var listSection: some View {
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
    }

    private var addSection: some View {
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
            Stepper(value: $doseCountPerIntake, in: 1...10) {
                HStack {
                    Text("服用数/回")
                    Spacer()
                    Text("\(doseCountPerIntake)")
                        .foregroundStyle(.secondary)
                }
            }
            DatePicker("開始日", selection: $startDate, displayedComponents: .date)
            Toggle("終了日を設定", isOn: $hasEndDate.animation(.easeInOut(duration: 0.15)))
            if hasEndDate {
                DatePicker("終了日", selection: $endDate, displayedComponents: .date)
            }
            VStack(alignment: .leading, spacing: 8) {
                Text("接種曜日")
                    .font(.caption)
                    .foregroundStyle(.secondary)
                LazyVGrid(columns: [GridItem(.adaptive(minimum: 44), spacing: 8)], spacing: 8) {
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
            VStack(alignment: .leading, spacing: 8) {
                Text("時間プリセット")
                    .font(.caption)
                    .foregroundStyle(.secondary)
                LazyVGrid(columns: [GridItem(.adaptive(minimum: 60), spacing: 8)], spacing: 8) {
                    ForEach(PresetTime.allCases, id: \.self) { preset in
                        let isSelected = selectedPresetTimes.contains(preset)
                        Button(preset.label) {
                            togglePreset(preset, selection: &selectedPresetTimes)
                        }
                        .buttonStyle(.bordered)
                        .tint(isSelected ? .teal : .gray)
                    }
                }
                Text("選択中: \(PresetTime.summary(for: selectedPresetTimes))")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
            Stepper(value: $inventoryCount, in: 0...9999) {
                HStack {
                    Text("在庫数")
                    Spacer()
                    Text("\(inventoryCount)")
                        .foregroundStyle(.secondary)
                }
            }
            VStack(alignment: .leading, spacing: 4) {
                Text("メモ (任意)")
                    .font(.caption)
                    .foregroundStyle(.secondary)
                ZStack(alignment: .topLeading) {
                    if notes.isEmpty {
                        Text("例: 食後に服用")
                            .foregroundStyle(.secondary.opacity(0.6))
                            .padding(.top, 8)
                            .padding(.leading, 4)
                    }
                    TextEditor(text: $notes)
                        .frame(minHeight: 80)
                }
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
                doseCountPerIntake <= 0 ||
                selectedPresetTimes.isEmpty ||
                selectedWeekdays.isEmpty ||
                familyJwtToken.isEmpty
            )
        }
    }

    private var signOutSection: some View {
        Section {
            Button(role: .destructive) {
                Task { await handleSignOut() }
            } label: {
                Text("ログアウト")
            }
            .disabled(isLoading)
        }
    }

    private func handleSignOut() async {
        await SupabaseAuthService.signOut()
        familyJwtToken = ""
        storedPatientId = ""
        selectedPatientId = ""
    }

    private func loadMedications() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            medications = try await client.listMedications(patientId: selectedPatientId)
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
        } catch {
            errorMessage = "予定一覧の取得に失敗しました。"
        }
    }

    private func createMedication() async {
        errorMessage = nil
        let slots = PresetTime.orderedSelection(selectedPresetTimes).map { $0.timeString }
        let count = slots.count
        guard !slots.isEmpty else {
            errorMessage = "時間の数が回数/日と一致していません。"
            return
        }
        let inventory = max(inventoryCount, 0)
        let startDateString = formatDate(startDate)
        let endDateString = hasEndDate ? formatDate(endDate) : nil
        let days = selectedWeekdays.sorted()
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let med = try await client.createMedication(
                patientId: selectedPatientId,
                name: name,
                dosage: dosage,
                doseCountPerIntake: doseCountPerIntake,
                startDate: startDateString,
                endDate: endDateString,
                notes: notes.isEmpty ? nil : notes
            )
            let schedule = try await client.createSchedule(
                patientId: selectedPatientId,
                medicationId: med.id,
                daysOfWeek: days,
                timesPerDay: count,
                timeSlots: slots,
                startDate: startDateString,
                endDate: endDateString
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
            doseCountPerIntake = 1
            startDate = Date()
            endDate = Date()
            hasEndDate = false
            selectedPresetTimes = Set([.morning])
            inventoryCount = 0
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

    @MainActor
    private func deleteMedication(_ medicationId: String) async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            try await client.deleteMedication(medicationId: medicationId)
            medications.removeAll { $0.id == medicationId }
            schedules.removeAll { $0.medicationId == medicationId }
            editingItem = nil
            showToast(message: "薬を削除しました。")
        } catch {
            errorMessage = "薬の削除に失敗しました。"
            showToast(message: "薬の削除に失敗しました。")
        }
    }

    private static func todayString() -> String {
        Formatters.isoDate.string(from: Date())
    }

    private func formatDate(_ date: Date) -> String {
        Formatters.isoDate.string(from: date)
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

    private func togglePreset(_ preset: PresetTime, selection: inout Set<PresetTime>) {
        if selection.contains(preset) {
            selection.remove(preset)
        } else {
            selection.insert(preset)
        }
    }

    private func showToast(message: String) {
        toastMessage = message
        showToast = true
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            showToast = false
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
        async let medicationsTask = loadMedications()
        async let schedulesTask = loadSchedules()
        _ = await (medicationsTask, schedulesTask)
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
    let onDelete: (String) async -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var name: String
    @State private var dosage: String
    @State private var doseCountPerIntake: Int
    @State private var startDate: Date
    @State private var endDate: Date
    @State private var hasEndDate: Bool
    @State private var notes: String
    @State private var schedulePresetTimes: Set<PresetTime>
    @State private var scheduleWeekdays: Set<Int>
    @State private var scheduleStartDate: Date
    @State private var scheduleEndDate: Date
    @State private var hasScheduleEndDate: Bool
    @State private var errorMessage: String?
    @State private var hasNonPresetTimes = false
    @State private var isSaving = false
    @State private var showDeleteConfirm = false

    private enum Formatters {
        static let isoDate: DateFormatter = {
            let formatter = DateFormatter()
            formatter.calendar = Calendar(identifier: .gregorian)
            formatter.timeZone = TimeZone.current
            formatter.dateFormat = "yyyy-MM-dd"
            return formatter
        }()
    }

    init(
        medication: FamilyMedicationDTO,
        schedule: FamilyScheduleDTO?,
        onSave: @escaping (MedicationEditResult) async -> Void,
        onDelete: @escaping (String) async -> Void
    ) {
        self.medication = medication
        self.schedule = schedule
        self.onSave = onSave
        self.onDelete = onDelete
        _name = State(initialValue: medication.name)
        _dosage = State(initialValue: medication.dosage)
        _doseCountPerIntake = State(initialValue: max(medication.doseCountPerIntake, 1))
        _startDate = State(initialValue: Self.parseDate(medication.startDate, fallback: Date()))
        _endDate = State(initialValue: Self.parseDate(medication.endDate ?? medication.startDate, fallback: Date()))
        _hasEndDate = State(initialValue: medication.endDate != nil)
        _notes = State(initialValue: medication.notes ?? "")
        let (presetTimes, hasNonPreset) = PresetTime.selection(from: schedule?.timeSlots ?? [])
        _schedulePresetTimes = State(initialValue: presetTimes.isEmpty ? Set([.morning]) : presetTimes)
        _hasNonPresetTimes = State(initialValue: hasNonPreset)
        _scheduleWeekdays = State(initialValue: Set(schedule?.daysOfWeek ?? [0, 1, 2, 3, 4, 5, 6]))
        let scheduleStart = schedule?.startDate ?? medication.startDate
        _scheduleStartDate = State(initialValue: Self.parseDate(scheduleStart, fallback: Date()))
        _scheduleEndDate = State(initialValue: Self.parseDate(schedule?.endDate ?? scheduleStart, fallback: Date()))
        _hasScheduleEndDate = State(initialValue: schedule?.endDate != nil)
    }

    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("薬を編集")) {
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
                    Stepper(value: $doseCountPerIntake, in: 1...10) {
                        HStack {
                            Text("服用数/回")
                            Spacer()
                            Text("\(doseCountPerIntake)")
                                .foregroundStyle(.secondary)
                        }
                    }
                    DatePicker("開始日", selection: $startDate, displayedComponents: .date)
                    Toggle("終了日を設定", isOn: $hasEndDate.animation(.easeInOut(duration: 0.15)))
                    if hasEndDate {
                        DatePicker("終了日", selection: $endDate, displayedComponents: .date)
                    }
                    VStack(alignment: .leading, spacing: 4) {
                        Text("メモ (任意)")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        ZStack(alignment: .topLeading) {
                            if notes.isEmpty {
                                Text("例: 食後に服用")
                                    .foregroundStyle(.secondary.opacity(0.6))
                                    .padding(.top, 8)
                                    .padding(.leading, 4)
                            }
                            TextEditor(text: $notes)
                                .frame(minHeight: 80)
                        }
                    }
                    VStack(alignment: .leading, spacing: 8) {
                        Text("接種曜日")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 44), spacing: 8)], spacing: 8) {
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
                    VStack(alignment: .leading, spacing: 8) {
                        Text("時間プリセット")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        LazyVGrid(columns: [GridItem(.adaptive(minimum: 60), spacing: 8)], spacing: 8) {
                            ForEach(PresetTime.allCases, id: \.self) { preset in
                                let isSelected = schedulePresetTimes.contains(preset)
                                Button(preset.label) {
                                    togglePreset(preset, selection: &schedulePresetTimes)
                                }
                                .buttonStyle(.bordered)
                                .tint(isSelected ? .teal : .gray)
                            }
                        }
                        Text("選択中: \(PresetTime.summary(for: schedulePresetTimes))")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        if hasNonPresetTimes {
                            Text("既存の時間がプリセット外のため、保存前に選択してください。")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    DatePicker("開始日", selection: $scheduleStartDate, displayedComponents: .date)
                    Toggle("予定の終了日を設定", isOn: $hasScheduleEndDate.animation(.easeInOut(duration: 0.15)))
                    if hasScheduleEndDate {
                        DatePicker("終了日", selection: $scheduleEndDate, displayedComponents: .date)
                    }
                }

                if let errorMessage {
                    Section {
                        Text(errorMessage)
                            .foregroundStyle(.red)
                    }
                }

                Section {
                    Button(role: .destructive) {
                        showDeleteConfirm = true
                    } label: {
                        Text("薬を削除")
                    }
                }
            }
            .disabled(isSaving)
            .navigationTitle("薬を編集")
            .tint(.teal)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("閉じる") {
                        dismiss()
                    }
                    .disabled(isSaving)
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button(isSaving ? "保存中..." : "保存") {
                        Task { await handleSave() }
                    }
                    .disabled(isSaving)
                }
            }
            .alert("薬を削除しますか？", isPresented: $showDeleteConfirm) {
                Button("削除", role: .destructive) {
                    Task { await onDelete(medication.id) }
                }
                Button("キャンセル", role: .cancel) {}
            } message: {
                Text("この操作は取り消せません。")
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
        let slots = PresetTime.orderedSelection(schedulePresetTimes).map { $0.timeString }
        let timesPerDay = slots.count
        let startDateString = formatDate(startDate)
        let endDateString = hasEndDate ? formatDate(endDate) : nil
        let scheduleStartDateString = formatDate(scheduleStartDate)
        let scheduleEndDateString = hasScheduleEndDate ? formatDate(scheduleEndDate) : nil

        guard !name.isEmpty, !dosage.isEmpty else {
            errorMessage = "薬情報が未入力です。"
            return
        }
        guard doseCountPerIntake > 0 else {
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

        isSaving = true
        defer { isSaving = false }
        let result = MedicationEditResult(
            medicationId: medication.id,
            name: name,
            dosage: dosage,
            doseCountPerIntake: doseCountPerIntake,
            startDate: startDateString,
            endDate: endDateString,
            notes: notes.isEmpty ? nil : notes,
            scheduleId: schedule?.id,
            daysOfWeek: scheduleWeekdays.sorted(),
            timesPerDay: timesPerDay,
            timeSlots: slots,
            scheduleStartDate: scheduleStartDateString,
            scheduleEndDate: scheduleEndDateString
        )
        await onSave(result)
    }

    private func togglePreset(_ preset: PresetTime, selection: inout Set<PresetTime>) {
        if selection.contains(preset) {
            selection.remove(preset)
        } else {
            selection.insert(preset)
        }
    }

    private func formatDate(_ date: Date) -> String {
        Formatters.isoDate.string(from: date)
    }

    private static func parseDate(_ value: String, fallback: Date) -> Date {
        Formatters.isoDate.date(from: value) ?? fallback
    }
}

private enum PresetTime: Int, CaseIterable, Hashable {
    case morning
    case noon
    case night

    var label: String {
        switch self {
        case .morning: return "朝"
        case .noon: return "昼"
        case .night: return "夜"
        }
    }

    var timeString: String {
        switch self {
        case .morning: return "08:00"
        case .noon: return "12:00"
        case .night: return "20:00"
        }
    }

    static func orderedSelection(_ selection: Set<PresetTime>) -> [PresetTime] {
        allCases.filter { selection.contains($0) }
    }

    static func summary(for selection: Set<PresetTime>) -> String {
        let labels = orderedSelection(selection).map { $0.label }
        guard !labels.isEmpty else {
            return "未選択"
        }
        return "\(labels.joined(separator: "・")) (\(labels.count)回)"
    }

    static func selection(from timeSlots: [String]) -> (Set<PresetTime>, Bool) {
        var selection = Set<PresetTime>()
        var hasNonPreset = false
        for slot in timeSlots {
            if let preset = allCases.first(where: { $0.timeString == slot }) {
                selection.insert(preset)
            } else {
                hasNonPreset = true
            }
        }
        return (selection, hasNonPreset)
    }
}

#Preview {
    MedicationsView()
}
