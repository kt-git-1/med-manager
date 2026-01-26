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
        self.baseURL = url
        self.token = token
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

    func listSchedules(patientId: String) async throws -> [FamilyScheduleDTO] {
        let endpoint = baseURL.appendingPathComponent("/patients/\(patientId)/schedules")
        var request = URLRequest(url: endpoint)
        attachAuth(to: &request)
        return try await decode([FamilyScheduleDTO].self, request: request)
    }

    func createSchedule(
        patientId: String,
        medicationId: String,
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
            "timesPerDay": timesPerDay,
            "timeSlots": timeSlots,
            "startDate": startDate,
        ]
        if let endDate { body["endDate"] = endDate }
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(FamilyScheduleDTO.self, request: request)
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

    private func attachAuth(to request: inout URLRequest) {
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
    }

    private func decode<T: Decodable>(_ type: T.Type, request: URLRequest) async throws -> T {
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(T.self, from: data)
    }
}
