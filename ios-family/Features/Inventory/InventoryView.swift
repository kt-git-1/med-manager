import SwiftUI

struct InventoryView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var inventoryItems: [InventoryDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var errorMessage: String?
    @State private var isLoading = false

    private enum Formatters {
        static let shortDateTime: DateFormatter = {
            let formatter = DateFormatter()
            formatter.calendar = Calendar(identifier: .gregorian)
            formatter.timeZone = TimeZone.current
            formatter.dateFormat = "yyyy/MM/dd HH:mm"
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
                List {
                    headerSection
                    FamilySelectedPatientSection(
                        selectedPatientId: selectedPatientId,
                        selectedPatientName: storedPatientName
                    )
                    inventorySection
                    signOutSection
                }
                if isLoading {
                    Color.black.opacity(0.2)
                        .ignoresSafeArea()
                    VStack(spacing: 12) {
                        FamilyAppLogo(size: 64)
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
            .navigationTitle("在庫")
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

    private var headerSection: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: "tray.full.fill")
                    .foregroundStyle(.teal)
                    .font(.title2)
                VStack(alignment: .leading, spacing: 4) {
                    Text("在庫管理")
                        .font(.headline)
                    Text("残り日数と警告を確認できます。")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .padding(.vertical, 4)
        }
    }

    private var inventorySection: some View {
        Section(header: Text("在庫一覧")) {
            if let errorMessage {
                Text(errorMessage)
                    .foregroundStyle(.red)
            }
            if inventoryItems.isEmpty {
                Text("在庫がありません。")
                    .foregroundStyle(.secondary)
            } else {
                ForEach(sortedInventory, id: \.medicationId) { item in
                    inventoryRow(item)
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

    private var sortedInventory: [InventoryDTO] {
        inventoryItems.sorted { lhs, rhs in
            if lhs.isWarning != rhs.isWarning {
                return lhs.isWarning && !rhs.isWarning
            }
            return (lhs.remainingDays ?? Int.max) < (rhs.remainingDays ?? Int.max)
        }
    }

    private func inventoryRow(_ item: InventoryDTO) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(medicationLabel(for: item.medicationId))
                .font(.headline)
            HStack(spacing: 12) {
                Text("残数: \(item.remainingCount)")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                if let remainingDays = item.remainingDays {
                    Text("残り日数: \(remainingDays)日")
                        .font(.subheadline)
                        .foregroundStyle(item.isWarning ? .red : .secondary)
                } else {
                    Text("残り日数: 未算出")
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }
            }
            if item.isWarning {
                Text("警告: 残薬が少なくなっています")
                    .font(.caption)
                    .foregroundStyle(.red)
            } else {
                Text("最終調整: \(formatDateTime(item.lastAdjustedAt))")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
        }
        .padding(.vertical, 4)
    }

    private func medicationLabel(for medicationId: String) -> String {
        guard let medication = medications.first(where: { $0.id == medicationId }) else {
            return "お薬"
        }
        return "\(medication.name) \(medication.dosage)"
    }

    private func handleSignOut() async {
        await SupabaseAuthService.signOut()
        familyJwtToken = ""
        storedPatientId = ""
        selectedPatientId = ""
    }

    private func loadInventory() async {
        guard !selectedPatientId.isEmpty else {
            inventoryItems = []
            return
        }
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            async let medsTask = client.listMedications(patientId: selectedPatientId)
            async let inventoryTask = client.listInventory(patientId: selectedPatientId)
            let (medicationsResult, inventoryResult) = try await (medsTask, inventoryTask)
            medications = medicationsResult
            inventoryItems = inventoryResult
        } catch {
            errorMessage = "在庫の取得に失敗しました。"
        }
    }

    private func reloadAll() async {
        isLoading = true
        defer { isLoading = false }
        selectedPatientId = storedPatientId
        guard !selectedPatientId.isEmpty else {
            inventoryItems = []
            errorMessage = nil
            return
        }
        await loadInventory()
    }

    private func formatDateTime(_ value: String) -> String {
        if let date = Formatters.isoDateTime.date(from: value) {
            return Formatters.shortDateTime.string(from: date)
        }
        if let date = Formatters.isoDateTimeFallback.date(from: value) {
            return Formatters.shortDateTime.string(from: date)
        }
        return value
    }
}

#Preview {
    InventoryView()
}
