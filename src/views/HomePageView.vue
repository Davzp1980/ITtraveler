<script setup>
import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '../map/settings'
import MarkerIcon from '../components/icons/MarkerIcon.vue'
import { onMounted, ref } from 'vue'
import { getFavoritePlace } from '@/api/favorite-plases'

// onMounted(() => {
//   getFavoritePlace()
// })

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Super description 1',
    img: '/img/punkt.png',
    lngLat: [30.523333, 50.450001],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Super description 2',
    img: 'img/punkt.png',
    lngLat: [30.523333, 50.490001],
  },
]

const activeId = ref(null)
const map = ref(null)

function changeActiveId(id) {
  activeId.value = id
}

function changePlace(id) {
  const { lngLat } = favoritePlaces.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @place-clicked="changePlace" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        access-token="pk.eyJ1IjoiZGF2enAxOTgwIiwiYSI6ImNtamFkMHR2eDAyeTIzY3NiYXJwd2N3OTcifQ.wiJDsUg36BaV9LLBVC5GLA"
        :map-style="mapSettings.style"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button class="cursor-pointer" type="button" @click="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" :class="{ 'w-15 h-15': activeId === place.id }" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
