<script setup lang="ts">
const { title, href, image } = defineProps<{
  title: string,
  href: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
  image: {
    src: string,
    alt: string
  }
}>()
</script>

<template>
  <NuxtLink :to="href" class="tile hover-trigger" :target="target">
    <div class="image">
      <NuxtImg v-bind="image" quality="75" sizes="800px md:960px" />
    </div>
    <div class="notch">
      <div class="inner">
        <Button>
          {{ title }}
        </Button>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.tile {
  display: block;
  position: relative;
  aspect-ratio: 4/5;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--size-m);
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.notch {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--color-medium);
  border-radius: var(--size-s) 0 0 0;
}

.notch .inner {
  padding: var(--size-4xs);
  border-radius: var(--size-s) 0 0 0;
  margin: 0 calc(var(--size-4xs) * -1) calc(var(--size-4xs) * -1) 0;
  overflow: hidden;
}

.notch::before,
.notch::after {
  content: '';
  position: absolute;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjVWMjRDMy4xNTE3MyAyNCA2LjI3MjU4IDIzLjM3OTIgOS4xODQ0MiAyMi4xNzMxQzEyLjA5NjIgMjAuOTY3IDE0Ljc0MTkgMTkuMTk5MiAxNi45NzA2IDE2Ljk3MDZDMTkuMTk5MiAxNC43NDE5IDIwLjk2NyAxMi4wOTYyIDIyLjE3MzEgOS4xODQ0MkMyMy4zNzkyIDYuMjcyNTggMjQgMy4xNTE3MyAyNCAwSDI1VjI1SDBaIiBmaWxsPSIjRjVGMUYyIi8+PC9zdmc+');
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
}

.notch::before {
  right: calc(100% - 0.1rem);
  bottom: -0.1rem;
}

.notch::after {
  right: -0.1rem;
  bottom: calc(100% - 0.1rem);
}

@media(hover:hover) {
  .image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-semi);
    opacity: 0;
    transition: opacity .6s ease;
  }

  .tile:hover .image::after {
    opacity: .08;
  }

  .tile .image img {
    transition: transform 1.5s var(--ease);
    transform: scale(1.01);
  }

  .tile:hover .image img {
    transform: scale(1);
  }
}
</style>