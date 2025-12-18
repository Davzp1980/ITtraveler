<script setup lang="ts">
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
import FavoriteIconButton from './FavoriteIconButton.vue'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  descriptions: {
    required: true,
    type: String,
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean,
  },
})
</script>

<template>
  <section class="text-[#2C2C2C] mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" :src="props.img" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavoriteIconButton>
              <EditIcon />
            </FavoriteIconButton>
            <FavoriteIconButton>
              <DeleteIcon />
            </FavoriteIconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          {{ props.descriptions }}
        </p>
      </div>
    </div>

    <div class="h-[1px] w-full bg-[#ececec] mt-4" :class="{ 'bg-[#ffa279]': props.isActive }"></div>
  </section>
</template>
