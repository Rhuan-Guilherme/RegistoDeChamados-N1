import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Desempenho from '../views/DesempenhoView.vue';
import Paineis from '../views/PaineisView.vue'
import Chamados from '../views/ChamadosView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/desempenho',
    name: 'Desempenho',
    component: Desempenho,
  },
  {
    path: '/paineis',
    name: 'Paineis',
    component: Paineis,
  },
  {
    path: '/chamados',
    name: 'Chamados',
    component: Chamados,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;