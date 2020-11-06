import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import { debounce } from 'debounce';
import home from './home';
import cart from './cart';
import category from './category';
import catalog from './catalog';
import infoPage from './infoPage';
import checkout from './checkout';
import product from './product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navCategories: [],
    navInfoPages: [],
    searchFocus: false,
    searchMobFocus: false,
    displayNavbarMob: false,
    displayFiltersMob: false,
    cartPreviewOpen: false,
    searchResult: [],
  },
  mutations: {
    openSearchFocus(state) {
      state.searchFocus = true;
    },
    closeSearchFocus(state) {
      state.searchFocus = false;
    },
    toggleSearchMobFocus(state) {
      state.searchMobFocus = !state.searchMobFocus;
    },
    openNavbarMob(state) {
      state.displayNavbarMob = true;
    },
    closeNavbarMob(state) {
      state.displayNavbarMob = false;
    },
    toggleDisplayFiltersMob(state) {
      state.displayFiltersMob = !state.displayFiltersMob;
    },
    toggleCartPreviewOpen(state) {
      state.cartPreviewOpen = !state.cartPreviewOpen;
    },
    closeCartPreviewOpen(state) {
      state.cartPreviewOpen = false;
    },
    setNavCategories(state, data) {
      state.navCategories = data;
    },
    setNavInfoPages(state, data) {
      state.navInfoPages = data;
    },
    setSearchResult(state, data) {
      state.searchResult = data;
    },
    clearSearchResult(state) {
      state.searchResult = [];
    },
  },
  actions: {
    async fetchNavCategories({ commit }) {
      const result = await api.getNavCategories();
      commit('setNavCategories', result);
    },
    async fetchNavInfoPages({ commit }) {
      const result = await api.getNavInfoPages();
      commit('setNavInfoPages', result);
    },
    fetchSearchResult({ commit }, searchString) {
      debounce(async () => {
        if (searchString.length > 2) {
          const result = await api.getSearchResult(searchString);
          commit('setSearchResult', result);
        } else {
          commit('clearSearchResult');
        }
      }, 400)();
    },
  },
  getters: {
    searchFocus: (state) => state.searchFocus,
    searchMobFocus: (state) => state.searchMobFocus,
    displayNavbarMob: (state) => state.displayNavbarMob,
    displayFiltersMob: (state) => state.displayFiltersMob,
    cartPreviewOpen: (state) => state.cartPreviewOpen,
    navCategories: (state) => state.navCategories,
    navInfoPages: (state) => state.navInfoPages,
    searchResult: (state) => state.searchResult,
  },
  modules: {
    home, cart, catalog, infoPage, checkout, product, category,
  },
});
