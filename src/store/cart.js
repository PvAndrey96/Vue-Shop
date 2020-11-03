export default {
  state: {
    cartProducts: [],
  },
  mutations: {
    updateCountCartProduct(state, { id, val }) {
      state.cartProducts.find((el) => el.id === id).count = val;
    },
    removeCartProduct(state, id) {
      state.cartProducts.splice(state.cartProducts.findIndex((el) => el.id === id), 1);
    },
  },
  actions: {
    // addToCart({ commit }, { slug, size }) {
    //   //
    // },
  },
  getters: {
    cartProducts(state) {
      return state.cartProducts;
    },
  },
};
