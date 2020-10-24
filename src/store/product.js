import api from '@/api';

export default {
  state: {
    name: '',
    images: [],
    description: '',
    price: '',
    colors: [],
    sizes: [],
    selectedSize: '',
  },
  mutations: {
    setProductInfo(state, data) {
      state.name = data.name;
      state.images = data.images;
      state.description = data.description;
      state.price = data.price;
      state.colors = data.colors;
      state.sizes = data.sizes;
    },
    selectSize(state, slug) {
      state.selectedSize = slug;
    },
  },
  actions: {
    async fetchProductInfo({ commit }, slug) {
      const result = await api.getProductInfo(slug);
      commit('setProductInfo', result);
    },
  },
  getters: {
    productTitle: (state) => state.name,
    productImages: (state) => state.images,
    productDescription: (state) => state.description,
    productPrice: (state) => state.price,
    productColors: (state) => state.colors,
    productSizes: (state) => state.sizes,
    productSelectedSize: (state) => state.selectedSize,
  },
};
