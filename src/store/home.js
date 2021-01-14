import api from '@/api';

export default {
  state: {
    carouselSlides: [
      'https://www.aquamir.kiev.ua/wa-data/public/shop/categories/1531/14.png',
      'https://hauteliving.com/wp-content/uploads/2015/07/NikeCourt-Flare_5_native_1600-1366x512.jpg',
    ],
    productsBestsellers: [],
    productsNew: [],
  },
  mutations: {
    setProductsBestsellers(state, data) {
      state.productsBestsellers = data;
    },
    setProductsNew(state, data) {
      state.productsNew = data;
    },
  },
  actions: {
    async fetchProductsBestsellers({ commit }) {
      const result = await api.getProducts({ sort: 'sales', order: 'desc', limit: 5 });
      commit('setProductsBestsellers', result);
    },
    async fetchProductsNew({ commit }) {
      const result = await api.getProducts({ sort: 'time', order: 'desc', limit: 5 });
      commit('setProductsNew', result);
    },
  },
  getters: {
    carouselSlides: (state) => state.carouselSlides,
    productsBestsellers: (state) => state.productsBestsellers,
    productsNew: (state) => state.productsNew,
  },
};
