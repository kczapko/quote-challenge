import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Author from '../views/Author.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/author/:author',
    name: 'author',
    component: Author,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
