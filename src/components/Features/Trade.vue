<template>
  <div class="trade bg-low rounded-m text-center">
    <h2 class="text-l mt-l mx-l mb-xs">Trade</h2>
    <p class="text-s mx-l mb-l color-secondary">
      Access a fully decentralized on-chain order book. Trade instantly using market orders, set precise trades with
      limit orders, and view real-time market depths and updates.
    </p>
    <div class="chart mb-l">
      <img src="/features/trade1.svg" alt="Trading chart" loading="lazy" width="634" height="265" />
      <img src="/features/trade1.svg" alt="Trading chart" loading="lazy" width="634" height="265" />
    </div>
  </div>
</template>

<style scoped>
.trade {
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
}

.chart {
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200%;
  animation: slide 10s linear infinite;
}

.chart>img {
  object-fit: contain;
  align-self: center;
  aspect-ratio: 634/265;
  height: auto;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>