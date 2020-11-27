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
      path: '/product/:product',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Product.vue'),
    },
    {
      path: '/search',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Search.vue'),
    },
    {
      path: '/cart',
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/Cart.vue'),
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
      meta: { layout: 'TheMainLayout' },
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
