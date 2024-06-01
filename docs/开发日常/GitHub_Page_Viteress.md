# Vite_Vue 的 gh-pages 配置(github pages)

## 1. 安装 gh-pages

```shell
npm install gh-pages --save-dev
```

## 2. 修改 package.json

这是我的目录结构

```txt
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

## 6. 结尾

emmm... 就是第 4 和第 5 步一般可以提前在 package.json 做好合并. 但是如果有静态文件的话, 就需要先打包, 然后手动把静态文件放到 dist 目录下. 这种情况就不太推荐 2 合 1 了
