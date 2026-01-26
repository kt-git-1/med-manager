# Research: 処方薬管理MVP

## Decisions

### 家族認証方式
- **Decision**: 家族はログイン必須（Supabase Auth）
- **Rationale**: 服薬データは高機密。端末紛失時の不正閲覧を防ぐため。
- **Alternatives considered**: 端末のみ・PIN認証（セキュリティ不十分）

### 本人セッション方式
- **Decision**: 連携コードで紐付け後、短期トークン（更新あり）を発行
- **Rationale**: 高齢者の操作負担を最小化しつつ、失効/再連携が可能。
- **Alternatives considered**: 長期トークン（失効困難）、本人ログイン（操作負担）

### 連携コード仕様
- **Decision**: 6桁数字、10分有効、使い捨て
- **Rationale**: 入力負荷と安全性のバランスが良い。
- **Alternatives considered**: 8桁英数（入力負荷高）、長時間有効（リスク増）

### 通知方式
- **Decision**: MVPはローカル通知のみ
- **Rationale**: 無料枠運用で運用コストを抑えつつ、主要体験を満たせる。
- **Alternatives considered**: プッシュ通知（運用コスト/実装増）

### オフライン同期
- **Decision**: 服用反応はローカルキュー → 復帰時に一括送信、UUIDで重複排除
- **Rationale**: オフラインでも反応可能で、同期時の二重登録を防げる。
- **Alternatives considered**: オンライン必須（UX低下）

## Free Tier Notes (Vercel/Supabase)

- **Decision**: 低頻度同期・差分同期を前提に設計
- **Rationale**: 無料枠のAPIリクエスト・ストレージ制限に抵触しやすいため。
- **Alternatives considered**: リアルタイム同期（無料枠超過リスク）

