import SwiftUI

struct ToastBanner: View {
    let message: String

    var body: some View {
        Text(message)
            .font(.subheadline)
            .foregroundStyle(.white)
            .multilineTextAlignment(.center)
            .padding(.horizontal, 20)
            .padding(.vertical, 12)
            .background(.black.opacity(0.85), in: Capsule())
            .shadow(color: .black.opacity(0.2), radius: 6, x: 0, y: 2)
            .padding(.bottom, 24)
            .transition(.move(edge: .bottom).combined(with: .opacity))
    }
}

#Preview {
    VStack {
        Spacer()
        ToastBanner(message: "表示を統一したトーストです")
    }
    .padding()
}
