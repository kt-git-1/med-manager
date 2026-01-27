import SwiftUI

struct MedicationsView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var medications: [FamilyMedicationDTO] = []
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
                        Task { await loadMedications() }
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
                            VStack(alignment: .leading, spacing: 4) {
                                Text("\(med.name) \(med.dosage)")
                                    .font(.headline)
                                Text("開始日: \(med.startDate)")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
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
            _ = try await client.createSchedule(
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
            storedPatientId = selectedPatientId
            name = ""
            dosage = ""
            notes = ""
            timeSlots = ""
            timesPerDay = ""
            inventoryCount = ""
        } catch {
            errorMessage = "薬の追加または予定/在庫設定に失敗しました。"
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
}

#Preview {
    MedicationsView()
}
