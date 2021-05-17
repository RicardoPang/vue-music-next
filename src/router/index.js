import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import Search from '@/views/search'
import SingerDetail from '@/views/singer-detail'
import Album from '@/views/album'
import TopDetail from '@/views/top-detail'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [{
      path: ':id',
      component: Album
    }]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: TopDetail
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
