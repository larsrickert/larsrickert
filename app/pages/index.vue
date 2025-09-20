<script lang="ts" setup>
import profilePicture from "@/assets/images/lars-rickert.webp";
import { iconPlaceholder } from "@sit-onyx/icons";

definePageMeta({ layout: false });

const { t } = useI18n();

useHead({
  title: computed(() => t("home.pageName")),
});
</script>

<template>
  <OnyxPageLayout no-padding>
    <section class="hero onyx-grid-layout onyx-text--large">
      <OnyxImage
        :src="profilePicture"
        alt="Profile image of Lars Rickert"
        :width="256"
        :height="256"
        shape="circle"
      />

      <div>
        <OnyxHeadline is="h2" class="hero__headline text--reflect text--gradient text--3xl">
          Lars Rickert
        </OnyxHeadline>

        <p class="text--lg">
          Full-Stack Web Developer passionate about creating useful and beautiful digital
          experiences.
        </p>

        <div class="hero__socials onyx-density-cozy">
          <OnyxIconButton label="Label" :icon="iconPlaceholder" color="neutral" />
          <OnyxIconButton label="Label" :icon="iconPlaceholder" color="neutral" />
        </div>
      </div>

      <div class="onyx-grid hero__cards">
        <OnyxCard class="onyx-grid-span-4">
          <OnyxHeadline is="h3" class="text--gradient text--2xl">8+</OnyxHeadline>
          <div class="onyx-text--large text--soft">Years of experience</div>
        </OnyxCard>

        <OnyxCard class="onyx-grid-span-4">
          <OnyxHeadline is="h3" class="text--gradient text--2xl">Full-Stack</OnyxHeadline>
          <div class="onyx-text--large text--soft">Vue.js, TypeScript, Go</div>
        </OnyxCard>

        <OnyxCard class="onyx-grid-span-4">
          <OnyxHeadline is="h3" class="text--gradient text--2xl">AI</OnyxHeadline>
          <div class="onyx-text--large text--soft">2 works on AI</div>
        </OnyxCard>
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
    font-weight: 600;
  }

  &__cards {
    width: 100%;
  }

  &__socials {
    margin-top: var(--onyx-density-md);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--onyx-density-xs);
  }
}
</style>
