# WebComponent 的 css 伪类

## 1. :host / :host() 和 ::slotted()

- :host / :host() : 用于指定 shadowRoot 的样式(即定义子样式).
- ::slotted() : 用于操作 slot 的样式(父改子).
  <br>
  一般用于 两个组件嵌套, 形成了父子关系

父组件

```css
::slotted(ea-button) {
  --margin-left: 0;
}
```

子组件

```css
:host {
  --margin-left: 1rem;
}

/* 指定选择器, 如我的 html tag 是 ea-button-group  */
:host(ea-button-group) {
  --margin-left: 1rem;
}
```

修改前(ea-button)
![默认](.\assets\screenshot_WebComponent\css伪类\默认按钮.png "默认")

修改后(ea-button-group + ea-button)
![父组件+子组件](.\assets\screenshot_WebComponent\css伪类\按钮组.png "父组件+子组件")

## 2. :host-context()

主要是用来选择根宿主(不是 webcomponent 也可以)

```css
:host-context(ea-button-group) {
  font-size: 1.5rem;
}
```

## 3. :defined
