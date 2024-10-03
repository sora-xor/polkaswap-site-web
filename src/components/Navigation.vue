<script setup lang="ts">
import socials from '~/lib/socials'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['navigate'])

const anchors = [
  {
    title: 'Features',
    href: '/#features'
  },
  {
    title: 'Why Polkaswap',
    href: '/#why'
  },
  {
    title: 'Mobile Apps',
    href: '/#apps'
  },
  {
    title: 'PSWAP Token',
    href: '/#pswap'
  },
  {
    title: 'SORA Network',
    href: '/#sora'
  },
]

const transitionDelay = 0.05
</script>

<template>
  <div class="container" :class="{ open: isOpen }">
    <div>
      <nav class="content pt-m px-xs pb-xs">
        <ul>
          <li v-for="(anchor, i) in anchors" :key="anchor.title">
            <NuxtLink :to="anchor.href" class="text-xs bold hover-trigger py-4xs flex"
              :style="`--delay: ${i * transitionDelay}s`" @click="$emit('navigate')">
              <span class="hover-underline">{{ anchor.title }}</span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li v-for="(social, i) in [{
            title: 'SORA Wiki',
            href: 'https://wiki.sora.org/',
          }, ...socials]" :key="social.title">
            <a :href="social.href" class="text-xs bold hover-trigger py-4xs flex aic" target="_blank"
              :style="`--delay: ${(i + 2) * transitionDelay}s`">
              <span class="hover-underline">{{ social.title }}</span>
              <Arrow />
            </a>
          </li>
        </ul>
        <div class="app">
          <a href="https://polkaswap.io" target="_blank" class="text-xs bold py-3xs px-xxs rounded-m flex jcc">
            Web App
          </a>
          <a href="https://t.me/polkaswap_io_bot/app" target="_blank"
            class="text-xs bold py-3xs px-xxs rounded-m flex jcc">
            Telegram App
          </a>
        </div>
        <div class="logo px-l flex">
          <NuxtLink to="/" class="block" @click="$emit('navigate')">
            <img src="/logo.svg" alt="Logo" width="240" height="70" />
            <span class="visually-hidden">Home page</span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 1s var(--ease);
  overflow: hidden;
  min-height: 0;
}

.container>div {
  min-height: 0;
}

.container.open {
  grid-template-rows: 1fr;
}

.content {
  display: grid;
  gap: var(--size-s);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.content ul {
  list-style: none;
  padding: 0;
}

.content ul li {
  overflow: hidden;
}

.content ul a {
  width: fit-content;
  gap: 0.25em;
  transition: transform 1s var(--ease);
  transform: translateY(100%);
}

.app,
.logo {
  grid-column-end: span 2;
}

.app {
  display: grid;
  gap: var(--size-xs);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.app a {
  box-shadow: var(--shadow-convex);
  transition: box-shadow 1s var(--ease), transform 1s ease;
  transform: translateY(100%);
  text-align: center;
}

.app a:active {
  box-shadow: var(--shadow-concave);
}

.container .logo img {
  width: 100%;
  max-width: none;
}

.logo a {
  transform: translateY(100%);
  transition: transform 1s ease;
  width: 100%;
}

.container.open .content ul a,
.container.open .content .app a,
.container.open .content .logo a {
  transform: translateY(0);
  transition-delay: var(--delay);
}
</style>