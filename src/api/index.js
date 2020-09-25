import categories from './data/categories.json';
import products from './data/products.json';
import cities from './data/cities.json';
import infoPages from './data/info_pages.json';

const helpers = {
  subcategories(slug) {
    return categories.filter((item) => item.parent === slug).map((item) => ({
      name: item.name,
      slug: item.slug,
    }));
  },
};

export default {
  getCategories() {
    return categories;
  },
  getNavCategories() {
    return categories.filter((item) => !item.parent).map((item) => ({
      name: item.name,
      slug: item.slug,
      subItems: helpers.subcategories(item.slug),
    }));
  },
  getNavInfoPages() {
    return infoPages.map((item) => ({
      name: item.title,
      slug: item.slug,
    }));
  },
  getInfoPage(slug) {
    const infoPage = infoPages.find((item) => item.slug === slug);
    return {
      title: infoPage.title,
      content: infoPage.content,
    };
  },
  getCategory(slug) {
    return {
      title: categories.find((item) => item.slug === slug).name,
      subcategories: helpers.subcategories(slug),
    };
  },
  getProductsCatalog(slug) {
    const subcategories = categories.filter((item) => item.parent === slug);
    const slugsCategories = subcategories.map((item) => item.slug);
    slugsCategories.push(slug);
    return slugsCategories.reduce((prev, item) => prev.concat(products.filter((item2) => item2.category === item)), []);
  },
  getCities() {
    return cities;
  },
};
