import Vue from 'vue';
import Vuex from 'vuex';
import content from './content';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchFocus: false,
    searchMobFocus: false,
    displayNavbarMob: false,
  },
  mutations: {
    toggleSearchFocus(state) {
      state.searchFocus = !state.searchFocus;
    },
    toggleSearchMobFocus(state) {
      state.searchMobFocus = !state.searchMobFocus;
    },
    toggleDisplayNavbarMob(state) {
      state.displayNavbarMob = !state.displayNavbarMob;
    },
  },
  getters: {
    searchFocus(state) {
      return state.searchFocus;
    },
    searchMobFocus(state) {
      return state.searchMobFocus;
    },
    displayNavbarMob(state) {
      return state.displayNavbarMob;
    },
  },
  modules: {
    content,
  },
});
