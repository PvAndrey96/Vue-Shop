import api from '@/api';

export default {
  state: {
    currentProducts: [],
    currentFiltersColor: [],
    currentFiltersSize: [],
  },
  mutations: {
    setCurrentProducts(state, data) {
      state.currentProducts = data;
    },
    setFiltersColor(state, data) {
      state.currentFiltersColor = data;
    },
    setFiltersSize(state, data) {
      state.currentFiltersSize = data;
    },
  },
  actions: {
    async fetchProductsCatalog({ commit }, slug) {
      const result = await api.getProductsCategory(slug);
      commit('setCurrentProducts', result);
    },
    async fetchFiltersColor({ commit }, slug) {
      const result = await api.getFiltersColor(slug);
      commit('setFiltersColor', result);
    },
    async fetchFiltersSize({ commit }, slug) {
      const result = await api.getFiltersSize(slug);
      commit('setFiltersSize', result);
    },
  },
  getters: {
    catalogProducts: (state) => state.currentProducts,
    filtersColor: (state) => state.currentFiltersColor,
    filtersSize: (state) => state.currentFiltersSize,
  },
};
