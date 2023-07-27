<template>
   <div>
    <div v-if="showModalFlag" class="fixed inset-0 flex items-center justify-center z-20">
      <div class="modal-overlay absolute inset-0 bg-gray-800 opacity-75"></div>
      <div class="modal-container bg-white w-1/2 p-6 rounded shadow-lg z-0">
        <h2 class="text-xl font-bold mb-4">Atualização!</h2>
        <p>Os usuários agora têm o controle total sobre o conteúdo dos seus chamados. Podem facilmente editar informações como nome, login, ramal, informação e qualquer outro campo relevante.</p>
        <h2 class="text-md font-bold mt-4 mb-2">Como Acessar a Funcionalidade:</h2>

        <p>A funcionalidade de edição de chamados pode ser acessada de forma simples e intuitiva no card de detalhes de cada chamado. Ao visualizar um chamado específico, os usuários verão um botão com um icone de uma caneta, que os levará ao modo de edição.</p>
        <div class="flex items-center justify-center gap-3">
            <img width="40%" src="@/assets/img/img.png" alt="">
            <div>--></div>
            <img width="40%" src="@/assets/img/img2.png" alt="">
        </div>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 rounded" @click="hideModal">
          Fechar
        </button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { useModalStore } from '@/stores/novidades';
  
  export default {
    data() {
    return {
      showModalFlag: false,
    };
  },
  created() {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      this.showModalFlag = true; // Exibir a modal apenas se não tiver sido mostrada antes
      localStorage.setItem('modalShown', 'true'); // Armazenar no localStorage que a modal foi mostrada
    }
  },
  methods: {
    hideModal() {
      this.showModalFlag = false;
    },
  },
};
  </script>
  