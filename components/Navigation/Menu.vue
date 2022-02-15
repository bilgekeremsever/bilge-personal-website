<template>
  <!-- a valid html semantic I came up with. Indicator communication needs to be scripted as div is not inside of <ul> -->
  <nav class="navigation-menu">
    <ul>
      <NavigationMenuItem
        v-for="menuItem in menuItems"
        :key="menuItem.path"
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

  @include media-breakpoint-up(lg) {
    flex: 0 0 calc($menu-list-item-dimension);
    order: 1;
    align-self: flex-start;
    margin: 0 10px 0;
    height: auto;
    width: calc($menu-list-item-dimension + 1px); // +1 for border of <li>
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

      // below structure only works because this page has no scroll on desktop
      //$nav-menu-border-color and $nav-menu-bg-color size has +1px for eliminating serrated borders
      background-image: radial-gradient(
        circle,
        transparent 0,
        transparent $menu-indicator-diameter,
        $nav-menu-border-color calc($menu-indicator-diameter + 1px),
        $nav-menu-bg-color calc($menu-indicator-diameter + 2px)
      );
      background-repeat: no-repeat;
      background-attachment: fixed;

      // move indicator according to routed page
      $menu-item-max-index: 2;
      @for $i from 0 through $menu-item-max-index {
        &[data-nav-indicator-index="#{$i}"] {
          background-position: calc($menu-list-item-dimension + 1rem)
            $menu-indicator-diameter +
            (6rem * $i);
        }
      }
    }
  }
}
</style>