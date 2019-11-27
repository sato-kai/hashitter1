# Hashitter

##### [本番環境へのリンク](http://18.176.123.44/)

### 概要
---

ランニングのモチベーション向上アプリです。つぶやきが投稿でき、走った距離に応じてアバターが痩せます。

### 背景
---
- ダイエットや健康維持でランニングを始めましたが続けることが難しいと思っていました。
- 日々のランニング成果などをつぶやいたり、自分の走った距離でアバターをアレンジできたりすることでモチベーションを維持することを目的に作成しました。

### 機能一覧
---
- ユーザーログイン機能
- tweet一覧表示機能
- ページネーション機能
- tweet詳細表示機能
- tweet投稿機能
- tweet編集機能
- tweet削除機能
- コメント機能
- いいね機能
- ランキング機能
- work(ランニング)登録機能
- アバター編集機能

### 工夫した点
---
- **モーダル画面の表示**
  - tweet削除やログアウト時に誤ってボタンを押しても確認できます。
  - tweetの投稿・編集、コメント投稿、work登録にも実装しました。
  ![3163964ad43e145224fc5219cb62cebd](https://user-images.githubusercontent.com/55132084/69612382-e99e4000-1072-11ea-85dd-e3cf78dbc2be.gif)

- **アバターの編集**
  - ユーザー登録後のアバターは太っています。ユーザーが走った１週間の距離に応じてアバターが痩せます。１週間で10km以上走らないと太ります。
  - アバターが痩せると新しい服を着せ替えられるようになります。
  ![870a7bbbdcd7c82d5eb507e3648a1ec0](https://user-images.githubusercontent.com/55132084/69611915-20c02180-1072-11ea-8a43-fe9aa947f42e.gif)


### 苦労した点
---
- １週間のランニング記録の表示
  - 直近１週間のランニングデータをDBから取得したり、計算したりグラフに落とし込むことです。
  - 走っていない日は距離を０として表示するようにしました。
- アバターの編集
  - JavaScriptを使用してアバターの着せ替えを実装しました。
  - 内側の要素の色（服や髪の色）を変化させたいためInkscapeでsvg形式でアバターを自作しました。
### 今後実装したい機能
---
- ユーザーのフォロー機能
- ユーザーの検索機能
- GoogleMapsAPIなどを利用してユーザーが実際に走った距離をGPSを元に直接登録する。

### 使用技術
---
- フロントエンド
  - Haml
  - SCSS
  - JavaScript
  - jQuery
- バックエンド
  - Ruby
  - Ruby on Rails
- データベース
  - MySQL
- インフラ
  - AWS
- 画像アップロード
  - S3