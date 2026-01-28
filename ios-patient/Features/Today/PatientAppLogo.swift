import SwiftUI

struct PatientAppLogo: View {
    let size: CGFloat

    init(size: CGFloat = 64) {
        self.size = size
    }

    var body: some View {
        Image("AppLogo")
            .resizable()
            .scaledToFit()
            .frame(width: size, height: size)
    }
}
