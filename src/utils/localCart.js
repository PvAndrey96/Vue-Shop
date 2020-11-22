export default {
  get() {
    const json = localStorage.getItem('cart');
    return json ? JSON.parse(json) : [];
  },
  set(cartItems) {
    const json = JSON.stringify(cartItems);
    localStorage.setItem('cart', json);
  },
};
