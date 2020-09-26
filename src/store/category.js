import api from '@/api';

export default {
  state: {
    currentCategory: {
      title: '',
      subcategories: [],
    },
  },
  mutations: {
    setCurrentCategory(state, data) {
      state.currentCategory = data;
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
