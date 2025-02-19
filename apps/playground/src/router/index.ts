import { createWebHistory, createRouter } from 'vue-router'

import CaptureView from '../views/CaptureView.vue'
import ReplayView from '../views/ReplayView.vue'

const routes = [
  { path: '/', component: CaptureView },
  { path: '/replay', component: ReplayView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router