<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-[18px]" label="Повне ім’я" v-model="userData.name" />
    <IInput
      type="input"
      class="mb-[18px]"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput class="mb-[40px]" label="Пароль" type="password" v-model="userData.password" />
    <IButton class="w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Створити акаунт</IButton
    >
  </form>
</template>
