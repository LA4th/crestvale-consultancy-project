import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Form from '../Pages/Form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router