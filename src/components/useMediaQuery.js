import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query) {
  const matches = ref(false)
  const media = window.matchMedia(query)

  const update = () => {
    matches.value = media.matches
  }

  onMounted(() => {
    update()
    media.addEventListener('change', update)
  })

  onUnmounted(() => {
    media.removeEventListener('change', update)
  })

  return matches
}
