# Oyster Hale モバイルメニュー — Deployガイド

QRコードでスキャンしてもらうスマホ用インタラクティブメニューです。
完全に静的なファイル（HTML / CSS / JS のみ、バックエンドなし）なので、
Railway・Netlify・Vercel など、どこでも簡単にホストできます。

## ファイル構成

```
oyster-hale-mobile-menu/
├── index.html      ← メイン（構造・CSS）
├── i18n.js         ← 多言語対応の基盤（英語・日本語・韓国語・簡体字の文言、L/t関数）
├── data.js         ← メニュー内容（品名・価格・説明、4言語分）※編集はここがメイン
├── app.js          ← 動作ロジック（描画・アニメーション・Picks機能・言語切替）
└── package.json    ← Railwayが起動コマンドを認識するための設定
```

## 方法A：Railway（おすすめ・既存ワークフローと同じ）

Tanto Inventoryやダッシュボードと同じ「git push → 自動デプロイ」の流れです。

1. **GitHubに新しいリポジトリを作る**
   ```bash
   cd oyster-hale-mobile-menu
   git init
   git add .
   git commit -m "Initial commit: mobile menu"
   git remote add origin https://github.com/linxkevin/oyster-hale-mobile-menu.git
   git push -u origin main
   ```

2. **Railwayで新規プロジェクト作成**
   - Railwayダッシュボード → New Project → Deploy from GitHub repo
   - 上記リポジトリを選択
   - Railwayが自動で `package.json` を検知し、`npm install` → `npm start` を実行します
   - 環境変数の設定は不要（`PORT` はRailwayが自動で渡します）

3. **公開URLを確認**
   - Deployments タブで生成された `https://xxxx.up.railway.app` のURLを確認
   - 必要であれば Settings → Domains から独自ドメイン（例：`menu.oysterhalebycrush.com`）を割り当て可能

4. **QRコードを発行**
   - 上記URLをQRコード生成サービス（例：[qr-code-generator.com](https://www.qr-code-generator.com/) や Google「QRコード作成」）に入力して印刷
   - 私の方でQRコード画像を生成することもできるので、必要であれば声をかけてください

## 方法B：Netlify / Vercel（もっと手軽にすぐ試したい場合）

完全な静的サイトなので、こちらはサーバー起動コマンドも不要で最速です。

- **Netlify**: [app.netlify.com/drop](https://app.netlify.com/drop) に `index.html` `data.js` `app.js` の3ファイルが入ったフォルダをドラッグ&ドロップするだけで即時に公開URLが発行されます（`package.json` は不要）
- **Vercel**: GitHubリポジトリを接続するだけで自動デプロイ（Framework Preset は "Other" のままでOK）

## 今後の更新方法

価格変更・品目追加などは **`data.js` を編集するだけ** です。
配列の中に1品追加するだけで自動的にメニュー・ピル・Picks機能すべてに反映されます。

```bash
# 編集後
git add data.js
git commit -m "Update prices"
git push
# → Railwayが自動で再デプロイ
```

## 動作確認のポイント

- 初回アクセス時は必ずストーリー画面（接客トーク）が表示されます（リロードごとに毎回表示）
- 牡蠣の生食注意書きなど、紙メニューの法的表記はそのまま引き継いでいます
- `data.js` 内の `SPLASH_RECS` でおすすめ3品、`STORY_SLIDES` でストーリーのセリフを変更できます
