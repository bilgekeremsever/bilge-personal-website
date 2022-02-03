<template>
  <nav class="navigation-menu">
    <!-- since there is no submenu plan, I used links directly inside of the <nav> in order to benefit from nuxt-link-exact-active -->
    <NavigationMenuItem
      v-for="menuItem in menuItems"
      :key="menuItem.path"
      :menuItem="menuItem"
    />
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
    };
  },
};
</script>

<style lang="scss" scoped>


.navigation-menu {
  flex: 0 0 5rem;
  align-self: flex-start;
  background-color: $nav-menu-bg-color;
  margin: 1rem 10px 0 0;
  border: 1px solid $nav-menu-border-color;
}
</style>