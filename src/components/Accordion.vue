<script setup lang="ts">
const { items } = defineProps<{
  items: {
    title: string,
    content: string
  }[]
}>()

const activeItem = ref<number>()

const toggleAccordion = (i: number) => {
  if (activeItem.value === i) {
    activeItem.value = undefined
  } else {
    activeItem.value = i
  }
}
</script>

<template>
  <div class="slot p-xs bg-low grid gap-3xs">
    <div v-for="(item, i) in items" :key="i" class="item bg-high button" :class="{ open: i === activeItem }">
      <h3 class="text-m pl-xs pr-xxs py-xxs" @click="toggleAccordion(i)">
        <span>
          {{ item.title }}
        </span>
        <Cap :concave="i === activeItem">
          <div class="icon"></div>
        </Cap>
      </h3>
      <div class="content">
        <div>
          <div class="color-secondary text-s inner px-xs pt-xxs pb-s">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slot {
  box-shadow: var(--shadow-slot);
  border-radius: var(--size-m);
}

.item {
  position: relative;
  border-radius: var(--size-s);
  box-shadow: var(--shadow-button);
  transition: box-shadow 1s var(--ease);
}

.item>h3 {
  display: grid;
  gap: var(--size-xs);
  grid-template-columns: 1fr auto;
  align-items: center;
  cursor: pointer;
}

.content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 1s var(--ease);
  overflow: hidden;
  min-height: 0;
}

.content>div {
  min-height: 0;
}

.item.open .content {
  grid-template-rows: 1fr;
}

.inner {
  transform: translateY(-1rem);
  opacity: 0;
  transition: transform 1s var(--ease), opacity 1s var(--ease);
}

.item.open .inner {
  opacity: 1;
  transform: translateY(0);
}

.icon {
  width: 3rem;
  height: 3rem;
  position: relative;
  transition: transform 1s var(--ease);
}

.icon::before,
.icon::after {
  content: '';
  position: absolute;
  width: 1.6rem;
  height: 0.28rem;
  margin: -0.14rem -0.8rem;
  top: 50%;
  left: 50%;
  background-color: var(--color-secondary);
  border-radius: 1rem;
  transition: transform 1s var(--ease);
}

.icon::after {
  transform: rotate(90deg);
}

.item.open .icon::after {
  transform: rotate(90deg) scaleX(0);
}

@media (hover:hover) {
  .item:hover {
    box-shadow: var(--shadow-button-hover);
  }

  .item:hover .icon {
    transform: scale(1.1);
  }
}
</style>