import Foundation
import SwiftData

@Model
final class PendingAdherence {
    @Attribute(.unique) var clientUuid: UUID
    var payload: Data
    var createdAt: Date

    init(clientUuid: UUID, payload: Data, createdAt: Date = Date()) {
        self.clientUuid = clientUuid
        self.payload = payload
        self.createdAt = createdAt
    }
}

final class OfflineQueue {
    private let container: ModelContainer
    private let context: ModelContext

    init(container: ModelContainer? = nil) {
        let container = container ?? try! ModelContainer(for: PendingAdherence.self)
        self.container = container
        self.context = ModelContext(container)
    }

    func enqueue(_ item: PendingAdherence) {
        let fetch = FetchDescriptor<PendingAdherence>(
            predicate: #Predicate { $0.clientUuid == item.clientUuid }
        )
        if let existing = try? context.fetch(fetch), !existing.isEmpty {
            return
        }
        context.insert(item)
        try? context.save()
    }

    func dequeueAll() -> [PendingAdherence] {
        let items = (try? context.fetch(FetchDescriptor<PendingAdherence>())) ?? []
        for item in items {
            context.delete(item)
        }
        try? context.save()
        return items
    }

    func all() -> [PendingAdherence] {
        (try? context.fetch(FetchDescriptor<PendingAdherence>())) ?? []
    }

    func remove(clientUuid: UUID) {
        let fetch = FetchDescriptor<PendingAdherence>(
            predicate: #Predicate { $0.clientUuid == clientUuid }
        )
        if let items = try? context.fetch(fetch) {
            for item in items {
                context.delete(item)
            }
            try? context.save()
        }
    }

    func pendingCount() -> Int {
        (try? context.fetchCount(FetchDescriptor<PendingAdherence>())) ?? 0
    }

    func contains(clientUuid: UUID) -> Bool {
        let fetch = FetchDescriptor<PendingAdherence>(
            predicate: #Predicate { $0.clientUuid == clientUuid }
        )
        let items = try? context.fetch(fetch)
        return (items?.isEmpty == false)
    }
}
