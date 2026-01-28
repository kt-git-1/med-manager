import SwiftUI

struct SchedulesView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var selectedPatientId: String = ""
    @State private var todayDoseInstances: [FamilyDoseInstanceDTO] = []
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var schedules: [FamilyScheduleDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var sendingIds: Set<String> = []
    @State private var selectedTab: ScheduleTab = .today

    private enum ScheduleTab: String, CaseIterable, Identifiable {
        case today
        case list

        var id: String { rawValue }
        var title: String {
            switch self {
            case .today:
                return "今日の予定"
            case .list:
                return "予定一覧"
            }
        }
    }

    private enum Formatters {
        static let timeJapan: DateFormatter = {
            let formatter = DateFormatter()
            formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
            formatter.dateFormat = "HH:mm"
            return formatter
        }()
        static let timeLocal: DateFormatter = {
            let formatter = DateFormatter()
            formatter.timeZone = TimeZone.current
            formatter.dateFormat = "HH:mm"
            return formatter
        }()
        static let isoDate: DateFormatter = {
            let formatter = DateFormatter()
            formatter.calendar = Calendar(identifier: .gregorian)
            formatter.timeZone = TimeZone.current
            formatter.dateFormat = "yyyy-MM-dd"
            return formatter
        }()
        static let isoDateTime: ISO8601DateFormatter = {
            let formatter = ISO8601DateFormatter()
            formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
            return formatter
        }()
        static let isoDateTimeFallback: ISO8601DateFormatter = {
            let formatter = ISO8601DateFormatter()
            formatter.formatOptions = [.withInternetDateTime]
            return formatter
        }()
    }

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
                    Section {
                        Picker("表示", selection: $selectedTab) {
                            ForEach(ScheduleTab.allCases) { tab in
                                Text(tab.title).tag(tab)
                            }
                        }
                        .pickerStyle(.segmented)
                    }
                    if selectedTab == .today {
                        todayDoseSection
                    } else {
                        scheduleListSection
                    }
                    signOutSection
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

    private var scheduleListSection: some View {
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

    private func loadTodayDoseInstances() async {
        guard !familyJwtToken.isEmpty, !selectedPatientId.isEmpty else {
            todayDoseInstances = []
            return
        }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            todayDoseInstances = try await client.getDoseInstances(
                patientId: selectedPatientId,
                date: isoDate()
            )
        } catch {
            errorMessage = "今日の予定取得に失敗しました。"
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
        errorMessage = nil
        selectedPatientId = storedPatientId
        guard !selectedPatientId.isEmpty else {
            medications = []
            schedules = []
            todayDoseInstances = []
            errorMessage = nil
            return
        }
        async let todayTask = loadTodayDoseInstances()
        async let medicationTask = loadMedications()
        async let schedulesTask = loadSchedules()
        _ = await (todayTask, medicationTask, schedulesTask)
    }

    private func medicationName(for medicationId: String) -> String? {
        medications.first(where: { $0.id == medicationId })
            .map { "\($0.name) \($0.dosage)" }
    }

    private var todayDoseSection: some View {
        Section(header: Text("今日の予定")) {
            if selectedPatientId.isEmpty {
                Text("患者を選択してください。")
                    .foregroundStyle(.secondary)
            } else if todayDoseInstances.isEmpty {
                Text("予定がありません。")
                    .foregroundStyle(.secondary)
            } else {
                ForEach(todayDoseInstances, id: \.id) { item in
                    VStack(alignment: .leading, spacing: 8) {
                        Text(item.medicationName ?? "お薬")
                            .font(.headline)
                        HStack(spacing: 8) {
                            Text(formatTime(item.scheduledFor))
                                .font(.subheadline)
                                .foregroundStyle(.secondary)
                            if let timeSlot = formatTimeSlot(item.scheduledFor),
                               let presetLabel = presetLabel(for: timeSlot) {
                                Text(presetLabel)
                                    .font(.caption)
                                    .padding(.horizontal, 8)
                                    .padding(.vertical, 4)
                                    .background(.teal.opacity(0.12))
                                    .clipShape(Capsule())
                                    .foregroundStyle(.teal)
                            }
                        }
                        if item.status == "taken" {
                            Label("服用済み", systemImage: "checkmark.circle.fill")
                                .foregroundStyle(.green)
                        } else if item.status == "skipped" {
                            Label("スキップ済み", systemImage: "minus.circle.fill")
                                .foregroundStyle(.secondary)
                        } else {
                            HStack {
                                Button("飲んだ") {
                                    Task { await sendAdherence(item, action: "taken") }
                                }
                                .buttonStyle(.borderedProminent)
                                .tint(.teal)
                                .disabled(sendingIds.contains(item.id) || isLoading)
                                Button("スキップ") {
                                    Task { await sendAdherence(item, action: "skipped") }
                                }
                                .buttonStyle(.bordered)
                                .tint(.teal)
                                .disabled(sendingIds.contains(item.id) || isLoading)
                                if sendingIds.contains(item.id) {
                                    ProgressView()
                                }
                            }
                        }
                    }
                    .padding(.vertical, 4)
                }
            }
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

    private func sendAdherence(_ item: FamilyDoseInstanceDTO, action: String) async {
        await MainActor.run {
            sendingIds.insert(item.id)
            todayDoseInstances = todayDoseInstances.map { instance in
                guard instance.id == item.id else { return instance }
                return FamilyDoseInstanceDTO(
                    id: instance.id,
                    medicationId: instance.medicationId,
                    scheduleId: instance.scheduleId,
                    scheduledFor: instance.scheduledFor,
                    status: action == "taken" ? "taken" : "skipped",
                    medicationName: instance.medicationName
                )
            }
        }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            _ = try await client.createAdherence(
                patientId: selectedPatientId,
                doseInstanceId: item.id,
                action: action,
                takenAt: isoDateTime(),
                clientUuid: UUID().uuidString
            )
            await loadTodayDoseInstances()
            await MainActor.run {
                sendingIds.remove(item.id)
            }
        } catch {
            errorMessage = "服用記録の送信に失敗しました。"
            await loadTodayDoseInstances()
            await MainActor.run {
                sendingIds.remove(item.id)
            }
        }
    }

    private func formatTime(_ value: String) -> String {
        guard let date = parseDate(value) else { return value }
        return Formatters.timeJapan.string(from: date)
    }

    private func formatTimeSlot(_ value: String) -> String? {
        guard let date = parseDate(value) else { return nil }
        return Formatters.timeLocal.string(from: date)
    }

    private func presetLabel(for timeSlot: String) -> String? {
        switch timeSlot {
        case "08:00":
            return "朝"
        case "12:00":
            return "昼"
        case "20:00":
            return "夜"
        default:
            return nil
        }
    }

    private func isoDate() -> String {
        Formatters.isoDate.string(from: Date())
    }

    private func isoDateTime() -> String {
        Formatters.isoDateTime.string(from: Date())
    }

    private func parseDate(_ value: String) -> Date? {
        if let date = Formatters.isoDateTime.date(from: value) {
            return date
        }
        return Formatters.isoDateTimeFallback.date(from: value)
    }

}

#Preview {
    SchedulesView()
}
