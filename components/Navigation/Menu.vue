<template>
  <!-- a valid html semantic I came up with. Indicator communication needs to be scripted as div is not inside of <ul> -->
  <nav class="navigation-menu">
    <ul>
      <NavigationMenuItem
        v-for="menuItem in menuItems"
        :key="menuItem.icon"
        :menuItem="menuItem"
      />
    </ul>
    <div
      class="navigation-indicator"
      :data-nav-indicator-index="navIndicatorIndex"
    ></div>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
  data: function () {
    return {
      menuItems: [
        //prefix not needed since shorthand <fa /> assumes 'fas' as prefix
        { icon: "home", path: "/", text: "About" },
        { icon: "briefcase", path: "/works", text: "Works" },
        { icon: "at", path: "/contact", text: "Contact" },
      ],
      navIndicatorIndex: 0,
    };
  },
  methods: {
    setNavIndicatorIndex() {
      const routeIndex = this.menuItems.findIndex(
        (item) => item.path == this.$route.path
      );
      this.navIndicatorIndex = routeIndex;
    },
  },
  watch: {
    $route() {
      this.setNavIndicatorIndex();
    },
  },
  created: function () {
    this.setNavIndicatorIndex();
  },
};
</script>

<style lang="scss" scoped>
.navigation-menu {
  position: sticky;
  bottom: 0;
  left: 0;
  background: $nav-menu-bg-color;
  z-index: 9;


  @include media-breakpoint-up(lg) {
    flex: 0 0 calc($menu-link-dimension);
    order: 1;
    align-self: flex-start;
    margin: 0 0.75rem 0 0;
    height: auto;
    width: $menu-link-dimension;
    background: transparent;
    position: relative;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid $nav-menu-border-color;
    @include media-breakpoint-up(lg) {
      display: block;
      justify-content: unset;
      border: none;
    }
  }

  .navigation-indicator {
    @include media-breakpoint-up(lg) {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      box-shadow: -1px 1px 0 0 $nav-menu-border-color,
        -1px -1px 0 0 $nav-menu-border-color;

      transition: all 0.2s ease-out;

      //$nav-menu-border-color and $nav-menu-bg-color size has - & + 1px for eliminating serrated borders
      background-image: radial-gradient(
        circle at 4.75rem $menu-indicator-radius,
        transparent 0,
        transparent calc($menu-indicator-radius - 1px),
        $nav-menu-border-color $menu-indicator-radius,
        $nav-menu-bg-color calc($menu-indicator-radius + 1px)
      );
      background-repeat: repeat-y;
      background-size: $menu-link-dimension
        calc($menu-list-item-vertical * 3);

      // move indicator according to routed page
      @for $i from 0 through $number-of-menu-items - 1 {
        &[data-nav-indicator-index="#{$i}"] {
          background-position: 0 calc($menu-list-item-vertical * $i);
        }
      }
    }
  }
}
</style>