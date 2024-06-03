<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <button class="burger" :class="{ open: isOpen }">
    <span class="visually-hidden">Toggle navigation</span>
  </button>
</template>

<style scoped>
.burger {
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100rem;
  box-shadow: var(--shadow-convex);
  transition: box-shadow 1s var(--ease);
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6rem;
  height: 0.3rem;
  margin: -0.15rem -0.8rem;
  background: currentColor;
  border-radius: 100rem;
  transition: transform 1s var(--ease);
}

.burger:not(.open)::before {
  transform: translateY(-0.4rem);
}

.burger:not(.open)::after {
  transform: translateY(0.4rem);
}

.burger.open {
  box-shadow: var(--shadow-concave);
}

@media (hover: hover) {
  .burger:not(.open):hover::before {
    transform: translateY(-0.5rem);
  }

  .burger:not(.open):hover::after {
    transform: translateY(0.5rem);
  }

  .burger:hover::before {
    transform: translateY(-0.2rem);
  }

  .burger:hover::after {
    transform: translateY(0.2rem);
  }
}
</style>