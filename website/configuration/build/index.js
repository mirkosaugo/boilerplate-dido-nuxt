export default {
  // Run ESLINT on save
  extend(config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },
  babel: {
    presets: [
      [
        '@nuxt/babel-preset-app',
        {
          useBuiltIns: 'entry',
          targets: { ie: 11, uglify: true }
        }
      ]
    ]
  },
  hotMiddleware: {
    client: {
      overlay: false
    }
  },
  postcss: [
    require('autoprefixer')({
      overrideBrowserslist: ['> 5%']
    })
  ]
}
