export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bilge K. Sever",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/hap8mjy.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/style/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/vueAgile.js" },
    { src: "~plugins/vueCuteTimeline.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/fontawesome",
      {
        icons: {
          solid: [
            "faHome",
            "faBriefcase",
            "faAt",
            "faChevronRight",
            "faChevronLeft",
          ],
          brands: ["faLinkedin", "faGithub"],
          regular: ["faEnvelope"],
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-agile"],
  },

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ["~assets/style/vendor/*.scss", "~assets/style/abstracts/*.scss"],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-router/
  router: {
    // Skip profile card on routed page by scrolling in mobile view.
    // Due to the fact that there is no 'body vertical overflow (scrolling)' on desktop view, this configuration doesn't need more specification.
    scrollBehavior(to, from, savedPosition) {
      if (window.innerWidth < 992)
        return savedPosition ?? { x: 0, y: window.innerHeight };
      return savedPosition ?? { x: 0, y: 0 };
    },
  },
};
