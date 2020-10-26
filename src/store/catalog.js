import api from '@/api';

export default {
  state: {
    currentProducts: [],
    filtersColor: [],
    filtersSize: [],
  },
  mutations: {
    setCurrentProducts(state, data) {
      state.currentProducts = data;
    },
    setFiltersColor(state, data) {
      state.filtersColor = data;
    },
    setFiltersSize(state, data) {
      state.filtersSize = data;
    },
  },
  actions: {
    async fetchProductsCatalog({ commit }, { category, size, color, sort, order }) {
      const result = await api.getProductsCatalog(category, size, color, sort, order);
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
    filtersColor: (state) => state.filtersColor,
    filtersSize: (state) => state.filtersSize,
  },
};
