// modal.js
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    modalShown: false,
  }),
  actions: {
    showModalOnce() {
      if (!this.modalShown) {
        this.modalShown = true;
        return true; // Indicate that the modal should be shown
      }
      return false; // Indicate that the modal should NOT be shown
    },
  },
});
