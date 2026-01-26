# Tasks: 処方薬管理MVP

**Input**: Design documents from `/specs/001-build-medication-mvp/`  
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Critical logic tests are REQUIRED (連携/認可/冪等/予定生成/在庫計算/オフラインキュー).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1/US2/US3)
- Include exact file paths in descriptions
- Each task includes Acceptance Criteria (AC)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create monorepo workspace layout (`pnpm-workspace.yaml`, `ios-family/`, `ios-patient/`, `web-api/`, `packages/`) - AC: workspace folders exist and pnpm recognizes all packages
- [ ] T002 Initialize `web-api/package.json` and `tsconfig.json` with Next.js app router - AC: `pnpm --filter web-api dev` starts without errors
- [ ] T003 [P] Initialize `packages/shared-types/` with build config (`tsconfig.json`, `package.json`) - AC: `pnpm --filter shared-types build` succeeds
- [ ] T004 [P] Initialize `packages/validation/` with Zod and build config - AC: `pnpm --filter validation build` succeeds
- [ ] T005 [P] Add iOS app targets and shared config (`ios-family/`, `ios-patient/`) - AC: both targets build in Xcode 15+

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Define Prisma schema in `web-api/prisma/schema.prisma` and create initial migration - AC: schema matches `data-model.md` tables/columns/constraints; `pnpm --filter web-api prisma migrate dev --name init` succeeds
- [ ] T007 Implement Prisma client in `web-api/lib/prisma.ts` and basic repository helpers - AC: can connect and run a simple query via Prisma
- [ ] T008 Implement API auth middleware in `web-api/lib/auth.ts` (family JWT + patient token) - AC: auth headers validated per `contracts/api.yaml`
- [ ] T009 Define error response helpers in `web-api/lib/errors.ts` - AC: all errors return `{code,message,details}` shape
- [ ] T010 [P] Add shared API schemas in `packages/validation/src/` (Zod) for requests/responses - AC: schemas cover all endpoints in `contracts/api.yaml`
- [ ] T011 [P] Add shared types in `packages/shared-types/src/` for entities - AC: types compile and align with `data-model.md`
- [ ] T012 Configure API route scaffolding under `web-api/app/api/` - AC: base route structure exists for all endpoints
- [ ] T012b Add Prisma scripts in `web-api/package.json` (db:generate, db:migrate:dev, db:migrate:deploy) - AC: scripts run successfully
- [ ] T012c Ensure all Prisma route handlers set runtime = "nodejs" - AC: no Edge runtime usage
- [ ] T013 Setup test harness in `web-api/tests/` (Vitest config) - AC: `pnpm --filter web-api test` runs

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - 連携と服用反応 (Priority: P1) 🎯 MVP

**Goal**: 連携コード→本人紐付け→今日予定取得→服用反応→家族反映を最短で動かす

**Independent Test**: 家族が薬/スケジュールを登録して連携コード発行、本人が紐付け後に今日予定取得し服用反応、家族が履歴で確認できる

### Tests for User Story 1 ⚠️

- [ ] T014 [P] [US1] API auth/認可テスト in `web-api/tests/auth.test.ts` - AC: family/patientの権限境界が通る/拒否される
- [ ] T015 [P] [US1] 連携コードの検証/期限切れテスト in `web-api/tests/link-codes.test.ts` - AC: 期限切れ/使用済みが拒否される
- [ ] T016 [P] [US1] 予定生成テスト in `web-api/tests/dose-instances.test.ts` - AC: schedule→dose_instancesがtimezone/当日で生成される
- [ ] T017 [P] [US1] 冪等性テスト in `web-api/tests/adherence-idempotency.test.ts` - AC: 同一clientUuidで同一レスポンス
- [ ] T018 [P] [US1] iOSオフラインキューテスト in `ios-patient/Tests/OfflineQueueTests.swift` - AC: 未送信が永続化/再送/重複排除

### Implementation for User Story 1

- [ ] T019 [US1] Implement link code create in `web-api/app/api/link-codes/route.ts` - AC: patientId必須/6桁/10分/使い捨てが守られる
- [ ] T020 [US1] Implement verify endpoint in `web-api/app/api/link-codes/verify/route.ts` - AC: patient session token発行と失効が動作
- [ ] T021 [US1] Implement patient list endpoint in `web-api/app/api/patients/route.ts` - AC: familyが患者一覧を取得できる
- [ ] T022 [US1] Implement patient create endpoint in `web-api/app/api/patients/route.ts` - AC: familyが患者作成できる
- [ ] T023 [US1] Implement patient medications list/create in `web-api/app/api/patients/[patientId]/medications/route.ts` - AC: 患者単位で作成/取得できる
- [ ] T024 [US1] Implement medication patch/delete in `web-api/app/api/medications/[id]/route.ts` - AC: 部分更新と削除ができる
- [ ] T025 [US1] Implement patient schedules list/create in `web-api/app/api/patients/[patientId]/schedules/route.ts` - AC: times_per_day と time_slots の要素数一致をAPI側で検証
- [ ] T026 [US1] Implement dose instance generation in `web-api/lib/doseInstances.ts` - AC: 当日分を補完生成し重複なし
- [ ] T027 [US1] Implement patient dose instances endpoint in `web-api/app/api/me/dose-instances/route.ts` - AC: 当日の予定が取得できる
- [ ] T028 [US1] Implement adherence endpoint in `web-api/app/api/me/adherence/route.ts` - AC: clientUuid冪等 + last write wins
- [ ] T029 [US1] Implement inventory decrement logic in `web-api/lib/inventory.ts` - AC: action=takenのみdoseCountPerIntake分減算
- [ ] T030 [US1] Implement family adherence endpoint in `web-api/app/api/patients/[patientId]/adherence/route.ts` - AC: 家族が履歴を取得
- [ ] T031 [US1] Implement family inventory endpoint (raw list) in `web-api/app/api/patients/[patientId]/inventory/route.ts` - AC: 家族が素の在庫一覧を取得できる
- [ ] T032 [US1] Add patient app API client in `ios-patient/Services/APIClient.swift` - AC: Authorization: Patient <token> でAPI呼び出しできる
- [ ] T033 [US1] Implement patient session storage in `ios-patient/Services/KeychainStore.swift` - AC: トークンが安全に保存/更新/削除
- [ ] T034 [US1] Implement offline queue in `ios-patient/Services/OfflineQueue.swift` - AC: pendingがSwiftDataで永続化
- [ ] T035 [US1] Implement patient flow screens in `ios-patient/Features/` - AC: 連携→今日→反応が遷移できる
- [ ] T036 [US1] Implement family flow screens in `ios-family/Features/` - AC: 患者/薬/スケジュール/連携コードが操作できる
- [ ] T037 [US1] Schedule local notifications in `ios-patient/Services/NotificationScheduler.swift` - AC: 当日分の通知が作成される

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - 服用履歴の把握 (Priority: P2)

**Goal**: 家族/本人の履歴閲覧（一覧/カレンダー）を提供する

**Independent Test**: 服用記録が存在し、家族/本人が一覧とカレンダーで閲覧できる

### Tests for User Story 2 ⚠️

- [ ] T038 [P] [US2] 履歴ページングテスト in `web-api/tests/adherence-pagination.test.ts` - AC: cursor/limitでページングできる

### Implementation for User Story 2

- [ ] T039 [US2] Add adherence pagination query in `web-api/lib/adherence.ts` - AC: cursor/limit/from/toが適用される
- [ ] T040 [US2] Implement patient history UI in `ios-patient/Features/History/` - AC: 一覧/カレンダーが表示される
- [ ] T041 [US2] Implement family history UI in `ios-family/Features/History/` - AC: 一覧/カレンダーが表示される

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - 在庫と残薬警告 (Priority: P3)

**Goal**: 在庫管理と残り日数/警告を表示する

**Independent Test**: 在庫が減算され、残り日数と警告が表示される

### Tests for User Story 3 ⚠️

- [ ] T042 [P] [US3] 在庫計算テスト in `web-api/tests/inventory.test.ts` - AC: takenでのみ減算される

### Implementation for User Story 3

- [ ] T043 [US3] Add remaining-days + warning calc in `web-api/lib/inventory.ts` and extend inventory response in `web-api/app/api/patients/[patientId]/inventory/route.ts` - AC: 残り日数/警告が返る
- [ ] T044 [US3] Implement inventory adjustment endpoint in `web-api/app/api/inventory/adjustments/route.ts` - AC: 調整履歴が記録される
- [ ] T045 [US3] Implement inventory UI in `ios-family/Features/Inventory/` - AC: 残り日数と警告が表示される

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T046 [P] Add minimal RLS smoke tests in `web-api/tests/rls-smoke.test.ts` - AC: 基本的な誤権限アクセスが拒否される
- [ ] T047 Add logging for sync/idempotency errors in `web-api/lib/logging.ts` - AC: 主要エラーがcode付きで記録される
- [ ] T048 [P] Validate quickstart flow in `specs/001-build-medication-mvp/quickstart.md` - AC: E2E手順が実行可能

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after User Story 1 for shared APIs, but should be independently testable
- **User Story 3 (P3)**: Can start after User Story 1 for inventory decrement, but should be independently testable

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Models/schema before services
- Services before endpoints
- Core implementation before UI integration
- Story complete before moving to next priority

### Parallel Opportunities

- T003, T004, T005 can run in parallel
- T014–T018 can run in parallel
- UI tasks (T035, T036) can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch tests for User Story 1 together:
Task: "API auth/認可テスト in web-api/tests/auth.test.ts"
Task: "連携コードの検証/期限切れテスト in web-api/tests/link-codes.test.ts"
Task: "予定生成テスト in web-api/tests/dose-instances.test.ts"
Task: "冪等性テスト in web-api/tests/adherence-idempotency.test.ts"
Task: "iOSオフラインキューテスト in ios-patient/Tests/OfflineQueueTests.swift"

# Launch UI work in parallel:
Task: "Implement patient flow screens in ios-patient/Features/"
Task: "Implement family flow screens in ios-family/Features/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently
