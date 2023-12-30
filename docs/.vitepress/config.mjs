import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "deNodes Hub",

  description: "deNodes Hub description",

  themeConfig: {
    search: {
      provider: 'local'
    },

    // Using Google Analytics
    head: [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'TAG_ID');`
      ]
    ],

    logo: '/Logo.svg',

    nav: [
      { text: 'Homepage', link: 'https://denodes.xyz' },
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
      { icon: 'github', link: 'https://github.com/denodesxyz' },
      { icon: 'x', link: 'https://x.com/_denodes' },
      { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
      style="fill:#000000;">
      <g fill="#8a8a8a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z"></path></g></g>
      </svg>`}, link: "https://t.me/deNodes" },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/denodes' }
    ]
  }
})
