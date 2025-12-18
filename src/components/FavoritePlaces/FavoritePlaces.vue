<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [Number, null],
  },
})

const emit = defineEmits(['place-clicked'])
</script>
<template>
  <div class="px-6">
    <div class="text-[#2C2C2C] mb-[18px]">Додані маркери</div>
    <slot name="list">
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :descriptions="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
      />
    </slot>

    <IButton class="w-full mt-[40px]">Додати маркер</IButton>
  </div>
</template>
