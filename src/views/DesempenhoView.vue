<script setup>
import { useRegistrosStore } from '@/stores/registros'
const chamados = useRegistrosStore()
</script>

<template>
     <div class="p-20">
        <div id="alert-additional-content-5"
            class="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
            <div class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <h3 class="text-lg font-medium text-gray-800 dark:text-gray-300">Página em construção</h3>
            </div>
            <div class="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
                Ainda estamos trabalhando nesta página. Fique atento às atualizações! Para garantir que entreguemos informações precisas e relevantes, estamos construindo esta página com cuidado. Esperamos concluir em breve!
            </div>
            <div class="flex">
                <RouterLink to="/"
                    class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800">
                   
                    Voltar
                </RouterLink>
           
        </div>
        </div>
    </div>
    <div class="p-5">
        <div v-if="chamados.register.length >= 1 && chamados.register.length < 3" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 10%"></div>
        </div>
        <div v-if="chamados.register.length >= 3 && chamados.register.length < 6" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 20%"></div>
        </div>
        <div v-if="chamados.register.length >= 6 && chamados.register.length < 8" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 40%"></div>
        </div>
        <div v-if="chamados.register.length >= 8 && chamados.register.length < 10" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 50%"></div>
        </div>
        <div v-if="chamados.register.length >= 10 && chamados.register.length < 12" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 60%"></div>
        </div>
        <div v-if="chamados.register.length >= 12 && chamados.register.length < 14" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
        </div>
        <div v-if="chamados.register.length >= 14 && chamados.register.length < 16" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
        </div>
        <div v-if="chamados.register.length >= 16" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 100%"></div>
        </div>
        <h1>{{ chamados.register.length }}</h1>
    </div>
</template>

<style>

</style>
