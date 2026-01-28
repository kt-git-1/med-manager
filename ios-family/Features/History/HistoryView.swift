import SwiftUI

struct HistoryView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var selectedPatientId: String = ""
    @State private var adherenceItems: [FamilyAdherenceLogDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var selectedMode: HistoryMode = .list
    @State private var calendarMonth = Date()
    @State private var selectedDate = Date()
    @State private var bannerMessage: String?
    @State private var isBannerVisible = false

    private enum Formatters {
        static let monthLabel: DateFormatter = {
            let formatter = DateFormatter()
            formatter.locale = Locale(identifier: "ja_JP")
            formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
            formatter.dateFormat = "yyyy年M月"
            return formatter
        }()
        static let dayLabel: DateFormatter = {
            let formatter = DateFormatter()
            formatter.locale = Locale(identifier: "ja_JP")
            formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
            formatter.dateFormat = "yyyy/MM/dd (EEE)"
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
        static let timeJapan: DateFormatter = {
            let formatter = DateFormatter()
            formatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
            formatter.dateFormat = "HH:mm"
            return formatter
        }()
    }

    var body: some View {
        NavigationStack {
            ZStack {
                List {
                    FamilyHeaderSection(
                        systemImage: "calendar.circle.fill",
                        title: "服薬履歴",
                        subtitle: "患者の履歴を一覧/カレンダーで確認できます。"
                    )
                    FamilySelectedPatientSection(
                        selectedPatientId: selectedPatientId,
                        selectedPatientName: storedPatientName
                    )
                    if let errorMessage {
                        Section {
                            Text(errorMessage)
                                .foregroundStyle(.red)
                        }
                    }
                    modeSection
                    if selectedMode == .list {
                        historyListSection
                    } else {
                        calendarSection
                    }
                    signOutSection
                }
                .disabled(isLoading)
                FamilyLoadingOverlay(isLoading: isLoading)
            }
            .overlay(alignment: .top) {
                if let bannerMessage, isBannerVisible {
                    bannerView(message: bannerMessage)
                }
            }
            .blockTabBarInteraction(isLoading)
            .navigationTitle("履歴")
            .tint(.teal)
            .listStyle(.insetGrouped)
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
        errorMessage = nil
        selectedPatientId = storedPatientId
        guard !selectedPatientId.isEmpty else {
            adherenceItems = []
            errorMessage = nil
            return
        }
        await loadHistory()
    }

    private func loadHistory() async {
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
            await notifyForNewAdherence(items: adherenceItems)
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
        Formatters.monthLabel.string(from: date)
    }

    private func dayLabel(for date: Date) -> String {
        Formatters.dayLabel.string(from: date)
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
        itemsByDate[calendar.startOfDay(for: date)] ?? []
    }

    private var itemsByDate: [Date: [FamilyAdherenceLogDTO]] {
        var grouped: [Date: [FamilyAdherenceLogDTO]] = [:]
        for item in adherenceItems {
            guard let parsed = parseDate(item.takenAt) else { continue }
            let day = calendar.startOfDay(for: parsed)
            grouped[day, default: []].append(item)
        }
        return grouped
    }

    private func parseDate(_ value: String) -> Date? {
        if let date = Formatters.isoDateTime.date(from: value) {
            return date
        }
        return Formatters.isoDateTimeFallback.date(from: value)
    }

    private func formatDateTime(_ value: String) -> String {
        guard let date = parseDate(value) else { return value }
        return Formatters.timeJapan.string(from: date)
    }

    private func formatTimeSlot(_ value: String) -> String? {
        guard let date = parseDate(value) else { return nil }
        return Formatters.timeJapan.string(from: date)
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

    private func bannerView(message: String) -> some View {
        Text(message)
            .font(.subheadline.weight(.semibold))
            .foregroundStyle(.white)
            .multilineTextAlignment(.center)
            .padding(.horizontal, 20)
            .padding(.vertical, 12)
            .background(Color.teal.opacity(0.95), in: Capsule())
            .shadow(color: .black.opacity(0.18), radius: 8, x: 0, y: 3)
            .padding(.top, 10)
            .padding(.horizontal, 16)
            .transition(.move(edge: .top).combined(with: .opacity))
            .zIndex(1)
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

    private func showBanner(_ message: String) {
        bannerMessage = message
        withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
            isBannerVisible = true
        }
        Task {
            try? await Task.sleep(nanoseconds: 2_500_000_000)
            await MainActor.run {
                withAnimation(.easeInOut(duration: 0.2)) {
                    isBannerVisible = false
                }
            }
        }
    }

    private func notifyForNewAdherence(items: [FamilyAdherenceLogDTO]) async {
        guard !selectedPatientId.isEmpty else { return }
        let takenItems: [(FamilyAdherenceLogDTO, Date)] = items.compactMap { item in
            guard item.action == "taken", let date = parseDate(item.takenAt) else { return nil }
            return (item, date)
        }
        guard let latest = takenItems.max(by: { $0.1 < $1.1 }) else { return }

        let lastSeen = loadLastSeenTakenAt(for: selectedPatientId)
        if lastSeen == nil {
            saveLastSeenTakenAt(latest.1, for: selectedPatientId)
            return
        }

        let newlyTaken = takenItems.filter { $0.1 > (lastSeen ?? .distantPast) }
        guard !newlyTaken.isEmpty else {
            saveLastSeenTakenAt(latest.1, for: selectedPatientId)
            return
        }

        let patientName = storedPatientName.isEmpty ? "患者" : storedPatientName
        let title = "\(patientName)が服用しました"
        let body: String
        if newlyTaken.count == 1 {
            let medicationName = newlyTaken[0].0.medicationName ?? "お薬"
            body = "\(medicationName)を服用しました"
        } else {
            body = "\(newlyTaken.count)件の服用記録が更新されました"
        }
        showBanner("\(title)\n\(body)")
        saveLastSeenTakenAt(latest.1, for: selectedPatientId)
    }

    private func lastSeenKey(for patientId: String) -> String {
        "familyLastSeenTakenAt_\(patientId)"
    }

    private func loadLastSeenTakenAt(for patientId: String) -> Date? {
        guard let value = UserDefaults.standard.string(forKey: lastSeenKey(for: patientId)) else { return nil }
        return parseDate(value)
    }

    private func saveLastSeenTakenAt(_ date: Date, for patientId: String) {
        let value = Formatters.isoDateTime.string(from: date)
        UserDefaults.standard.set(value, forKey: lastSeenKey(for: patientId))
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
