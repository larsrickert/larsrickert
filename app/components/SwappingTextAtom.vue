<script lang="ts" setup>
const props = defineProps<{
  /** Should contain 5 words. */
  words: string[];
}>();
</script>

<template>
  <div class="words">
    <span v-for="word of props.words" :key="word" class="words__item">
      {{ word }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.words {
  display: inline;

  &__item {
    position: absolute;
    opacity: 0;
    overflow: hidden;

    $duration: 25s;
    $delay: 5;

    -webkit-animation: rotateWord $duration linear infinite;
    animation: rotateWord $duration linear infinite;

    @for $i from 1 through 5 {
      &:nth-child(#{$i + 1}n) {
        animation-delay: #{$i * $delay}s;
        -webkit-animation-delay: #{$i * $delay}s;
      }
    }
  }
}

@-webkit-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  27% {
    opacity: 0;
    -webkit-transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -ms-transform: translateY(-30px);
  }
  5% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  17% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  20% {
    opacity: 0;
    -ms-transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rotateWord {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  5% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  17% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
