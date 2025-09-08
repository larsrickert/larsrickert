<script lang="ts" setup>
import profilePicture from "@/assets/images/lars-rickert.webp";

definePageMeta({ layout: false });

const { t } = useI18n();

useHead({
  title: computed(() => t("home.pageName")),
});
</script>

<template>
  <OnyxPageLayout no-padding>
    <section class="hero onyx-grid-layout onyx-text--large">
      <OnyxHeadline is="h2" class="hero__headline text--reflect text--large">
        {{ $t("iAmA") }}
        <span class="text--gradient">{{ $t("developer") }}</span>
      </OnyxHeadline>

      <p>
        {{ $t("home.hero.description") }}
      </p>

      <div>
        <OnyxImage
          :src="profilePicture"
          alt="Profile image of Lars Rickert"
          :width="256"
          :height="256"
          shape="circle"
        />

        <OnyxHeadline is="h1" class="hero__name text--gradient">Lars Rickert</OnyxHeadline>
      </div>
    </section>
  </OnyxPageLayout>
</template>

<style lang="scss" scoped>
:deep(.onyx-page__main) {
  background: linear-gradient(
    135deg,
    var(--onyx-color-base-primary-100) -20%,
    var(--onyx-color-base-background-tinted) 50%
  );
}

.hero {
  min-height: calc(100dvh - var(--onyx-nav-bar-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--onyx-density-3xl);
  padding-block: var(--onyx-density-3xl);

  &__headline {
    margin-bottom: var(--onyx-density-3xl);

    .text--gradient {
      display: inline-block;
    }
  }

  &__name {
    margin-top: var(--onyx-density-md);
  }
}
</style>
