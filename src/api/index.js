import categories from './data/categories.json';
import products from './data/products.json';
import cities from './data/cities.json';
import infoPages from './data/info_pages.json';

export default {
  getCategories() {
    return categories;
  },
  getProductsCategory(slug) {
    const subcategories = categories.filter((item) => item.parent === slug);
    const slugsCategories = subcategories.map((item) => item.slug);
    slugsCategories.push(slug);
    return slugsCategories.reduce((prev, item) => prev.concat(products.filter((item2) => item2.category === item)), []);
  },
  getCities() {
    return cities;
  },
  getInfoPages() {
    return infoPages;
  },
};
