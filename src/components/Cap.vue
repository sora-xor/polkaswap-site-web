<script setup lang="ts">
defineProps<{
  concave?: boolean
}>()
</script>

<template>
  <div class="cap flex aic jcc" :class="{ concave }">
    <slot />
  </div>
</template>

<style scoped>
.cap {
  width: 4.6rem;
  height: 4.6rem;
  box-shadow: var(--shadow-convex);
  border-radius: 100rem;
  transition: box-shadow 1s var(--ease);
}

.cap.concave {
  box-shadow: var(--shadow-concave);
}
</style>