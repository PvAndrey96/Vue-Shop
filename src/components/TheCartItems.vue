<template>
  <div class="self-start col-span-4 px-5 border lg:-mt-4 lg:border-0 lg:col-span-6 lg:px-0">
    <div v-if="$store.getters.cartProducts.length">
      <VCartItem
        v-for="(product, id) in $store.getters.cartProducts"
        class="py-5 lg:py-4"
        :class="{'border-t': id}"
        :key="product.id"
        to="/product"
        :img="product.img"
        :title="product.name"
        :size="product.size"
        :price="product.price"
        :count="product.count"
        @update:count="$store.commit('updateCountCartProduct', { id: product.id, val: $event })"
        @delete="$store.commit('removeCartProduct', product.id)"
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
};
</script>
