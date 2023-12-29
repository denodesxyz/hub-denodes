import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "deNodes Hub",
  description: "deNodes Hub description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './assets/Logo.svg',
    nav: [
      { text: 'Website', link: 'https://denodes.xyz/' },
      { text: 'Twitter', link: 'https://twitter.com/_denodes' }
    ],

    // sidebar: {
    //   '/': [
    //     {
    //       text: 'Welcome to the deNodes Hub!',
    //       children: [
    //         { text: 'deNodes Team', link: '/denodes-team' },
    //       ],
    //     },
    //     {
    //       text: 'Namada',
    //       children: [
    //         { text: 'Project Overview', link: '/namada/' },
    //         { text: 'Node Setup Guide', link: '/namada/node-setup-guide/' },
    //         { text: 'Node Setup Guide (Russian)', link: '/namada/node-setup-guide-russian/' },
    //         { text: 'FAQ', link: '/namada/faq/' },
    //       ],
    //     },
    //   ],
    // },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
