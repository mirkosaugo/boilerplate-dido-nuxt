import env from './configuration/env'
import modules from './configuration/modules'
import plugins from './configuration/plugins'
import head from './configuration/head'
import styleResources from './configuration/styleResources'
import css from './configuration/css'
import build from './configuration/build'
import generate from './configuration/generate'
import workbox from './configuration/workbox'

export default {
  mode: 'universal',

  // Loader
  loading: false,

  // Enviroment variables
  env,

  // Modules
  modules,

  // Plugins
  plugins,

  // Headers of the page
  head,

  // Global Mixins
  styleResources,

  // Global Style (css, scss)
  css,

  // Build Configuration
  build,

  // Dynamic page generation
  generate,

  // Pwa library collection
  workbox
}
