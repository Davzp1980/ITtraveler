<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="max-w-[500px] bg-white p-10 rounded-2xl">
      <div class="flex gap-[44px] justify-center mb-[40px]">
        <RouterLink
          class="text-[#2C2C2C] opacity-[0.2]"
          exact-active-class="text-[#ffa279] opacity-[1]"
          to="registration"
          >Створити акаунт</RouterLink
        >
        <RouterLink
          class="text-[#2C2C2C] opacity-[0.2]"
          exact-active-class="text-[#ffa279] opacity-[1]"
          to="login"
          >Увійти</RouterLink
        >
      </div>
      <RouterView />
    </section>
  </BaseLayout>
</template>
