<template>
  <div class="experience-timeline">
    <timeline>
      <timeline-item
        font-color="#fff"
        v-for="item in workExperienceItems"
        :key="item.workplace"
      >
        <span class="timeline-position">{{ item.position }}</span>
        <span class="timeline-workplace">{{ item.workplace }}</span>
        <span class="timeline-date">{{ item.date }}</span>
        <div class="timeline-description">
          <ul>
            <li v-for="(desc, i) in item.description" :key="i">
              {{ desc }}
            </li>
          </ul>
        </div>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
import "../node_modules/vue-cute-timeline/dist/index.css";

export default {
  name: "ExperienceTimeline",
  props: {
    workExperienceItems: Array,
  },
};
</script>

<style lang="scss" scoped>
$circle-dimension: 12px;

// Check link for ::v-deep selector: https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors.
// It is needed to target child component. If not, the data attribute will prevent that child from being selected.
::v-deep .timeline {
  font-family: inherit;
  margin: 10px calc($circle-dimension / 2);
  &::after {
    width: 2px;
    background-color: $nav-menu-border-color;
  }

  &-circle {
    left: -33px;
    width: $circle-dimension;
    height: $circle-dimension;
    background-color: $yellow;
    border: none;
  }

  span {
    display: block;
    margin-bottom: 0.5rem;
  }

  &-position {
    font-size: 1rem;
    font-weight: $headings-font-weight;
  }
  &-date,
  &-workplace {
    font-size: 0.875rem;
    font-weight: $font-weight-lighter;
  }
  &-workplace {
    margin-bottom: 0.25rem !important;
  }
  &-description {
    font-size: 0.9rem;
  }
}
</style>