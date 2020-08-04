export default {
  state: {
    categories: [
      {
        name: 'Мужчинам',
        active: true,
        subcategories: [
          'Худи и свитшоты',
          'Майки',
          'Motivation colection',
          'Кросовки',
          'Толстовки',
        ],
      },
      {
        name: 'Женщинам',
        active: false,
        subcategories: [
          'Лонгсливы',
          'Motivation colection',
          'Толстовки',
          'Кросовки',
        ],
      },
      {
        name: 'Детям',
        active: false,
        subcategories: [
          'Футболки',
          'Толстовки',
          'Кросовки',
        ],
      },
      {
        name: 'Аксессуары',
        active: false,
        subcategories: [
          'Футболки',
          'Motivation colection',
          'Толстовки',
          'Кросовки',
        ],
      },
    ],
    searchResult: [
      {
        title: 'Худи Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/bbe/500_500_3540/32762330299.jpg',
        price: 1299,
      },
      {
        title: 'Шорты Focus-XL',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/46f/500_500_b928/32399770299.jpg',
        price: 2400,
      },
      {
        title: 'Худи RD-motivation Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/42d/500_500_2339/35366350299.jpg',
        price: 1300,
      },
      {
        title: 'Платье RDX Shot-Foces',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/bd4/500_500_f66d/32313940299.jpg',
        price: 4320,
      },
      {
        title: 'Шорты Focus-XL',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/46f/500_500_b928/32399770299.jpg',
        price: 990,
      },
    ],
  },
  mutations: {
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    searchResult(state) {
      return state.searchResult;
    },
  },
};
