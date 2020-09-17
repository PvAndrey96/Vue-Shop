<template>
  <nav
    class="flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': !searchFocus}"
  >
    <ul class="flex">
      <li
        v-for="category in categories"
        :key="category.slug"
        class="flex group"
      >
        <router-link
          :to="`/catalog/${category.slug}`"
          class="flex flex-col mx-5"
        >
          <hr class="w-0 mx-auto duration-200 border-t-4 border-theme transition-width group-hover:w-full" />
          <div class="flex items-center flex-grow pb-1 font-medium uppercase">
            {{category.name}}
          </div>
        </router-link>
        <div
          v-if="subcategories(category.slug).length"
          class="absolute z-10 hidden pt-2 mt-18 group-hover:block"
        >
          <ul class="py-2 bg-white border">
            <li
              v-for="subcategory in subcategories(category.slug)"
              :key="subcategory.slug"
            >
              <router-link
                :to="`/catalog/${subcategory.slug}`"
                class="flex items-center h-10 px-5 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
              >
                {{subcategory.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeaderNav',
  computed: mapGetters(['searchFocus', 'categories', 'subcategories']),
  async mounted() {
    await this.$store.dispatch('fetchCategories');
  },
};
</script>
