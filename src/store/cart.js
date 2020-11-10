import api from '@/api';

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
    addProductCart(state, product) {
      state.cartProducts.push(product);
    },
  },
  actions: {
    async fetchCart({ commit }) {
      let cartItems = localStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems = await cartItems.map((item) => ({
        ...item,
        ...api.getDetailProductCart(item.slug),
      }));
      commit('setProductsCart', cartItems);
    },
    async addToCart({ commit }, { slug, size, count }) {
      let cartItems = localStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.push({ slug, size, count });
      localStorage.setItem('cart', JSON.stringify(cartItems));
      commit('addProductCart', {
        slug, size, count, ...await api.getDetailProductCart(slug),
      });
    },
  },
  getters: {
    cartProducts(state) {
      return state.cartProducts;
    },
  },
};
