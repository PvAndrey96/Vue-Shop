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
    setProductsCart(state, products) {
      state.cartProducts = products;
    },
  actions: {
    fetchCart({ commit }) {
      let cartItems = localStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.map((item) => ({
        ...item,
        ...api.getDetailProductCart(item.slug),
      }));
      commit('setProductsCart', cartItems);
    },
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
