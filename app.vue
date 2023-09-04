<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
  </div>

  <TheFooter />
</template>

<style lang="scss">
#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
