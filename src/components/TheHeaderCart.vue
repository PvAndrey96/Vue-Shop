<template>
  <div
    class="relative flex lg:static"
    v-click-outside="closeCartPreviewOpen"
  >
    <button
      class="flex items-center h-10 px-2 my-auto -mr-2 transition-colors duration-200 lg:h-auto lg:my-0 text-black-50 hover:text-black-70"
      @click="$store.commit('toggleCartPreviewOpen')"
    >
      <VSvg
        class="w-6 h-6 md:w-5 md:h-5"
        name="cart"
      />
      <div class="ml-1 font-medium text-black-50">
        {{$store.getters.cartProductsCount}}
      </div>
    </button>
    <div
      v-if="$store.getters.cartPreviewOpen"
      class="absolute right-0 z-10 pt-2 w-96 mt-18 lg:w-full lg:pt-0 lg:mt-14"
    >
      <div class="px-4 pb-3 bg-white border lg:border-0 lg:border-b">
        <template v-if="$store.getters.cartProducts.length">
          <ul class="mb-3">
            <VPreviewCartItem
              v-for="product in $store.getters.cartProducts"
              class="py-3 border-b"
              :key="product.slug"
              :to="`/product/${product.slug}`"
              :img="product.img"
              :title="product.name"
              :size="product.size"
              :count="product.count"
              :price="product.price * product.count"
            />
          </ul>
          <div class="flex justify-between mb-3">
            <div class="font-medium text-4">{{$store.getters.cartProducts.length}} товара на сумму:</div>
            <div class="font-medium uppercase">{{$store.getters.cartProductsPrice}} rub</div>
          </div>
        </template>
        <div
          v-else
          class="py-6 font-medium text-center text-5"
        >
          Ваша корзина пуста
        </div>
        <VButton
          small
          full
          to="/cart"
        >
          Перейти в корзину
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VPreviewCartItem from '@/components/base/VPreviewCartItem.vue';
import VButton from '@/components/base/VButton.vue';

export default {
  name: 'TheHeaderCart',
  components: {
    VPreviewCartItem, VButton,
  },
  watch: {
    $route() {
      this.$store.commit('closeCartPreviewOpen');
    },
  },
  methods: {
    closeCartPreviewOpen() {
      this.$store.commit('closeCartPreviewOpen');
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchCart');
  },
};
</script>
