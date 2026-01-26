import XCTest
import SwiftData
@testable import MedPatient

final class OfflineQueueTests: XCTestCase {
    private func makeQueue() -> OfflineQueue {
        let config = ModelConfiguration(isStoredInMemoryOnly: true)
        let container = try! ModelContainer(for: PendingAdherence.self, configurations: config)
        return OfflineQueue(container: container)
    }

    func testQueuePersistsUntilDequeue() {
        let queue = makeQueue()
        let payload = Data("payload".utf8)
        let item = PendingAdherence(clientUuid: UUID(), payload: payload, createdAt: Date())

        queue.enqueue(item)
        XCTAssertEqual(queue.pendingCount(), 1)

        let drained = queue.dequeueAll()
        XCTAssertEqual(drained.count, 1)
        XCTAssertEqual(queue.pendingCount(), 0)
    }

    func testQueueDedupesByClientUuid() {
        let queue = makeQueue()
        let uuid = UUID()
        let item1 = PendingAdherence(clientUuid: uuid, payload: Data("a".utf8), createdAt: Date())
        let item2 = PendingAdherence(clientUuid: uuid, payload: Data("b".utf8), createdAt: Date())

        queue.enqueue(item1)
        queue.enqueue(item2)

        XCTAssertEqual(queue.pendingCount(), 1)
        XCTAssertTrue(queue.contains(clientUuid: uuid))
    }

    func testRemoveByClientUuid() {
        let queue = makeQueue()
        let uuid = UUID()
        let item = PendingAdherence(clientUuid: uuid, payload: Data("x".utf8), createdAt: Date())

        queue.enqueue(item)
        queue.remove(clientUuid: uuid)

        XCTAssertEqual(queue.pendingCount(), 0)
        XCTAssertFalse(queue.contains(clientUuid: uuid))
    }
}
