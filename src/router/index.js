import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' //预加载完成
import Index from '../views/Index.vue' //预加载完成
import Menu from '../views/sys/Menu.vue'
import Role from '../views/sys/Role.vue'
import User from '../views/sys/User.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/sys/index',
        name: 'Index',
        component: Index,
      }, {
        path: '/sys/role',
        name: 'Role',
        component: Role,
      }, {
        path: '/sys/menu',
        name: 'Menu',
        component: Menu,
      }, {
        path: '/sys/users',
        name: 'User',
        component: User,
      },{
        path: '/sys/userCenter',
        name: 'UserCenter',
        component: () => import('../views/UserCenter.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'), //懒加载
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
