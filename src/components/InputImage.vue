<script setup>
import { ref } from 'vue'
import UploadIcon from './icons/UploadIcon.vue'

const emit = defineEmits(['uploaded'])

const errorMessage = ref('')

function handleUploadImage() {
  const file = event.target.files[0]

  if (file.size > 1 * 1024 * 1024) {
    errorMessage.value = 'Завеликий файл'
    return
  }
  const fileReader = new FileReader()

  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    errorMessage.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label class="cursor-pointer hover:-[#ffa279]">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs"><slot></slot></span>
      </span>
    </label>
    <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
  </div>
</template>
