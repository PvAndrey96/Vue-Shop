import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import content from './content';
import cart from './cart';
import catalog from './catalog';
import infoPage from './infoPage';

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
    catalogSortOrder: 'price_desc',
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
    toggleDisplayFiltersMob(state) {
      state.displayFiltersMob = !state.displayFiltersMob;
    },
    toggleCartPreviewOpen(state) {
      state.cartPreviewOpen = !state.cartPreviewOpen;
    },
    toggleCatalogSortOrder(state, sortOrder) {
      state.catalogSortOrder = sortOrder;
    },
    setNavCategories(state, data) {
      state.navCategories = data;
    },
    setNavInfoPages(state, data) {
      state.navInfoPages = data;
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
    displayFiltersMob(state) {
      return state.displayFiltersMob;
    },
    cartPreviewOpen(state) {
      return state.cartPreviewOpen;
    },
    catalogSortOrder(state) {
      return state.catalogSortOrder;
    },
    navCategories(state) {
      return state.navCategories;
    },
    navInfoPages(state) {
      return state.navInfoPages;
    },
  },
  modules: {
    content, cart, catalog, infoPage,
  },
});
