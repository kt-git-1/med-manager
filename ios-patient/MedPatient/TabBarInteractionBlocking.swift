import SwiftUI

struct TabBarInteractionPreferenceKey: PreferenceKey {
    static var defaultValue = false

    static func reduce(value: inout Bool, nextValue: () -> Bool) {
        value = value || nextValue()
    }
}

extension View {
    func blockTabBarInteraction(_ isBlocked: Bool) -> some View {
        preference(key: TabBarInteractionPreferenceKey.self, value: isBlocked)
    }
}
