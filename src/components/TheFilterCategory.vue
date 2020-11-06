<template>
  <div
    v-if="$store.getters.catalogSubcategories.length"
    class="mb-4 lg:pb-6 lg:border-b lg:mb-0"
  >
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Категории
    </div>
    <ul>
      <li
        v-for="subcategory in $store.getters.catalogSubcategories"
        :key="subcategory.slug"
      >
        <router-link
          :to="`/catalog/${subcategory.slug}`"
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
};
</script>
