import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Integrantes from './pages/Integrantes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/integrantes', component: Integrantes }
]

export default createRouter({
  history: createWebHistory(),
  routes
})