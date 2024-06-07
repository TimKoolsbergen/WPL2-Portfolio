import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '../views/AboutMeView.vue'
import MyWorkView from '../views/MyWorkView.vue'
import WerkpleklerenView from '../views/WerkpleklerenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'me',
      component: AboutMeView
    },
    {
      path: '/work',
      name: 'my work',
      component: MyWorkView
    },
    {
      path: '/wpl',
      name: 'werkplekleren',
      component: WerkpleklerenView
    }
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
