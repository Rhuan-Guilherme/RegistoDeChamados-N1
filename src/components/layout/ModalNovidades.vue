<template>
   <div>
    <div v-if="showModalFlag" class="fixed inset-0 flex items-center justify-center z-20">
      <div class="modal-overlay absolute inset-0 bg-gray-800 opacity-75"></div>
      <div class="modal-container bg-white dark:bg-gray-700 dark:text-white w-1/2 p-6 rounded shadow-lg z-0">
        <h2 class="text-xl font-bold mb-4">&#9888;&#65039;Atualização!&#9888;&#65039;</h2>
        <p>Para melhorar a experiência dos usuários, implementamos uma mudança na forma como exibimos os chamados registrados. Agora, o último chamado criado será sempre posicionado no topo da página, proporcionando maior agilidade e praticidade na visualização das demandas mais recentes.</p>
        <h2 class="text-md font-bold mt-4 mb-2">Veja:</h2>
        <div class="flex items-center justify-center gap-3">
            <div>
              <img class="rounded-md" width="100%" src="@/assets/img/img.png" alt="">
              <p>Percebemos a importância de facilitar a visualização do último chamado gerado e, com a nova atualização, agora ele fica sempre registrado no topo da página.</p>
            </div>
            <div>
              <img class="rounded-md" width="100%" src="@/assets/img/img2.png" alt="">
              <p>Compreendemos a inconveniência que o antigo método de visualização causava ao exigir a rolagem da barra para encontrar o último chamado gerado.</p>
            </div>
        </div>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 rounded" @click="hideModal">
          Fechar
        </button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
 export default {
    data() {
    return {
      showModalFlag: false,
    };
  },
  created() {
    const modalShown2 = localStorage.getItem('modalShown2');
    if (!modalShown2) {
      this.showModalFlag = true; // Exibir a modal apenas se não tiver sido mostrada antes
      localStorage.setItem('modalShown2', 'true'); // Armazenar no localStorage que a modal foi mostrada
    }
  },
  methods: {
    hideModal() {
      this.showModalFlag = false;
    },
  },
};
  </script>
  