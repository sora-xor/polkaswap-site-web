export const usePreload = () => {
  const preload = ref(true)

  onMounted(() => (preload.value = false))

  return { preload }
}
