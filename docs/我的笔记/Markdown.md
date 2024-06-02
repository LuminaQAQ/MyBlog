# 就记常用的, 不搞茴字的 N 种写法

## 1. 有序列表, < 数字 + 符号. + 空格 >

1. 第一项
2. 第二项
3. 第三项

```md
1. 第一项
2. 第二项
3. 第三项
```

## 2. 无序列表, < 符号- + 空格 >

- 第一项
- 第二项
- 第三项

```md
- 第一项
- 第二项
- 第三项
```

## 3. 代码块, \``` + 语言名 + 回车 + 代码块 + 回车 + \```

```js
console.log("Hello World!");
```

````md
```js
console.log("Hello World!");
```
````

## 4. 单行代码块, < \` + 代码块 + \` >

`console.log("Hello World!");`

```md
`console.log("Hello World!");`
```

## 5. 分割线, < --- >

---

```md
---
```

## 6. 链接, < \[链接文字\](链接地址) >

[5.链接](http://localhost:5174/MyBlog/%E6%88%91%E7%9A%84%E7%AC%94%E8%AE%B0/Markdown.html#_5-%E9%93%BE%E6%8E%A5-%E9%93%BE%E6%8E%A5%E6%96%87%E5%AD%97-%E9%93%BE%E6%8E%A5%E5%9C%B0%E5%9D%80)

```md
[5.链接](http://localhost:5174/MyBlog/%E6%88%91%E7%9A%84%E7%AC%94%E8%AE%B0/Markdown.html#\_5-%E9%93%BE%E6%8E%A5-%E9%93%BE%E6%8E%A5%E6%96%87%E5%AD%97-%E9%93%BE%E6%8E%A5%
```

## 7. 引用, < \> + 空格 + 引用内容 >

> 引用内容

```md
> 引用内容
```

## 8. 表格

| 表头 1 | 表头 2 | 表头 3 |
| :----- | :----- | :----- |
| 内容 1 | 内容 2 | 内容 3 |

```md
| 表头 1 | 表头 2 | 表头 3 |
| :----- | :----- | :----- |
| 内容 1 | 内容 2 | 内容 3 |
```

## 9. 图片, < \!\[图片描述\]\(图片地址\) >

![图片描述](./assets/screenshot_Markdown/%E5%9B%BE%E7%89%87.png)

```md
![图片描述](./assets/screenshot_Markdown/%E5%9B%BE%E7%89%87.png)
```

## 10. 视频

<video src="../video/WebComponent生产环境与上线环境不一致.mp4" controls="controls"></video>

```md
<video src="../video/WebComponent生产环境与上线环境不一致.mp4" controls="controls"></video>
```
