<template>
  <div class="mb-4 lg:pb-6 lg:border-b lg:mb-0">
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Категории
    </div>
    <ul>
      <li
        v-for="subcategory in subcategories"
        :key="subcategory.url"
      >
        <router-link
          :to="`/catalog/${subcategory.url}`"
          class="flex items-center h-8 px-3 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
        >
          {{subcategory.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheFilterCategory',
  computed: {
    subcategories() {
      return this.$store.getters.subcategories(this.$route.params.category);
    },
  },
};
</script>
