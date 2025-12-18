<script setup>
import { registerUser } from '@/api/user'
import RegistrationsForm from '@/components/Auth/RegistrationsForm/RegistrationsForm.vue'
import { useMutation } from '@/composables/useMutation'

import { useRouter } from 'vue-router'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleRegisterUser,
} = useMutation({
  mutationFn: registerUser,
  onSuccess: () => router.replace('/map'),
})
</script>

<template>
  <RegistrationsForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
