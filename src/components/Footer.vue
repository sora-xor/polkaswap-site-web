<script setup lang="ts">
const legalLinks = [
  {
    title: 'Terms of Service',
    href: 'https://wiki.sora.org/polkaswap/terms',
  },
  {
    title: 'Privacy Policy',
    href: 'https://wiki.sora.org/polkaswap/privacy',
  },
  {
    title: 'Release Notes',
    href: 'https://github.com/sora-xor/polkaswap-exchange-web/releases/latest'
  }]
</script>

<template>
  <footer class="footer grid gap-s m-4xs p-s theme-dark text-xxs">
    <div class="flex wrap jcc">
      <a v-for="link in legalLinks" :href="link.href" target='_blank' class="p-3xs hover-trigger">
        <span class="hover-underline">{{ link.title }}</span>
      </a>
    </div>
    <Button accent to="https://polkaswap.io" target="_blank" class="button">
      Launch App
    </Button>
    <div class="copy p-3xs">&copy; {{ new Date().getFullYear() }}, Polkaswap</div>
    <div class="logo">
      <NuxtLink to="/">
        <img src="/logo-invert.svg" alt="Polkaswap Logo" />
        <span class="visually-hidden">Home page</span>
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-radius: var(--size-s);
  place-items: center;
}

.logo {
  width: 26rem;
  aspect-ratio: 24/7;
}

@media (min-width: 800px) {
  .footer {
    grid-template-columns: 1fr max-content 1fr;
  }

  .copy {
    order: -1;
    justify-self: start;
  }

  .logo {
    width: 44rem;
    grid-column-end: span 3;
  }

  .button {
    justify-self: end;
  }
}
</style>