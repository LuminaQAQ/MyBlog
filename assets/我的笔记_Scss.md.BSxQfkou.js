import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.QBSm2tx5.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的笔记/Scss.md","filePath":"我的笔记/Scss.md"}'),l={name:"我的笔记/Scss.md"},h=n(`<h2 id="_1-变量定义" tabindex="-1">1. 变量定义 <a class="header-anchor" href="#_1-变量定义" aria-label="Permalink to &quot;1. 变量定义&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 变量定义</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#ccc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 将局部变量设置为全局变量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $abc: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $abc;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2-父选择器" tabindex="-1">2. 父选择器(<strong>&amp;</strong>) <a class="header-anchor" href="#_2-父选择器" aria-label="Permalink to &quot;2. 父选择器(**&amp;**)&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 伪类样式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">   &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 前面部分与后代样式同名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.main-dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3-属性嵌套" tabindex="-1">3. 属性嵌套 <a class="header-anchor" href="#_3-属性嵌套" aria-label="Permalink to &quot;3. 属性嵌套&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-继承-extend" tabindex="-1">4. 继承: <strong>@extend</strong> <a class="header-anchor" href="#_4-继承-extend" aria-label="Permalink to &quot;4. 继承: **@extend**&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.使用 .或# 本身的类, 会被编译在最终的css中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extend </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.class;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extend </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#id;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 占位符: %; 定义的变量不会被编译至最终产物中, 只会是用时才会出现在子类</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extend </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%class</span></span></code></pre></div><h2 id="_5-变量" tabindex="-1">5. 变量 <a class="header-anchor" href="#_5-变量" aria-label="Permalink to &quot;5. 变量&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$arr: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $list;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$obj: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map-get(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$obj</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> color</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 布尔</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$boolean: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $boolean {  }</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 变量可使用变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$b: $a;</span></span></code></pre></div><h2 id="_6-混入-mixin" tabindex="-1">6. 混入: <strong>mixin</strong> <a class="header-anchor" href="#_6-混入-mixin" aria-label="Permalink to &quot;6. 混入: **mixin**&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alert(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$color</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $bgcolor</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $color;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $bgcolor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.alert-warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> alert</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> yellow</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_7-导入-import-可用于脚手架导入函数所在文件" tabindex="-1">7. 导入: <strong>import(可用于脚手架导入函数所在文件)</strong> <a class="header-anchor" href="#_7-导入-import-可用于脚手架导入函数所在文件" aria-label="Permalink to &quot;7. 导入: **import(可用于脚手架导入函数所在文件)**&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// fileName: _file.scss, 导入可以忽略前面的_和扩展名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 内所有的样式直接被继承</span></span></code></pre></div><h2 id="_8-变量类型-type-of" tabindex="-1">8. 变量类型: <strong>type-of()</strong> <a class="header-anchor" href="#_8-变量类型-type-of" aria-label="Permalink to &quot;8. 变量类型: **type-of()**&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 测试环境</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 数字</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 字符串</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Hello</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 数组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #ccc)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //  两个列表</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(#ccc)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type-of(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span></span></code></pre></div><h2 id="_9-数字运算注意" tabindex="-1">9. 数字运算注意 <a class="header-anchor" href="#_9-数字运算注意" aria-label="Permalink to &quot;9. 数字运算注意&quot;">​</a></h2><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 除法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> )</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 正确</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 表示的是其他意思</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 单位运算</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // res: 20 px*px (无效单位)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // res: 5 (单位消失)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 需要单位的运算</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // res: 20 px</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // res: 5px</span></span></code></pre></div><h2 id="_10-数字函数" tabindex="-1">10. 数字函数 <a class="header-anchor" href="#_10-数字函数" aria-label="Permalink to &quot;10. 数字函数&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. abs()

/* 2. 保留整数
 *    (1) round()
 *    (2) ceil()
 *    (3) floor()
 */

// 3. percentage(): 百分比函数

/* 4. 数字最大/小
 *    (1) min()
 *    (2) max()
 */

\`\`\`
</code></pre><h2 id="_11-字符串运算" tabindex="-1">11. 字符串运算 <a class="header-anchor" href="#_11-字符串运算" aria-label="Permalink to &quot;11. 字符串运算&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. 减号
a - b    // &quot;a-b&quot;

//  2. 除号
a / b    //  &quot;a/b&quot;

// 3. 不能使用 字符串*字符串
\`\`\`
</code></pre><h2 id="_12-字符串函数" tabindex="-1">12. 字符串函数 <a class="header-anchor" href="#_12-字符串函数" aria-label="Permalink to &quot;12. 字符串函数&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. 转大写
to-upper-case()

// 2. 转小写
to-lower-case()

// 3. 字符串长度
str-length()

// 4. 字符串出现位置(下标从1开始)
str-index(var/str, keywords)

// 5. 插入字符串
str-insert(ori, insertStr, index)

\`\`\`
</code></pre><h2 id="_13-颜色函数" tabindex="-1">13. 颜色函数 <a class="header-anchor" href="#_13-颜色函数" aria-label="Permalink to &quot;13. 颜色函数&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. 颜色变亮
lighten(var/color, extent)

// 2. 颜色变暗
darkten(var/color, extent)

// 3, 增加颜色纯度(饱和度)
saturate(var/color, extent)

// 4. 减少颜色纯度(饱和度)
desaturate(var/color, extent)
\`\`\`
</code></pre><h2 id="_14-数组函数" tabindex="-1">14. 数组函数 <a class="header-anchor" href="#_14-数组函数" aria-label="Permalink to &quot;14. 数组函数&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. 数组长度
length()

// 2. 数组组合
join(arr1, arr2)

// 3. 查找所在值的索引
index(arr, keyword)

// 4. 查找所在索引的值
nth(arr, index)

// 5. 数组追加
append(arr1, arr2[, sep])
\`\`\`
</code></pre><h2 id="_15-对象函数" tabindex="-1">15. 对象函数 <a class="header-anchor" href="#_15-对象函数" aria-label="Permalink to &quot;15. 对象函数&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. 获取指定键的值
map-get(obj, key)

// 2. 对象合并
map-merge(obj1, obj2)

// 3. 对象的指定键值移除
map-remove(obj, key1[, key2])

\`\`\`
</code></pre><h2 id="_16-插值语法-模板字符串" tabindex="-1">16. 插值语法(模板字符串) <a class="header-anchor" href="#_16-插值语法-模板字符串" aria-label="Permalink to &quot;16. 插值语法(模板字符串)&quot;">​</a></h2><pre><code>\`\`\`sass
$version: &quot;0.0.1&quot;;
$attr: border;

// 1. 注释
/* version: #{$version} */

// 2. css 属性
#{$attr}: 1px solid #ccc;
\`\`\`
</code></pre><h2 id="_17-if条件判断" tabindex="-1">17. <strong>@if</strong>条件判断 <a class="header-anchor" href="#_17-if条件判断" aria-label="Permalink to &quot;17. **@if**条件判断&quot;">​</a></h2><pre><code>\`\`\`sass
$theme: dark;

@if $theme == dark {
    // ....
} else if $theme == light {
    // ......
} @else {
    // ......
}
\`\`\`
</code></pre><h2 id="_18-for循环" tabindex="-1">18. <strong>@for</strong>循环 <a class="header-anchor" href="#_18-for循环" aria-label="Permalink to &quot;18. **@for**循环&quot;">​</a></h2><pre><code>\`\`\`sass
$ball-nums: 3;

@for $i from 0 through $ball-nums {
  .ball#{$i} {
    $animation-time: 1s;
    $animation-delay: $animation-time / 4;

    left: $i * 2rem;
    animation: jump infinite 2s;
    animation-delay: $i * $animation-delay;
  }
}

@keyframes jump {
  50% {
    top: 0;
  }
}
\`\`\`
</code></pre><h2 id="_19-each循环" tabindex="-1">19. <strong>@each</strong>循环 <a class="header-anchor" href="#_19-each循环" aria-label="Permalink to &quot;19. **@each**循环&quot;">​</a></h2><pre><code>\`\`\`sass
$alert-status: normal success warning;

@each $key, $val in $alert-status {
  .alert-#{$k} {
    background-image: url(../images/#{$key}.png);
  }
}
\`\`\`
</code></pre><h2 id="_20-while循环" tabindex="-1">20. <strong>@while</strong>循环 <a class="header-anchor" href="#_20-while循环" aria-label="Permalink to &quot;20. **@while**循环&quot;">​</a></h2><pre><code>\`\`\`sass
$end: 0;

@while $end &lt; 7 {
  .ball#{$end} {
    top: $end * 2;
  }

  $end: $end + 1;
}
\`\`\`
</code></pre><h2 id="_21-function自定义函数" tabindex="-1">21. <strong>function</strong>自定义函数 <a class="header-anchor" href="#_21-function自定义函数" aria-label="Permalink to &quot;21. **function**自定义函数&quot;">​</a></h2><pre><code>\`\`\`sass
@function get-color($k) {
  @return map-get($colors, $k);
}
\`\`\`
</code></pre><h2 id="_22-调试" tabindex="-1">22. 调试 <a class="header-anchor" href="#_22-调试" aria-label="Permalink to &quot;22. 调试&quot;">​</a></h2><pre><code>\`\`\`sass
// 1. @debug
@debug &quot;debug&quot;;

// 2. @warn
@warn &quot;warn&quot;;

// 3. @error
@error &quot;error&quot;;

\`\`\`
</code></pre>`,44),t=[h];function p(e,k,r,d,o,g){return a(),i("div",null,t)}const E=s(l,[["render",p]]);export{y as __pageData,E as default};
