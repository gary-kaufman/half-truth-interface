import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MasterView from '../views/MasterView.vue'
import AboutView from '../views/AboutView.vue'
import PlayerView from '../views/PlayerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'master-view',
    component: MasterView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/player-view',
    name: 'player-view',
    component: PlayerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
