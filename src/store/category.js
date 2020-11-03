import api from '@/api';

export default {
  state: {
    catalogTitle: '',
    catalogSubcategories: [],
  },
  mutations: {
    setCurrentCategory(state, data) {
      state.catalogTitle = data.title;
      state.catalogSubcategories = data.subcategories;
    },
  },
  actions: {
    async fetchCategory({ commit }, slug) {
      const result = await api.getCategoryInfo(slug);
      commit('setCurrentCategory', result);
    },
  },
  getters: {
    catalogTitle: (state) => state.currentCategory.title,
    catalogSubcategories: (state) => state.currentCategory.subcategories,
  },
};
