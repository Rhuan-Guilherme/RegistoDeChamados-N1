<script setup>
import { RouterLink, RouterView } from 'vue-router' 
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import TheHeader from '@/components/layout/TheNavbar.vue'


// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scoped>

</style>
