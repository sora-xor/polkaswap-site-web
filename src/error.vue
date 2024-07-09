<script setup lang="ts">
const { error } = defineProps<{
  error: {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description: string
    data: any
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main>
    <Header />
    <section class="content w mx-auto py-3xl">
      <h1 class="text-xxl mb-l break-word">Error {{ error.statusCode }}<br />
        <span class="color-secondary">{{ error.statusMessage }}</span>
      </h1>
      <Button href="/" @click="handleError">
        Homepage
        <template #icon>
          <Arrow class="text-m" direction='left' />
        </template>
      </Button>
    </section>
    <Footer />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>