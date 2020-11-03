import api from '@/api';

export default {
  state: {
    infoPageTitle: '',
    infoPageContent: '',
  },
  mutations: {
    setInfoPage(state, data) {
      state.infoPageTitle = data.title;
      state.infoPageContent = data.content;
    },
  },
  actions: {
    async fetchInfoPage({ commit }, slug) {
      const result = await api.getInfoPage(slug);
      commit('setInfoPage', result);
    },
  },
  getters: {
    infoPageTitle: (state) => state.infoPageTitle,
    infoPageContent: (state) => state.infoPageContent,
  },
};
