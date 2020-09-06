import Vue from 'vue';
import VueRouter from 'vue-router';
// import api from '@/api';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/catalog',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Catalog.vue'),
    },
    {
      path: '/product',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Product.vue'),
    },
    {
      path: '/cart',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Cart.vue'),
    },
    {
      path: '/checkout',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Checkout.vue'),
    },
    {
      path: '/',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const currentUser = api.currentUser();
//   const requireAuth = to.matched.some((record) => record.meta.auth);
//   if (requireAuth && !currentUser) {
//     next('/login?message=login');
//   } else {
//     next();
//   }
// });

export default router;
