const title = 'Polkaswap',
  description =
    'Cross-chain exchange of assets, simple creation and listing of new assets, and the easiest swaps ever. The interoperable future of Polkadot is here and we are at the forefront!',
  keyWords =
    'Polkaswap, DEX, Cross-chain, DeFi, AMM, Polkadot, Ecosystem, Interoperable, Future, SORA, SORA network, Kusama',
  ogImage = `${process.env.NUXT_PUBLIC_BASE_URL || ''}/og.jpg`

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
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
})
