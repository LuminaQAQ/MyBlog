# Vite_Vue 的 gh-pages 配置(github pages)

## 1. 安装 gh-pages

```shell
npm install gh-pages --save-dev
```

## 2. 修改 package.json

这是我的目录结构

```tree
├─docs
│ └─.vitepress
│   ├─config.mjs
│   └─dist
├─LICENSE
├─package-lock.json
├─package.json
└─README.md
```

注意下面的 <> 中, 是按照自己的项目情况填的. 如果是按官方的示例走的, 那其实只要去掉 <> 即可.

```shell
"scripts": {
        ...
     "deploy": "gh-pages -d <docs/.vitepress/dist>"
}
```

## 3. 修改 config.mjs (我的项目没勾选 ts, 不知道这里有没有差别)

`<repo name>`: 仓库名

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
