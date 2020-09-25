<template>
  <VContainer class="py-6 lg:py-4">
    <div class="flex flex-wrap items-center justify-between mt-2 mb-6">
      <h1 class="font-medium lg:mb-3 text-8 lg:w-full">{{catalogTitle}}</h1>
      <VSelect
        class="w-56 lg:w-2/3"
        :options="optionsSortOrders"
        :selected="catalogSortOrder"
        @select="toggleCatalogSortOrder($event)"
      />
      <button
        @click="toggleDisplayFiltersMob"
        class="hidden w-1/3 h-10 border lg:flex lg:border-l-0"
      >
        <VSvg
          name="filter"
          class="w-6 h-6 m-auto"
        />
      </button>
    </div>
    <div class="grid grid-cols-5 gap-8">
      <div class="col-span-1 lg:hidden">
        <TheFilterCategory/>
        <TheFilterSize/>
        <TheFilterColor/>
      </div>
      <div class="col-span-4 lg:col-span-5">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
          <VCard
            v-for="product in catalogProducts"
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
</template>

<script>
import VSelect from '@/components/base/VSelect.vue';
import VCard from '@/components/base/VCard.vue';
import TheFilterCategory from '@/components/TheFilterCategory.vue';
import TheFilterSize from '@/components/TheFilterSize.vue';
import TheFilterColor from '@/components/TheFilterColor.vue';
import TheMobileFilters from '@/components/TheMobileFilters.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    VSelect, VCard, TheMobileFilters, TheFilterCategory, TheFilterSize, TheFilterColor,
  },
  data() {
    return {
      optionsSortOrders: [
        { value: 'price_desc', text: 'Сначала дороже' },
        { value: 'price_asc', text: 'Сначала дешевле' },
      ],
    };
  },
  watch: {
    $route: 'fetchData',
  },
  computed: mapGetters(['catalogSortOrder', 'catalogProducts', 'catalogTitle']),
  methods: {
    ...mapMutations(['toggleDisplayFiltersMob', 'toggleCatalogSortOrder']),
    async fetchData() {
      await this.$store.dispatch('fetchCategory', this.$route.params.category);
      await this.$store.dispatch('fetchProductsCatalog', this.$route.params.category);
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
