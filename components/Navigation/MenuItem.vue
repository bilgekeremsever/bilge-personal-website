<template>
  <NuxtLink :to="{ path: menuItem.path }">
    <font-awesome-icon :icon="['fas', menuItem.icon]" /> {{ menuItem.text }}
  </NuxtLink>
</template>

<script>
export default {
  name: "NavigationMenuItem",
  props: {
    menuItem: Object,
  },
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: $menu-list-item-dimension;
  width: $menu-list-item-dimension;
  text-decoration: none;
  text-align: center;
  margin: $menu-list-item-margin-y 0;
  padding: $menu-list-item-padding;
  border-radius: 50%;
  background-color: $nav-menu-bg-color;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: radial-gradient(
      ellipse at right,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
  &:last-of-type::before {
    height: 0;
  }

  &.nuxt-link-exact-active {
    transform: translateX(2rem);
    border: 1px solid $nav-menu-border-color;
    &:before {
      height: 0;
    }

    
  }
  svg {
    display: block;
  }
}
</style>