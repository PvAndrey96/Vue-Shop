import api from '@/api';

export default {
  state: {
    product: {
      name: '',
      images: [],
      description: '',
      price: '',
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
  },
};
