import api from '@/api';

export default {
  state: {
    currentProducts: [],
  },
  mutations: {
    setCurrentProducts(state, data) {
      state.currentProducts = data;
    },
  },
  actions: {
    async fetchProductsCatalog({ commit }, slug) {
      const result = await api.getProductsCategory(slug);
      commit('setCurrentProducts', result);
    },
  },
  getters: {
    catalogProducts: (state) => state.currentProducts,
  },
};
