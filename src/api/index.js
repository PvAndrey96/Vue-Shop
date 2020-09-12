import categories from './data/categories.json';
import cities from './data/cities.json';

export default {
  getCategories() {
    return categories
      .filter((item) => item.parent_id === null)
      .map((item) => ({
        name: item.name,
        url: item.seo_url,
        subcategories: categories
          .filter((item2) => item2.parent_id === item.id)
          .map((item2) => ({
            name: item2.name,
            url: item2.seo_url,
          })),
      }));
  },
  getCities() {
    return cities;
  },
};
