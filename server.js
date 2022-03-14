// https://nuxtjs.org/docs/internals-glossary/nuxt-render
// This file is used as an entry point on shared host powered by cPanel.

const { loadNuxt, build } = require("nuxt");

const app = require("express")();
const port = process.env.PORT || 3000;

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt("start");

  // Render every route with Nuxt
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, "0.0.0.0");
}

start();
