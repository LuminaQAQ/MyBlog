## 思路

1. 父修改子样式的核心是, 子组件要被操作的值是 原生变量, 通过 ::slotted 伪类来修改变量的值

2. 父组件: 操作子组件变量

3. 子组件: 被操作样式 是用变量定义的

## 1. 父组件

1. ::slotted( ChildComponentName || Node)

```css
::slotted(ea-button:first-of-type) {
    --border-radius: 4px 0 0 4px;
}
```

## 2. 子组件

```css

```
