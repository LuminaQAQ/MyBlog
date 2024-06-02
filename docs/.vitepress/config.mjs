import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MyBlog/',
  title: "洛霖的代码记录小站",
  description: "记录一位菜鸡程序员从入门到退坑的无止境探索历程",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    search: {
      provider: 'local'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '开发日常', link: '/开发日常/', },
      { text: '我的笔记', link: '/我的笔记/', },
      { text: 'bug制造机', link: '/bug制造机/', },
      { text: '我的日常', link: '/我的日常/', },
      { text: '关于我', link: '/关于我/', },
    ],

    sidebar: {
      '/开发日常/': [
        {
          text: '开发日常',
          items: [
            { text: '开篇', link: '/开发日常/' },
          ]
        },
        {
          text: '百度地图',
          items: [
            { text: '初次引入百度地图', link: '/开发日常/初次引入百度地图' },
          ]
        },
        {
          text: '脚本配置',
          items: [
            { text: 'deploy-React版(github pages)', link: '/开发日常/GitHub_Page_React' },
            { text: 'deploy-Vite_Vue版(github pages)', link: '/开发日常/GitHub_Page_Vite_Vue' },
            { text: 'deploy-Vitepress版(github pages)', link: '/开发日常/GitHub_Page_Viteress' },
          ]
        },
      ],
      '/我的笔记/': [
        {
          text: '开篇',
          items: [
            { text: '开篇', link: '/我的笔记/' },
          ]
        },
        {
          text: '总集篇',
          items: [
            { text: 'React笔记', link: '/我的笔记/React' },
            { text: 'Scss笔记', link: '/我的笔记/Scss' },
            { text: 'Markdown笔记', link: '/我的笔记/Markdown' },
          ]
        },
        {
          text: 'WebComponent小记',
          items: [
            { text: '常用的css伪类', link: '/我的笔记/WebComponent-css伪类' },
            { text: '父修改子样式', link: '/我的笔记/WebComponent-父修改子样式' },
            { text: '事件处理', link: '/我的笔记/WebComponent-事件处理' },
          ]
        },
        {
          text: 'Vue小记',
          items: [
            { text: 'Vue3-获取ref节点', link: '/我的笔记/Vue3获取ref节点' },
            { text: 'Vue3-全局使用axios', link: '/我的笔记/Vue3全局使用axios' },
            { text: 'Vue3-全局使用和风天气字体图标', link: '/我的笔记/Vue3使用和风天气字体图标' },
          ]
        },
      ],
      '/bug制造机/': [
        {
          text: '日常bug篇',
          items: [
            { text: '开篇', link: '/bug制造机/' },
          ]
        },
        {
          text: 'WebComponent篇',
          items: [
            { text: '在 vitepress 中 编写WebComponent组件库, 页面切换时属性丢失问题', link: '/bug制造机/在vitepress中编写WebComponent组件库,页面切换时属性丢失' },
          ]
        },

      ],
      '/我的日常/': [
        {
          text: '日常小记',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/关于我/': [
        {
          text: '关于我',
          items: [
            { text: '开篇', link: '/关于我/' },
            { text: '编程', link: '/关于我/编程' },
            { text: '游戏', link: '/关于我/游戏' },
            { text: '音乐', link: '/关于我/音乐' },
            { text: '文学', link: '/关于我/文学' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
