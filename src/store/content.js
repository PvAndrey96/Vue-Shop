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
      { title: 'Худи Foces' },
      { title: 'Шорты Focus-XL' },
      { title: 'Худи RD-motivation Foces' },
      { title: 'Платье RDX Shot-Foces' },
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
