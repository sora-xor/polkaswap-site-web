<script setup lang="ts">
const items = [{
  title: 'Affordable Fees',
  content: 'Enjoy trading at just cents per transaction.',
}, {
  title: 'Boundless Liquidity',
  content: 'Polkaswap combines multiple liquidity sources under a common liquidity aggregation algorithm, operating completely on-chain, trustless, and decentralized.*',
}, {
  title: 'Lightning Fast',
  content: 'Polkaswap provides lightning-fast trading by harnessing the power of the SORA blockchain and eliminating intermediaries.'
}, {
  title: 'Open-Source',
  content: 'Polkaswap is an open-source project. Anyone can add more liquidity sources by making contributions to the Polkaswap codebase. Additionally, anyone can request token whitelisting to trade across blockchains!',
}, {
  title: 'Truly Decentralized',
  content: 'Polkaswap is truly decentralized (no gimmicks). No middlemen, no middleware, no central point of failure.',
}, {
  title: 'Reward-Oriented',
  content: 'Earn from liquidity provision, strategic rewards, referral programs, and more.',
}]
</script>

<template>
  <section class="why-section grid gap-m my-3xl px-s mx-auto">
    <h2 class="text-xxl color-semi"><span class="color-accent">Why</span> Polkaswap<br>?</h2>
    <Accordion :items="items" />
  </section>
</template>

<style scoped>
@media (max-width: 799px) {
  .why-section>h2 {
    text-align: center;
  }
}

@media (min-width: 800px) {
  .why-section {
    max-width: 130rem;
    grid-template-columns: 2fr 3fr;
  }

}
</style>