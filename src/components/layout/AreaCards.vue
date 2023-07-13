<script setup>
import { useRegistrosStore } from '@/stores/registros'
const chamados = useRegistrosStore()

</script>

<template>
    <div v-if="chamados.register.length > 0" class="w-full h-auto p-4 rounded-md bg-slate-300 dark:bg-gray-900 dark:text-white flex flex-wrap items-center justify-center gap-4">
        <div  v-for="(chamado, index) in chamados.register" :key="index" class="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-center gap-3 text-lg font-semibold">
                <img v-if="chamado.checkTipo == 'requisicao'" src="@/assets/img/requisicaoIcon.png" alt=""> 
                <img v-if="chamado.checkTipo == 'incidente'" src="@/assets/img/incidenteIcon.png" alt="">
                <p>{{ chamado.nome }} - {{ chamado.ramal }}</p>
            </div>

            <div class="w-full h-[1px] bg-slate-400"></div>

            <div class="flex flex-col gap-2 mt-3">
                <p>O Sr(a). {{ chamado.nome }} entrou em contato solicitando {{ chamado.informacao }}</p>
                <p>Nome: {{ chamado.nome }}</p>
                <p>Login: {{ chamado.login }}</p>
                <p>Ramal: {{ chamado.ramal }}</p>
                <p>Local: {{ chamado.local }}</p>
                <p>Patrimônio: {{ chamado.patrimonio }}</p>
            </div>

        </div>
    </div>
</template>