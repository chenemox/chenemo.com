export interface Site {
  url: string
  title: string
  description: string
  author: Author
}

interface Author {
  name: string
  avatar: string
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

export interface Link {
  name: string
  url: string
  icon?: string
}
