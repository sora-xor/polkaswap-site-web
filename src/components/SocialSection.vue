<script setup lang="ts">
import socials from '~/lib/socials'
</script>

<template>
  <section class="px-s mb-3xl">
    <h2 class="title text-xxl color-semi text-center mx-auto mb-l">
      Join our global community
    </h2>
    <div class="slot flex wrap p-3xs bg-low gap-4xs mx-auto">
      <Button v-for="social in socials" :to="social.href" target="_blank" class="button">
        {{ social.title }}
        <template #icon>
          <img :src="`/icons/${social.icon}.svg`" :alt="`${social.title} icon`" class="icon">
        </template>
      </Button>
    </div>
  </section>
</template>

<style scoped>
.title {
  max-width: 60rem;
}

.slot {
  border-radius: 3.6rem;
  box-shadow: var(--shadow-slot);
  width: fit-content;
}

.icon {
  width: 3rem;
  height: 3rem;
  transition: transform 1s var(--ease);
}

@media (max-width: 899px) {
  .slot {
    flex-direction: column;
    width: 22rem;
  }
}

@media (hover:hover) {
  .button:hover .icon {
    transform: scale(1.1);
  }
}
</style>