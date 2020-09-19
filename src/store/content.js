import api from '@/api';

export default {
  state: {
    categories: [],
    productsCategory: [],
    cities: [],
    infoPages: [],
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
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    },
    setCities(state, data) {
      state.cities = data;
    },
    setProductsCategory(state, data) {
      state.productsCategory = data;
    },
    selectCity(state, data) {
      state.selectedCity = data;
    },
    setInfoPages(state, data) {
      state.infoPages = data;
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
    async fetchProductsCategory({ commit }, slug) {
      const result = await api.getProductsCategory(slug);
      commit('setProductsCategory', result);
    },
    async fetchInfoPages({ commit }) {
      const result = await api.getInfoPages();
      commit('setInfoPages', result);
    },
  },
  getters: {
    categories: (state) => state.categories.filter((item) => !item.parent),
    subcategories: (state) => (slug) => state.categories.filter((item) => item.parent === slug),
    categoryTitle: (state) => (slug) => {
      const category = state.categories.find((item) => item.slug === slug);
      return category ? category.name : '';
    },
    infoPages: (state) => state.infoPages,
    infoPageTitle: (state) => (slug) => {
      const infoPage = state.infoPages.find((item) => item.slug === slug);
      return infoPage ? infoPage.title : '';
    },
    infoPageContent: (state) => (slug) => {
      const infoPage = state.infoPages.find((item) => item.slug === slug);
      return infoPage ? infoPage.content : '';
    },
    cities: (state) => state.cities,
    delivery: (state) => {
      const city = state.cities.find((item) => item.id === state.selectedCity);
      return city ? city.delivery : 0;
    },
    selectedCity: (state) => state.selectedCity,
    searchResult: (state) => state.searchResult,
    carouselSlides: (state) => state.carouselSlides,
    productsCategory: (state) => state.productsCategory,
  },
};
