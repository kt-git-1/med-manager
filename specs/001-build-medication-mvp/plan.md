# Implementation Plan: 処方薬管理MVP

**Branch**: `001-build-medication-mvp` | **Date**: 2026-01-25 | **Spec**: `/Users/kaito/workspace/med-manager/specs/001-build-medication-mvp/spec.md`  
**Input**: Feature specification from `/specs/001-build-medication-mvp/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

家族iOSアプリで薬・スケジュール・在庫と連携コードを管理し、本人iOSアプリは通知に反応して服用済みを記録するMVPを構築する。Next.js API（Vercel）とSupabase Postgresを基盤に、最小権限とオフライン同期を前提とした設計とする。

## Technical Context

**Language/Version**: Swift 5.9 (iOS), TypeScript (Next.js)  
**Primary Dependencies**: SwiftUI, UserNotifications, SwiftData, URLSession (API client), Next.js App Router  
**Data Access**: iOS apps access data only via Next.js API; direct Supabase access is not used in clients.  
**Storage**: Supabase Postgres (server), SwiftData (client offline queue)  
**Testing**: XCTest (iOS), Vitest (API), API authorization tests, (optional) minimal RLS smoke tests  
**Target Platform**: iOS 17+, Vercel Serverless  
**Project Type**: Mobile + API (monorepo)  
**Performance Goals**: 服用反応は即時記録、家族側反映は5分以内  
**Constraints**: 無料枠運用、オフライン反応の同期必須  
**Scale/Scope**: 家族1アカウント + 本人1名、低トラフィックMVP

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- 仕様（spec）とタスク（tasks）外の実装がない（MVPに集中）
- セキュリティ/プライバシー要件が最小権限・最小収集・暗号化/秘匿を満たす
- iOS/サーバ/DBの境界がAPI契約で明確化され、疎結合が維持される
- 重要ロジック（服薬イベント生成・在庫計算・リマインド判定）の自動テストが計画済み
- エラーの再現可能なログ/手順が計画に含まれる

**Gate Status**: PASS (MVP範囲内・最小権限・テスト計画あり)

## Project Structure

### Documentation (this feature)

```text
specs/001-build-medication-mvp/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
ios-family/
├── App/
├── Features/
├── Models/
├── Services/
└── Tests/

ios-patient/
├── App/
├── Features/
├── Models/
├── Services/
└── Tests/

web-api/
├── app/
│   └── api/
├── lib/
├── db/
└── tests/

packages/
├── shared-types/
└── validation/
```

**Structure Decision**: モノレポでiOS 2アプリ + API + 共有パッケージを分離

## Use Cases & Sequence

**主要ユースケース（MVP）**:
1. 家族が連携コード発行
2. 本人がコード入力で紐付け
3. 家族がスケジュール変更 → 本人側に反映
4. 本人が通知を受けて服用反応
5. 家族が履歴閲覧

**シーケンス概要**:
1) 家族: 連携コード発行 → APIが`link_codes`作成  
2) 本人: コード送信 → APIが検証 → `patient`紐付け → 本人セッショントークン発行  
3) 本人: 予定取得 → ローカル通知スケジュール（当日分）  
4) 本人: 服用反応 → `adherence_logs`作成（オフラインはSwiftDataのローカルキュー）  
5) 家族: 履歴閲覧 → `dose_instances/adherence_logs`参照

## Auth & Authorization

-	家族: Supabase Auth（ログイン必須）。iOSはSupabase JWTを保持し、Next.js APIに送付する。
-	本人: 連携コード成功後、Next.js APIが本人セッショントークン（短期 + ローテーション/更新あり）を発行する。
    -	本人アプリはログインUIを持たず、トークンのみを安全に保持（Keychain）する。
    -	解除/再連携時はトークン失効（サーバ側で無効化）する。
-	権限（一次防御）: Next.js APIが role（caregiver/patient）と紐付け関係を検証し、許可された操作のみを実行する。
-	DB側（二次防御）: RLSは最小構成で入れる（任意）。Service Roleを使う場合でも、事故防止として smoke test を用意する。


## Notification & Sync

-	MVP推奨: ローカル通知のみ
-	予定変更時: 本人アプリが次回起動/手動同期で当日分の通知を再生成
-	オフライン同期:
    -	服用反応はSwiftDataにPendingAdherenceとしてキューし、復帰時に一括送信
    -	adherence_logsはクライアント生成UUIDで重複排除（idempotency）
-	同期の基本方針:
    -	本人は「今日の予定（dose_instances）」を取得して表示し、反応を送るだけ
    -	家族は管理操作（薬/スケジュール/在庫/連携コード）をAPI経由で行う

## iOS Screens (Minimal)

**家族アプリ**:
- ログイン
- 患者一覧/詳細
- 連携コード発行
- 薬/スケジュール/在庫管理
- 服用履歴（一覧/カレンダー）

**本人アプリ**:
- 連携コード入力
- 今日の服薬一覧
- 服用済み反応
- 履歴（一覧/カレンダー）

## Test Strategy

-	連携コード生成/検証のユニットテスト（API）
-	API認可テスト（家族/本人の操作境界、患者紐付けの検証）
-	服薬イベント生成（schedules → dose_instances）のテスト（API）
-	在庫計算と警告しきい値のテスト（API）
-	オフラインキューのテスト（iOS: PendingAdherenceの永続化・送信・重複排除）
-	(optional) 最小RLS smoke test（重大な取りこぼし検出）


## Deploy & Ops

- Vercel: Next.js APIをデプロイ
- Supabase: Postgres + Auth + (optional) minimal RLS
- 無料枠注意点:
  - 不要なポーリングを避け、差分同期とバッチ送信にする
  - ログ/履歴の保管期間を最小化
  - 画像など大容量データを持たない

## Constitution Check (Post-Design)

- 仕様外実装なし: PASS
- セキュリティ/プライバシー: PASS
- API契約による疎結合: PASS
- 重要ロジックのテスト計画: PASS
- 可観測性: PASS

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
