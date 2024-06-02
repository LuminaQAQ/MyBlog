## 1. html 部分

```html
<section ref="firstScreen"></section>
```

## 2. js 部分

1. 非 setup 情况

```vue
<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const firstScreen = ref(null);

    onMounted(() => {
      // 这里就能获取到了
      console.log(firstScreen.value);
    });

    return {
      // 注意要 return 出去
      firstScreen,
    };
  },
};
</script>
```

2. setup 情况

```vue
<script setup>
import { onMounted, ref } from "vue";
const firstScreen = ref(null);

onMounted(() => {
  // 这里就能获取到了
  console.log(firstScreen.value);
});
</script>
```
