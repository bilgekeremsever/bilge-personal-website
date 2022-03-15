export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bilge Sever",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-57x120x12057.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
      { rel: "icon", type:"image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
      { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type:"image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type:"image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
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
    scrollBehavior(to, from, savedPosition) {
      if (window.innerWidth < 992) {
        // get position of the page-wrapper relative to document
        const totalScrolled =
          window.pageYOffset || document.documentElement.scrollTop;
        const pageWrapperScrollPosition = document
          .querySelector("#page-wrapper")
          .getBoundingClientRect().top;
        const toBeScrolled = totalScrolled + pageWrapperScrollPosition;
        return savedPosition ?? { x: 0, y: toBeScrolled };
      }
      return savedPosition ?? { x: 0, y: 0 };
    },
  },
};
