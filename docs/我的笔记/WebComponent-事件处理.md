## 前言: 因为尤大自己说有参考原生 js 和 webcomponent 的事件处理方式，所以这里就这么记

## new CustomEvent('eventName', { detail: { ... } })

> 可以说等同于 this.$emit()

可以利用真正的元素来监听事件, 然后将事件派发给父组件

> 比如这是一个 input 组件的定义时结构

```html
<ea-input><input id="input" type="text" /></ea-input>

<script>
  document.getElementById("input").addEventListener("input", (e) => {
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: {
          value: this.value,
        },
      })
    );
  });
</script>
```

使用时代码:

> 这是组件使用时的方式, 这样也解决了 ea-input 这个标签不会自带 input 事件

```html
<ea-input id="eaInput"></ea-input>

<script>
  document.getElementById("eaInput").addEventListener("input", (e) => {
    // 这里就能拿到输入的值了
    console.log(e.target.value);
  });
</script>
```
