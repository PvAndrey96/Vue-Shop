<template>
  <nav
    class="flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': !$store.getters.searchFocus}"
  >
    <ul class="flex">
      <li
        v-for="item in $store.getters.navCategories"
        :key="item.slug"
        class="flex group"
      >
        <router-link
          :to="`/catalog/${item.slug}`"
          class="flex flex-col mx-5"
        >
          <hr
            class="w-0 mx-auto duration-200 border-t-4 border-theme transition-width"
            :class="item.slug === activeRootCategory ? 'w-full' : 'group-hover:w-full'"
          />
          <div class="flex items-center flex-grow pb-1 font-medium uppercase">
            {{item.name}}
          </div>
        </router-link>
        <div
          v-if="item.subItems.length"
          class="absolute z-10 hidden pt-2 mt-18 group-hover:block"
        >
          <ul class="py-2 bg-white border">
            <li
              v-for="subItem in item.subItems"
              :key="subItem.slug"
            >
              <router-link
                :to="`/catalog/${subItem.slug}`"
                class="flex items-center h-10 px-5 font-medium transition-colors duration-200 text-4 text-black-70"
                :class="subItem.slug === $route.params.category ? 'text-black' : 'hover:text-black'"
              >
                {{subItem.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderNav',
  async mounted() {
    await this.$store.dispatch('fetchNavCategories');
  },
  computed: {
    activeRootCategory() {
      const parentCategory = this.$store.getters.navCategories.find((item) => (
        item.subItems.findIndex((subItem) => subItem.slug === this.$route.params.category) >= 0
      ));
      return parentCategory ? parentCategory.slug : this.$route.params.category;
    },
  },
  methods: {
    subItemActive(subItems) {
      return subItems.findIndex((item) => item.slug === this.$route.params.category) >= 0;
    },
  },
};
</script>
