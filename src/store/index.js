import Vue from 'vue';
import Vuex from 'vuex';
import content from './content';
import cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  modules: {
    content, cart,
  },
});
