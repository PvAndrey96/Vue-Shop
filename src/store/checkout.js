import api from '@/api';

export default {
  state: {
    cities: [],
    selectedCity: null,
  },
  mutations: {
    setCities(state, data) {
      state.cities = data;
    },
    selectCity(state, data) {
      state.selectedCity = data;
    },
  },
  actions: {
    async fetchCities({ commit }) {
      const result = await api.getCities();
      commit('setCities', result);
    },
  },
  getters: {
    cities: (state) => state.cities,
    delivery: (state) => {
      const city = state.cities.find((item) => item.id === state.selectedCity);
      return city ? city.delivery : 0;
    },
    selectedCity: (state) => state.selectedCity,
  },
};
