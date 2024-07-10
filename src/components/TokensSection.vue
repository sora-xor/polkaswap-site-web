<script setup lang="ts">
const progress = ref(0)
</script>

<template>
  <section class="tokens-section">
    <div class="bg" :style="`--progress: ${progress}`"></div>
    <TokenScreen title="PSWAP" image="/tokens/PSWAP.svg" subline="Token" @progress="(p) => { progress = p }" light
      id="pswap" />
    <div class="w-narrow rounded-l px-m mx-auto theme-dark">
      <h3 class="mb-m">
        <span class="color-accent">PSWAP</span> is a utility and governance token used to reward liquidity providers on
        Polkaswap created by SORA community governance.
      </h3>
      <p class="color-secondary text-s mb-xs">
        Ten billion tokens were minted, and unlike most other reward tokens, PSWAP is burned with every transaction, so
        no more PSWAP will ever be minted.
      </p>
      <p class="color-secondary text-s mb-m">
        The 0.3% fee for every swap on Polkaswap is used to buy back and burn PSWAP tokens Initially, 90% of burned
        PSWAP tokens are reminted to allocate to liquidity providers, but with time, this percentage will decrease to
        35% after 4 years.
      </p>
      <div class="text-xs mx-auto color-secondary bold slot rounded-l flex gap-s bg-low aic py-3xs pl-s pr-3xs">
        Learn more at <Button to="https://wiki.sora.org/pswap.html" target="_blank" accent>SORA Wiki</Button>
      </div>
      <h3 class="mb-m mt-3xl smt" id="sora">
        Polkaswap is built on the <span class="color-accent">SORA network</span>, focusing on interoperability to
        connect blockchains, regardless of their
        ecosystem.
      </h3>
      <div class="text-xs mx-auto color-secondary bold slot rounded-l flex gap-s bg-low aic py-3xs pl-s pr-3xs">
        Learn more at <Button to="https://sora.org" target="_blank" accent>SORA.org</Button>
      </div>
    </div>
    <TokenScreen title="SORA" image="/tokens/XOR.svg" @progress="(p) => { progress = 1 - p }" />
  </section>
</template>

<style scoped>
.tokens-section .bg {
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.tokens-section .bg::before {
  position: absolute;
  top: 50%;
  right: 50%;
  content: '';
  background-color: var(--color-semi);
  width: max(145vw, 145vh);
  height: max(145vw, 145vh);
  border-radius: 50%;
  transform: translate(50%, -50%) scale(var(--progress));
}

.slot {
  box-shadow: var(--shadow-slot);
  width: fit-content;
}
</style>