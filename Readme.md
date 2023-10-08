# Docker準備
## ディレクトリ作成
```
mkdir react_docker_app
cd react_docker_app
```
## 設定ファイル
```
touch {docker-compose.yml,Dockerfile}
```

DockerFileには`USER node`を追記しておくことで、実行ユーザーがnodeとなり、create-react-app: Permission denied
とならない

## イメージの構築
`docker-compose build`

## React×TypeScriptのプロジェクト作成
<!-- `docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'` -->
`docker-compose run --rm frontend sh -c 'npx create-react-app frontend '`
npxは、ローカルに実行可能なコマンドを探しにいきます
TypeScriptを使いたい場合は、create-react-appのオプションに --template typescript をつける


## Container作成と起動
`docker-compose up -d`

## ローカルホストにアクセス
http://localhost:8000/



以降はこっち
```
docker-compose build
docker-compose run --rm frontend yarn install
docker-compose up -d
```