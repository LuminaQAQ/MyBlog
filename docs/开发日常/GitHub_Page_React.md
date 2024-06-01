# React 的 gh-pages 配置(github pages))

## 1. 安装 gh-pages

```shell
npm install gh-pages --save-dev
```

## 2. 修改 package.json

```shell
"private": true,
"homepage": "./",

"scripts": {
        ...
     "deploy": "gh-pages -d build"
}
```

## 3. 打包

```shell
npm run build
```

## 4. 推送到 github

```shell
npm run deploy
```
