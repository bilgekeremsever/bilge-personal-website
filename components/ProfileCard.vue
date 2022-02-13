<template>
  <div class="profile-card">
    <p>PROFILE CARD</p>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>

<style lang="scss" scoped>
.profile-card {
  height: calc(100vh - 1rem); //substract top padding of layout
  background-color: $profile-card-bg-color;

  @include media-breakpoint-up(lg) {
    flex: 0 0 300px;
    order: 2;
    height: 100%;
  }
}
</style>