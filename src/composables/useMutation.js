import { ref } from 'vue'

export function useMutation({ mutationFn, onSuccess, onError }) {
  const data = ref(false)
  const isLoading = ref(false)
  const error = ref(null)

  async function mutation(...args) {
    isLoading.value = true

    try {
      data.value = await mutationFn(...args)
      error.value = null
      onSuccess?.(data)
    } catch (e) {
      error.value = e
      onError?.(error)
    } finally {
      isLoading.value = false
    }
  }
  return {
    data,
    isLoading,
    error,
    mutation,
  }
}
