// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './site.config'

import mdx from '@astrojs/mdx'

import expressiveCode from 'astro-expressive-code'

import compress from '@playform/compress'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  markdown: {
    syntaxHighlight: 'shiki',
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      themes: ['tokyo-night', 'catppuccin-latte'],
      defaultProps: {
        wrap: true,
      },
    }),
    mdx(),
    compress({
      Image: false,
      SVG: false,
    }),
  ],
})
