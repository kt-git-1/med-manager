import SwiftUI

struct HistoryView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var adherenceItems: [FamilyAdherenceLogDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var isLoadingPatients = false
    @State private var selectedMode: HistoryMode = .list
    @State private var calendarMonth = Date()
    @State private var selectedDate = Date()

    var body: some View {
        NavigationStack {
            ZStack {
                List {
                    headerSection
                    patientSection
                    modeSection
                    if selectedMode == .list {
                        historyListSection
                    } else {
                        calendarSection
                    }
                }
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
            .navigationTitle("履歴")
            .tint(.teal)
            .listStyle(.insetGrouped)
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
            .onChange(of: selectedPatientId) { _ in
                Task { await loadHistory() }
            }
        }
    }

    private var headerSection: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: "calendar.circle.fill")
                    .foregroundStyle(.white, .teal)
                    .font(.title2)
                VStack(alignment: .leading, spacing: 4) {
                    Text("服薬履歴")
                        .font(.headline)
                    Text("患者の履歴を一覧/カレンダーで確認できます。")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .padding(.vertical, 4)
        }
    }

    private var patientSection: some View {
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
            Button("履歴を読み込む") {
                Task { await loadHistory() }
            }
            .buttonStyle(.bordered)
            .tint(.teal)
            .disabled(selectedPatientId.isEmpty || familyJwtToken.isEmpty)
            if let errorMessage {
                Text(errorMessage)
                    .foregroundStyle(.red)
            }
        }
    }

    private var modeSection: some View {
        Section {
            Picker("表示", selection: $selectedMode) {
                ForEach(HistoryMode.allCases) { mode in
                    Text(mode.rawValue).tag(mode)
                }
            }
            .pickerStyle(.segmented)
            .disabled(selectedPatientId.isEmpty)
        }
    }

    private var historyListSection: some View {
        Section(header: Text("履歴")) {
            if adherenceItems.isEmpty {
                Text("履歴がありません")
            } else {
                ForEach(adherenceItems, id: \.id) { item in
                    adherenceRow(item)
                }
            }
        }
    }

    private var calendarSection: some View {
        Section(header: Text("カレンダー")) {
            VStack(spacing: 12) {
                HStack {
                    Button {
                        shiftMonth(by: -1)
                    } label: {
                        Image(systemName: "chevron.left")
                    }
                    Spacer()
                    Text(monthLabel(for: calendarMonth))
                        .font(.headline)
                    Spacer()
                    Button {
                        shiftMonth(by: 1)
                    } label: {
                        Image(systemName: "chevron.right")
                    }
                }
                LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 7), spacing: 8) {
                    ForEach(weekdaySymbols, id: \.self) { day in
                        Text(day)
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                    ForEach(0..<leadingBlankDays(in: calendarMonth), id: \.self) { _ in
                        Color.clear.frame(height: 28)
                    }
                    ForEach(daysInMonth(for: calendarMonth), id: \.self) { date in
                        calendarDayCell(for: date)
                    }
                }
                VStack(alignment: .leading, spacing: 8) {
                    Text(dayLabel(for: selectedDate))
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                    if itemsForDate(selectedDate).isEmpty {
                        Text("履歴がありません")
                    } else {
                        ForEach(itemsForDate(selectedDate), id: \.id) { item in
                            adherenceRow(item)
                        }
                    }
                }
                .frame(maxWidth: .infinity, alignment: .leading)
            }
            .padding(.vertical, 4)
        }
    }

    private func adherenceRow(_ item: FamilyAdherenceLogDTO) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(item.medicationName ?? "お薬")
                .font(.headline)
            HStack(spacing: 8) {
                Text(formatDateTime(item.takenAt))
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                if let timeSlot = formatTimeSlot(item.takenAt),
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
            if item.action == "taken" {
                Label("服用済み", systemImage: "checkmark.circle.fill")
                    .foregroundStyle(.green)
            } else if item.action == "skipped" {
                Label("スキップ済み", systemImage: "minus.circle.fill")
                    .foregroundStyle(.secondary)
            }
        }
    }

    private func handleSignOut() async {
        await SupabaseAuthService.signOut()
        familyJwtToken = ""
        storedPatientId = ""
        selectedPatientId = ""
    }

    private func reloadAll() async {
        isLoading = true
        defer { isLoading = false }
        await loadPatients()
        await loadHistory()
    }

    private func loadPatients() async {
        errorMessage = nil
        isLoadingPatients = true
        defer { isLoadingPatients = false }
        guard !familyJwtToken.isEmpty else {
            patients = []
            selectedPatientId = ""
            return
        }
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

    private func loadHistory() async {
        errorMessage = nil
        guard !familyJwtToken.isEmpty, !selectedPatientId.isEmpty else {
            adherenceItems = []
            return
        }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let response = try await client.getAdherence(
                patientId: selectedPatientId,
                from: nil,
                to: nil,
                cursor: nil,
                limit: 60
            )
            adherenceItems = response.items.sorted {
                (parseDate($0.takenAt) ?? .distantPast) > (parseDate($1.takenAt) ?? .distantPast)
            }
            if let latest = adherenceItems.first, let latestDate = parseDate(latest.takenAt) {
                selectedDate = latestDate
                calendarMonth = calendar.startOfDay(for: latestDate)
            }
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "履歴取得に失敗しました。"
        }
    }

    private var calendar: Calendar {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "Asia/Tokyo") ?? .current
        return calendar
    }

    private let weekdaySymbols = ["日", "月", "火", "水", "木", "金", "土"]

    private func monthLabel(for date: Date) -> String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "ja_JP")
        formatter.timeZone = calendar.timeZone
        formatter.dateFormat = "yyyy年M月"
        return formatter.string(from: date)
    }

    private func dayLabel(for date: Date) -> String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "ja_JP")
        formatter.timeZone = calendar.timeZone
        formatter.dateFormat = "yyyy/MM/dd (EEE)"
        return formatter.string(from: date)
    }

    private func daysInMonth(for date: Date) -> [Date] {
        let components = calendar.dateComponents([.year, .month], from: date)
        guard let startOfMonth = calendar.date(from: components),
              let range = calendar.range(of: .day, in: .month, for: startOfMonth) else {
            return []
        }
        return range.compactMap { day -> Date? in
            calendar.date(bySetting: .day, value: day, of: startOfMonth)
        }
    }

    private func leadingBlankDays(in date: Date) -> Int {
        let components = calendar.dateComponents([.year, .month], from: date)
        guard let startOfMonth = calendar.date(from: components) else { return 0 }
        let weekday = calendar.component(.weekday, from: startOfMonth)
        return (weekday - calendar.firstWeekday + 7) % 7
    }

    private func calendarDayCell(for date: Date) -> some View {
        let day = calendar.component(.day, from: date)
        let isSelected = calendar.isDate(date, inSameDayAs: selectedDate)
        let hasItems = !itemsForDate(date).isEmpty
        return Button {
            selectedDate = date
        } label: {
            VStack(spacing: 4) {
                Text("\(day)")
                    .font(.subheadline)
                    .frame(maxWidth: .infinity)
                Circle()
                    .fill(hasItems ? Color.teal : Color.clear)
                    .frame(width: 6, height: 6)
            }
            .padding(6)
            .background(isSelected ? Color.teal.opacity(0.15) : Color.clear)
            .clipShape(RoundedRectangle(cornerRadius: 8))
        }
        .buttonStyle(.plain)
    }

    private func shiftMonth(by value: Int) {
        guard let next = calendar.date(byAdding: .month, value: value, to: calendarMonth) else {
            return
        }
        calendarMonth = next
        if let firstDay = calendar.date(from: calendar.dateComponents([.year, .month], from: next)) {
            selectedDate = firstDay
        }
    }

    private func itemsForDate(_ date: Date) -> [FamilyAdherenceLogDTO] {
        adherenceItems.filter { item in
            guard let parsed = parseDate(item.takenAt) else { return false }
            return calendar.isDate(parsed, inSameDayAs: date)
        }
    }

    private func parseDate(_ value: String) -> Date? {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        if let date = formatter.date(from: value) {
            return date
        }
        return ISO8601DateFormatter().date(from: value)
    }

    private func formatDateTime(_ value: String) -> String {
        guard let date = parseDate(value) else { return value }
        let formatter = DateFormatter()
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "HH:mm"
        return formatter.string(from: date)
    }

    private func formatTimeSlot(_ value: String) -> String? {
        guard let date = parseDate(value) else { return nil }
        let formatter = DateFormatter()
        formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
        formatter.dateFormat = "HH:mm"
        return formatter.string(from: date)
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
}

private enum HistoryMode: String, CaseIterable, Identifiable {
    case list = "一覧"
    case calendar = "カレンダー"

    var id: String { rawValue }
}

#Preview {
    HistoryView()
}
