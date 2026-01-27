import SwiftUI

struct FamilyHeaderSection: View {
    let systemImage: String
    let title: String
    let subtitle: String

    var body: some View {
        Section {
            HStack(spacing: 12) {
                Image(systemName: systemImage)
                    .foregroundStyle(.white, .teal)
                    .font(.title2)
                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.headline)
                    Text(subtitle)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .padding(.vertical, 4)
        }
    }
}

struct FamilyPatientSection: View {
    let isLoadingPatients: Bool
    let patients: [FamilyPatientDTO]
    @Binding var selectedPatientId: String
    let familyJwtToken: String
    let errorMessage: String?
    let actionTitle: String?
    let onAction: (() -> Void)?

    var body: some View {
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
            if let actionTitle, let onAction {
                Button(actionTitle) {
                    onAction()
                }
                .buttonStyle(.bordered)
                .tint(.teal)
                .disabled(selectedPatientId.isEmpty || familyJwtToken.isEmpty)
            }
            if let errorMessage {
                Text(errorMessage)
                    .foregroundStyle(.red)
            }
        }
    }
}

struct FamilySelectedPatientSection: View {
    let selectedPatientId: String
    let selectedPatientName: String

    var body: some View {
        Section(header: Text("対象患者")) {
            if selectedPatientId.isEmpty {
                Text("患者タブで対象患者を選択してください。")
                    .foregroundStyle(.secondary)
            } else if selectedPatientName.isEmpty {
                Text("患者タブで選択中の患者のデータを表示します。")
                    .foregroundStyle(.secondary)
            } else {
                VStack(alignment: .leading, spacing: 4) {
                    Text("選択中: \(selectedPatientName)")
                        .font(.headline)
                    Text("患者タブで選択中の患者のデータを表示します。")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
        }
    }
}

struct FamilyLoadingOverlay: View {
    let isLoading: Bool
    let message: String

    init(isLoading: Bool, message: String = "更新中") {
        self.isLoading = isLoading
        self.message = message
    }

    var body: some View {
        if isLoading {
            Color.black.opacity(0.2)
                .ignoresSafeArea()
            VStack(spacing: 12) {
                Image("AppLogo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 64, height: 64)
                ProgressView()
                Text(message)
                    .font(.headline)
            }
            .padding(20)
            .background(.ultraThinMaterial)
            .clipShape(RoundedRectangle(cornerRadius: 16))
            .shadow(radius: 8)
        }
    }
}
