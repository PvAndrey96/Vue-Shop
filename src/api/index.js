import categories from './data/categories.json';
import products from './data/products.json';
import cities from './data/cities.json';

export default {
  getCategories() {
    return categories;
  },
  getProducts() {
    return products;
  },
  getCities() {
    return cities;
  },
};
