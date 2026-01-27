import SwiftUI

struct InventoryView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var medications: [FamilyMedicationDTO] = []
    @State private var inventoryItems: [InventoryDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var errorMessage: String?
    @State private var isLoading = false
    @State private var isLoadingPatients = false

    var body: some View {
        NavigationStack {
            ZStack {
                List {
                    headerSection
                    patientSection
                    inventorySection
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
            .navigationTitle("在庫")
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
                Task { await loadInventory() }
            }
        }
    }

    private var headerSection: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: "tray.full.fill")
                    .foregroundStyle(.white, .teal)
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
            Button("在庫を読み込む") {
                Task { await loadInventory() }
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

    private var inventorySection: some View {
        Section(header: Text("在庫一覧")) {
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

    private func loadInventory() async {
        guard !selectedPatientId.isEmpty else {
            inventoryItems = []
            return
        }
        errorMessage = nil
        isLoading = true
        defer { isLoading = false }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            medications = try await client.listMedications(patientId: selectedPatientId)
            inventoryItems = try await client.listInventory(patientId: selectedPatientId)
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "在庫の取得に失敗しました。"
        }
    }

    private func reloadAll() async {
        isLoading = true
        defer { isLoading = false }
        await loadPatients()
        if !selectedPatientId.isEmpty {
            await loadInventory()
        }
    }

    private func formatDateTime(_ value: String) -> String {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        if let date = formatter.date(from: value) {
            return shortDateFormatter.string(from: date)
        }
        formatter.formatOptions = [.withInternetDateTime]
        if let date = formatter.date(from: value) {
            return shortDateFormatter.string(from: date)
        }
        return value
    }

    private var shortDateFormatter: DateFormatter {
        let formatter = DateFormatter()
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.timeZone = TimeZone.current
        formatter.dateFormat = "yyyy/MM/dd HH:mm"
        return formatter
    }
}

#Preview {
    InventoryView()
}
