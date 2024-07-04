<template>
  <div class="exchange theme-dark rounded-m p-l text-center">
    <FeaturesFallingCoins class="bg rounded-m" />
    <h2 class="text-l mb-xs">Exchange Assets Across Chains</h2>
    <p class="text-s color-secondary">
      Bridge to and from Ethereum, Polkadot, Kusama, and more networks to come! Expanding bridges to EVM networks and
      opening HRMP channels to Polkadot and Kusama parachains.
    </p>
  </div>
</template>

<style scoped>
.exchange {
  position: relative;
  padding-bottom: 14rem;
}

.exchange>* {
  position: relative;
}

.exchange>.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>