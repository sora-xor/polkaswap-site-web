<script setup lang="ts">

</script>

<template>
  <section class="features w px-s mx-auto">
    <FeaturesSwap class="double" />
    <FeaturesExchange />
    <FeaturesTrade class="double" />
    <FeaturesEarn />
  </section>
</template>

<style scoped>
.features {
  display: grid;
  gap: var(--size-4xs);
}

.double {
  grid-row-end: span 2;
}

@media (min-width: 800px) {
  .features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: max-content;
  }
}
</style>