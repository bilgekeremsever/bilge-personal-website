<template>
  <NuxtLink
    :to="{ path: menuItem.path }"
    custom
    v-slot="{ href, isActive, isExactActive }"
  >
    <li
      class="navigation-menu-item"
      :class="[
        isActive && 'nuxt-link-active',
        isExactActive && 'nuxt-link-exact-active',
      ]"
    >
      <a @click="clickLink(href)">
        <font-awesome-icon :icon="['fas', menuItem.icon]" />{{ menuItem.text }}
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
  methods: {
    clickLink(href) {
      this.$router.push(
        {
          path: href,
        },
        () => {
          this.$emit("click-link");
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-menu-item {
  padding: 12px 0;
  display: block;
  border-right: 1px solid $nav-menu-border-color;
  transition: border-right 0.2s ease-out;

  &.nuxt-link-exact-active {
    border-right: 1px solid transparent;
    a {
      border: 1px solid $nav-menu-border-color;
      border-radius: 50%;
      transform: translateX(2.5rem);
    }
  }
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: $menu-list-item-dimension;
    width: $menu-list-item-dimension;
    text-decoration: none;
    text-align: center;
    background-color: $nav-menu-bg-color;

    svg {
      display: block;
    }
  }
}
</style>