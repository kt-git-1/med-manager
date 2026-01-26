# Quickstart: 処方薬管理MVP

## Prerequisites

- Supabaseアカウント
- Vercelアカウント
- Node.js 20+
- pnpm
- Xcode 15+（iOS 17+）

## Environment Variables

### web-api

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL` (Supabase Postgres接続文字列)
- `PATIENT_TOKEN_SECRET` (本人セッショントークン用)
- `PATIENT_TOKEN_TTL_MINUTES` (例: `60`)

### ios-family / ios-patient

- `API_BASE_URL` (例: `http://localhost:3000`)
- `SUPABASE_URL` (familyのみ)
- `SUPABASE_ANON_KEY` (familyのみ)

## Supabase Setup

1. Supabaseで新規プロジェクト作成
2. Auth設定でメール/パスワードを有効化（家族用ログイン）
3. `DATABASE_URL` を取得して `web-api/.env.local` に設定
4. Prismaスキーマを確認 (`web-api/prisma/schema.prisma`)
5. マイグレーションを適用:
   - `pnpm --filter web-api db:migrate:dev --name init`
6. RLSを最小構成で適用する場合は以下を設定:
   - caregivers/patients/medications/schedules/dose_instances/adherence_logs/inventory
7. 以降の変更は `db:migrate:dev` / `db:migrate:deploy` を使用

## web-api Local Run

1. 依存関係のインストール:
   - `pnpm install`
2. 環境変数を設定:
   - `web-api/.env.local` を作成し `SUPABASE_URL` 等を設定
3. Prisma clientを生成:
   - `pnpm --filter web-api db:generate`
4. 起動:
   - `pnpm --filter web-api dev`
4. 確認:
   - `GET /health` など簡易ヘルスチェックを用意する

## Vercel Deployment

1. `web-api` をVercelにデプロイ
2. 環境変数をVercelに設定:
   - `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
   - `PATIENT_TOKEN_SECRET`, `PATIENT_TOKEN_TTL_MINUTES`
3. デプロイ後のURLを `API_BASE_URL` としてiOSに設定

## iOS Build & Run

### ios-family

1. `API_BASE_URL` を設定
2. Supabaseログインを実装（Auth JWTをAPIに送付）
3. Keychainにトークンを保存する場合はアクセス制御を適切に設定

### ios-patient

1. `API_BASE_URL` を設定
2. 連携コードで本人セッションを取得
3. セッショントークンはKeychainに保存（永続化の漏えい対策）

## Minimal E2E Flow

1. 家族アプリでログイン
2. 本人を作成し、連携コードを発行
3. 本人アプリでコード入力 → 紐付け完了
4. 本人アプリで今日の予定を取得
5. 本人が「服用済み」を送信
6. 家族アプリで履歴が反映されていることを確認
