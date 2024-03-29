<template>
  <VContainer
    v-if="$store.getters.catalogSlug"
    class="py-6 lg:py-4"
  >
    <div class="flex flex-wrap items-center justify-between mt-2 mb-6">
      <h1 class="font-medium lg:mb-3 text-8 lg:w-full">{{ $store.getters.catalogTitle }}</h1>
      <VSelect
        class="w-56 lg:w-2/3"
        :options="optionsSortOrders"
        :selected="selectedSortOrder"
        @select="pushSortOrder($event)"
      />
      <button
        class="hidden w-1/3 h-10 border lg:flex lg:border-l-0"
        @click="$store.commit('toggleDisplayFiltersMob')"
      >
        <VSvg
          name="filter"
          class="w-6 h-6 m-auto"
        />
      </button>
    </div>
    <div class="grid grid-cols-5 gap-8">
      <div class="col-span-1 -mt-3 lg:hidden">
        <div class="sticky top-0 pt-3">
          <TheFilterCategory/>
          <TheFilterSize/>
          <TheFilterColor/>
        </div>
      </div>
      <div class="col-span-4 lg:col-span-5">
        <div class="grid grid-cols-4 gap-6 sm:gap-4 md:grid-cols-3 sm:grid-cols-2">
          <VCard
            v-for="product in $store.getters.catalogProducts"
            :key="product.slug"
            :to="`/product/${product.slug}`"
            :title="product.name"
            :img="product.img"
            :price="product.price"
          />
        </div>
      </div>
    </div>
    <TheMobileFilters/>
  </VContainer>
  <VNotFound v-else />
</template>

<script>
import VSelect from '@/components/base/VSelect.vue';
import VCard from '@/components/base/VCard.vue';
import TheFilterCategory from '@/components/TheFilterCategory.vue';
import TheFilterSize from '@/components/TheFilterSize.vue';
import TheFilterColor from '@/components/TheFilterColor.vue';
import TheMobileFilters from '@/components/TheMobileFilters.vue';
import VNotFound from '@/components/base/VNotFound.vue';

export default {
  name: 'Catalog',
  components: {
    VSelect, VCard, TheMobileFilters, TheFilterCategory, TheFilterSize, TheFilterColor, VNotFound,
  },
  data() {
    return {
      optionsSortOrders: [
        { value: 'sales-desc', text: 'По популярности' },
        { value: 'price-desc', text: 'Сначала дороже' },
        { value: 'price-asc', text: 'Сначала дешевле' },
        { value: 'name-asc', text: 'Название (а-я)' },
        { value: 'name-desc', text: 'Название (я-а)' },
      ],
    };
  },
  watch: {
    $route: 'fetchData',
  },
  computed: {
    selectedSortOrder() {
      return this.$route.query.sort || this.optionsSortOrders[0].value;
    },
  },
  methods: {
    pushSortOrder(value) {
      this.$router.push({
        query: { ...this.$route.query, sort: value },
      });
    },
    async fetchData() {
      await this.$store.dispatch('fetchCategory', this.$route.params.category);
      const [sort, order] = this.selectedSortOrder.split('-');
      await this.$store.dispatch('fetchProductsCatalog', {
        category: this.$route.params.category,
        size: this.$route.query.size,
        color: this.$route.query.color,
        sort,
        order,
      });
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
