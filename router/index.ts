import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../components/Layout.vue'
import Dashboard from '../views/Dashboard/index.vue'
import Home from '../views/Home.vue'
const component = () => {
  console.log('fetching component')
  return import('../views/Generic.vue')
}

import { scrollWaiter } from '../scrollWaiter'


export const constantRoutes: RouteRecordRaw[] = [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      components: { default: Home, other: component },
      props: (to) => ({ waited: to.meta.waitedFor }),
    },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
  ]


export const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: constantRoutes,
  async scrollBehavior(to, from, savedPosition) {
    await scrollWaiter.wait()
    if (savedPosition) {
      return savedPosition
    } else {
      // TODO: check if parent in common that works with alias
      if (to.matched.every((record, i) => from.matched[i] !== record))
        return { x: 0, y: 0 }
    }
    // leave scroll as it is by not returning anything
    // https://github.com/Microsoft/TypeScript/issues/18319
    return false
  },
})

export default router
