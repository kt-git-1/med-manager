import SwiftUI

/// PreferenceKey used to indicate whether tab bar interactions should be blocked.
/// This allows child views to signal up to a parent container (like a TabView)
/// that interactions should be temporarily disabled (e.g., during a loading state).
struct TabBarInteractionBlockKey: PreferenceKey {
    static var defaultValue: Bool = false

    static func reduce(value: inout Bool, nextValue: () -> Bool) {
        // Prefer the most recent child's value. If any child sets true, parent can react.
        value = nextValue()
    }
}
