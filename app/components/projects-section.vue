<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects", () => queryCollection("projects").all());
</script>

<template>
  <SectionContainer id="projects" class="projects">
    <div class="projects__header">
      <p class="projects__subtitle app__subtitle">{{ $t("projects.selectedWork") }}</p>
      <OnyxHeadline class="app__h2" is="h2"> {{ $t("projects.thingsIveBuilt") }} </OnyxHeadline>
    </div>

    <div class="onyx-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        class="onyx-grid-span-4"
        :project
      />
    </div>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.projects {
  &__header {
    margin-bottom: var(--onyx-density-2xl);
  }

  &__subtitle {
    color: var(--onyx-color-text-icons-warning-intense);
    margin-bottom: var(--onyx-radius-lg);
  }
}
</style>
