<template>
  <div>
    <TheCarousel/>
    <VContainer class="grid gap-10 py-10 lg:py-6">
      <div>
        <div class="flex items-center justify-between mb-6">
          <h1 class="font-medium text-8">Хиты продаж</h1>
          <VButton small>Показать все</VButton>
        </div>
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
        <div class="flex items-center justify-between mb-6">
          <h1 class="font-medium text-8">Новинки</h1>
          <VButton small>Показать все</VButton>
        </div>
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
import VButton from '@/components/base/VButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    TheCarousel, VCard, VButton,
  },
  computed: mapGetters(['productsBestsellers', 'productsNew']),
  async mounted() {
    await this.$store.dispatch('fetchProductsBestsellers');
    await this.$store.dispatch('fetchProductsNew');
  },
};
</script>
