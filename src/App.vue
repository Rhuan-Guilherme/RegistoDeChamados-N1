<script setup>
import { RouterLink, RouterView } from 'vue-router' 
import { onMounted } from 'vue'
import TheForm from '@/components/layout/TheForm.vue';
import AreaCards from '@/components/layout/AreaCards.vue'
import { initFlowbite } from 'flowbite'
import TheHeader from '@/components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <TheHeader />
  <main class="conteudo_main bg-slate-200 dark:bg-gray-950 pt-[73px]">
    <TheForm />
    <section class="mx-4">
        <AreaCards />
    </section>
  </main>
  <footer class="bg-slate-200 dark:bg-gray-950 p-1">
    <TheFooter />
  </footer>
</template>

<style scoped>
.conteudo_main{
  min-height: calc(100vh - 85px);
}
</style>
