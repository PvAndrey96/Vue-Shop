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
    clearCart(state) {
      state.cartProducts = [];
    },
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
      const id = state.cartProducts.findIndex((item) => (
        item.slug === product.slug && item.size === product.size
      ));
      if (id >= 0) {
        state.cartProducts[id].count += product.count;
      } else {
        state.cartProducts.push(product);
      }
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
      const data = { slug, size, count };
      const cartItems = localCart.get();
      const id = cartItems.findIndex((item) => item.slug === slug && item.size === size);
      if (id >= 0) {
        cartItems[id].count += count;
      } else {
        cartItems.push(data);
      }
      localCart.set(cartItems);
      commit('addProductCart', {
        ...data,
        ...await api.getDetailProductCart(slug),
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
    clearCart({ commit }) {
      localCart.set([]);
      commit('clearCart');
    },
  },
  getters: {
    cartProducts: (state) => state.cartProducts,
    cartProductsCount: (state) => state.cartProducts.reduce((count, product) => count + product.count, 0),
    cartProductsPrice: (state) => state.cartProducts.reduce((price, product) => price + product.price * product.count, 0),
  },
};
