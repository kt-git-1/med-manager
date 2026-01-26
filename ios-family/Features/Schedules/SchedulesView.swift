import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyApiBaseURL") private var apiBaseURL: String = ""
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @State private var patientId: String = ""
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var medicationId: String = ""
    @State private var timesPerDay: String = "1"
    @State private var timeSlots: String = ""
    @State private var startDate: String = ""
    @State private var endDate: String = ""
    @State private var errorMessage: String?

    var body: some View {
        NavigationStack {
            Form {
                APIConfigForm(apiBaseURL: $apiBaseURL, authToken: $familyJwtToken)
                Section(header: Text("対象患者")) {
                    TextField("patientId", text: $patientId)
                        .textInputAutocapitalization(.never)
                    Button("予定一覧を読み込む") {
                        Task { await loadSchedules() }
                    }
                    .disabled(patientId.isEmpty || apiBaseURL.isEmpty || familyJwtToken.isEmpty)
                }
                Section(header: Text("予定一覧")) {
                    if let errorMessage {
                        Text(errorMessage).foregroundStyle(.red)
                    }
                    ForEach(schedules, id: \.id) { schedule in
                        VStack(alignment: .leading) {
                            Text(schedule.timeSlots.joined(separator: " / "))
                            Text("開始日: \(schedule.startDate)")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                }
                Section(header: Text("予定追加")) {
                    TextField("medicationId", text: $medicationId)
                        .textInputAutocapitalization(.never)
                    TextField("回数/日", text: $timesPerDay)
                        .keyboardType(.numberPad)
                    TextField("時間 (例: 08:00,20:00)", text: $timeSlots)
                    TextField("開始日 YYYY-MM-DD", text: $startDate)
                    TextField("終了日 YYYY-MM-DD (任意)", text: $endDate)
                    Button("追加する") {
                        Task { await createSchedule() }
                    }
                    .disabled(
                        patientId.isEmpty ||
                        medicationId.isEmpty ||
                        timeSlots.isEmpty ||
                        startDate.isEmpty ||
                        apiBaseURL.isEmpty ||
                        familyJwtToken.isEmpty
                    )
                }
            }
            .navigationTitle("予定")
        }
    }

    private func loadSchedules() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            schedules = try await client.listSchedules(patientId: patientId)
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
        do {
            let client = try FamilyAPIClient(baseURLString: apiBaseURL, token: familyJwtToken)
            let schedule = try await client.createSchedule(
                patientId: patientId,
                medicationId: medicationId,
                timesPerDay: count,
                timeSlots: slots,
                startDate: startDate,
                endDate: endDate.isEmpty ? nil : endDate
            )
            schedules.insert(schedule, at: 0)
            medicationId = ""
            timeSlots = ""
        } catch {
            errorMessage = "予定の追加に失敗しました。"
        }
    }
}

#Preview {
    SchedulesView()
}
