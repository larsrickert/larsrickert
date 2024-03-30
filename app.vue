<script lang="ts" setup>
import { OnyxAppLayout } from "sit-onyx";
</script>

<template>
  <OnyxAppLayout class="onyx-grid-max-md">
    <template #navBar> <TheHeader /> </template>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </OnyxAppLayout>
</template>

<style lang="scss" scoped>
// fix OnyxAppLayout so that scroll to anchor/hash is working
.onyx-app {
  width: 100%;
  height: 100%;

  :deep(.onyx-app__page) {
    overflow: initial;
  }

  :deep(.onyx-app__nav) {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
