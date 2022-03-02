<template>
  <main>
    <section>
      <h2>
        <span>Github</span>
      </h2>
      <p v-if="$fetchState.pending">Loading....</p>
      <p v-else-if="$fetchState.error">Error while fetching mountains</p>
      <client-only v-else placeholder="Loading...">
        <agile :options="githubSlideOptions" class="github-carousel">
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
            <font-awesome-icon icon="chevron-left" />
          </template>
          <template slot="nextButton">
            <font-awesome-icon icon="chevron-right" />
          </template>
        </agile>
      </client-only>
    </section>

    <section>
      <h2>
        <span>Experience</span>
      </h2>
      <timeline>
        <timeline-item
          font-color="#fff"
          v-for="item in workExperienceItems"
          :key="item.workplace"
        >
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
    </section>
  </main>
</template>

<script>
import "../node_modules/vue-cute-timeline/dist/index.css";

export default {
  name: "IndexPage",
  data: function () {
    return {
      githubItems: [],
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
      workExperienceItems: [
        {
          workplace: "Crema",
          date: "March 2021 - March 2022",
          description: [
            "Developing various web projects mostly in finance industry from initial design through completion.",
            "Managing, planning and technically documenting the development process of component based CMS structure on top of UmbracoCMS.",
            "Working closely with designers and communicating clients to meet project requirements, goals and desired functionality.",
          ],
          role: "intern",
        },
        {
          workplace: "Nette Interactive",
          date: "August 2020 - February 2021",
          description: [
            "Developed B2B-B2C systems, e-commerce sites, corporate websites and specialized web projects in a software team to meet customers’ requests.",
            "Constructed fullstack projects by using various frameworks and solutions.",
            "Directly contacted and managed customers according to interests of the company.",
          ],
          role: "intern",
        },
        {
          workplace: "Eddra - Event Activities Agency",
          date: "February 2020 - July 2020",
          description: [
            "Taking role as both front end developer and Laravel based fullstack developer on various projects.",
            "Providing web service to mobile applications with token-based authentication.",
          ],
          role: "intern",
        },
        {
          workplace: "Ziraat Technology",
          date: "August 2018",
          description: [
            "Supported software engineering projects in agile work environment.",
            "Worked in a desktop project with C# using Entity Framework for customer services department.",
          ],
          role: "intern",
        },
        {
          workplace: "CTech",
          date: "June 2018",
          description: [
            "Translated techical concepts and informations into terms all parties could easily comprehend.",
            "Tested modular software products.",
            "Prepared reports on LTE technologies for future and current products of company.",
          ],
          role: "intern",
        },
      ],
      githubLanguageColors: {
        //the following repo can be fetched but unnecessary in this situation: https://github.com/ozh/github-colors
        Vue: "#41b883",
        JavaScript: "#f1e05a",
      },
    };
  },
  async fetch() {
    this.githubItems = await fetch(
      "https://api.github.com/users/bilgekeremsever/repos" // can be replaced with an env variable later on
    )
      .then((res) => res.json())
      .then((res) => res.filter((x) => !x.fork));
  },
};
</script>

<style lang="scss">
// CAREFUL! Styling is not scoped in this page due to runtime generated 'slider' & 'timeline' elements
.github-carousel {
  position: relative;

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

  .agile {
    &__actions {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      align-items: center;
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
      font-size: 1.5rem;
      padding: 0;

      &[disabled="disabled"] {
        opacity: 0.4;
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
}

$circle-dimension: 12px;
.timeline {
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

  &-workplace {
    font-size: 1rem;
    font-weight: $headings-font-weight;
  }
  &-date {
    font-size: 0.875rem;
    font-weight: $font-weight-lighter;
  }
  &-description {
    font-size: 0.9rem;
  }
}
</style>
