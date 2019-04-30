import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    }, {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About'
      }
    }
  ]
})

router.afterEach((to, from) => {
  to.meta.title && (document.title = to.meta.title) // 网页标题使用meta里的标题
})

export default router