<script lang="ts" setup>
import budgetAppDark from "~/assets/images/budget-app-dark.webp";
import budgetAppLight from "~/assets/images/budget-app-light.webp";
import discordPlayerPlusDark from "~/assets/images/discord-player-plus-dark.webp";
import discordPlayerPlusLight from "~/assets/images/discord-player-plus-light.webp";
import friedhofsgaertnereiBell from "~/assets/images/friedhofsgaertnerei-bell.webp";
import pgHerne from "~/assets/images/pg-herne.webp";
import schreibmentoren from "~/assets/images/schreibmentoren.webp";
import vorlesungsplanPlusDark from "~/assets/images/vorlesungsplan-plus-dark.webp";
import vorlesungsplanPlusLight from "~/assets/images/vorlesungsplan-plus-light.webp";

const localePath = useLocalePath();

const projects = [
  {
    name: "Budget App",
    image: budgetAppLight,
    darkImage: budgetAppDark,
    href: "https://budget-app.de",
  },
  {
    name: "Discord Player Plus",
    image: discordPlayerPlusLight,
    darkImage: discordPlayerPlusDark,
    href: "https://discordplayerplus.lars-rickert.de",
  },
  {
    name: "Vorlesungsplan+",
    image: vorlesungsplanPlusLight,
    darkImage: vorlesungsplanPlusDark,
    href: "https://vorlesungsplan.lars-rickert.de",
  },
  {
    name: "Friedhofsgärtnerei Bell",
    image: friedhofsgaertnereiBell,
    href: "https://www.friedhofsgaertnerei-bell.de",
  },
  {
    name: "Die Schreibmentoren",
    image: schreibmentoren,
    href: "https://schreibmentoren.de",
  },
  {
    name: "Pestalozzi Gymnasium Herne",
    image: pgHerne,
    href: "https://pgherne.de",
  },
];

const isProjectsDark = ref(false);
</script>

<template>
  <div>
    <TheHero>
      <ButtonAtom :text="$t('home.toProjects')" href="#projects" />
    </TheHero>

    <div class="page sections">
      <section class="projects" id="projects">
        <HeadlineAtom
          :headline="$t('home.portfolio')"
          :background-text="$t('home.projects')"
        />

        <ButtonAtom
          class="projects__dark-switch"
          :text="isProjectsDark ? $t('home.lights.on') : $t('home.lights.off')"
          @click="isProjectsDark = !isProjectsDark"
        />

        <div class="cards">
          <nuxt-link
            v-for="project of projects"
            :key="project.name"
            :href="project.href"
            target="_blank"
          >
            <ProjectCardMolecule v-bind="project" :dark="isProjectsDark" />
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.sections {
  display: flex;
  flex-direction: column;
  gap: 256px;
}

.cards {
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));

  @include breakpoint(m) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.projects {
  scroll-margin-top: 128px;

  &__dark-switch {
    display: flex;
    margin: 48px auto;
  }
}
</style>
