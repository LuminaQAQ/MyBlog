# vitepress 可能没报错或警告, 以下是几种可能

## 1. 原生组件 和 vue 组件 冲突, 要提前在 vite.config.js 配置

```js
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // .....
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>
          tag.includes(
            "这里替换成自己组件的特征, 比如我的是 com-xxxx, 那么这里就填 com-"
          ),
      },
    },
  },
});
```

## 2. 可能是 set 和 get 没写全. 这里还包括可能样式没有加.

## 3. 打包看看上线后, 有些时候生产环境有 bug, 但实际上是没有的.

<video controls width="500">
  <source src="../video/WebComponent生产环境与上线环境不一致.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 4. 特别注意, Vue 的事件绑定或者 Vue 的属性, 也是包括在上面提到的 set 和 get 里面的
