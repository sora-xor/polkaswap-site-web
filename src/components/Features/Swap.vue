<template>
  <div class="swap bg-low rounded-m p-l text-center">
    <h2 class="text-l mb-xs">Swap Tokens</h2>
    <p class="text-s color-secondary mb-m">
      Buy and sell tokens seamlessly. Polkaswap uses an advanced swap algorithm for the best price options.
    </p>
    <NuxtImg src="/features/swap.png" alt="Swap UI" class="image" loading="lazy" quality="75" sizes="90vw md:400px"
      width="462" height="490" />
  </div>
</template>

<style scoped>
.swap {
  display: grid;
}

.image {
  align-self: stretch;
  max-height: 42rem;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  aspect-ratio: 462/490;
}
</style>