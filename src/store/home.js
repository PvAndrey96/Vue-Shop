import api from '@/api';

export default {
  state: {
    carouselSlides: [
      '',
      '',
      '',
    ],
    productsBestsellers: [],
    // productsNew: [],
  },
  mutations: {
    setProductsBestsellers(state, data) {
      state.productsBestsellers = data;
    },
  },
  actions: {
    async fetchProductsBestsellers({ commit }) {
      const result = await api.getProducts({ sort: 'sales', limit: 5 });
      commit('setProductsBestsellers', result);
    },
    // async fetchProductsNew({ commit }) {
    //   const result = await api.getProducts({ sort: 'date', limit: 8 });
    //   commit('setProductsNew', result);
    // },
  },
  getters: {
    carouselSlides: (state) => state.carouselSlides,
    productsBestsellers: (state) => state.productsBestsellers,
  },
};
