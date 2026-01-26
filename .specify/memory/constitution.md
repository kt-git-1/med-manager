<!--
Sync Impact Report:
- Version change: N/A (template) → 0.1.0
- Modified principles: N/A (template) → 仕様が唯一の正, セキュリティ/プライバシー最優先, 変更容易性（疎結合）,
  重要ロジックの自動テスト必須, 可観測性
- Added sections: 追加制約, 開発ワークフロー
- Removed sections: N/A (template)
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
  - ⚠ Pending: .specify/templates/commands/*.md (no files found)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): 初回制定日が未確定
-->
# Med Manager Constitution

## Core Principles

### 仕様が唯一の正
仕様（spec）とタスク（tasks）に明記されていない実装は行わない。
MVPに集中し、過剰実装・先回り実装・推測実装を禁止する。
仕様に追加が必要な場合は先にspec/tasksを更新してから着手する。

### セキュリティ/プライバシー最優先
個人の服薬データは最小権限・最小収集を前提とし、暗号化/秘匿を必須とする。
不要なデータ収集、過剰な権限、平文保存を禁止する。
脅威や取り扱い範囲が変わる場合は必ずspecで明確化する。

### 変更容易性（疎結合）
iOS/サーバ/DBは疎結合とし、境界はAPI契約で明確にする。
契約変更は互換性と移行方針を必ず明示する。
特定レイヤに実装を埋め込み他レイヤに依存させることを避ける。

### 重要ロジックの自動テスト必須
服薬イベント生成、在庫計算、リマインド判定は自動テストを必須とする。
仕様上重要な判断ロジックはテストで再現できる状態にする。
テスト不在の実装は受け入れない。

### 可観測性
エラーは再現可能なログと手順を必ず残す。
障害対応に必要なコンテキストを欠いたログを禁止する。
再現性が担保できない不具合は未完了として扱う。

## 追加制約

- MVPを最優先とし、必要最小の機能に絞る。
- 仕様にない改善・拡張は実装しない。
- セキュリティ/プライバシーに関する要件はspec内で必ず明文化する。

## 開発ワークフロー

- すべての変更はspec/tasksの更新を起点とする。
- 境界（iOS/サーバ/DB）のAPI契約は文書化し、変更時は互換性と移行を明記する。
- 重要ロジックのテストを通過するまで実装完了とみなさない。
- エラーの再現手順とログの整備を品質ゲートとする。

## Governance

- 本憲章は他の運用・ガイドラインに優先する。
- 変更はspec/tasksへの影響評価、互換性、移行計画を含めて文書化する。
- レビューでは各原則への適合を必ず確認する。
- バージョンはSemantic Versioningに従う。
  - MAJOR: 原則の削除/再定義など後方互換性のない改定
  - MINOR: 新規原則/章の追加、運用の実質的拡張
  - PATCH: 明確化や表現の改善

**Version**: 0.1.0 | **Ratified**: TODO(RATIFICATION_DATE): 初回制定日が未確定 | **Last Amended**: 2026-01-25
