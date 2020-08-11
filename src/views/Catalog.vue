<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <div class="flex flex-wrap items-center justify-between mb-6">
      <h1 class="font-medium lg:mb-3 text-8 lg:w-full">Мужчинам</h1>
      <VSelect class="lg:w-2/3 lg:border-r-0"/>
      <button
        @click="toggleDisplayFiltersMob"
        class="hidden w-1/3 h-10 border lg:flex"
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
      <div class="grid grid-cols-4 col-span-4 gap-6 lg:col-span-5 md:grid-cols-3 sm:grid-cols-2">
        <VCard
          v-for="(product, id) in products"
          :key="id"
          :title="product.name"
          :img="product.img"
          :price="product.price"
        />
      </div>
    </div>
    <TheMobileFilters/>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
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
    VBreadcrumbs, VSelect, VCard, TheMobileFilters, TheFilterCategory, TheFilterSize, TheFilterColor,
  },
  computed: mapGetters(['products']),
  methods: mapMutations(['toggleDisplayFiltersMob']),
};
</script>
