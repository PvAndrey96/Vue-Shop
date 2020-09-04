<template>
  <div class="self-start col-span-4 px-5 border">
    <VCartItem
      v-for="(product, id) in cartItems"
      class="py-5"
      :class="{'border-t': id}"
      :key="product.id"
      :to="product.url"
      :img="product.img"
      :title="product.name"
      :size="product.size"
      :price="product.price"
      :count="product.count"
      @update:count="updateCountCartItem({ id: product.id, val: $event })"
      @delete="removeCartItem(product.id)"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import VCartItem from '@/components/base/VCartItem.vue';

export default {
  name: 'TheCartItems',
  components: {
    VCartItem,
  },
  computed: mapGetters(['cartItems']),
  methods: mapMutations(['updateCountCartItem', 'removeCartItem']),
};
</script>
