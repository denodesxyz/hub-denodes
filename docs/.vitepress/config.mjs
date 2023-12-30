import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "deNodes Hub",
  description: "deNodes Hub description",
  // markdown: {
  //   toc: { 
  //     includeLevel: [2, 3]
  //   },
  // },

  themeConfig: {
    search: {
      provider: 'local'
    },

    logo: '/Logo.svg',

    nav: [
      { text: 'Website', link: 'https://denodes.xyz/' },
      { text: 'Twitter', link: 'https://twitter.com/_denodes' }
    ],

    sidebar: [
      {
        text: 'Welcome to the deNodes Hub!',
        items: [
          { text: 'deNodes Team', link: '/welcome/denodes-team' },
        ],
        collapsed: true,
        link: '/welcome/'
      },
      {
        text: 'Namada',
        items: [
          { text: 'Project Overview', link: '/namada/project-overview' },
          { text: 'Node Setup Guide', collapsed: true, items: [
            { text: 'Node Setup Guide', link: '/namada/node-setup-guide/' },
            { text: 'Node Setup Guide (Russian)', link: '/namada/node-setup-guide/node-setup-guide-russian'},
          ]},
          { text: 'FAQ: Most Frequently Asked Questions', link: '/namada/faq' },
        ],
        collapsed: true,
        link: '/namada/'
      },
      {
        text: 'Dymension',
        items: [
          { text: 'Project Overview', link: '/dymension/project-overview' },
          { text: 'Node Setup Guide', link: '/dymension/node-setup-guide' },
          { text: 'Roller Setup Guide', link: '/dymension/roller-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/dymension/faq' },
        ],
        collapsed: true,
        link: '/dymension/'  
      },
      {
        text: 'Subspace',
        items: [
          { text: 'Project Overview', link: '/subspace/project-overview' },
          { text: 'Node Setup Guide', link: '/subspace/node-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/subspace/faq' },
        ],
        collapsed: true,
        link: '/subspace/'  
      },
      {
        text: 'Avail',
        items: [
          { text: 'Project Overview', link: '/avail/project-overview' },
          { text: 'Node Setup Guide', link: '/avail/node-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/avail/faq' },
        ],
        collapsed: true,
        link: '/avail/'  
      },
      {
        text: 'Shardeum',
        items: [
          { text: 'Project Overview', link: '/shardeum/project-overview' },
          { text: 'Node Setup Guide', link: '/shardeum/node-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/shardeum/faq' },
        ],
        collapsed: true,
        link: '/shardeum/'  
      },
      {
        text: 'Massa',
        items: [
          { text: 'Project Overview', link: '/massa/project-overview' },
          { text: 'Node Setup Guide (Outdated)', link: '/massa/node-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/massa/faq' },
        ],
        collapsed: true,
        link: '/massa/'  
      },
      {
        text: 'Fleek Network',
        items: [
          { text: 'Project Overview', link: '/fleek-network/project-overview' },
          { text: 'Node Setup Guide (Outdated)', link: '/fleek-network/node-setup-guide' },
          { text: 'FAQ: Most Frequently Asked Questions', link: '/fleek-network/faq' },
        ],
        collapsed: true,
        link: '/fleek-network/'  
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
