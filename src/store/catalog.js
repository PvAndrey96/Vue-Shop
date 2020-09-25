import api from '@/api';

export default {
  state: {
    currentCategory: {
      title: '',
      subcategories: [],
    },
    currentProducts: [],
  },
  mutations: {
    setCurrentCategory(state, data) {
      state.currentCategory = data;
    },
    setCurrentProducts(state, data) {
      state.currentProducts = data;
    },
  },
  actions: {
    async fetchCategory({ commit }, slug) {
      const result = await api.getCategoryInfo(slug);
      commit('setCurrentCategory', result);
    },
    async fetchProductsCatalog({ commit }, slug) {
      const result = await api.getProductsCatalog(slug);
      commit('setCurrentProducts', result);
    },
  },
  getters: {
    catalogTitle: (state) => state.currentCategory.title,
    catalogSubcategories: (state) => state.currentCategory.subcategories,
    catalogProducts: (state) => state.currentProducts,
  },
};
