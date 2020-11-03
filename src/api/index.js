import arraySort from 'array-sort';
import JSONcategories from './data/categories.json';
import JSONproducts from './data/products.json';
import JSONcities from './data/cities.json';
import JSONinfoPages from './data/info_pages.json';
import JSONcolors from './data/filters_color.json';
import JSONsizes from './data/filters_size.json';

const helpers = {
  subcategories(slug) {
    return JSONcategories.filter((item) => item.parent === slug).map((item) => ({
      name: item.name,
      slug: item.slug,
    }));
  },
  productsCategory(slug) {
    const slugsCategories = JSONcategories.filter((item) => item.parent === slug).map((item) => item.slug);
    slugsCategories.push(slug);
    return slugsCategories.reduce((productsArr, slugCategory) => (
      productsArr.concat(
        JSONproducts.filter((product) => product.category === slugCategory),
      )
    ), []);
  },
};

export default {
  getCategories() {
    return JSONcategories;
  },
  getNavCategories() {
    return JSONcategories.filter((item) => !item.parent).map((item) => ({
      name: item.name,
      slug: item.slug,
      subItems: helpers.subcategories(item.slug),
    }));
  },
  getNavInfoPages() {
    return JSONinfoPages.map((item) => ({
      name: item.title,
      slug: item.slug,
    }));
  },
  getInfoPage(slug) {
    const infoPage = JSONinfoPages.find((item) => item.slug === slug);
    return {
      title: infoPage.title,
      content: infoPage.content,
    };
  },
  getCategoryInfo(slug) {
    return {
      title: JSONcategories.find((item) => item.slug === slug).name,
      subcategories: helpers.subcategories(slug),
    };
  },
  getSearchResult(searchString) {
    return JSONproducts.filter(
      (product) => new RegExp(searchString, 'i').test(product.name),
    ).map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.images[0],
    }));
  },
  getProductsCatalog(category, size, color, sort, order) {
    const products = helpers.productsCategory(category).filter((product) => {
      if (size && !product.sizes.includes(size)) return false;
      if (color && product.color !== color) return false;
      return true;
    }).map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.images[0],
    }));
    return arraySort(products, sort, { reverse: order === 'desc' });
  },
  getFiltersColor(slugCategory) {
    return JSONcolors.filter((color) => (
      helpers.productsCategory(slugCategory).find((product) => product.color === color.slug)
    ));
  },
  getFiltersSize(slugCategory) {
    return JSONsizes.filter((size) => (
      helpers.productsCategory(slugCategory).find((product) => product.sizes.includes(size.slug))
    ));
  },
  getProductInfo(slug) {
    const product = JSONproducts.find((item) => item.slug === slug);
    const productsModel = JSONproducts.filter((item) => item.model === product.model);
    return {
      slug: product.slug,
      name: product.name,
      description: product.description,
      price: product.price,
      images: product.images,
      colors: productsModel.map((item) => ({
        href: item.slug,
        value: JSONcolors.find((color) => color.slug === item.color).value,
      })),
      sizes: product.sizes.map((slugSize) => JSONsizes.find((size) => size.slug === slugSize)),
      selectedSize: '',
    };
  },
  getCities() {
    return JSONcities;
  },
};
