<script setup>
import  {useCounterStore}  from '@/stores/counter'
import CustonInput from '@/components/CustomInput.vue'
import { ref } from 'vue'
import { useRegistrosStore } from '@/stores/registros'
const chamados = useRegistrosStore()


const nome = ref()
const login = ref('')
const ramal = ref('')
const patrimonio = ref('')
const local = ref('')
const informacao = ref('')
const checkTipo = ref('')


</script>

<template>
    <form action="" class="max-w-screen-xl flex flex-wrap items-center gap-6 justify-between mx-auto py-10 px-4">
        <div class="flex gap-4 w-full">
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md dark:border-gray-600">
                    Nome
                </label>
                <CustonInput type="text" id="" v-model="nome" 
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md  dark:border-gray-600">
                    login
                </label>
                <CustonInput type="text" id="" v-model="login"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        </div>

       

        <div class="flex gap-4 w-full">
            
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md  dark:border-gray-600">
                    Ramal
                </label>
                <CustonInput type="text" id="" v-model="ramal"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md  dark:border-gray-600">
                    Patrimônio
                </label>
                <CustonInput type="text" id="" v-model="patrimonio"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        </div>

        <div class="w-full">
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md  dark:border-gray-600">
                    Informação
                </label>
                <CustonInput type="text" id="" v-model="informacao"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        </div>

        <div class="flex gap-4 w-full">
            <div class="flex w-full">
                <label
                    class="inline-flex items-center px-3 text-sm text-slate-50 font-semibold bg-blue-700 border border-r-0 border-gray-300 rounded-l-md  dark:border-gray-600">
                    Registrar local
                </label>
                <CustonInput type="text" id="" v-model="local"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="flex w-full">

                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Local pré definido</option>
                    <option value="CL">Gabinete Min. Cármem Lúcia</option>
                    <option value="DT">Gabinete Min. Dias Toffoli</option>
                    <option value="CZ">Gabinete Min. Cristiano Zanin</option>
                    <option value="AM">Gabinete Min. André Mendonça</option>
                </select>
            </div>
        </div>

        <div class="flex w-full">
            <ul class="flex gap-2">
                <li>
                    <CustonInput v-model="checkTipo" type="checkbox" id="requisicao" value="requisicao" class="hidden peer" required=""/>
                    
                    <label for="requisicao"
                        class="inline-flex items-center justify-between w-32 py-1 px-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img src="@/assets/img/requisicaoIcon.png" alt="">
                        <div class="mx-1 flex">
                            <div class="w-full text-md font-semibold">Requisição</div>
                        </div>
                    </label>
                </li>
                <li>
                    <CustonInput v-model="checkTipo" type="checkbox" id="incidente" value="incidente" class="hidden peer" required=""/>
                    <label for="incidente"
                        class="inline-flex items-center justify-between w-28 py-1 px-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img src="@/assets/img/incidenteIcon.png" alt="">
                        <div class="flex">
                            <div class="w-full text-md font-semibold">Incidente</div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>

        <div>
            <button @click="chamados.addChamado(nome, login, ramal, patrimonio, informacao,  local, checkTipo) "  type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><input class="px-9 py-2.5 cursor-pointer" type="reset" value="Registrar"></button>
            
        </div>
    </form>
</template>