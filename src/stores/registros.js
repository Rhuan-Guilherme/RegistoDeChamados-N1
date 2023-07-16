import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRegistrosStore = defineStore('registros', () => {
    const register = ref([
       
    ])

    function addChamado(nome, login, ramal, patrimonio, informacao, localRegistrado, checkTipo, selected){
        return register.value.push({
            nome: nome,
            login: login,
            ramal: ramal,
            patrimonio: patrimonio,
            informacao: informacao,
            local: localRegistrado,
            checkTipo: checkTipo,
            selected: selected
        })
    }

    return {register, addChamado}
  })
  