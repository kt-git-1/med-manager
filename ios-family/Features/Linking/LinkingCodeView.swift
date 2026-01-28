import SwiftUI

struct LinkingCodeView: View {
    @AppStorage("familyJwtToken") private var familyJwtToken: String = ""
    @AppStorage("familySelectedPatientId") private var storedPatientId: String = ""
    @AppStorage("familySelectedPatientName") private var storedPatientName: String = ""
    @State private var patients: [FamilyPatientDTO] = []
    @State private var selectedPatientId: String = ""
    @State private var isLoadingPatients = false
    @State private var newPatientName: String = ""
    @State private var isCreating = false
    @State private var code: String = "------"
    @State private var expiresAt: String = ""
    @State private var errorMessage: String?
    @State private var showCopyToast = false
    @State private var isLoading = false

    var body: some View {
        NavigationStack {
            ZStack {
                Form {
                    Section {
                        HStack(spacing: 12) {
                            Image(systemName: "link.circle.fill")
                                .foregroundStyle(.teal)
                                .font(.title2)
                            VStack(alignment: .leading, spacing: 4) {
                                Text("連携コードを発行")
                                    .font(.headline)
                                Text("新規作成か既存患者を選択して発行します。")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                        }
                        .padding(.vertical, 4)
                    }

                    Section(header: Text("患者選択")) {
                        if isLoadingPatients {
                            Text("読み込み中...")
                                .foregroundStyle(.secondary)
                        } else if patients.isEmpty {
                            Text("まだ患者が登録されていません。")
                                .foregroundStyle(.secondary)
                        } else {
                            Picker("患者", selection: $selectedPatientId) {
                                ForEach(patients, id: \.id) { patient in
                                    Text(patient.displayName).tag(patient.id)
                                }
                            }
                        }
                        Button("選択中の患者で連携コードを発行") {
                            Task { await issueCode() }
                        }
                        .buttonStyle(.bordered)
                        .tint(.teal)
                        .disabled(selectedPatientId.isEmpty || familyJwtToken.isEmpty)
                    }
                    Section(header: Text("新しい患者を追加")) {
                        TextField("表示名", text: $newPatientName)
                        Button(isCreating ? "作成中..." : "追加して連携コード発行") {
                            Task { await createPatientAndIssueCode() }
                        }
                        .buttonStyle(.borderedProminent)
                        .tint(.teal)
                        .disabled(
                            isCreating ||
                            newPatientName.isEmpty ||
                            familyJwtToken.isEmpty
                        )
                    }
                    if code != "------" || !expiresAt.isEmpty || errorMessage != nil {
                        Section(header: Text("連携コード")) {
                        VStack(alignment: .leading, spacing: 8) {
                            Text(code)
                                .font(.title)
                                .monospacedDigit()
                            if !expiresAt.isEmpty {
                                Text("有効期限: \(expiresAt)")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                        }
                        Button("コピー") {
                            UIPasteboard.general.string = code
                            showCopyToast = true
                            scheduleToastDismiss()
                        }
                        .buttonStyle(.borderedProminent)
                        .tint(.teal)
                        .disabled(code == "------")
                        if let errorMessage {
                            Text(errorMessage).foregroundStyle(.red)
                        }
                    }
                    }
                    signOutSection
                }
                .navigationTitle("連携")
                .tint(.teal)
                .listStyle(.insetGrouped)
                .overlay(alignment: .bottom) {
                    if showCopyToast {
                        ToastBanner(message: "連携コードをコピーしました")
                    }
                }
                .animation(.easeInOut(duration: 0.2), value: showCopyToast)
                .disabled(isLoading)
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
            .onChange(of: selectedPatientId) { newValue in
                guard !newValue.isEmpty else { return }
                storedPatientId = newValue
                if let match = patients.first(where: { $0.id == newValue }) {
                    storedPatientName = match.displayName
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
                storedPatientName = result.first(where: { $0.id == storedPatientId })?.displayName ?? ""
            } else if selectedPatientId.isEmpty, let first = result.first?.id {
                selectedPatientId = first
                storedPatientName = result.first(where: { $0.id == first })?.displayName ?? ""
            }
        } catch {
            errorMessage = "患者一覧の取得に失敗しました。"
        }
    }

    private func createPatientAndIssueCode() async {
        errorMessage = nil
        isCreating = true
        defer { isCreating = false }
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let patient = try await client.createPatient(
                displayName: newPatientName,
                timezone: "Asia/Tokyo"
            )
            patients.insert(patient, at: 0)
            selectedPatientId = patient.id
            storedPatientId = patient.id
            storedPatientName = patient.displayName
            newPatientName = ""
            await issueCode()
        } catch {
            errorMessage = "患者の追加に失敗しました。"
        }
    }

    private func issueCode() async {
        errorMessage = nil
        do {
            let client = try FamilyAPIClient(token: familyJwtToken)
            let result = try await client.createLinkCode(patientId: selectedPatientId)
            code = result.code
            expiresAt = result.expiresAt
            storedPatientId = selectedPatientId
        } catch {
            errorMessage = "連携コードの発行に失敗しました。"
        }
    }

    private func scheduleToastDismiss() {
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            showCopyToast = false
        }
    }

    private func reloadAll() async {
        isLoading = true
        defer { isLoading = false }
        await loadPatients()
    }
}

private extension LinkingCodeView {
    var signOutSection: some View {
        Section {
            Button(role: .destructive) {
                Task { await handleSignOut() }
            } label: {
                Text("ログアウト")
            }
            .disabled(isLoading)
        }
    }
}

#Preview {
    LinkingCodeView()
}
