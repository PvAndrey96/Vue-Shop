import api from '@/api';

export default {
  state: {
    cities: [],
    selectedCity: null,
    address: '',
    email: '',
    phone: '',
    surname: '',
    name: '',
    patr: '',
    comment: '',
  },
  mutations: {
    setCities(state, data) {
      state.cities = data;
    },
    updateCity(state, data) {
      state.selectedCity = data;
    },
    updateAddress(state, val) {
      state.address = val;
    },
    updateEmail(state, val) {
      state.email = val;
    },
    updatePhone(state, val) {
      state.phone = val;
    },
    updateSurname(state, val) {
      state.surname = val;
    },
    updateName(state, val) {
      state.name = val;
    },
    updatePart(state, val) {
      state.patr = val;
    },
    updateComment(state, val) {
      state.comment = val;
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
    formCity: (state) => state.selectedCity,
    formAddress: (state) => state.address,
    formEmail: (state) => state.email,
    formPhone: (state) => state.phone,
    formSurname: (state) => state.surname,
    formName: (state) => state.name,
    formPatr: (state) => state.patr,
    formComment: (state) => state.comment,
  },
};
