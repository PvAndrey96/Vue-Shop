<template>
  <div class="px-5 border lg:border-0 lg:px-0">
    <div v-if="$store.getters.cartProducts.length">
      <VCartItem
        v-for="(product, id) in $store.getters.cartProducts"
        class="py-5 lg:py-4"
        :class="{'border-t': id}"
        :key="product.slug"
        :to="`/product/${product.slug}`"
        :img="product.img"
        :title="product.name"
        :size="product.size"
        :price="product.price * product.count"
        :count="product.count"
        @update:count="$store.dispatch('updateCountCartProduct', { slug: product.slug, count: $event })"
        @delete="$store.dispatch('removeCartProduct', product.slug)"
      />
    </div>
    <div
      v-else
      class="py-5 font-medium lg:py-4 text-5"
    >
      Ваша корзина пуста
    </div>
  </div>
</template>

<script>
import VCartItem from '@/components/base/VCartItem.vue';

export default {
  name: 'TheCartItems',
  components: {
    VCartItem,
  },
  async mounted() {
    await this.$store.dispatch('fetchCart');
  },
};
</script>
