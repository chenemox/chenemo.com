import type { Site, Menu } from '@types'

const SITE: Site = {
  url: 'https://chenemo.com',
  title: 'EmoSite',
  author: {
    name: 'Chen Emo',
    avatar: '/favicon.svg',
  },
  description: "This Chen Eno's personal website",
}

const MENUS: Menu[] = [
  {
    name: '文章',
    children: [
      { name: '全部', url: '/posts' },
      { name: '分类', url: '/categories' },
      { name: '标签', url: '/tags' },
    ],
  },
  {
    name: '专题',
    // url: '/series',
    children: [
      { name: 'Python网站构建', url: '/posts' },
      { name: 'Rust源码解析', url: '/categories' },
      { name: 'Golang语言初体验', url: '/tags' },
    ],
  },
  { name: '朋友', url: '/friends' },
]

export { SITE, MENUS }
