import Foundation
import os

enum AppLogger {
    static let subsystem = Bundle.main.bundleIdentifier ?? "MedFamily"
    static let api = Logger(subsystem: subsystem, category: "api")
    static let auth = Logger(subsystem: subsystem, category: "auth")
}
