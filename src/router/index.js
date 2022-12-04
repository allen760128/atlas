import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../views/Test.vue'
import Todos from '../views/Todos.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  // history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // component: App,
      // children: [
      //   { path: 'todos', component: Todos }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }, {
      path: '/todos',
      name: 'todos',
      component: Todos,
      children: [
        { path: 'add', component: Add }
      ]
    }, {
      path: '/todos/add',
      name: 'add',
      component: Add,
    }, {
      path: '/todos/edit_:id',
      name: 'edit',
      component: Edit,
    }
  ]
})

export default router
