<script setup>
import { useRegistrosStore } from '@/stores/registros'
import { ref } from 'vue'
let modal = ref(false)
const chamados = useRegistrosStore()
const showEditor = ref(false)
const editedChamado = ref({}) // Objeto para armazenar os dados do chamado editado
let editedChamadoIndex = null

// Função para abrir o editor com os dados do chamado
function abrirEditor(index) {
  editedChamado.value = { ...chamados.register[index] }
  editedChamadoIndex = index
  showEditor.value = true
}

// Função para salvar o chamado editado
function salvarAlteracoes() {
  chamados.editarChamado(editedChamadoIndex, editedChamado.value)
  fecharEditor()
}

// Função para fechar o editor sem salvar as alterações
function cancelarEdicao() {
  fecharEditor()
}

// Função para fechar o editor
function fecharEditor() {
  showEditor.value = false
  editedChamado.value = {}
}

function openModal() {
  modal.value = true
}

function doneModal() {
  modal.value = false
}
</script>

<template>
  <div v-if="chamados.register.length > 0" class="relative">
    <div
      class="w-full h-auto p-4 rounded-md bg-slate-300 dark:bg-gray-900 dark:text-white flex flex-row-reverse flex-wrap-reverse items-center justify-center gap-4"
    >
      <div
        :class="{ concluido: chamado.concluido }"
        v-for="(chamado, index) in chamados.register"
        :key="index"
        class="relative ativo w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700"
      >
        <button
          @click="chamado.concluido = false"
          v-if="chamado.concluido"
          class="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white hover:bg-red-500 bg-green-500 border-2 border-white rounded-md -top-2 -right-2 dark:border-gray-900"
        >
          <span class="material-symbols-outlined">done</span>
        </button>

        <button
          v-if="!chamado.concluido"
          @click="chamados.marcarConcluido(index)"
          class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold hover:bg-green-500 dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-2"
        >
          <span class="material-symbols-outlined text-sm">done</span>
        </button>

        <button
          v-if="!chamado.concluido"
          @click="chamados.removerChamado(index)"
          class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold hover:bg-red-700 dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-9"
        >
          <span class="material-symbols-outlined text-sm">delete</span>
        </button>

        <button
          v-if="!chamado.concluido"
          @click="abrirEditor(index), openModal()"
          class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold hover:bg-blue-700 dark:text-white dark:border-gray-300 border-gray-500 text-black border rounded-md top-1 right-16"
        >
          <span class="material-symbols-outlined text-sm">edit</span>
        </button>

        <div class="flex items-center justify-center gap-3 text-lg font-semibold mt-3">
          <div v-if="chamado.checkTipo == 'requisicao'">
            <img src="@/assets/img/requisicaoIcon.png" alt="" />
          </div>
          <div v-if="chamado.checkTipo == 'incidente'">
            <img src="@/assets/img/incidenteIcon.png" alt="" />
          </div>
          <div>{{ chamado.nome }} - {{ chamado.ramal }}</div>
        </div>
        <div class="w-full h-[1px] bg-slate-400"></div>
        <div class="flex flex-col gap-2 mt-3">
          <p v-if="chamado.checkTipo === 'requisicao'">
            Prezado(a) Sr(a). {{ chamado.nome }} entrou em contato solicitando
            {{ chamado.informacao }}
          </p>
          <p v-else>
            Prezado(a) Sr(a). {{ chamado.nome }} entrou em contato informando
            {{ chamado.informacao }}
          </p>
          <p>Nome: {{ chamado.nome }}</p>
          <p>Login: {{ chamado.login }}</p>
          <p>Ramal: {{ chamado.ramal }}</p>
          <p>Local: {{ chamado.local !== ' ' ? chamado.local : chamado.selected }}</p>
          <p>Patrimônio: {{ chamado.patrimonio }}</p>
        </div>

        <div v-if="!chamado.concluido" class="w-full h-[1px] bg-slate-400 mt-4"></div>
        <button
          v-if="!chamado.concluido"
          @click="chamados.copiarConteudo(chamado)"
          class="mt-3 w-full py-1 rounded-md font-semibold bg-blue-700 hover:bg-blue-800"
        >
          COPIAR
        </button>
      </div>
    </div>
  </div>

  <!-- Main modal -->
  <div
    v-if="modal == true"
    class="fixed top-0 left-0 z-50 right-0 flex items-center justify-center bg-opacity-60 bg-gray-950 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <span @click="cancelarEdicao, doneModal()"
            ><span class="material-symbols-outlined">close</span></span
          >
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Editar chamados</h3>
          <form class="space-y-6" @submit.prevent="salvarAlteracoes">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nome</label
              >
              <input
                v-model="editedChamado.nome"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Login</label
              >
              <input
                v-model="editedChamado.login"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Ramal</label
              >
              <input
                v-model="editedChamado.ramal"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Patrimônio</label
              >
              <input
                v-model="editedChamado.patrimonio"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Informação</label
              >
              <input
                v-model="editedChamado.informacao"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Local</label
              >
              <input
                v-model="editedChamado.local"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Local pre definido</label
              >
              <select
                id="countries"
                v-model="editedChamado.local"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Local Pré definido</option>
                <option value="Anexo 2A / 6° andar / Gabinete Ministra Cármen Lúcia">
                  Gabinete Min. Cármem Lúcia
                </option>
                <option value="Anexo 2A / 6° andar / Gabinete Ministro Gilmar Mendes">
                  Gabinete Min. Gilmar Mendes
                </option>
                <option value="Anexo 2A / 5° andar / Gabinete Ministro André Mendonça">
                  Gabinete Min. André Mendonça
                </option>
                <option value="Anexo 2A / 4° andar / Gabinete Ministro Dias Toffoli">
                  Gabinete Min. Dias Toffoli
                </option>
                <option value="Anexo 2A / 5° andar / Gabinete Ministro Nunes Marques">
                  Gabinete Min. Nunes Marques
                </option>
                <option value="Anexo 2A / 4° andar / Gabinete Ministro Cristiano Zanin">
                  Gabinete Min. Cristiano Zanin
                </option>
                <option value="Anexo 2A / 3° andar / Gabinete Ministro Luiz Fux">
                  Gabinete Min. Luiz Fux
                </option>
                <option value="Anexo 2A / 3° andar / Gabinete Ministro Edson Fachin">
                  Gabinete Min. Edson Fachin
                </option>
                <option value="Anexo 2A / 3° andar / Gabinete Ministro Alexandre de Moraes">
                  Gabinete Min. Alexandre de Moraes
                </option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.concluido {
  border: 1px solid #3da730;
  opacity: 0.6;
}
</style>