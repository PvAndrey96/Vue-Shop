import api from '@/api';

export default {
  state: {
    slug: '',
    title: '',
    subcategories: [],
  },
  mutations: {
    setCurrentCategory(state, data) {
      state.slug = data.slug;
      state.title = data.title;
      state.subcategories = data.subcategories;
    },
  },
  actions: {
    async fetchCategory({ commit }, slug) {
      const result = await api.getCategoryInfo(slug);
      commit('setCurrentCategory', result);
    },
  },
  getters: {
    catalogSlug: (state) => state.slug,
    catalogTitle: (state) => state.title,
    catalogSubcategories: (state) => state.subcategories,
  },
};
