import Vue from 'vue';
import Vuex from 'vuex';
import content from './content';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchFocus: false,
  },
  mutations: {
    toggleSearchFocus(state) {
      state.searchFocus = !state.searchFocus;
    },
  },
  getters: {
    searchFocus(state) {
      return state.searchFocus;
    },
  },
  modules: {
    content,
  },
});
