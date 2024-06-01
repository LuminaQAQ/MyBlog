import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.D5qxx6u8.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"开发日常/Vue3全局使用axios.md","filePath":"开发日常/Vue3全局使用axios.md"}'),e={name:"开发日常/Vue3全局使用axios.md"},n=t(`<h2 id="_1-全局引入" tabindex="-1">1. 全局引入 <a class="header-anchor" href="#_1-全局引入" aria-label="Permalink to &quot;1. 全局引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, axios);</span></span></code></pre></div><h2 id="_2-组件中使用" tabindex="-1">2. 组件中使用 <a class="header-anchor" href="#_2-组件中使用" aria-label="Permalink to &quot;2. 组件中使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {inject} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $axios</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$axios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,4),h=[n];function p(l,k,o,r,d,c){return a(),i("div",null,h)}const g=s(e,[["render",p]]);export{_ as __pageData,g as default};
