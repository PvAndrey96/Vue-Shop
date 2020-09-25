import api from '@/api';

export default {
  state: {
    cities: [],
    selectedCity: null,
    searchResult: [
      {
        title: 'Худи Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/bbe/500_500_3540/32762330299.jpg',
        price: 1299,
      },
      {
        title: 'Шорты Focus-XL',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/46f/500_500_b928/32399770299.jpg',
        price: 2400,
      },
      {
        title: 'Худи RD-motivation Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/42d/500_500_2339/35366350299.jpg',
        price: 1300,
      },
      {
        title: 'Платье RDX Shot-Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/bd4/500_500_f66d/32313940299.jpg',
        price: 4320,
      },
      {
        title: 'Шорты Focus-XL',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/46f/500_500_b928/32399770299.jpg',
        price: 990,
      },
    ],
    carouselSlides: [
      '',
      '',
      '',
    ],
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
    searchResult: (state) => state.searchResult,
    carouselSlides: (state) => state.carouselSlides,
  },
};
