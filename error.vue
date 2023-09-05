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
        <h1>{{ $t("notFound.pageName") }}</h1>
        <p v-if="error && 'statusCode' in error">
          {{ $t("notFound.description", { url: error.url }) }}
        </p>
        <ButtonAtom
          class="action"
          :text="$t('notFound.goHome')"
          href="/"
          replace
        />
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
