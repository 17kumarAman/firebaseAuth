// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt','@nuxtjs/tailwindcss','@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: 'plugins/i18n.config.ts' ,
    strategy: 'prefix_except_default' ,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }

  }

})
