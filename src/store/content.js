import api from '@/api';

export default {
  state: {
    categories: [],
    cities: [],
    selectedCity: null,
    footerNav: [
      {
        text: 'О магазине',
        link: '#',
      },
      {
        text: 'Контакты',
        link: '#',
      },
      {
        text: 'Доставка и оплата',
        link: '#',
      },
      {
        text: 'Политика возврата',
        link: '#',
      },
      {
        text: 'Пользовательское соглашение',
        link: '#',
      },
    ],
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
    products: [
      {
        name: 'Куртка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/1a1/500_500_2ff1/30975050299.jpg',
        price: 4850,
      },
      {
        name: 'Худи красная RD',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/d2d/500_500_b318/32300440299.jpg',
        price: 3570,
      },
      {
        name: 'Ветровка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/f6a/500_500_27e9/19735240299.jpg',
        price: 4570,
      },
      {
        name: 'Куртка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/1a1/500_500_2ff1/30975050299.jpg',
        price: 4850,
      },
      {
        name: 'Худи красная RD',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/d2d/500_500_b318/32300440299.jpg',
        price: 3570,
      },
      {
        name: 'Ветровка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/f6a/500_500_27e9/19735240299.jpg',
        price: 4570,
      },
    ],
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    },
    setCities(state, data) {
      state.cities = data;
    },
    selectCity(state, data) {
      state.selectedCity = data;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const result = await api.getCategories();
      commit('setCategories', result);
    },
    async fetchCities({ commit }) {
      const result = await api.getCities();
      commit('setCities', result);
    },
  },
  getters: {
    categories: (state) => state.categories.filter((item) => !item.parent),
    subcategories: (state) => (slug) => state.categories.filter((item) => item.parent === slug),
    cities: (state) => state.cities,
    delivery: (state) => {
      const city = state.cities.find((item) => item.id === state.selectedCity);
      return city ? city.delivery : 0;
    },
    selectedCity: (state) => state.selectedCity,
    footerNav: (state) => state.footerNav,
    searchResult: (state) => state.searchResult,
    carouselSlides: (state) => state.carouselSlides,
    products: (state) => state.products,
  },
};
