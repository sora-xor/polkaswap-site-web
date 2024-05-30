<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { title, image, subline } = defineProps<{
  title: string
  image: string
  subline?: string
  light?: boolean
}>()

const emit = defineEmits<{
  (e: 'progress', progress: number): void
}>()

const trigger = ref()

onMounted(() => {
  if (!(trigger.value)) return
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.create({
    trigger: trigger.value,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: ({ progress }) => {
      emit('progress', progress)
    }
  })
})
</script>

<template>
  <div class="token-screen" ref="trigger" :class="{ light }">
    <div class="inner">
      <h2 class="text-3xl text-center">
        {{ title }}
      </h2>
      <img :src="image" :alt="`${title} Token`" />
      <p v-if="subline" class="text-xxl text-center text-accent bold">
        {{ subline }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.token-screen {
  height: 175vh;
  color: var(--color-purple02);
}

.token-screen.light {
  color: var(--color-pinkish02);
}

.token-screen .inner {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: sticky;
  top: 0;
}

.token-screen h2 {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -6rem);
}

.token-screen img {
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10rem;
}

.token-screen p {
  font-size: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 12rem);
}

@media (min-width: 640px) {
  .token-screen img {
    width: 36rem;
    height: 36rem;
    margin: -18rem;
  }

  .token-screen p {
    font-size: var(--text-xl);
    transform: translate(-50%, 21rem);
  }
}
</style>