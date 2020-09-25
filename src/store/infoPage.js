import api from '@/api';

export default {
  state: {
    currentInfoPage: {
      title: '',
      content: '',
    },
  },
  mutations: {
    setInfoPage(state, data) {
      state.currentInfoPage = data;
    },
  },
  actions: {
    async fetchInfoPage({ commit }, slug) {
      const result = await api.getInfoPage(slug);
      commit('setInfoPage', result);
    },
  },
  getters: {
    infoPageTitle: (state) => state.currentInfoPage.title,
    infoPageContent: (state) => state.currentInfoPage.content,
  },
};
