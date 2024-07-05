<script setup lang="ts">
const words = ['Trade', 'Swap', 'Pool', 'Earn']

const rotation = ref(-360)

let interval: any

onMounted(() => {
  rotation.value = 0
  interval = setInterval(() => {
    rotation.value += 90
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

const { preload } = usePreload()
</script>

<template>
  <h1 class="text-center text-3xl title mt-s" :class="{ preload, first: rotation < 1 }">
    <div class="rotor" :style="`--rotation: ${rotation}deg`">
      <span v-for="word, i in words">
        {{ word }}
        <HeroCoins :i="i" />
      </span>
    </div>
    <div class="subline">with Style and Freedom</div>
  </h1>
</template>

<style scoped>
.title {
  perspective: 200rem;
  transition: opacity 1s ease;
}

.title.preload {
  opacity: 0;
}

.first>.rotor {
  transition: transform 1s cubic-bezier(0, 0, 0.175, 1);
}

.rotor {
  position: relative;
  height: 1.25em;
  transform-style: preserve-3d;
  transform: rotateX(var(--rotation, -360deg));
  transition: transform 2s cubic-bezier(0.77, 0, 0.175, 1);
}

.rotor>span {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.rotor>span:nth-child(4) {
  transform: translateY(-.5em) rotateX(90deg);
}

.rotor>span:nth-child(3) {
  transform: translateZ(-.5em) rotateX(180deg);
}

.rotor>span:nth-child(2) {
  transform: translateY(.5em) rotateX(270deg);
}

.rotor>span:nth-child(1) {
  transform: translateZ(.5em);
}

.subline {
  font-size: 2.4rem;
  letter-spacing: var(--tracking-tight);
  transition: transform .7s 0.3s ease, opacity .7s 0.3s ease;
}

.title.preload .subline {
  opacity: 0;
  transform: translateY(90%);
}

@media (max-width: 639px) {
  .subline {
    max-width: 28rem;
    margin: 1em auto 0 auto;
  }
}

@media (min-width: 640px) {
  .subline {
    font-size: var(--text-xl);
  }
}
</style>