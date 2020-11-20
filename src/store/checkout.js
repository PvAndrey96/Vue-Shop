import api from '@/api';

export default {
  state: {
    cities: [],
    formCity: null,
    formAddress: '',
  },
  mutations: {
    setCities(state, data) {
      state.cities = data;
    },
    updateCity(state, data) {
      state.formCity = data;
    },
    updateAddress(state, val) {
      state.formAddress = val;
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
      const city = state.cities.find((item) => item.id === state.formCity);
      return city ? city.delivery : 0;
    },
    formCity: (state) => state.formCity,
    formAddress: (state) => state.formAddress,
  },
};
