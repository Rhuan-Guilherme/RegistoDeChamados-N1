import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRegistrosStore = defineStore('registros', () => {
  const localStorageKey = 'registrosData'

  // Recuperar dados do localStorage, se houver
  const savedData = JSON.parse(localStorage.getItem(localStorageKey))
  const register = ref(savedData || [])

  // Função para adicionar chamado
  function addChamado(nome, login, ramal, patrimonio, informacao, localRegistrado, checkTipo, selected) {
    const chamado = {
      nome: nome,
      login: login,
      ramal: ramal,
      patrimonio: patrimonio,
      informacao: informacao,
      local: localRegistrado,
      checkTipo: checkTipo,
      selected: selected
    }

    register.value.push(chamado)

    // Salvar no localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(register.value))
  }

  // Função para limpar todos os chamados do localStorage
  function limparChamados() {
    // Limpar o array localmente
    register.value = []

    // Remover do localStorage
    localStorage.removeItem(localStorageKey)
  }

  // Função para remover o chamado com base no índice
  function removerChamado(index) {
    if (index >= 0 && index < register.value.length) {
      register.value.splice(index, 1)

      // Salvar no localStorage após remover o chamado
      localStorage.setItem(localStorageKey, JSON.stringify(register.value))
    }
  }

  function marcarConcluido(index) {
    if (index >= 0 && index < register.value.length) {
      // Alterar o estado 'concluido' do chamado
      register.value[index].concluido = true

      // Salvar no localStorage após marcar como concluído
      localStorage.setItem(localStorageKey, JSON.stringify(register.value))
    }
  }

  function copiarConteudo(chamado) {
    const texto = `Prezados, o(a) Sr(a). ${ chamado.nome } entrou em contato ${ chamado.informacao }\n Nome: ${chamado.nome}\nLogin: ${chamado.login}\nRamal: ${chamado.ramal}\nLocal: ${chamado.local !== ' ' ? chamado.local : chamado.selected}\nPatrimônio: ${chamado.patrimonio}`
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert('Conteúdo copiado para a área de transferência.')
      })
      .catch((error) => {
        console.error('Erro ao copiar o conteúdo:', error)
        alert('Erro ao copiar o conteúdo. Verifique se o navegador suporta essa funcionalidade.')
      })
  }

  function editarChamado(index, dadosAtualizados) {
    if (index >= 0 && index < register.value.length) {
      // Atualiza o objeto chamado com os dados atualizados
      const chamado = register.value[index]
      Object.assign(chamado, dadosAtualizados)

      // Salva as alterações no localStorage
      localStorage.setItem(localStorageKey, JSON.stringify(register.value))
    }
  }

  return { register, addChamado, limparChamados, removerChamado, marcarConcluido, copiarConteudo, editarChamado  }
})