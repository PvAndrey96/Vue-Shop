import api from '@/api';

export default {
  state: {
    product: {
      name: '',
      images: [],
      description: '',
      price: '',
      colors: [],
      sizes: [],
    },
  },
  mutations: {
    setProductInfo(state, data) {
      state.product = data;
    },
  },
  actions: {
    async fetchProductInfo({ commit }, slug) {
      const result = await api.getProductInfo(slug);
      commit('setProductInfo', result);
    },
  },
  getters: {
    productTitle: (state) => state.product.name,
    productImages: (state) => state.product.images,
    productDescription: (state) => state.product.description,
    productPrice: (state) => state.product.price,
    productColors: (state) => state.product.colors,
    productSizes: (state) => state.product.sizes,
  },
};
