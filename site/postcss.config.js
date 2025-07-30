import autoprefixer from 'autoprefixer'
import { PurgeCSS } from 'purgecss'

const isDev = process.env.NODE_ENV === 'development'

const purgePlugin = () => {
  return {
    postcssPlugin: 'purgecss',
    Once(root, helpers) {
      if (isDev) return
      
      const purge = new PurgeCSS()
      return purge.purge({
        content: [
          './index.html',
          './src/**/*.{vue,js,ts,jsx,tsx}',
        ],
        css: [{ raw: root.toString() }],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /glitch-.*/,
          'container',
          'container__row_between',
          'pulse',
          'digital-corruption',
          /^[a-zA-Z][a-zA-Z0-9_-]*__[a-zA-Z0-9_-]*___[a-zA-Z0-9_-]*$/,
        ],
      })
    }
  }
}
purgePlugin.postcss = true

export default {
  plugins: {
    autoprefixer: {},
  },
}
// export default {
//   plugins: [
//     autoprefixer(),
//     ...(isDev ? [] : [purgePlugin()])
//   ]
// }