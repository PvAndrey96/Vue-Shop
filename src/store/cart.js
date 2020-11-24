import api from '@/api';
import localCart from '@/utils/localCart';

export default {
  state: {
    cartProducts: [],
  },
  mutations: {
    clearCart(state) {
      state.cartProducts = [];
    },
    updateCountCartProduct(state, { cartId, count }) {
      state.cartProducts.find((item) => item.cartId === cartId).count = count;
    },
    removeCartProduct(state, cartId) {
      state.cartProducts.splice(state.cartProducts.findIndex((item) => item.cartId === cartId), 1);
    },
    setProductsCart(state, products) {
      state.cartProducts = products;
    },
    addProductCart(state, product) {
      const index = state.cartProducts.findIndex((item) => item.cartId === product.cartId);
      if (index >= 0) {
        state.cartProducts[index].count += product.count;
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
      const cartId = `${slug}-${size}`;
      const data = { cartId, slug, size, count };
      const cartItems = localCart.get();
      const index = cartItems.findIndex((item) => item.cartId === cartId);
      if (index >= 0) {
        cartItems[index].count += count;
      } else {
        cartItems.push(data);
      }
      localCart.set(cartItems);
      commit('addProductCart', {
        ...data,
        ...await api.getDetailProductCart(slug),
      });
    },
    removeCartProduct({ commit }, cartId) {
      const cartItems = localCart.get();
      cartItems.splice(cartItems.findIndex((item) => item.cartId === cartId), 1);
      localCart.set(cartItems);
      commit('removeCartProduct', cartId);
    },
    updateCountCartProduct({ commit }, { cartId, count }) {
      const cartItems = localCart.get();
      cartItems.find((item) => item.cartId === cartId).count = count;
      localCart.set(cartItems);
      commit('updateCountCartProduct', { cartId, count });
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
