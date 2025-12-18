<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import IButton from '../components/IButton/IButton.vue'
// import { useRouter } from 'vue-router'

// const router = useRouter()
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="/img/map-pin.svg" alt="map" />
      <h1 class="mb-7 leading-[105%] font-bold text-[38px]">IT traveler</h1>
      <p class="mb-11 text-[18px] leading-[133%]">
        Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
        ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
      </p>
      <IButton to="/auth/login">Почати роботу</IButton>
      <!-- <IButton @click="() => router.push('/auth/login')">Почати роботу</IButton> -->
    </div>
  </BaseLayout>
</template>
