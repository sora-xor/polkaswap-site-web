<script setup lang="ts">
const { preload } = usePreload()
const isAppsPopupOpen = useAppsPopupState()

const openAppsPopup = () => {
  setTimeout(() => {
    isAppsPopupOpen.value = true
  }, 0)
}
</script>

<template>
  <div class="hero-cta px-s mx-auto mt-l" :class="{ preload }">
    <div class="text color-secondary">
      Experience the future of DeFi on Polkaswap — your gateway to interoperable, fast, and secure crypto trading.
    </div>
    <div class="flex slot bg-low p-3xs gap-4xs">
      <Button to="#features">
        Learn more
        <template #icon>
          <Arrow class="text-m" direction='bottom' />
        </template>
      </Button>
      <Button accent @click="openAppsPopup">Get started</Button>
    </div>
  </div>
</template>

<style scoped>
.hero-cta {
  max-width: 110rem;
  transition: transform .7s 0.5s ease, opacity .7s 0.5s ease;
}

.hero-cta.preload {
  transform: translateY(2rem);
  opacity: 0;
}

.slot {
  border-radius: 3.6rem;
  box-shadow: var(--shadow-slot);
}

@media (max-width: 799px) {
  .text {
    padding: 0 var(--size-3xs) var(--size-m) var(--size-3xs);
  }

  .slot>* {
    flex-grow: 1;
  }
}

@media (min-width: 800px) {
  .hero-cta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-xs);
  }

  .slot {
    order: -1;
    justify-self: start;
    align-self: self-start;
  }
}
</style>