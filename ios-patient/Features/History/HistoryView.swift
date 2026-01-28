import SwiftUI

struct HistoryView: View {
    let apiBaseURL: String
    @ObservedObject var sessionStore: PatientSessionStore
    @State private var adherenceItems: [AdherenceLogDTO] = []
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var isActive = false
    @State private var selectedMode: HistoryMode = .list
    @State private var calendarMonth = Date()
    @State private var selectedDate = Date()
    private let refreshTimer = Timer.publish(every: 30, on: .main, in: .common).autoconnect()

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
                    headerSection
                    if let errorMessage {
                        Text(errorMessage)
                            .foregroundStyle(.red)
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
                if isLoading {
                    Color.black.opacity(0.2)
                        .ignoresSafeArea()
                    VStack(spacing: 12) {
                        Image("LoadIcon")
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
            .preference(key: HistoryInteractionBlockKey.self, value: isLoading)
            .navigationTitle("履歴")
            .tint(.teal)
            .listStyle(.insetGrouped)
            .refreshable {
                await reload()
            }
            .task {
                await reload()
            }
            .onReceive(refreshTimer) { _ in
                guard isActive, !isLoading else { return }
                Task { await reload() }
            }
            .onAppear {
                isActive = true
            }
            .onDisappear {
                isActive = false
            }
        }
    }

    private var headerSection: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: "calendar.circle.fill")
                    .foregroundStyle(.teal)
                    .font(.title2)
                VStack(alignment: .leading, spacing: 4) {
                    Text("服薬履歴")
                        .font(.headline)
                    Text("一覧とカレンダーで確認できます。")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .padding(.vertical, 4)
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

    private func adherenceRow(_ item: AdherenceLogDTO) -> some View {
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

    private func reload() async {
        guard !apiBaseURL.isEmpty else {
            errorMessage = "API_BASE_URLが未設定です。"
            return
        }
        await sessionStore.refreshIfNeeded(apiBaseURL: apiBaseURL)
        isLoading = true
        defer { isLoading = false }
        errorMessage = nil
        do {
            let client = try APIClient(baseURLString: apiBaseURL, keychain: KeychainStore())
            let response = try await client.getAdherence(from: nil, to: nil, cursor: nil, limit: 30)
            adherenceItems = response.items.sorted {
                (parseDate($0.takenAt) ?? .distantPast) > (parseDate($1.takenAt) ?? .distantPast)
            }
            if let latest = adherenceItems.first, let latestDate = parseDate(latest.takenAt) {
                selectedDate = latestDate
                calendarMonth = calendar.startOfDay(for: latestDate)
            }
        } catch {
            errorMessage = "履歴取得に失敗しました。"
        }
    }

    private var signOutSection: some View {
        Section {
            Button(role: .destructive) {
                sessionStore.clear()
            } label: {
                Text("ログアウト")
            }
            .disabled(isLoading)
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

    private func itemsForDate(_ date: Date) -> [AdherenceLogDTO] {
        adherenceItems.filter { item in
            guard let parsed = parseDate(item.takenAt) else { return false }
            return calendar.isDate(parsed, inSameDayAs: date)
        }
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
}

private enum HistoryMode: String, CaseIterable, Identifiable {
    case list = "一覧"
    case calendar = "カレンダー"

    var id: String { rawValue }
}

// Preference key to propagate whether interactions should be blocked (e.g., while loading)
private struct HistoryInteractionBlockKey: PreferenceKey {
    static var defaultValue: Bool = false
    static func reduce(value: inout Bool, nextValue: () -> Bool) {
        // If any child indicates blocking, keep it true
        value = value || nextValue()
    }
}

#Preview {
    HistoryView(apiBaseURL: "http://localhost:3000", sessionStore: PatientSessionStore())
}
