# Lighthouse Reports

## 計測対象ページ

| ファイル名         | URL                                                         | 説明           |
| ------------------ | ----------------------------------------------------------- | -------------- |
| `home.json`        | `http://localhost:8000/`                                    | トップページ   |
| `work-detail.json` | `http://localhost:8000/works/{workId}`                      | 作品詳細       |
| `viewer.json`      | `http://localhost:8000/works/{workId}/episodes/{episodeId}` | 漫画ビューワー |
| `author.json`      | `http://localhost:8000/authors/{authorId}`                  | 著者詳細       |

## 計測方法

Chrome DevTools > Lighthouse > Mode: Navigation > Device: Mobile > Analyze

## 注意

- シークレットモードで計測（拡張機能の影響を排除）
- Mobile モードで計測（スコアリング基準）
