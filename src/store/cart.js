import api from '@/api';

const localCart = {
  get() {
    const json = localStorage.getItem('cart');
    return json ? JSON.parse(json) : [];
  },
  set(cartItems) {
    const json = JSON.stringify(cartItems);
    localStorage.setItem('cart', json);
  },
};

export default {
  state: {
    cartProducts: [],
  },
  mutations: {
    updateCountCartProduct(state, { slug, count }) {
      state.cartProducts.find((item) => item.slug === slug).count = count;
    },
    removeCartProduct(state, slug) {
      state.cartProducts.splice(state.cartProducts.findIndex((item) => item.slug === slug), 1);
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
      let cartItems = localCart.get();
      cartItems = await cartItems.map((item) => ({
        ...item,
        ...api.getDetailProductCart(item.slug),
      }));
      commit('setProductsCart', cartItems);
    },
    async addToCart({ commit }, { slug, size, count }) {
      const cartItems = localCart.get();
      cartItems.push({ slug, size, count });
      localCart.set(cartItems);
      commit('addProductCart', {
        slug, size, count, ...await api.getDetailProductCart(slug),
      });
    },
    removeCartProduct({ commit }, slug) {
      const cartItems = localCart.get();
      cartItems.splice(cartItems.findIndex((item) => item.slug === slug), 1);
      localCart.set(cartItems);
      commit('removeCartProduct', slug);
    },
    updateCountCartProduct({ commit }, { slug, count }) {
      const cartItems = localCart.get();
      cartItems.find((item) => item.slug === slug).count = count;
      localCart.set(cartItems);
      commit('updateCountCartProduct', { slug, count });
    },
  },
  getters: {
    cartProducts: (state) => state.cartProducts,
    cartProductsCount: (state) => state.cartProducts.reduce((count, product) => count + product.count, 0),
    cartProductsPrice: (state) => state.cartProducts.reduce((price, product) => price + product.price * product.count, 0),
  },
};
