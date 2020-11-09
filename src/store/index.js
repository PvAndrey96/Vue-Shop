import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import home from './home';
import cart from './cart';
import category from './category';
import catalog from './catalog';
import infoPage from './infoPage';
import checkout from './checkout';
import product from './product';
import search from './search';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navCategories: [],
    navInfoPages: [],
    displayNavbarMob: false,
    displayFiltersMob: false,
    cartPreviewOpen: false,
  },
  mutations: {
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
    displayNavbarMob: (state) => state.displayNavbarMob,
    displayFiltersMob: (state) => state.displayFiltersMob,
    cartPreviewOpen: (state) => state.cartPreviewOpen,
    navCategories: (state) => state.navCategories,
    navInfoPages: (state) => state.navInfoPages,
  },
  modules: {
    home, cart, catalog, infoPage, checkout, product, category, search,
  },
});
