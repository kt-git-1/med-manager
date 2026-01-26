# Data Model: 処方薬管理MVP

前提: **DBはNext.js APIのみがアクセス**し、iOSは**API経由のみ**。iOSは**SwiftDataでオフラインキュー（未送信の服用反応）**を保持するが、永続データの権威（source of truth）はサーバ側。

## テーブル一覧と目的

- **profiles**: Supabase Authユーザー（家族）の基本情報
- **caregivers**: 家族アプリの管理者情報
- **patients**: 本人（服薬対象者）
- **link_codes**: 連携コード（期限・使用済み・再発行）
- **patient_sessions**: 本人セッショントークン（発行・失効・ローテーション）
- **medications**: 薬の基本情報（1回量など）
- **schedules**: 服用スケジュール定義
- **dose_instances**: 当日予定（scheduleから生成された予定）
- **adherence_logs**: 服用実績（本人反応ログ）
- **inventory**: 在庫管理（現在残数）
- **inventory_adjustments**: 在庫補正履歴

## テーブル詳細（カラム/型/制約/FK）

### profiles
- **id** uuid pk, default auth.uid()
- **role** text not null check (role in ('family'))
- **created_at** timestamptz not null default now()

### caregivers
- **id** uuid pk default gen_random_uuid()
- **profile_id** uuid not null fk → profiles.id unique
- **display_name** text not null
- **created_at** timestamptz not null default now()

### patients
- **id** uuid pk default gen_random_uuid()
- **caregiver_id** uuid not null fk → caregivers.id
- **display_name** text not null
- **timezone** text not null default 'Asia/Tokyo'
- **created_at** timestamptz not null default now()

### link_codes
- **id** uuid pk default gen_random_uuid()
- **caregiver_id** uuid not null fk → caregivers.id
- **patient_id** uuid fk → patients.id null
- **code** char(6) not null
- **expires_at** timestamptz not null
- **used_at** timestamptz null
- **revoked_at** timestamptz null
- **created_at** timestamptz not null default now()
- **Constraints**:
  - `code` は **6桁数字**（API側でバリデーション）
  - `expires_at < now()` で無効
  - `used_at` または `revoked_at` が入ったら再利用不可

### patient_sessions
- **id** uuid pk default gen_random_uuid()
- **patient_id** uuid not null fk → patients.id
- **token_hash** text not null
- **issued_at** timestamptz not null default now()
- **expires_at** timestamptz not null
- **rotated_from_id** uuid fk → patient_sessions.id null
- **revoked_at** timestamptz null
- **last_seen_at** timestamptz null
- **Constraints**:
  - `expires_at` は `issued_at` より後
  - `revoked_at` が入ったら無効（APIで必ずチェック）

### medications
- **id** uuid pk default gen_random_uuid()
- **patient_id** uuid not null fk → patients.id
- **name** text not null
- **dosage** text not null
- **dose_count_per_intake** int not null default 1 check (dose_count_per_intake > 0)  <!-- ★追加：1回量（錠数） -->
- **notes** text null
- **start_date** date not null
- **end_date** date null
- **is_active** boolean not null default true
- **created_at** timestamptz not null default now()
- **Note**:
  - 残り日数は概算で `inventory.remaining_count / (1日消費量)`。1日消費量はスケジュール（time_slotsの数）× `dose_count_per_intake`（MVP）で算出。

### schedules
- **id** uuid pk default gen_random_uuid()
- **medication_id** uuid not null fk → medications.id
- **times_per_day** int not null check (times_per_day > 0)
- **time_slots** time[] not null
- **start_date** date not null
- **end_date** date null
- **is_active** boolean not null default true
- **created_at** timestamptz not null default now()
- **Constraints**:
  - `time_slots` の要素数は `times_per_day` と一致（MVPではAPI側で担保）

### dose_instances
- **id** uuid pk default gen_random_uuid()
- **patient_id** uuid not null fk → patients.id
- **schedule_id** uuid not null fk → schedules.id
- **medication_id** uuid not null fk → medications.id
- **scheduled_for** timestamptz not null
- **status** text not null check (status in ('pending','taken','missed','skipped'))
- **created_at** timestamptz not null default now()
- **Constraints**:
  - (patient_id, schedule_id, scheduled_for) で一意

### adherence_logs
- **id** uuid pk default gen_random_uuid()
- **dose_instance_id** uuid not null fk → dose_instances.id
- **patient_id** uuid not null fk → patients.id
- **action** text not null check (action in ('taken','skipped'))  <!-- ★追加：反応種別 -->
- **taken_at** timestamptz not null
- **source** text not null check (source in ('patient','family','system'))
- **client_uuid** uuid not null
- **created_at** timestamptz not null default now()
- **Constraints**:
  - `client_uuid` で冪等性を確保（重複排除）
  - `dose_instance_id` に対する複数反応が来た場合の採用ルールは **API契約（contracts）** で定義（MVPは「最後の反応を採用」推奨）

### inventory
- **id** uuid pk default gen_random_uuid()
- **medication_id** uuid not null fk → medications.id unique
- **remaining_count** int not null check (remaining_count >= 0)
- **warning_threshold_days** int not null default 3
- **last_adjusted_at** timestamptz not null default now()

### inventory_adjustments
- **id** uuid pk default gen_random_uuid()
- **inventory_id** uuid not null fk → inventory.id
- **delta** int not null
- **reason** text not null check (reason in ('missed','extra','restock','manual'))
- **note** text null
- **created_at** timestamptz not null default now()

## インデックス設計（検索要件ベース）

- profiles: (id)
- caregivers: (profile_id) unique
- patients: (caregiver_id)
- link_codes:
  - (code) unique where used_at is null and revoked_at is null
  - (expires_at)
  - (caregiver_id, created_at desc)
- patient_sessions:
  - (patient_id, expires_at desc)
  - (token_hash) unique
  - (revoked_at)
- medications:
  - (patient_id, is_active)
  - (patient_id, name)
- schedules:
  - (medication_id, is_active)
  - (medication_id, start_date)
- dose_instances:
  - (patient_id, scheduled_for)
  - (schedule_id, scheduled_for)
  - unique (patient_id, schedule_id, scheduled_for)
- adherence_logs:
  - (patient_id, taken_at desc)
  - (dose_instance_id)
  - unique (patient_id, client_uuid)
- inventory:
  - (medication_id) unique
- inventory_adjustments:
  - (inventory_id, created_at desc)

## 連携コード仕様

- 6桁数字、10分有効、使い捨て
- `used_at` または `revoked_at` がセットされたら無効
- 再発行は新規コード作成（旧コードは失効）

## 本人セッショントークン

- 連携コード成功後に `patient_sessions` へ記録
- `token_hash` で照合、短期有効期限 + ローテーション
- 解除/再連携時は `revoked_at` で失効
- iOS側は **生トークンをKeychain** に保存し、APIに送る（DBには保存しない）

## スケジュール → 当日予定生成方針

- `schedules` の `time_slots` を当日 0:00（患者のtimezone）で展開し `dose_instances` を生成
- 生成タイミングは:
  - 家族のスケジュール更新時（当日分を再生成 / 不足分補完）
  - 本人アプリの当日初回同期時（不足分を補完）
- 生成済みは (patient_id, schedule_id, scheduled_for) の unique 制約で重複防止

## 実績と在庫の扱い

- 本人反応は `adherence_logs` に記録（`client_uuid` で冪等）
- `dose_instances.status` は反応に応じて更新（MVP: taken / skipped を優先）
- 在庫は `inventory` から減算し、調整は `inventory_adjustments` に履歴を残す
  - MVPの減算単位: `medications.dose_count_per_intake` ×（反応が taken のとき）
  - missed/skipped の扱い（減算しない等）は contracts で明確化

## (optional) Minimal RLS 方針

API経由のみが前提だが、事故防止として最小限のRLSを設定する場合:
- caregivers: 自身のprofile_idのみ
- patients: caregiver_idが自分のcaregivers.idに一致
- medications/schedules/dose_instances/adherence_logs/inventory: patients経由で限定
- link_codes: caregiver_id一致のみ
