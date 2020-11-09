import api from '@/api';
import { debounce } from 'debounce';

export default {
  state: {
    searchString: '',
    searchFocus: false,
    searchMobOpen: false,
    searchResult: [],
  },
  mutations: {
    searchFocus(state) {
      state.searchFocus = true;
    },
    searchBlur(state) {
      state.searchFocus = false;
    },
    closeSearchMob(state) {
      state.searchMobOpen = false;
    },
    toggleSearchMob(state) {
      state.searchMobOpen = !state.searchMobOpen;
    },
    setSearchResult(state, data) {
      state.searchResult = data;
    },
    clearSearchResult(state) {
      state.searchResult = [];
    },
    updateSearchString(state, val) {
      state.searchString = val;
    },
  },
  actions: {
    searchInput({ commit }, searchString) {
      commit('updateSearchString', searchString);
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
    searchMobOpen: (state) => state.searchMobOpen,
    searchResult: (state) => state.searchResult,
    searchString: (state) => state.searchString,
  },
};
