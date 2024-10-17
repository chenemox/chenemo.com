import type { Site, Link } from '@types'

const SITE: Site = {
  url: 'https://chenemo.com',
  title: 'EmoSite',
  author: {
    name: 'Chen Emo',
    avatar: '/favicon.svg',
  },
  description: "This Chen Eno's personal website",
}

const MENU: Link[] = [
  { name: '博客', url: '/posts' },
  { name: '专题', url: '/series' },
  { name: '朋友', url: '/friends' },
]

export { SITE, MENU }
