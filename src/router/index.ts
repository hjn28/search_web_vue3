import { createRouter, createWebHistory } from 'vue-router'
// ✅ 类型使用 import type
import type { RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: { requiresAuth: true } // 需要登录才能访问
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫：未登录拦截跳登录页
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   if (to.meta.requiresAuth && !userStore.token) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router