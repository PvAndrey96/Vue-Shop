import arraySort from 'array-sort';
import JSONcategories from './data/categories.json';
import JSONproducts from './data/products.json';
import JSONcities from './data/cities.json';
import JSONinfoPages from './data/info_pages.json';
import JSONcolors from './data/filters_color.json';
import JSONsizes from './data/filters_size.json';

const sleep = (m) => new Promise((r) => setTimeout(r, m));

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
  async getNavCategories() {
    await sleep(1000);
    return JSONcategories.filter((item) => !item.parent).map((item) => ({
      name: item.name,
      slug: item.slug,
      subItems: helpers.subcategories(item.slug),
    }));
  },

  async getNavInfoPages() {
    await sleep(1000);
    return JSONinfoPages.map((item) => ({
      name: item.title,
      slug: item.slug,
    }));
  },

  async getInfoPage(slug) {
    await sleep(1000);
    const page = JSONinfoPages.find((item) => item.slug === slug);
    if (page) {
      return {
        slug: page.slug,
        title: page.title,
        content: page.content,
      };
    }
    return {};
  },

  async getCategoryInfo(slug) {
    await sleep(1000);
    const category = JSONcategories.find((item) => item.slug === slug);
    if (category) {
      return {
        slug: category.slug,
        title: category.name,
        subcategories: helpers.subcategories(category.slug),
      };
    }
    return {};
  },

  async getSearchResult(searchString) {
    await sleep(1000);
    return JSONproducts.filter(
      (product) => new RegExp(searchString, 'i').test(product.name),
    ).map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.images[0],
    }));
  },

  async getProducts({ category, size, color, sort, order, limit = Infinity, start = 0 }) {
    await sleep(1000);

    let products = category ? helpers.productsCategory(category) : JSONproducts;

    products = products.filter((product) => {
      if (size && !product.sizes.includes(size)) return false;
      if (color && product.color !== color) return false;
      return true;
    });

    products.forEach((product) => {
      // eslint-disable-next-line no-param-reassign
      product.time = new Date(product.date).getTime();
    });

    products = arraySort(products, sort, { reverse: order === 'desc' });

    products = products.splice(start, limit);

    products = products.map((product) => ({
      slug: product.slug,
      name: product.name,
      price: product.price,
      img: product.images[0],
    }));

    return products;
  },

  async getFiltersColor(slugCategory) {
    await sleep(1000);
    return JSONcolors.filter((color) => (
      helpers.productsCategory(slugCategory).find((product) => product.color === color.slug)
    ));
  },

  async getFiltersSize(slugCategory) {
    await sleep(1000);
    return JSONsizes.filter((size) => (
      helpers.productsCategory(slugCategory).find((product) => product.sizes.includes(size.slug))
    ));
  },

  async getProductInfo(slug) {
    await sleep(1000);
    const product = JSONproducts.find((item) => item.slug === slug);
    if (product) {
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
    }
    return {};
  },

  async getDetailProductCart(slug) {
    await sleep(1000);
    const product = JSONproducts.find((item) => item.slug === slug);
    return {
      name: product.name,
      price: product.price,
      img: product.images[0],
    };
  },

  async getCities() {
    await sleep(1000);
    return JSONcities;
  },

  async addOrder(city, address, email, phone, surname, name, patr, comment, products) {
    await sleep(1000);
    console.log(city, address, email, phone, surname, name, patr, comment, products);
  },
};
