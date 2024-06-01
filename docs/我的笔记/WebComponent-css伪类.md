# WebComponent 的 css 伪类

## 1. :host / :host()

1. 用于操作 shadowRoot 的样式, 可以利用这个改变变量来改变样式.

```html
<style>
  :host {
    --margin-right: 1rem;
  }

  :host([href]) {
    & > a {
      text-decoration: none;
    }
  }

  .__ea-button {
    width: var(--margin-right);
  }
</style>
```

## 2. :host-context()

1. 如果该组件的父元素是同样是 webComponent, 那么可以使用 :host-context() 来操作父元素的样式.

```html

```

## 3. :defined

## 4. ::slotted()
