const title = 'Polkaswap — The DEX for the Interoperable Future',
  description =
    'Polkaswap is a next-generation DeFi hub: A cross-chain liquidity aggregator, AMM, and order book DEX on the SORA network. Polkaswap offers cross-chain asset exchange with major Polkadot and EVM chains with TON coming soon.',
  keyWords =
    'polkadot dex, DEX, Cross-chain, stake, trade, earn rewards, pool, DeFi, AMM, Exchange, Polkadot, polkadot swap, SORA network, Kusama, Swap Tokens, TON',
  ogImage = `${process.env.NUXT_PUBLIC_BASE_URL || ''}/og.jpg`

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  build: {
    transpile: ['gsap'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: title,
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
      ],
      script: [
        {
          key: 'plausible',
          defer: true,
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'about.polkaswap.io',
        },
      ],
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keyWords,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },
        {
          name: 'twitter:image:alt',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@polkaswap',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:image:secure_url',
          content: ogImage,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:url',
          content: 'https://polkaswap.io',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },

  compatibilityDate: '2024-07-04',
})
