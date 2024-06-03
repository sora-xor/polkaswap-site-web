<script setup lang="ts">
const items = [{
  title: 'SORA Wallet',
  href: 'https://sora.org/wallet',
  image: { src: '/apps/sora-wallet.webp', alt: 'SORA Wallet mobile app' }
}, {
  title: 'Fearless Wallet',
  href: 'https://fearlesswallet.io',
  image: { src: '/apps/fearless-wallet.webp', alt: 'Fearless Wallet mobile app' }
}]
</script>

<template>
  <section class="mt-xxl px-4xs">
    <h2 class="text-xxl color-semi text-center w mx-auto mb-s px-s">
      Polkaswap on the <span class="color-accent">Go</span>
    </h2>
    <p class="text-center color-secondary w mx-auto px-s">
      You can also swap and pool with style and freedom from the palm of your hand via the SORA Wallet and Fearless
      Wallet apps!
    </p>
    <div class="tiles grid gap-4xs mt-xl">
      <Tile v-for="item, in items" v-bind="item" target="_blank" />
    </div>
  </section>
</template>

<style scoped>
.w {
  max-width: 64rem;
}

@media (min-width: 800px) {
  .tiles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>