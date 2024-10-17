import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      fangyuan: ['FangYuan'],
    },
  },
  shortcuts: {
    'bg-base': 'bg-#e8e9eb dark:bg-#272624',
    'bg-header': 'bg-#ffffff dark:bg-#000000',
    'color-base': 'text-#363b45 dark:text-#C9C4CA',
    'color-header':
      ' text-#878c95 dark:text-#979ca5 hover:text-#000000 dark:hover:text-#ffffff font-500 tracking-widest',
    'color-band': 'text-#000000 dark:text-#ffffff font-800',
    'color-icon': 'stroke-#000 dark:stroke-#fff',
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
    transformerVariantGroup(),
  ],
})
