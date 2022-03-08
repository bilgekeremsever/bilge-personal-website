<template>
  <div class="profile-card">
    <div class="profile-photo">
      <img src="~/assets/img/temp-pp.jpeg" />
    </div>
    <div class="info-area">
      <h1>Bilge Kerem <strong>SEVER</strong></h1>
      <span>Front End Software Engineer</span>
    </div>
    <div class="icon-area">
      <a
        v-for="socialIcon in socialIcons"
        :key="socialIcon.icon"
        :href="socialIcon.path"
        target="_blank"
      >
        <font-awesome-icon :icon="[socialIcon.prefix, socialIcon.icon]" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data: function () {
    return {
      socialIcons: [
        {
          icon: "linkedin",
          prefix: "fab",
          path: "https://www.linkedin.com/in/bilgekeremsever/",
        },
        {
          icon: "envelope",
          prefix: "far",
          path: "mailto: bilgekerems@gmail.com",
        },
        {
          icon: "github",
          prefix: "fab",
          path: "https://github.com/bilgekeremsever",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-card {
  height: calc(100vh - 1rem); //substract top padding of layout
  background-color: $profile-card-bg-color;

  @include media-breakpoint-up(lg) {
    flex: 0 0 320px;
    order: 2;
    height: 100%;
  }

  .profile-photo {
    width: 100%;
    height: 40%;
    position: relative;
    margin-bottom: calc($profile-card-pp-dimension / 2);

    // '::after pseudo-class' is needed in order to use clip-path, while freely placing any element in .profile-photo
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
      background: url("~assets/img/temp-profile-card-bg.jpg") center bottom /
        cover no-repeat;
    }

    img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      z-index: 2;
      height: $profile-card-pp-dimension;
      width: $profile-card-pp-dimension;
      border-radius: 50%;
    }
  }

  .info-area {
    padding: 1rem 0 2rem;
    & > * {
      text-align: center;
      display: block;
    }

    h1 {
      font-size: 1.75rem;
      font-weight: $font-weight-light;
    }
    span {
      font-family: $font-family-monospace;
      font-size: 1.25rem;
      color: $yellow;
      letter-spacing: -1px;
    }
  }
  .icon-area {
    text-align: center;
    font-size: 1.5rem;
    a {
      padding: 0.5rem;

      &:hover {
        color: $yellow;
      }
    }
  }
}
</style>