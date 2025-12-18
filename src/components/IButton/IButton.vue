<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: String,
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    :to="link"
    class="cursor-pointer rounded-xl text-white bg-[#ffa279] font-bold w-[196px] h-[56px] bg-[] text-[16px] leading-[137%]"
    :class="{
      'inline-flex justify-center items-center cursor-pointer rounded-xl text-white bg-[#ffa279] font-bold w-[196px] h-[56px] bg-[] text-[16px] leading-[137%]':
        link,
    }"
  >
    <template v-if="props.isLoading">Loading...</template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
