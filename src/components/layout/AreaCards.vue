<script setup>
import ButtonDelete from '@/components/layout/ButtonDelete.vue'
import { useRegistrosStore } from '@/stores/registros'
const chamados = useRegistrosStore()

</script>

<template>
    
    <div v-if="chamados.register.length > 0" class="relative">
        <div class="flex justify-end absolute right-0 -top-12">
            <ButtonDelete />
        </div>
        <div  class="w-full h-auto p-4 rounded-l-md bg-slate-300 dark:bg-gray-900 dark:text-white flex flex-wrap items-center justify-center gap-4">
        
            <div :class="{'concluido': chamado.concluido}" v-for="(chamado, index) in chamados.register" :key="index" class="relative ativo w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                <button @click="chamado.concluido = false" v-if="chamado.concluido" class="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white hover:bg-red-500 bg-green-500 border-2 border-white rounded-md -top-2 -right-2 dark:border-gray-900"><span class="material-symbols-outlined">done</span></button>
                <button v-if="!chamado.concluido" @click="chamados.marcarConcluido(index)" class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold hover:bg-green-500 dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-2 "><span class="material-symbols-outlined text-sm">done</span></button>
                <button v-if="!chamado.concluido" @click="chamados.removerChamado(index)" class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold hover:bg-red-700 dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-9 "><span class="material-symbols-outlined text-sm">delete</span></button>
                <div class="flex items-center justify-center gap-3 text-lg font-semibold">
                    <img v-if="chamado.checkTipo == 'requisicao'" src="@/assets/img/requisicaoIcon.png" alt="">
                    <img v-if="chamado.checkTipo == 'incidente'" src="@/assets/img/incidenteIcon.png" alt="">
                    <p class="mt-3">{{ chamado.nome }} - {{ chamado.ramal }}</p>
                </div>
                <div class="w-full h-[1px] bg-slate-400"></div>
                <div class="flex flex-col gap-2 mt-3">
        
                    <p v-if="chamado.checkTipo === 'requisicao'">Sr(a). {{ chamado.nome }} entrou em contato solicitando {{ chamado.informacao }}</p>
                    <p v-else>Sr(a). {{ chamado.nome }} entrou em contato informando {{ chamado.informacao }}</p>
                    <p>Nome: {{ chamado.nome }}</p>
                    <p>Login: {{ chamado.login }}</p>
                    <p>Ramal: {{ chamado.ramal }}</p>
                    <p>Local: {{ chamado.local !== ' ' ? chamado.local : chamado.selected }}</p>
                    <p>Patrimônio: {{ chamado.patrimonio }}</p>
                </div>
        
                <div v-if="!chamado.concluido" class="w-full h-[1px] bg-slate-400 mt-4"></div>
                <button v-if="!chamado.concluido" @click="chamados.copiarConteudo(chamado)" class="mt-3 w-full py-1 rounded-md font-semibold bg-blue-700 hover:bg-blue-800">COPIAR</button>
        
            </div>
        </div>
    </div>
</template>

<style scoped>
    .concluido{
        border: 1px solid #3da730;
        opacity: 0.6;
    }
</style>