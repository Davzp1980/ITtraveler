<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput.vue'
import { reactive, toRaw } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-[18px]"
      v-model="userData.email"
      label="Електронна пошта"
      placeholder="email@gmail.com"
    />
    <IInput class="mb-[40px]" type="password" label="Пароль" v-model="userData.password" />
    <IButton class="w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Увійти
    </IButton>
  </form>
</template>
