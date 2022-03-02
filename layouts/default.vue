<template>
  <div id="layout-default">
    <div class="background"></div>
    <div class="app-wrapper">
      <ProfileCard />
      <div id="page-wrapper">
        <Nuxt />
      </div>
      <NavigationMenu />
    </div>
  </div>
</template>

<style lang="scss">
// layout specific
#layout-default {
  height: 100%;
  width: 100%;
  padding: $default-layout-padding-y;
  @include media-breakpoint-up(md) {
    padding: $default-layout-padding-y 5rem;
  }
  @include media-breakpoint-up(lg) {
    padding: 0;
    height: 100vh;
  }

  .background {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #000;
    top: 0px;
    left: 0px;
    z-index: -9;

    &::before {
      content: "";
      background: center/cover no-repeat url("~assets/img/temp-background.png"); // temporary
      position: fixed;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      opacity: 0.4;
    }
  }

  .app-wrapper {
    height: auto;
    width: 100%;
    max-width: map-get($container-max-widths, "sm");
    margin: auto;

    @include media-breakpoint-up(lg) {
      max-width: map-get($grid-breakpoints, "xl");
      position: absolute;
      height: 85vh;
      width: 95vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
    }

    @media (min-width: 1600px) {
      max-width: map-get($grid-breakpoints, "xxl");
    }
  }

  #page-wrapper {
    height: auto;
    margin-bottom: 1rem;
    background-color: $inpage-bg-color;
    padding: 1rem;

    @include media-breakpoint-up(lg) {
      margin-bottom: 0;
      flex: 1 0 33%;
      padding: 3rem;
      order: 3;
      height: 95%;
      overflow-y: scroll;
    }
  }
}
</style>