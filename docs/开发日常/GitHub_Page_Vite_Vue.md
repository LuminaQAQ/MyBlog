# Vite_Vue 的 gh-pages 配置(github pages))

## 1. 安装 gh-pages

```shell
npm install gh-pages --save-dev
```

## 2. 修改 package.json

```shell
"scripts": {
        ...
     "deploy": "gh-pages -d dist"
}
```

## 3. 修改 vite.config.js

```js
export default defineConfig({
  base: "/<repo name>/",
});
```

## 4. 打包

```shell
npm run build
```

## 5. 推送到 github

```shell
npm run deploy
```
