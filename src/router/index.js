import Vue from 'vue';
import VueRouter from 'vue-router';
// import api from '@/api';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Home.vue'),
    },
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
