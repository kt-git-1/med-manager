import Foundation

enum APIClientError: Error {
    case invalidBaseURL
    case missingToken
}

struct PatientSessionDTO: Decodable {
    let accessToken: String
    let expiresIn: Int
}

struct DoseInstanceDTO: Decodable {
    let id: String
    let medicationId: String
    let scheduleId: String
    let scheduledFor: String
    let status: String
    let medicationName: String?
}

struct AdherenceLogDTO: Decodable {
    let id: String
    let doseInstanceId: String
    let patientId: String
    let action: String
    let takenAt: String
    let source: String
    let clientUuid: String
    let medicationName: String?
}

struct PaginatedAdherenceDTO: Decodable {
    let items: [AdherenceLogDTO]
    let nextCursor: String?
}

final class APIClient {
    private let baseURL: URL
    private let keychain: KeychainStore

    init(baseURLString: String, keychain: KeychainStore) throws {
        guard let url = URL(string: baseURLString) else {
            throw APIClientError.invalidBaseURL
        }
        self.baseURL = Self.normalizeBaseURL(url)
        self.keychain = keychain
    }

    func verifyLinkCode(_ code: String) async throws -> PatientSessionDTO {
        let endpoint = baseURL.appendingPathComponent("/link-codes/verify")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        let body: [String: String] = ["code": code]
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(PatientSessionDTO.self, request: request)
    }

    func refreshPatientSession() async throws -> PatientSessionDTO {
        let endpoint = baseURL.appendingPathComponent("/me/session/refresh")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        try attachPatientAuth(to: &request)
        return try await decode(PatientSessionDTO.self, request: request)
    }

    func getTodayDoseInstances(date: String) async throws -> [DoseInstanceDTO] {
        let endpoint = baseURL.appendingPathComponent("/me/dose-instances")
        var components = URLComponents(url: endpoint, resolvingAgainstBaseURL: false)
        components?.queryItems = [URLQueryItem(name: "date", value: date)]
        guard let url = components?.url else { throw APIClientError.invalidBaseURL }

        var request = URLRequest(url: url)
        try attachPatientAuth(to: &request)
        return try await decode([DoseInstanceDTO].self, request: request)
    }

    func getAdherence(from: String?, to: String?, cursor: String?, limit: Int?) async throws -> PaginatedAdherenceDTO {
        let endpoint = baseURL.appendingPathComponent("/me/adherence")
        var components = URLComponents(url: endpoint, resolvingAgainstBaseURL: false)
        var items: [URLQueryItem] = []
        if let from { items.append(URLQueryItem(name: "from", value: from)) }
        if let to { items.append(URLQueryItem(name: "to", value: to)) }
        if let cursor { items.append(URLQueryItem(name: "cursor", value: cursor)) }
        if let limit { items.append(URLQueryItem(name: "limit", value: String(limit))) }
        components?.queryItems = items
        guard let url = components?.url else { throw APIClientError.invalidBaseURL }

        var request = URLRequest(url: url)
        try attachPatientAuth(to: &request)
        return try await decode(PaginatedAdherenceDTO.self, request: request)
    }

    func createAdherence(doseInstanceId: String, action: String, takenAt: String, clientUuid: String) async throws -> AdherenceLogDTO {
        let endpoint = baseURL.appendingPathComponent("/me/adherence")
        var request = URLRequest(url: endpoint)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        try attachPatientAuth(to: &request)
        let body: [String: String] = [
            "doseInstanceId": doseInstanceId,
            "action": action,
            "takenAt": takenAt,
            "clientUuid": clientUuid,
        ]
        request.httpBody = try JSONSerialization.data(withJSONObject: body, options: [])
        return try await decode(AdherenceLogDTO.self, request: request)
    }

    private func attachPatientAuth(to request: inout URLRequest) throws {
        guard let token = try keychain.readToken() else {
            throw APIClientError.missingToken
        }
        request.setValue("Patient \(token)", forHTTPHeaderField: "Authorization")
    }

    private static func normalizeBaseURL(_ url: URL) -> URL {
        guard url.path.isEmpty || url.path == "/" else {
            return url
        }
        return url.appendingPathComponent("api")
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
}
