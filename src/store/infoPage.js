import api from '@/api';

export default {
  state: {
    slug: '',
    title: '',
    content: '',
  },
  mutations: {
    setInfoPage(state, data) {
      state.slug = data.slug;
      state.title = data.title;
      state.content = data.content;
    },
  },
  actions: {
    async fetchInfoPage({ commit }, slug) {
      const result = await api.getInfoPage(slug);
      commit('setInfoPage', result);
    },
  },
  getters: {
    infoPageSlug: (state) => state.slug,
    infoPageTitle: (state) => state.title,
    infoPageContent: (state) => state.content,
  },
};
