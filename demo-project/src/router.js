import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

const router = new Router({
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

// ログインチェック
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next("login");
  } else {
    next();
  }
})

export default router
