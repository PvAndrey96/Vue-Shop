import categories from './data/categories.json';
import products from './data/products.json';
import cities from './data/cities.json';
import infoPages from './data/info_pages.json';
import colors from './data/filters_color.json';
import sizes from './data/filters_size.json';

const helpers = {
  subcategories(slug) {
    return categories.filter((item) => item.parent === slug).map((item) => ({
      name: item.name,
      slug: item.slug,
    }));
  },
  productsCategory(slug) {
    const slugsCategories = categories.filter((item) => item.parent === slug).map((item) => item.slug);
    slugsCategories.push(slug);
    return slugsCategories.reduce((productsArr, slugCategory) => (
      productsArr.concat(
        products.filter((product) => product.category === slugCategory),
      )
    ), []);
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
  getCategoryInfo(slug) {
    return {
      title: categories.find((item) => item.slug === slug).name,
      subcategories: helpers.subcategories(slug),
    };
  },
  getProductsCatalog(category, size, color) {
    return helpers.productsCategory(category).filter((product) => {
      if (size && !product.sizes.includes(size)) return false;
      if (color && product.color !== color) return false;
      return true;
    }).map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.images[0],
    }));
  },
  getFiltersColor(slugCategory) {
    return colors.filter((color) => (
      helpers.productsCategory(slugCategory).find((product) => product.color === color.slug)
    ));
  },
  getFiltersSize(slugCategory) {
    return sizes.filter((size) => (
      helpers.productsCategory(slugCategory).find((product) => product.sizes.includes(size.slug))
    ));
  },
  getProductInfo(slug) {
    const product = products.find((item) => item.slug === slug);
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      images: product.images,
    };
  },
  getCities() {
    return cities;
  },
};
