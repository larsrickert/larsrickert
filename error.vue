<script lang="ts" setup>
const error = useError();

const notFoundMessage = computed(() => {
  if (!error.value || !("statusCode" in error.value)) return;
  return `Ups! The page "${error.value.url}" does not exist. Are you looking for something else?`;
});
</script>

<template>
  <NuxtLayout name="404">
    <div>
      <TheHeader />
      <main class="page">
        <h1>Page not found</h1>
        <p>{{ notFoundMessage }}</p>
        <ButtonAtom class="action" text="Take me home" href="/" replace />
      </main>
    </div>

    <TheFooter />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.action {
  margin-top: 32px;
}
</style>
