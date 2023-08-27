<script lang="ts" setup></script>

<template>
  <div class="page sections">
    <section class="main">
      <div>
        <h1>Hello World!</h1>
        <p>
          A short description introducing visitors to your business and the
          services you offer... A short description introducing visitors to your
          business and the services you offer... A short description introducing
          visitors to your business and the services you offer...
        </p>
        <ButtonAtom class="main__button" text="Test 123" />
      </div>

      <img src="https://picsum.photos/1024/700" alt="" class="main__image" />
    </section>

    <section class="main" id="section-1">
      <img src="https://picsum.photos/1024/700" alt="" class="main__image" />

      <div>
        <h1>Hello World!</h1>
        <p>
          A short description introducing visitors to your business and the
          services you offer... A short description introducing visitors to your
          business and the services you offer... A short description introducing
          visitors to your business and the services you offer...
        </p>
        <ButtonAtom class="main__button" text="Test 123" />
      </div>
    </section>

    <section class="main" id="section-2">
      <div>
        <h1>Hello World!</h1>
        <p>
          A short description introducing visitors to your business and the
          services you offer... A short description introducing visitors to your
          business and the services you offer... A short description introducing
          visitors to your business and the services you offer...
        </p>
        <ButtonAtom class="main__button" text="Test 123" />
      </div>

      <img src="https://picsum.photos/1024/700" alt="" class="main__image" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.sections {
  display: flex;
  flex-direction: column;
  gap: 256px;
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 128px;

  @include breakpoint(l) {
    grid-template-columns: 1fr;
  }

  &__button {
    margin-top: 16px;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    border-radius: var(--lr-border-radius);
    box-shadow: var(--lr-box-shadow);
    display: block;
  }
}
</style>
