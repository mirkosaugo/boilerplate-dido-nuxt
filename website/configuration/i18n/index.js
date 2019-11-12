import it from 'translation/it_IT'
import en from 'translation/en_US'

export default {
  locales: [
    {
      code: 'it',
      iso: 'it-IT'
    },
    {
      code: 'en',
      iso: 'en-EN'
    }
  ],
  defaultLocale: 'it',
  vueI18n: {
    fallbackLocale: 'it',
    messages: {
      it: it,
      en: en
    }
  },
  parsePages: false, // Disable acorn parsing
  pages: {}
}
