<template>
  <OnyxAppLayout class="onyx-grid-max-md onyx-grid-center">
    <template #navBar>
      <NavBar />
    </template>

    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <!-- using a slot here so we can re-use the app layout inside error.vue -->
      <slot> <NuxtPage /></slot>

      <CursorGlow />
    </NuxtLayout>
  </OnyxAppLayout>
</template>
