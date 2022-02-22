<template>
  <NuxtLink
    :to="{ path: menuItem.path }"
    custom
    v-slot="{ navigate, href, isActive, isExactActive }"
  >
    <li
      class="navigation-menu-item"
      :class="[
        isActive && 'nuxt-link-active',
        isExactActive && 'nuxt-link-exact-active',
      ]"
    >
      <a :href="href" @click="navigate">
        <font-awesome-icon :icon="menuItem.icon" />{{ menuItem.text }}
      </a>
    </li>
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
.navigation-menu-item {
  display: block;

  @include media-breakpoint-up(lg) {
    padding: 12px 0;
    border-right: 1px solid $nav-menu-border-color;
    transition: border-right 0.2s ease-out;
  }

  &.nuxt-link-exact-active {
    border-radius: 50%;

    @include media-breakpoint-up(lg) {
      border-right: 1px solid transparent;
    }
    a {
      &::after {
        width: 100%;
      }
      @include media-breakpoint-up(lg) {
        border-radius: 50%;

        border: 1px solid $nav-menu-border-color;
        transform: translateX(2.5rem);
      }
    }
  }
  a {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: $menu-list-item-dimension;
    width: $menu-list-item-dimension;
    text-decoration: none;
    text-align: center;
    background-color: $nav-menu-bg-color;

    &::after {
      content: "";
      position: absolute;
      bottom: 1rem;
      left: 0;
      height: 2px;
      width: 0;
      background-color: $yellow;

      @include media-breakpoint-up(lg) {
        content: none;
      }
    }

    svg {
      display: block;
    }
  }
}
</style>