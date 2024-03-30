<script lang="ts" setup>
import lightBulbShine from "@sit-onyx/icons/light-bulb-shine.svg?raw";
import lightBulb from "@sit-onyx/icons/light-bulb.svg?raw";
import { OnyxButton, OnyxLink } from "sit-onyx";
import budgetAppDark from "~/assets/images/budget-app-dark.webp";
import budgetAppLight from "~/assets/images/budget-app-light.webp";
import discordPlayerPlusDark from "~/assets/images/discord-player-plus-dark.webp";
import discordPlayerPlusLight from "~/assets/images/discord-player-plus-light.webp";
import friedhofsgaertnereiBell from "~/assets/images/friedhofsgaertnerei-bell.webp";
import pgHerne from "~/assets/images/pg-herne.webp";
import schreibmentoren from "~/assets/images/schreibmentoren.webp";
import vorlesungsplanPlusDark from "~/assets/images/vorlesungsplan-plus-dark.webp";
import vorlesungsplanPlusLight from "~/assets/images/vorlesungsplan-plus-light.webp";

definePageMeta({
  layout: "canvas",
});

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
const yearsOfExperience = getTimeDiffInYears(new Date(2017, 1, 1));

const allProjects = [
  "Die Schreibmentoren",
  "Quaiso (MediaBees)",
  "Come back (MediaBees)",
  "h2r Personalberatung (MediaBees)",
  "Pattberg (MediaBees)",
  "ZW-eck (MediaBees)",
  "Budget App",
  "Discord Player Plus",
  "Vorlesungsplan+",
  "Friedhofsgärtnerei Bell",
  "Pestalozzi Gymnasium Herne",
  "MH-Solution",
  "Gitarrenunterricht Helmstadt",
  "Rauner Stiftung (MediaBees)",
  "Dental on Tour (MediaBees)",
  "BoniPlus (MediaBees)",
  "Goedicke (MediaBees)",
  "StadtSportBund Herne (MediaBees)",
  "Denise Iwanek (MediaBees)",
  "Stapleline (MediaBees)",
  "nginx proxy",
  "Intersport",
];
</script>

<template>
  <div class="onyx-grid-span-16">
    <TheHero>
      <OnyxButton
        :label="$t('home.toProjects')"
        mode="outline"
        @click="$router.replace('#projects')"
      />
    </TheHero>

    <section id="about" class="section about">
      <div class="page-content">
        <HeadlineAtom
          :headline="$t('home.about.headline')"
          :background-text="$t('home.about.backgroundHeadline')"
        />

        <div class="about__content">
          <div>
            <i18n-t
              keypath="home.about.description.text"
              tag="p"
              scope="global"
            >
              <template #schwarzItLink>
                <OnyxLink href="https://it.schwarz" target="_blank">
                  Schwarz IT
                </OnyxLink>
              </template>

              <template #mediaBeesLink>
                <OnyxLink href="https://mediabees.de" target="_blank">
                  MediaBees
                </OnyxLink>
              </template>

              <template #email>
                <OnyxLink href="mailto:info@lars-rickert.de">
                  {{ $t("home.about.description.emailText") }}
                </OnyxLink>
              </template>
            </i18n-t>

            <ul>
              <li>{{ $t("home.about.services.vue") }}</li>
              <li>{{ $t("home.about.services.api") }}</li>
              <li>{{ $t("home.about.services.webdesign") }}</li>
              <li>{{ $t("home.about.services.onlineShops") }}</li>
              <li>{{ $t("home.about.services.wordPress") }}</li>
              <li>{{ $t("home.about.services.apps") }}</li>
              <li>{{ $t("home.about.services.componentLibrary") }}</li>
              <li>{{ $t("home.about.services.ciCd") }}</li>
              <li>{{ $t("home.about.services.consulting") }}</li>
            </ul>
          </div>

          <div>
            <div class="about__facts">
              <FactCardMolecule
                :value="yearsOfExperience"
                :text="$t('home.about.facts.experience')"
              />
              <FactCardMolecule
                :value="allProjects.length"
                :text="$t('home.about.facts.completedProjects')"
              />
              <FactCardMolecule
                :value="2"
                :text="$t('home.about.facts.artificialIntelligence')"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="page-content">
        <HeadlineAtom
          :headline="$t('home.portfolio')"
          :background-text="$t('home.projects')"
        />

        <OnyxButton
          class="projects__dark-switch"
          :label="isProjectsDark ? $t('home.lights.on') : $t('home.lights.off')"
          mode="outline"
          :icon="isProjectsDark ? lightBulb : lightBulbShine"
          @click="isProjectsDark = !isProjectsDark"
        />

        <div class="cards">
          <ProjectCardMolecule
            v-for="project of projects"
            :key="project.name"
            v-bind="project"
            :dark="isProjectsDark"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.section {
  scroll-margin-top: 96px;

  @include breakpoint(l) {
    scroll-margin-top: 64px;
  }

  &:nth-child(even) {
    background-color: var(--onyx-color-base-background-blank);
  }
}

.about {
  &__content {
    margin-top: 64px;
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 64px;
    white-space: pre-wrap;

    @include breakpoint(l) {
      grid-template-columns: 1fr;
    }
  }

  &__facts {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;

    .card {
      flex: 1 1 200px;
    }
  }
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
  &__dark-switch {
    display: flex;
    margin: 48px auto;
  }
}
</style>
