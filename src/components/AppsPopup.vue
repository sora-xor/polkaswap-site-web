<script setup lang="ts">
const isAppsPopupOpen = useAppsPopupState()
</script>

<template>
  <div class="popup text-center text-xs bold" :class="{ open: isAppsPopupOpen }">
    <a href="https://polkaswap.io" target="_blank" class="hover-trigger">
      <Cap>
        <img src="/icons/web.svg" alt="Icon" class="icon" loading="lazy" width="32" height="32">
      </Cap>
      <span class="hover-underline">Web app</span>
    </a>
    <a href="https://t.me/polkaswap_io_bot/app" target="_blank" class="hover-trigger">
      <Cap>
        <img src="/icons/telegram.svg" alt="Icon" class="icon" loading="lazy" width="32" height="32">
      </Cap>
      <span class="hover-underline">Telegram app</span>
    </a>
  </div>
</template>

<style scoped>
.popup {
  z-index: 665;
  height: 15rem;
  position: fixed;
  right: var(--size-s);
  width: calc(100% - var(--size-s) * 2);
  top: 6.6rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0rem 0.2rem 0.1rem 0rem #FFF inset, 0rem 1rem 5rem 0rem rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(12px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  visibility: hidden;
  opacity: 0;
  transform: translateY(var(--size-s)) scale(0.98);
  transition: visibility 1s var(--ease), opacity 1s var(--ease), transform 1s var(--ease);
}

.open {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.popup a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--size-3xs);
}

.popup a:nth-child(1) {
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}

.icon {
  width: 3rem;
  height: 3rem;
  transition: transform 1s var(--ease);
}

@media (hover: hover) {
  .popup a:hover .icon {
    transform: scale(1.1);
  }
}

@media (min-width: 640px) {
  .popup {
    top: 7.2rem;
    height: 18rem;
    right: 50%;
    margin: 0 -23rem;
    width: 46rem;
  }
}
</style>