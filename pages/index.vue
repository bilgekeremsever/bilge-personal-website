<template>
  <main>
    <div class="githubArea">
      <a href="https://github.com/bilgekeremsever" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <section>
      <h2><span>About Me</span></h2>
      <p>
        I aim to contribute the highest value to my working environment and by
        doing so improve myself. I work on front end development; includes
        building various web projects using variety of web technologies by
        considering UX and user behaviour while implementing interactive &
        responsive interfaces.
      </p>
      <p>
        I am comfortable with Javascript ES6-ESNext and adapting various
        libraries & frameworks such as React.js/Next.js, Vue.js/Nuxt.js in
        addition to HTML5, CSS3(SCSS). I actively use modern JS toolsets –
        webpack, babel, npm environment. I have experience on both providing and
        consuming RESTful API via JSON. I endure project management principles
        on scrum and able to use Git.
      </p>
    </section>
    <section>
      <h2><span>Skills</span></h2>
      <p>
        <strong>Front end – </strong> Semantic HTML5, CSS3 (SCSS, BEM, CSS
        modules, styled components), JavaScript ES6 & ESNext, React.js /
        Next.js, Vue.js / Nuxt.js, single page application (SPA). Web & mobile
        responsive solutions with browser version and cross-platform
        compatibility. Adobe PS & XD. Modern JS Toolset (Webpack, babel, npm
        environment)
      </p>
      <p>
        <strong>Programming paradigms – </strong>Object-oriented programming,
        functional programming. <br />
        <strong>Security practices – </strong> XSS, CSRF, CSP
      </p>
      <p>
        <strong>Management – </strong>Git, agile / scrum workflow, software
        development lifecycle (SDLC), managing tasks & meeting deadlines,
        ability to take initiative, documenting.
      </p>
      <p>
        <strong>Back end – </strong>Node.js, Express.js, SQL & NoSQL, ORM, PHP /
        Laravel
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
.githubArea {
  background-color: $yellow;
  position: relative;

  height: 2px;
  width: calc(100% - 1rem);
  margin: 1rem 0 2rem -1rem;

  @include media-breakpoint-up(lg) {
    width: calc(100%);
    margin: 0 0 3rem -4rem;
  }

  a {
    color: $yellow;
    position: absolute;
    right: -2rem;
    transform: translateY(-50%);
    @include media-breakpoint-up(lg) {
      right: -3rem;
    }

    svg {
      height: 2rem;
      width: 2rem;
      @include media-breakpoint-up(lg) {
        right: -3rem;
        height: 3rem;
        width: 3rem;
      }
    }
  }
}
</style>
