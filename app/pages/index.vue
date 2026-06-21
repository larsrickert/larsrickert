<script lang="ts" setup>
import DefaultLayout from "~/layouts/default.vue";

definePageMeta({ layout: false });
</script>

<template>
  <DefaultLayout no-padding>
    <HeroSection />

    <div class="onyx-grid-layout">
      <AboutSection />
      <ProjectsSection />
    </div>
  </DefaultLayout>
</template>
