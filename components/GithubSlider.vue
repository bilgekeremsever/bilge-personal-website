<template>
  <div class="github-carousel">
    <agile v-if="githubItems" :options="githubSlideOptions">
      <div v-for="item in githubItems" :key="item.id">
        <a :href="item.html_url" target="_blank" class="repo">
          <p class="repo-name">{{ item.name }}</p>
          <p class="repo-language">
            <span
              class="repo-language-color"
              style="background-color: #41b883"
              :style="{
                backgroundColor: githubLanguageColors[item.language],
              }"
            ></span>
            {{ item.language }}
          </p>
        </a>
      </div>
      <template slot="prevButton">
        <img src="~assets/icons/chevron-left.svg" alt="" />
      </template>
      <template slot="nextButton">
        <img src="~assets/icons/chevron-right.svg" alt="" />
      </template>
    </agile>
  </div>
</template>

<script>
export default {
  name: "GithubSlider",
  props: {
    githubItems: Array,
  },
  data() {
    return {
      githubSlideOptions: {
        slidesToShow: 1,
        infinite: false,
        navButtons: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              navButtons: true,
              slidesToShow: 2,
            },
          },
        ],
      },
      githubLanguageColors: {
        //the following repo can be fetched but unnecessary in this situation: https://github.com/ozh/github-colors
        Vue: "#41b883",
        JavaScript: "#f1e05a",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.repo {
  display: block;
  padding: 1rem;
  border: 1px solid $nav-menu-border-color;
  border-radius: 1rem;
  text-decoration: none;
  &-name {
    font-size: 0.875rem;
    font-weight: $font-weight-bolder;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-language {
    font-size: 0.75rem;
    margin-bottom: 0;

    &-color {
      vertical-align: middle;
      display: inline-block;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
    }
  }
}

// Check link for ::v-deep selector: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors.
// It is needed to target child component. If not, the data attribute will prevent that child from being selected.
::v-deep .agile {
  position: relative;
  margin-bottom: 1.5rem;

  &__list {
    z-index: 2;
    cursor: grab;
  }

  &__actions {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    z-index: 1;
  }

  &__dots {
    align-self: flex-end;
    margin-bottom: -1.5rem;
  }

  &__dot {
    display: inline-block;
    padding: 0 2px;
    button {
      padding: 0;
      border: 1px solid #fff;
      border-radius: 50%;
      background: transparent;
      width: 0.7rem;
      height: 0.7rem;
    }
    &--current button {
      background: radial-gradient(#fff 50%, transparent calc(50% + 1px));
    }
  }

  &__nav-button {
    color: #fff;
    background: transparent;
    border: none;
    padding: 0;

    &[disabled="disabled"] {
      opacity: 0.4;
    }

    img {
      width: 1.5rem;
    }

    &--prev {
      transform: translateX(-150%);
    }
    &--next {
      transform: translateX(150%);
    }
  }

  //create a space between two active slides on desktop
  &__slide--current {
    @include media-breakpoint-up(lg) {
      //first
      padding: 0 0.5rem 0 0;
    }
  }
  &__slide--current:not(.agile__slide--active) {
    @include media-breakpoint-up(lg) {
      //second
      padding: 0 0 0 0.5rem;
    }
  }
}
</style>