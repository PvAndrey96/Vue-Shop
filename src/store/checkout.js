import api from '@/api';
import localCart from '@/utils/localCart';

export default {
  state: {
    windowSuccess: false,
    cities: [],
    city: null,
    address: '',
    email: '',
    phone: '',
    surname: '',
    name: '',
    patr: '',
    comment: '',
  },
  mutations: {
    openWindowSuccess(state) {
      state.windowSuccess = true;
    },
    closseWindowSuccess(state) {
      state.windowSuccess = false;
    },
    setCities(state, data) {
      state.cities = data;
    },
    updateCity(state, data) {
      state.city = data;
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
    updatePatr(state, val) {
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
    async addOrder({ state }) {
      const products = localCart.get();
      await api.addOrder(
        state.city,
        state.address,
        state.email,
        state.phone,
        state.surname,
        state.name,
        state.patr,
        state.comment,
        products,
      );
    },
  },
  getters: {
    checkoutWindowSuccess: (state) => state.windowSuccess,
    cities: (state) => state.cities,
    delivery: (state) => {
      const city = state.cities.find((item) => item.id === state.city);
      return city ? city.delivery : 0;
    },
    formCity: (state) => state.city,
    formAddress: (state) => state.address,
    formEmail: (state) => state.email,
    formPhone: (state) => state.phone,
    formSurname: (state) => state.surname,
    formName: (state) => state.name,
    formPatr: (state) => state.patr,
    formComment: (state) => state.comment,
  },
};
