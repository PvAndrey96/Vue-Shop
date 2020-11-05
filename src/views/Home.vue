<template>
  <div>
    <TheCarousel/>
    <VContainer class="grid gap-10 py-10 lg:py-6">
      <div>
        <h1 class="mb-6 font-medium text-8">Хиты продаж</h1>
        <div class="grid grid-cols-5 gap-6 xl:grid-cols-4 md:grid-cols-3 sm:gap-4 sm:grid-cols-2">
          <VCard
            v-for="product in productsBestsellers"
            :key="product.slug"
            :to="`/product/${product.slug}`"
            :title="product.name"
            :img="product.img"
            :price="product.price"
          />
        </div>
      </div>
      <div>
        <h1 class="mb-6 font-medium text-8">Новые поступления</h1>
        <div class="grid grid-cols-5 gap-6 xl:grid-cols-4 md:grid-cols-3 sm:gap-4 sm:grid-cols-2">
          <VCard
            v-for="product in productsNew"
            :key="product.slug"
            :to="`/product/${product.slug}`"
            :title="product.name"
            :img="product.img"
            :price="product.price"
          />
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script>
import TheCarousel from '@/components/TheCarousel.vue';
import VCard from '@/components/base/VCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    TheCarousel, VCard,
  },
  computed: mapGetters(['productsBestsellers', 'productsNew']),
  async mounted() {
    await this.$store.dispatch('fetchProductsBestsellers');
    await this.$store.dispatch('fetchProductsNew');
  },
};
</script>
