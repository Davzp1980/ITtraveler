<script setup>
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput.vue'
import IModal from '../IModal.vue'
import InputImage from '../InputImage.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close', 'submit'])

const formData = reactive({
  title: '',
  description: '',
  img: '',
})

function handleUpload(url) {
  formData.img = url
}

const uploadedText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
      <div class="flex gap-1 justify-center items-center font-bold text-center mb-[43px]">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput label="Опис" type="textarea" class="mb-3" v-model="formData.description" />
      <div class="flex gap-2 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="photo" class="w-20 h-20 object-cover" />
        <InputImage @uploaded="handleUpload">{{ uploadedText }}</InputImage>
      </div>
      <IButton type="submit" class="w-full">Додати</IButton>
    </form>
  </IModal>
</template>
