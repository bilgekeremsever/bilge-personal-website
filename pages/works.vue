<template>
  <main>
    <section>
      <h2>
        <span>Github</span>
      </h2>
      <p v-if="$fetchState.pending">Loading....</p>
      <p v-else-if="$fetchState.error">Error while fetching GitHub data.</p>
      <client-only v-else placeholder="Loading...">
        <GithubSlider :githubItems="githubItems" />
      </client-only>
    </section>

    <section>
      <h2>
        <span>Experience</span>
      </h2>
      <ExperienceTimeline :workExperienceItems="workExperienceItems" />
    </section>
  </main>
</template>

<script>

export default {
  name: "IndexPage",
  data: function () {
    return {
      githubItems: [],
      workExperienceItems: [
        {
          position: "Front End Developer",
          workplace: "Crema Communication Services LTD, Remote / Turkey",
          date: "March 2021 - March 2022",
          description: [
            "Developing various web projects mostly in finance industry from initial design through completion.",
            "Managing, planning and technically documenting the development process of component based CMS structure on top of UmbracoCMS.",
            "Working closely with designers and communicating clients to meet project requirements, goals and desired functionality.",
          ],
          role: "intern",
        },
        {
          position: "Software Engineer",
          workplace: "Nette Interactive, Bursa / Turkey",
          date: "August 2020 - February 2021",
          description: [
            "Developed B2B-B2C systems, e-commerce sites, corporate websites and specialized web projects in a software team to meet customers’ requests.",
            "Constructed fullstack projects by using various frameworks and solutions.",
            "Directly contacted and managed customers according to interests of the company.",
          ],
          role: "intern",
        },
        {
          position: "Software Expert",
          workplace: "Event Activities Agency EDDRA, Istanbul / Turkey ",
          date: "February 2020 - July 2020",
          description: [
            "Taking role as both front end developer and Laravel based fullstack developer on various projects.",
            "Providing web service to mobile applications with token-based authentication.",
          ],
          role: "intern",
        },
        {
          position: "Software Engineering Intern",
          workplace: "Ziraat Technology INC, Istanbul / Turkey",
          date: "August 2018",
          description: [
            "Supported software engineering projects in agile work environment.",
            "Worked in a desktop project with C# using Entity Framework for customer services department.",
          ],
          role: "intern",
        },
        {
          position: "Software Engineering Intern",
          workplace: "CTech IT Industry and Trade INC, Istanbul / Turkey",
          date: "June 2018",
          description: [
            "Translated techical concepts and informations into terms all parties could easily comprehend.",
            "Tested modular software products.",
            "Prepared reports on LTE technologies for future and current products of company.",
          ],
          role: "intern",
        },
      ],
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

</style>
