<script setup>
import { ref } from 'vue'
import { useRegistrosStore } from '@/stores/registros'
const chamados = useRegistrosStore()

const isActive = ref()

function ativaConcluido(){
    this.isActive = ref(true)
}

</script>

<template>
    <div v-if="chamados.register.length > 0" class="w-full h-auto p-4 rounded-md bg-slate-300 dark:bg-gray-900 dark:text-white flex flex-wrap items-center justify-center gap-4">
        <div v-for="(chamado, index) in chamados.register" :key="index" class="relative ativo w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-2 ">{{ index + 1 }}</div>
            <div class="flex items-center justify-center gap-3 text-lg font-semibold">
                <img v-if="chamado.checkTipo == 'requisicao'" src="@/assets/img/requisicaoIcon.png" alt=""> 
                <img v-if="chamado.checkTipo == 'incidente'" src="@/assets/img/incidenteIcon.png" alt="">
                <p>{{ chamado.nome }} - {{ chamado.ramal }}</p>
            </div>

            <div class="w-full h-[1px] bg-slate-400"></div>

            <div class="flex flex-col gap-2 mt-3">
                <p>Sr(a). {{ chamado.nome }} entrou em contato solicitando {{ chamado.informacao }}</p>
                <p>Nome: {{ chamado.nome }}</p>
                <p>Login: {{ chamado.login }}</p>
                <p>Ramal: {{ chamado.ramal }}</p>
                <p v-if="chamado.local != undefined">Local: {{ chamado.local }}</p>
                <p v-if="chamado.local == undefined">Local: {{ chamado.selected }}</p>
                <p>Patrimônio: {{ chamado.patrimonio }}</p>
            </div>
            

            <!-- <div class="w-full h-[1px] bg-slate-400  mt-3"></div> -->

            <!-- <div class="flex mt-3">
                <button @click="ativaConcluido()" type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Concluido</button>
                <button type="button" class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Excluir</button>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
    .active{
        border: 1px solid #3da730;
        opacity: 0.6;
    }
</style>