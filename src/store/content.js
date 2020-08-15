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
    carouselSlides: [
      '',
      '',
      '',
    ],
    products: [
      {
        name: 'Куртка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/1a1/500_500_2ff1/30975050299.jpg',
        price: 4850,
      },
      {
        name: 'Худи красная RD',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/d2d/500_500_b318/32300440299.jpg',
        price: 3570,
      },
      {
        name: 'Ветровка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/f6a/500_500_27e9/19735240299.jpg',
        price: 4570,
      },
      {
        name: 'Куртка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/1a1/500_500_2ff1/30975050299.jpg',
        price: 4850,
      },
      {
        name: 'Худи красная RD',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/d2d/500_500_b318/32300440299.jpg',
        price: 3570,
      },
      {
        name: 'Ветровка спортивная',
        img: 'https://cdn.demix-sport.com/upload/mdm/media_content/resize/f6a/500_500_27e9/19735240299.jpg',
        price: 4570,
      },
    ],
    cartItems: [
      {
        name: 'Куртка спортивная',
        url: '#',
        img: 'https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab583f2f3f2.07685677.jpg',
        count: 1,
        size: 'xs',
        price: 4850,
      },
      {
        name: 'Худи красная RD',
        url: '#',
        img: 'https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab584176645.31120481.jpg',
        count: 2,
        size: 's',
        price: 3570,
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
    carouselSlides(state) {
      return state.carouselSlides;
    },
    products(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cartItems;
    },
  },
};
