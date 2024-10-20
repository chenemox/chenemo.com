interface Author {
  name: string
  avatar: string
}

interface Link {
  name: string
  url: string
  icon?: string
}

export interface Site {
  url: string
  title: string
  description: string
  author: Author
}

export interface HeadInfo {
  title: string
  description?: string
  author?: string
  keywords?: string[]
  canonicalURL?: string
  ogImage?: string
  ogType?: string
}

export interface Menu {
  name: string
  url?: string
  icon?: string
  children?: Link[]
}
