<script setup lang="ts">
const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="header" :class="{ open: isOpen }" v-on-click-outside="close">
    <div class="level1">
      <div class="logo flex">
        <NuxtLink to="/" class="flex">
          <img src="/logo.svg" alt="Logo" width="240" height="70" />
          <span class="visually-hidden">Home page</span>
        </NuxtLink>
      </div>
      <Burger :isOpen="isOpen" @click="isOpen = !isOpen" />
      <div class="cta px-xs">
        <div class="flex">
          <a href="https://polkaswap.io" class="text-xs bold hover-underline" target="_blank">Launch App</a>
        </div>
      </div>
    </div>
    <Navigation :isOpen="isOpen" @navigate="isOpen = false" />
  </header>
</template>

<style scoped>
.header {
  z-index: 666;
  position: fixed;
  right: var(--size-s);
  width: calc(100% - var(--size-s) * 2);
  top: var(--size-xxs);
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0rem 0.2rem 0.1rem 0rem #FFF inset, 0rem 1rem 5rem 0rem rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(12px);
}

.level1 {
  display: grid;
  gap: var(--size-xs);
  grid-template-columns: 1fr 3.2rem 1fr;
  align-items: center;
  height: 4.8rem;
  overflow: hidden;
}

.logo img {
  height: 4.4rem;
  width: auto;
  margin: 0.2rem 0;
}

.logo>a {
  transition: transform 1s var(--ease), opacity 1s var(--ease);
  width: fit-content;
}

.cta>div {
  justify-content: flex-end;
  transition: transform 1s 0.05s var(--ease), opacity 1s 0.05s var(--ease);
}

.header.open {
  grid-template-rows: 4.8rem 1fr;
}

.header.open .logo>a,
.header.open .cta>div {
  transform: translateY(3rem);
  opacity: 0;
}

@media (min-width: 640px) {
  .header {
    right: 50%;
    margin: 0 -23rem;
    width: 46rem;
  }
}
</style>