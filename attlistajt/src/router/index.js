import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TimesView from '@/views/TimesView.vue';
import JogadoresView from '@/views/JogadoresView.vue';
import EstadiosView from '@/views/EstadiosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/times', name: 'times', component: TimesView },
    { path: '/jogadores', name: 'jogadores', component: JogadoresView },
    { path: '/estadios', name: 'estadios', component: EstadiosView },
  ],
});

export default router
