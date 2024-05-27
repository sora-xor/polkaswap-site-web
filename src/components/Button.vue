<script setup lang="ts">
const { to } = defineProps<{
  to?: string
  target?: "_blank" | "_parent" | "_self" | "_top"
  accent?: boolean
}>()

const component = computed(() => {
  if (to) return resolveComponent('NuxtLink')
  return 'button'
})
</script>

<template>
  <component :to="to" :target="target" class="button flex aic jcsb text-xs bold color-secondary bg-high hover-trigger"
    :class="{ 'theme-accent': accent }">
    <slot />
    <Cap>
      <slot name="icon">
        <Arrow class="text-m" />
      </slot>
    </Cap>
  </component>
</template>

<style scoped>
.button {
  min-width: 14rem;
  padding: var(--size-5xs) var(--size-5xs) var(--size-5xs) var(--size-xs);
  border-radius: 100rem;
  box-shadow: var(--shadow-button);
  transition: transform 1s var(--ease), box-shadow 1s var(--ease);
}

.button:active {
  transform: scale(0.95);
}

@media (hover: hover) {
  .button:hover {
    box-shadow: var(--shadow-button-hover);
  }
}

@media (min-width: 640px) {
  .button {
    min-width: 19rem;
  }
}
</style>