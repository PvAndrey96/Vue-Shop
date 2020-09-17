import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/catalog/:category',
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
      path: '/info/:page',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Info.vue'),
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

export default router;
