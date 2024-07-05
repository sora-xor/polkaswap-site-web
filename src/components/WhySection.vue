<script setup lang="ts">
const items = [{
  icon: '/icons/earn.svg',
  title: 'Affordable Fees',
  content: 'Enjoy trading at just cents per transaction.',
}, {
  icon: '/icons/swap.svg',
  title: 'Boundless Liquidity',
  content: 'Polkaswap combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, trustless, and decentralized.*',
}, {
  icon: '/icons/rocket.svg',
  title: 'Lightning Fast',
  content: 'Polkaswap provides lightning-fast trading by harnessing the power of the SORA blockchain and eliminating intermediaries.'
}, {
  icon: '/icons/github.svg',
  title: 'Open-Source',
  content: 'Polkaswap is an open-source project. Anyone can add more liquidity sources by making contributions to the Polkaswap codebase. Additionally, anyone can request token whitelisting to trade across blockchains!',
}, {
  icon: '/icons/network.svg',
  title: 'Truly Decentralized',
  content: 'Polkaswap is truly decentralized (no gimmicks). No middlemen, no middleware, no central point of failure.',
}, {
  icon: '/icons/gift.svg',
  title: 'Reward-Oriented',
  content: 'Earn from liquidity provision, strategic rewards, referral programs, and more.',
}]
</script>

<template>
  <section class="w why-section grid gap-4xs my-3xl px-s mx-auto text-center">
    <h2 class="w-narrow mx-auto text-xxl color-semi mb-xl title">
      <div class="color-accent">Why</div> Polkaswap?
    </h2>
    <div v-for="item in items" class="bg-low pt-s px-m pb-m rounded-m">
      <Cap class="mx-auto mb-xs">
        <img :src="item.icon" alt="Icon" class="icon" loading="lazy">
      </Cap>
      <h3 class="text-m mb-xs">{{ item.title }}</h3>
      <p class="text-xs color-secondary">{{ item.content }}</p>
    </div>
  </section>
</template>

<style scoped>
.icon {
  width: 3.2rem;
}

@media (min-width: 480px) {
  .why-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .title {
    grid-column-end: span 2;
  }
}

@media (min-width: 800px) {
  .why-section {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .title {
    grid-column-end: span 3;
  }
}
</style>