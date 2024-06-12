# SVG 笔记

## 1. 基本根元素

<svg><rect x="10" y="10" width="100" height="100" fill="skyblue" /></svg>

1. `svg`: 根元素

```xml
<svg>
    <rect x="10" y="10" width="100" height="100" fill="skyblue" />
</svg>
```

## 2. `viewBox`

1. `viewBox`: 定义 `svg` 元素的视口, 值为 `x y width height`

2. 这个可以理解为 `width` 和 `height` 与 根元素的 `width` 和 `height` 的比例关系, 比例为 `width/viewbox:width` 或者 `height/viewbox:height`

<svg width="300" height="300" viewBox="0 0 50 50">
    <rect x="10" y="10" width="100" height="100" fill="skyblue" />
</svg>

```xml
<svg width="300" height="300" viewBox="0 0 50 50">
  <rect x="10" y="10" width="100" height="100" fill="skyblue" />
</svg>
```

## 3. 图形绘制

### 1. `rect`: 矩形

- `x/y`: 坐标轴;

- `width/height`: 大小;

- `fill`: 填充;

- `stroke`: 描边

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <rect x="25" y="25" width="50" height="50" fill="aliceblue" />
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <rect x="25" y="25" width="50" height="50" fill="aliceblue" />
</svg>
```

### 2. `circle`: 圆形

- `cx/cy`: 坐标轴;

- `r`: 半径(大小);

- `fill`: 填充;

- `stroke`: 描边

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <circle cx="50" cy="50" r="24" fill="skyblue" stroke="skyblue" />
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <circle cx="50" cy="50" r="24" fill="skyblue" stroke="skyblue" />
</svg>
```

### 3. `polygon`: 多边形

- `points`: 坐标轴(单个点用 x,y 表示, 绘制则是用空格来分割每一组 xy 坐标);

- `fill`: 填充;

- `stroke`: 描边

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <polygon points="50,25 45,45 25,50 45,55 35,75 50,65 65,75 55,55 75,50 75,50 55,45" stroke="skyblue"
        fill="transparent" />
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <polygon points="50,25 45,45 25,50 45,55 35,75 50,65 65,75 55,55 75,50 75,50 55,45" stroke="skyblue"
        fill="transparent" />
</svg>
```

### 4. `line`: 直线

- `x1/x2/y1/y2`: 坐标轴;

- `stroke`: 描边

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <line x1="25" x2="75" y1="25" y2="75" stroke="skyblue" />
    <line x1="75" x2="25" y1="25" y2="75" stroke="skyblue" />
    <line x1="25" x2="75" y1="50" y2="50" stroke="skyblue" />
    <line x1="50" x2="50" y1="25" y2="75" stroke="skyblue" />
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <line x1="25" x2="75" y1="25" y2="75" stroke="skyblue" />
    <line x1="75" x2="25" y1="25" y2="75" stroke="skyblue" />
    <line x1="25" x2="75" y1="50" y2="50" stroke="skyblue" />
    <line x1="50" x2="50" y1="25" y2="75" stroke="skyblue" />
</svg>
```

### 5. `text`: 文字

- `x/y`: 坐标轴;

- `fill`: 填充;

- `font-size`: 字体大小;

- `font-weight`: 字体粗细;

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100">
    <text x="0" y="30" fill="#69ff7f" font-size="30" font-weight="800">
        Hello
    </text>
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <text x="0" y="30" fill="#69ff7f" font-size="30" font-weight="800">
        Hello
    </text>
</svg>
```

## 4. 组

- `<g></g>`: 组标签, 可以在这个标签上添加样式, 样式会作用到里面的所有元素上
  > (能设置的其他属性都是一样的)

<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <g fill="aliceblue">
        <rect x="25" y="25" width="50" height="50" />
        <circle cx="50" cy="50" r="24" stroke="skyblue" />
    </g>
</svg>

```xml
<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100 ">
    <g fill="aliceblue">
        <rect x="25" y="25" width="50" height="50" />
        <circle cx="50" cy="50" r="24" stroke="skyblue" />
    </g>
</svg>
```

## 5. 路径语法

- 字母大写: 绝对坐标;

- 字母小写: 相对坐标;

- 都是 字母+坐标轴; eg: m10,10

### 1. 直线命令

| 字母命令 | 含义                                   | 示例                                                                                                                                                                  |
| -------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M,m      | moveTo                                 | M(路径起点)                                                                                                                                                           |
| L,l      | lineTo                                 | <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 l50,50 " /> </g></svg>          |
| H,h      | 画水平线                               | <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 h50,50 " /> </g></svg>          |
| V,v      | 画垂直线                               | <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 v50,50 " /> </g></svg>          |
| Z,z      | 闭合(加到最近的 moveTo 命令的路径末尾) | <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"> <g stroke="aliceblue" fill="none"> <path d="m10,10 v10,20 h20,10 z" /> </g></svg> |

#### 1. `l` 实例代码

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 l50,50 " /> </g></svg>
```

#### 2. `h` 实例代码

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 h50,50 " /> </g></svg>
```

#### 3. `v` 实例代码

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g stroke="aliceblue" fill="none"> <path d="m10,10 v50,50 " /> </g></svg>
```

#### 4. `z` 实例代码

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"> <g stroke="aliceblue" fill="none"> <path d="m10,10 v10,20 h20,10 z" /> </g></svg>
```

### 2. 曲线命令

| 字母命令 | 含义             | 示例                                                                                                                  |
| -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| C,c      | 画三次贝塞尔曲线 | <svg width="50" height="20"> <path d="M10,10C10,10, 30,30, 50,10" fill="none" stroke="blue" stroke-width="1" /></svg> |
| S,s      | 画二次贝塞尔曲线 | <svg width="50" height="20"> <path d="M10,10S15,15 20,10" fill="none" stroke="blue" stroke-width="1" /></svg>         |
| Q,q      | 画二次贝塞尔曲线 | Q 10,10 10,10                                                                                                         |
| T,t      | 画二次贝塞尔曲线 | T 10,10                                                                                                               |
| A,a      | 画弧线           | <svg width="50" height="50"> <path d="m10,10A10,10 0 0 0 30,10" fill="none" stroke="blue" stroke-width="1" /></svg>   |

#### 1. `c` 代码实例

> 中间的一组坐标是控制点, 也可以理解为中点

```xml
<svg width="50" height="50">
    <path d="M10,10C10,10, 30,30, 50,10" fill="none" stroke="blue" stroke-width="1" />
</svg>
```

#### 2. `s` 代码实例

> 可以理解为 第一组坐标决定了控制点(中心点)

```xml
<svg width="50" height="20">
    <path d="M10,10S15,15 20,10" fill="none" stroke="blue" stroke-width="1" />
</svg>
```

#### 3. `a` 代码实例

- `rx,ry`: 用于确定弧线的半径

- `angle,large-arc-flag,sweep-flag`: 用于确定弧线的方向(没有太实际的感觉)

## 6. 简易动画

> 其实到头来还是在写 `css`

<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css">
        .ball {
            fill: skyblue;
            animation: move infinite 3s alternate forwards ease;
        }
        @keyframes move {
            0% {
                fill: skyblue;
                transform: translate(0, 0);
            }
            100% {
                fill: aquamarine;
                transform: translate(100px, 0);
            }
        }
    </style>
    <rect width="500" height="100" fill="aliceblue" />
    <circle class="ball" cx="50" cy="50" r="25" />
</svg>

```css
.ball {
  fill: skyblue;
  animation: move infinite 3s alternate forwards ease;
}
@keyframes move {
  0% {
    fill: skyblue;
    transform: translate(0, 0);
  }
  100% {
    fill: aquamarine;
    transform: translate(100px, 0);
  }
}
```

```xml
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="100" fill="aliceblue" />
    <circle class="ball" cx="50" cy="50" r="25" />
</svg>
```

## 7. 渐变

其实还是利用 css 来实现渐变, 但是不一样的是, 这个是用 `xml` 标记来表示原来在 `css` 中的 `bgi`

### 1. 线性渐变

- `<defs></defs>`: 放置渐变的元素块

- `<linearGradient></linearGradient>`: 线性渐变, 需要放置在 `<defs></defs>` 中

- `<stop offset="0%" stop-color="red" />`: 渐变块
  - `offset`: 渐变块的偏移
  - `stop-color`: 渐变颜色

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="linearGradient">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="50%" stop-color="green" />
            <stop offset="100%" stop-color="blue" />
        </linearGradient>
    </defs>
    <rect class="rect" width="100" height="100" />
    <style>
        .rect {
            fill: url(#linearGradient);
        }
    </style>
</svg>

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="linearGradient">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="50%" stop-color="green" />
            <stop offset="100%" stop-color="blue" />
        </linearGradient>
    </defs>
    <rect class="rect" width="100" height="100" />
    <style>
        .rect {
            fill: url(#linearGradient);
        }
    </style>
</svg>
```

### 2. 径向渐变

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="radialGradient">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="50%" stop-color="green" />
            <stop offset="100%" stop-color="blue" />
        </radialGradient>
    </defs>
    <circle class="circle" cx="50" cy="50" r="50" />
    <style>
        .circle {
            fill: url(#radialGradient);
        }
    </style>
</svg>

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="radialGradient">
            <stop offset="0%" stop-color="yellow" />
            <stop offset="50%" stop-color="green" />
            <stop offset="100%" stop-color="blue" />
        </radialGradient>
    </defs>
    <circle class="circle" cx="50" cy="50" r="50" />
    <style>
        .circle {
            fill: url(#radialGradient);
        }
    </style>
</svg>
```

## 8. 图案

> 就是设计一种, 然后重复使用; 说实在的, 这样比 css 手写重复要简单多了

- `<pattern></pattern>`: 还是放在 `<defs></defs>` 里面; `<pattern>` 里面随便写
- `pattern`属性:
  - 先假设 **使用该填充的元素** 的 `width: 100px`, `height: 100px`;
  - `pattern` 标签上的 `width` 和 `height`: 定义填充的 **单个图案的大小**, 用比例来表示(小数);
  - `pattern` 标签内的 元素的 `width` 和 `height`: 定义填充的 **单个图案的大小**, 用像素来表示(可以想成前一点的比例乘以 100%);

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
            <rect x="0" y="0" width="25" height="25" fill="skyblue" stroke="black" />
        </pattern>
    </defs>
    <rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="100" height="100" />
</svg>

## 9. 裁剪 `clip-path`

<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="clipPath">
            <rect x="0" y="50" width="100" height="100" />
        </clipPath>
    </defs>
    <rect width="100" height="100" fill="aliceblue" />
    <circle cx="50" cy="50" r="50" clip-path="url(#clipPath)" />
</svg>

- `<clip-path></clip-path>`标签: 用于定义剪切路径
  > 这个标签里面的元素的 `x` 和 `y` 是可以用 `负数` 来表示裁剪的方向
- 要使用的元素: 使用`clip-path` 属性, 值是 `url(selector)`

```xml
<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="clipPath">
            <rect x="0" y="50" width="100" height="100" />
        </clipPath>
    </defs>
    <rect width="100" height="100" fill="aliceblue" />
    <circle cx="50" cy="50" r="50" clip-path="url(#clipPath)" />
</svg>
```

## 10. 遮罩 `mask`

> 就单纯是设置透明度

<svg xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="aquamarine" />
    <circle cx="40" cy="40" r="20" opacity=".7" />
    <circle cx="40" cy="40" r="10" fill="skyblue" fill-opacity=".6" />
</svg>
