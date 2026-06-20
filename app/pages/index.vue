<script lang="ts" setup>
definePageMeta({ layout: false });
</script>

<template>
  <OnyxPageLayout no-padding>
    <HeroSection />

    <div class="onyx-grid-layout">
      <AboutSection />
    </div>

    <div class="onyx-grid-layout">
      <ProjectsSection />
    </div>
  </OnyxPageLayout>
</template>
