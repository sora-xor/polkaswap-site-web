<script setup lang="ts">
const { preload } = usePreload()
</script>

<template>
  <div class="hero-visual rounded-l px-m pt-l">
    <NuxtImg src="/hero.png" alt="Polkaswap app screenshot" class="mx-auto image" :class="{ preload }" quality="75"
      sizes="100vw md:1100px" preload />
  </div>
</template>

<style scoped>
.hero-visual {
  overflow: hidden;
  position: relative;
  background-blend-mode: overlay;
  background: linear-gradient(180deg, transparent 40%, var(--color-low) 125%),
    radial-gradient(10% 60% at 13% 100%, rgba(255, 97, 211, 0.50) 0%, rgba(6, 220, 249, 0.00) 100%),
    radial-gradient(15% 75% at 10% 100%, rgba(97, 179, 255, 0.30) 0%, rgba(249, 239, 6, 0.00) 100%),
    radial-gradient(20% 50% at 0% 100%, rgba(247, 175, 0, 0.30) 0%, rgba(249, 6, 124, 0.00) 100%),
    radial-gradient(25% 100% at 70% 100%, rgba(255, 227, 155, 0.6) 0%, rgba(249, 6, 124, 0.00) 100%),
    radial-gradient(10% 100% at 100% 100%, rgba(255, 97, 211, 0.30) 0%, rgba(6, 220, 249, 0.00) 100%),
    radial-gradient(25% 60% at 90% 100%, rgba(97, 179, 255, 0.60) 0%, rgba(249, 239, 6, 0.00) 100%);
}

.image {
  width: 100%;
  max-width: 110rem;
  border-radius: min(1vw, 1.2rem) min(1vw, 1.2rem) 0 0;
  box-shadow: 0px 4rem 7rem -2rem rgba(0, 0, 0, 0.15);
  position: relative;
  margin-bottom: -1px;
  z-index: 1;
  aspect-ratio: 1334/827;
  transition: transform .7s 0.7s ease, opacity .7s 0.7s ease;
}

.image.preload {
  transform: translateY(2rem);
  opacity: 0;
}
</style>