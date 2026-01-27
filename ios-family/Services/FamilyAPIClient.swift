import Foundation

enum FamilyAPIError: Error {
    case invalidBaseURL
    case missingToken
}

struct FamilyPatientDTO: Decodable {
    let id: String
    let displayName: String
    let timezone: String
}

struct FamilyMedicationDTO: Decodable {
    let id: String
    let name: String
    let dosage: String
    let doseCountPerIntake: Int
    let notes: String?
    let startDate: String
    let endDate: String?
    let isActive: Bool
}

struct FamilyScheduleDTO: Decodable {
    let id: String
    let medicationId: String
    let daysOfWeek: [Int]?
    let timesPerDay: Int
    let timeSlots: [String]
    let startDate: String
    let endDate: String?
    let isActive: Bool
}

struct LinkCodeDTO: Decodable {
    let code: String
    let expiresAt: String
}

struct InventoryDTO: Decodable {
    let medicationId: String
    let remainingCount: Int
    let warningThresholdDays: Int
    let lastAdjustedAt: String
}

struct FamilyAdherenceLogDTO: Decodable {
    let id: String
    let doseInstanceId: String
    let patientId: String
    let action: String
    let takenAt: String
    let source: String
    let clientUuid: String
    let medicationName: String?
}

struct FamilyPaginatedAdherenceDTO: Decodable {
    let items: [FamilyAdherenceLogDTO]
    let nextCursor: String?
}

final class FamilyAPIClient {
    private let baseURL: URL
    private let token: String

    init(baseURLString: String, token: String) throws {
        guard let url = URL(string: baseURLString) else {
            throw FamilyAPIError.invalidBaseURL
        }
        guard !token.isEmpty else {
            throw FamilyAPIError.missingToken
        }
        self.baseURL = Self.normalizeBaseURL(url)
        self.token = token
    }

    convenience init(token: String) throws {
        try self.init(baseURLString: Self.apiBaseURLString(), token: token)
    }

    func listPatients() async throws -> [FamilyPatientDTO] {
        let endpoint = baseURL.appendingPathComponent("/patients")
        var request = URLRequest(url: endpoint)
        attachAuth(to: &request)
        return try await decode([FamilyPatientDTO].self, request: request)
    }

    func createPatient(displayName: String, timezone: String) async throws -> FamilyPatientDTO {
        let endpoint = baseURL.appendingPathComponent("/patients")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        let body: [String: String] = ["displayName": displayName, "timezone": timezone]
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyPatientDTO.self, request: request)
    }

    func listMedications(patientId: String) async throws -> [FamilyMedicationDTO] {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/medications")
        var request = URLRequest(url: endpoint)
        attachAuth(to: &request)
        return try await decode([FamilyMedicationDTO].self, request: request)
    }

    func createMedication(
        patientId: String,
        name: String,
        dosage: String,
        doseCountPerIntake: Int,
        startDate: String,
        endDate: String?,
        notes: String?
    ) async throws -> FamilyMedicationDTO {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/medications")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = [
            "name": name,
            "dosage": dosage,
            "doseCountPerIntake": doseCountPerIntake,
            "startDate": startDate,
        ]
        if let endDate { body["endDate"] = endDate }
        if let notes { body["notes"] = notes }
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyMedicationDTO.self, request: request)
    }

    func updateMedication(
        medicationId: String,
        name: String,
        dosage: String,
        doseCountPerIntake: Int,
        startDate: String,
        endDate: String?,
        notes: String?
    ) async throws -> FamilyMedicationDTO {
        let endpoint = baseURL.appendingPathComponent("/medications/\(medicationId)")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "PATCH"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = [
            "name": name,
            "dosage": dosage,
            "doseCountPerIntake": doseCountPerIntake,
            "startDate": startDate,
        ]
        body["endDate"] = endDate ?? NSNull()
        body["notes"] = notes ?? NSNull()
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyMedicationDTO.self, request: request)
    }

    func deleteMedication(medicationId: String) async throws {
        let endpoint = baseURL.appendingPathComponent("/medications/\(medicationId)")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "DELETE"
        attachAuth(to: &request)
        try await sendNoContent(request: request)
    }

    func listSchedules(patientId: String) async throws -> [FamilyScheduleDTO] {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/schedules")
        var request = URLRequest(url: endpoint)
        attachAuth(to: &request)
        return try await decode([FamilyScheduleDTO].self, request: request)
    }

    func createSchedule(
        patientId: String,
        medicationId: String,
        daysOfWeek: [Int],
        timesPerDay: Int,
        timeSlots: [String],
        startDate: String,
        endDate: String?
    ) async throws -> FamilyScheduleDTO {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/schedules")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = [
            "medicationId": medicationId,
            "daysOfWeek": daysOfWeek,
            "timesPerDay": timesPerDay,
            "timeSlots": timeSlots,
            "startDate": startDate,
        ]
        if let endDate { body["endDate"] = endDate }
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyScheduleDTO.self, request: request)
    }

    func updateSchedule(
        scheduleId: String,
        daysOfWeek: [Int],
        timesPerDay: Int,
        timeSlots: [String],
        startDate: String,
        endDate: String?
    ) async throws -> FamilyScheduleDTO {
        let endpoint = baseURL.appendingPathComponent("/schedules/\(scheduleId)")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "PATCH"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = [
            "daysOfWeek": daysOfWeek,
            "timesPerDay": timesPerDay,
            "timeSlots": timeSlots,
            "startDate": startDate,
        ]
        body["endDate"] = endDate ?? NSNull()
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyScheduleDTO.self, request: request)
    }

    func createInventoryAdjustment(
        medicationId: String,
        delta: Int,
        reason: String,
        note: String? = nil
    ) async throws -> InventoryDTO {
        let endpoint = baseURL.appendingPathComponent("/inventory/adjustments")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = [
            "medicationId": medicationId,
            "delta": delta,
            "reason": reason,
        ]
        if let note { body["note"] = note }
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(InventoryDTO.self, request: request)
    }

    func createLinkCode(patientId: String, ttlMinutes: Int? = nil) async throws -> LinkCodeDTO {
        let endpoint = baseURL.appendingPathComponent("/link-codes")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        attachAuth(to: &request)
        var body: [String: Any] = ["patientId": patientId]
        if let ttlMinutes { body["ttlMinutes"] = ttlMinutes }
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(LinkCodeDTO.self, request: request)
    }

    func getAdherence(
        patientId: String,
        from: String?,
        to: String?,
        cursor: String?,
        limit: Int?
    ) async throws -> FamilyPaginatedAdherenceDTO {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/adherence")
        var components = URLComponents(url: endpoint, resolvingAgainstBaseURL: false)
        var items: [URLQueryItem] = []
        if let from { items.append(URLQueryItem(name: "from", value: from)) }
        if let to { items.append(URLQueryItem(name: "to", value: to)) }
        if let cursor { items.append(URLQueryItem(name: "cursor", value: cursor)) }
        if let limit { items.append(URLQueryItem(name: "limit", value: String(limit))) }
        components?.queryItems = items
        guard let url = components?.url else { throw FamilyAPIError.invalidBaseURL }

        var request = URLRequest(url: url)
        attachAuth(to: &request)
        return try await decode(FamilyPaginatedAdherenceDTO.self, request: request)
    }

    private func attachAuth(to request: inout URLRequest) {
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
    }

    private static func normalizeBaseURL(_ url: URL) -> URL {
        guard url.path.isEmpty || url.path == "/" else {
            return url
        }
        return url.appendingPathComponent("api")
    }

    private static func apiBaseURLString() -> String {
        Bundle.main.object(forInfoDictionaryKey: "API_BASE_URL") as? String ?? ""
    }

    private func decode<T: Decodable>(_ type: T.Type, request: URLRequest) async throws -> T {
        let start = Date()
        let method = request.httpMethod ?? "GET"
        let path = request.url?.path ?? "-"
        let query = request.url?.query.map { "?\($0)" } ?? ""
        AppLogger.api.info("Request \(method, privacy: .public) \(path, privacy: .public)\(query, privacy: .public)")
        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            let status = (response as? HTTPURLResponse)?.statusCode ?? -1
            let durationMs = Int(Date().timeIntervalSince(start) * 1000)
            AppLogger.api.info(
                "Response \(method, privacy: .public) \(path, privacy: .public) status=\(status, privacy: .public) ms=\(durationMs, privacy: .public)"
            )
            do {
                return try JSONDecoder().decode(T.self, from: data)
            } catch {
                AppLogger.api.error(
                    "Decode failed \(method, privacy: .public) \(path, privacy: .public): \(error.localizedDescription, privacy: .public)"
                )
                throw error
            }
        } catch {
            AppLogger.api.error(
                "Request failed \(method, privacy: .public) \(path, privacy: .public): \(error.localizedDescription, privacy: .public)"
            )
            throw error
        }
    }

    private func sendNoContent(request: URLRequest) async throws {
        let start = Date()
        let method = request.httpMethod ?? "GET"
        let path = request.url?.path ?? "-"
        let query = request.url?.query.map { "?\($0)" } ?? ""
        AppLogger.api.info("Request \(method, privacy: .public) \(path, privacy: .public)\(query, privacy: .public)")
        do {
            let (_, response) = try await URLSession.shared.data(for: request)
            let status = (response as? HTTPURLResponse)?.statusCode ?? -1
            let durationMs = Int(Date().timeIntervalSince(start) * 1000)
            AppLogger.api.info(
                "Response \(method, privacy: .public) \(path, privacy: .public) status=\(status, privacy: .public) ms=\(durationMs, privacy: .public)"
            )
        } catch {
            AppLogger.api.error(
                "Request failed \(method, privacy: .public) \(path, privacy: .public): \(error.localizedDescription, privacy: .public)"
            )
            throw error
        }
    }
}
