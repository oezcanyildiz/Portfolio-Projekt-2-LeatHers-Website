import { createRouter, createWebHistory } from 'vue-router'
import store from "../store"
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/login',
      name: 'loginpage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/contact',
      name: 'contactpage',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/damenshop',
      name: 'damenshoppage',
      component: () => import('../views/DamenShopPage.vue')
    },
    {
      path: '/herrenshop',
      name: 'herrenshoppage',
      component: () => import('../views/HerrenShopPage.vue')
    },
    {
      path: '/kindershop',
      name: 'kindershoppage',
      component: () => import('../views/KinderShopPage.vue')
    },
    {
      path: '/shopsale',
      name: 'shopsale',
      component: () => import('../views/ShopSale.vue')
    },
    {
      path: '/liked',
      name: 'likeditems',
      component: () => import('../views/LikedPage.vue')
    },
    {
      path: '/buy',
      name: 'buypage',
      component: () => import('../views/BuyPage.vue')
    },
    {
      path: '/register',
      name: 'registerpage',
      component: () => import('../views/RegisterPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["likeditems"]
  const authNotRequiredRoutes = ["loginpage", "registerpage"]
  const _isAuthenticated = store.getters._isAuthenticated;
  console.log("from", from)
  if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
  if (authRequiredRoutes.indexOf(to.name) > - 1) {
    if (_isAuthenticated) next();
    else next({ name: "loginpage" });
  } else {
    next();
  }
})

export default router
