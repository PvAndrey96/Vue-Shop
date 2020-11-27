<template>
  <VContainer class="py-6 lg:py-4">
    <div class="flex flex-wrap items-center justify-between mt-2 mb-6">
      <h1 class="font-medium text-8">Поиск по запросу "{{$store.getters.searchString}}"</h1>
    </div>
    <div
      v-if="$store.getters.searchResult.length"
      class="grid grid-cols-5 gap-6 lg:grid-cols-4 sm:gap-4 md:grid-cols-3 sm:grid-cols-2"
    >
      <VCard
        v-for="product in $store.getters.searchResult"
        :key="product.slug"
        :to="`/product/${product.slug}`"
        :title="product.name"
        :img="product.img"
        :price="product.price"
      />
    </div>
    <div
      v-else
      class="p-5 font-medium border lg:border-0 lg:border-t lg:px-0 lg:py-4 text-5"
    >
      Введите поисковой запрос
    </div>
  </VContainer>
</template>

<script>
import VCard from '@/components/base/VCard.vue';

export default {
  name: 'Catalog',
  components: {
    VCard,
  },
};
</script>
