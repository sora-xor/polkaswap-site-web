<script setup lang="ts">
const { direction } = defineProps<{ direction?: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left' }>()
</script>

<template>
  <span class="arrow-component" :class="direction">
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="before">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5.54074 5.70701C5.54074 5.01665 6.10038 4.45701 6.79074 4.45701H14.2154C14.9057 4.45701 15.4654 5.01665 15.4654 5.70701V13.1316C15.4654 13.822 14.9057 14.3816 14.2154 14.3816C13.525 14.3816 12.9654 13.822 12.9654 13.1316V8.72478L6.61396 15.0762C6.12581 15.5643 5.33435 15.5643 4.84619 15.0762C4.35804 14.588 4.35804 13.7966 4.84619 13.3084L11.1976 6.95701H6.79074C6.10038 6.95701 5.54074 6.39737 5.54074 5.70701Z"
        fill="currentColor" />
    </svg>
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="after">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5.54074 5.70701C5.54074 5.01665 6.10038 4.45701 6.79074 4.45701H14.2154C14.9057 4.45701 15.4654 5.01665 15.4654 5.70701V13.1316C15.4654 13.822 14.9057 14.3816 14.2154 14.3816C13.525 14.3816 12.9654 13.822 12.9654 13.1316V8.72478L6.61396 15.0762C6.12581 15.5643 5.33435 15.5643 4.84619 15.0762C4.35804 14.588 4.35804 13.7966 4.84619 13.3084L11.1976 6.95701H6.79074C6.10038 6.95701 5.54074 6.39737 5.54074 5.70701Z"
        fill="currentColor" />
    </svg>
  </span>
</template>

<style>
.arrow-component {
  width: 1em;
  height: 1em;
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.arrow-component .before,
.arrow-component .after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate3d(-120%, 120%, 0);
  transition: transform 0.45s ease;
}

.arrow-component .after {
  transform: translate3d(0, 0, 0);
}

.hover-trigger:focus .arrow-component .before {
  transform: translate3d(0, 0, 0);
}

.hover-trigger:focus .arrow-component .after {
  transform: translate3d(120%, -120%, 0);
}

@media (hover: hover) {
  .hover-trigger:hover .arrow-component .before {
    transform: translate3d(0, 0, 0);
  }

  .hover-trigger:hover .arrow-component .after {
    transform: translate3d(120%, -120%, 0);
  }
}

.arrow-component.right {
  transform: rotate(45deg);
}

.arrow-component.bottom-right {
  transform: rotate(90deg);
}

.arrow-component.bottom {
  transform: rotate(135deg);
}

.arrow-component.bottom-left {
  transform: rotate(180deg);
}

.arrow-component.left {
  transform: rotate(225deg);
}

.arrow-component.top-left {
  transform: rotate(270deg);
}

.arrow-component.top {
  transform: rotate(315deg);
}
</style>