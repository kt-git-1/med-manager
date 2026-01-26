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
        if let container {
            self.container = container
            self.context = ModelContext(container)
            return
        }
        do {
            let created = try ModelContainer(for: PendingAdherence.self)
            self.container = created
            self.context = ModelContext(created)
        } catch {
            fatalError("Failed to create ModelContainer: \(error)")
        }
    }

    func enqueue(_ item: PendingAdherence) {
        let items = (try? context.fetch(FetchDescriptor<PendingAdherence>())) ?? []
        if items.contains(where: { $0.clientUuid == item.clientUuid }) {
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
        let items = (try? context.fetch(FetchDescriptor<PendingAdherence>())) ?? []
        for item in items where item.clientUuid == clientUuid {
            context.delete(item)
        }
        try? context.save()
    }

    func pendingCount() -> Int {
        (try? context.fetchCount(FetchDescriptor<PendingAdherence>())) ?? 0
    }

    func contains(clientUuid: UUID) -> Bool {
        let items = (try? context.fetch(FetchDescriptor<PendingAdherence>())) ?? []
        return items.contains(where: { $0.clientUuid == clientUuid })
    }
}
