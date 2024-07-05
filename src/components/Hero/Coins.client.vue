<script setup lang="ts">
const { i = 0 } = defineProps<{ i: number }>()

const random = (range: number = 1) => (Math.random() - 0.5) * range

const tokens = [
  ['XOR', 'KUSD', 'LLD', 'KSM', 'SOSHIBA', 'CERES', 'PSWAP',],
  ['VAL', 'ETH', 'ACA', 'ASTR', 'NOIR', 'KEN', 'APOLLO'],
  ['PSWAP', 'DAI', 'CERES', 'DEO', 'XOR', 'KSM', 'ETH'],
  ['KEN', 'DOT', 'HMX', 'APOLLO', 'VAL', 'ETH', 'SOSHIBA'],
]

const x = [-2, -1.26, -.55, .2, .7, 1.4, 2]
const y = [-.1, .14, -.3, .38, -.45, .15, -.2]
const z = [.45, .4, .2, .15, .1, .05, -.1]

const coins = computed(() => tokens[i % tokens.length]
  .map((name, j) => ({ name, z: z[j] }))
  .sort(() => random())
  .map((el, j) => ({ ...el, x: x[j] + random(0.2), y: y[j] + random(0.2) }))
)
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