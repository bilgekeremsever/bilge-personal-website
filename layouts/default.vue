<template>
  <div class="background">
    <div class="app-wrapper">
      <NavigationMenu />
      <ProfileCard />
      <div class="page-wrapper">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

// layout specific
.background {
  background-color: #292d3e; // temporary
  height: 100vh;
  width: 100vw;
  position: relative;
}

.app-wrapper {
  height: 90vh;
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
}

.page-wrapper {
  flex-shrink: 0;
  flex-grow: 1;
  background-color: $inpage-bg-color;
  padding: 1rem;
  height: 95%;
}
</style>