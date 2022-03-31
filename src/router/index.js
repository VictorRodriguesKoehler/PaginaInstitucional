import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaPrincipal from '../views/PaginaPrincipal'
import PaginaContato from '../views/PaginaContato'
import PaginaServiços from '../views/PaginaServiços'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Principal',
    name: 'Principal',
    component: PaginaPrincipal
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: PaginaContato
  },
  {
    path: '/Serviços',
    name: 'Serviços',
    component: PaginaServiços
  },
]

const router = new VueRouter({
  routes
})

export default router
