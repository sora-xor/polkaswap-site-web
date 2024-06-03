<script setup lang="ts">
const random = (range: number = 1) => (Math.random() - 0.5) * range
const tokens = ['XOR', 'NOIR', 'XSTXAU', 'XSTXAG', 'PSWAP', 'VAL', 'KEURO'].sort(() => random())
const x = [-2, -1.26, -.55, .2, .7, 1.4, 2]
const y = [-.1, .14, -.3, .38, -.45, .15, -.2]
const z = [.4, .05, - .1, .2, .45, .15, .1].sort(() => random())
const coins = tokens.map((name, i) => ({ name, x: x[i] + random(0.2), y: y[i] + random(0.2), z: z[i] }))
</script>

<template>
  <img v-for="coin in coins" :key="coin.name" :src="`/tokens/${coin.name}.svg`" :alt="`${coin.name} coin`" class="coin"
    :style="`--x: ${coin.x}em; --y: ${coin.y}em; --z: ${coin.z}em; --scale: ${1 + coin.z};`" />
</template>

<style scoped>
.coin {
  position: absolute;
  width: 0.3em;
  height: 0.3em;
  margin: -0.15em;
  top: 50%;
  left: 50%;
  backface-visibility: hidden;
  transform: translate3d(var(--x), var(--y), var(--z)) scale(var(--scale));
}
</style>