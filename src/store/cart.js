export default {
  state: {
    cartItems: [
      {
        id: 1,
        name: 'Куртка спортивная',
        url: '#',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/46f/500_500_b928/32399770299.jpg',
        count: 1,
        size: 'xs',
        price: 4850,
      },
      {
        id: 2,
        name: 'Худи красная RD',
        url: '#',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/bbe/500_500_3540/32762330299.jpg',
        count: 2,
        size: 's',
        price: 3570,
      },
    ],
  },
  mutations: {
    updateCountCartItem(state, { id, val }) {
      state.cartItems.find((el) => el.id === id).count = val;
    },
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
  },
};
