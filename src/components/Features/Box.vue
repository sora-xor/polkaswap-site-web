<script setup lang="ts">
defineProps<{
  title: string
  description: string
  visual: string
}>()
</script>

<template>
  <div class="box flex fdc gap-xs p-s theme-dark" ref="element">
    <Cap>
      <img :src="`/icons/${visual}.svg`" alt="icon" class="icon" />
    </Cap>
    <h3>{{ title }}</h3>
    <p class="text-s color-secondary">
      {{ description }}
    </p>

  </div>
</template>

<style scoped>
.box {
  border-radius: var(--size-s);
  min-height: 30rem;
  position: absolute;
  bottom: var(--size-s);
  right: var(--size-s);
  left: var(--size-s);
}

.icon {
  width: 3rem;
  height: 3rem;
}

@media (min-width: 800px) {
  .box {
    left: unset;
    max-width: 40rem;
    min-height: 40rem;
  }

}
</style>