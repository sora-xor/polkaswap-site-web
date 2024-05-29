<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const trigger = ref()

onMounted(() => {
  if (!(trigger.value)) return
  gsap.registerPlugin(ScrollTrigger)
  const boxes = gsap.utils.toArray('.box')
  const images = gsap.utils.toArray('.image>img')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }, defaults: {
      ease: 'linear'
    }
  })
  boxes.forEach((box, i) => {
    if (i) {
      tl.from(images[i] as HTMLElement, {
        opacity: 0,
        ease: 'power4.out',
        duration: .3
      }, '-=100%').from(box as HTMLElement, {
        yPercent: 120,
        ease: 'power4.out',
      }, '-=100%')
    }
    if (i < boxes.length - 1) {
      tl.to(box as HTMLElement, {
        yPercent: -20,
        scale: .8,
        opacity: 0,
        ease: 'power1.out',
      }, '+=10%')
    }
  })
})

const items = [{
  title: 'Swap Tokens',
  description: 'Buy and sell tokens seamlessly. Polkaswap uses an advanced swap algorithm for the best price options*.',
  visual: 'swap',
}, {
  title: 'Earn Rewards',
  description: 'Earn rewards for Liquidity Provision, Strategic Rewards (Farming), SORA network Validating (Staking), and more! You can also farm your LP, including Single-Sided LP, via Demeter Farming, all built directly into the Polkaswap UI, for even more rewards.',
  visual: 'earn',
}, {
  title: 'Exchange Assets Across Chains',
  description: 'Bridge to and from Ethereum, Polkadot, Kusama, and more networks to come! We are building more bridges between SORA and major EVM networks and constantly opening HRMP channels to more Polkadot and Kusama parachains.',
  visual: 'exchange',
}, {
  title: 'Trade',
  description: 'Access a fully decentralized on-chain order book. Trade instantly using market orders, set precise trades with limit orders, and view real-time market depths and updates.',
  visual: 'trade',
}, {
  title: 'Debit Card, IBAN, Fiat-to-crypto Exchange',
  description: 'Sign-Up and manage the ultimate all-in-one self-custodial crypto, IBAN, and neo-banking-inspired solution, SORA Card, is part of Polkaswap.',
  visual: 'card',
}, {
  title: 'Refer Friends and Earn',
  description: 'Enjoying Polkaswap? Invite friends to join Polkaswap and earn a generous 10% share from their transaction fees.',
  visual: 'refer',
}]

const { preload } = usePreload()
</script>

<template>
  <section class="features" :class="{ preload }" ref="trigger">
    <div class="visual">
      <DynamicBackground class="bg" />
      <div class="image">
        <img v-for="item, i in items" :src="`/features/${item.visual}.jpg`" alt="Swap Screenshot"
          :style="i ? 'position: absolute' : ''" />
      </div>
      <FeaturesBox v-for="item in items" v-bind=item />
    </div>
  </section>
</template>

<style scoped>
.features {
  position: relative;
  height: 300vh;
  transition: transform .7s 1.7s ease, opacity .7s 1.7s ease;
}

.features.preload {
  transform: translateY(2rem);
  opacity: 0;
}

.visual {
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  top: var(--size-4xs) !important;
  right: var(--size-4xs) !important;
  bottom: var(--size-4xs) !important;
  left: var(--size-4xs) !important;
  border-radius: var(--size-m);
}

.image {
  border-radius: 0.8vw;
  aspect-ratio: 2560/1782;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 20px 70px -20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
}

.image>img {
  aspect-ratio: 2560/1782;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 799px) {
  .visual {
    padding: var(--size-s);
  }

  .image {
    margin-bottom: 30rem;
  }
}
</style>