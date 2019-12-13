import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/work-space',
        name: 'work-space',
        component: () => import('../views/Home/components/Hero/views/ContentSpace')
      },
      {
        path: '/reunion-space',
        name: 'reunion-space',
        component: () => import('../views/Home/components/Hero/views/ContentReunion')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  }
]

const router = new VueRouter({
  routes,
})

export default router
