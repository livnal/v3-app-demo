/*
 * @Descripttion:
 * @version:
 * @FilePath: /v3-app-demo/src/router/index.js
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const routes =
  [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children:
        [
          // {
          //   path: '/',
          //   redirect: '/home'
          // },
          {
            path: '/home',
            name: 'home',
            meta: {
              title: '首页'
            },
            component: () => import('@/views/home/index.vue')
          },
          {
            path: '/map',
            name: 'map',
            meta: {
              title: '地图'
            },
            component: () => import('@/views/map/index.vue')
          }
        ]
    }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;


