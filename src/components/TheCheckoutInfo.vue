<template>
  <div class="self-start col-span-2 p-5 border lg:col-span-6 lg:p-0 lg:border-0 lg:mb-4">
    <div class="mb-4 -mt-5 lg:mt-0">
      <VPreviewCartItem
        v-for="product in $store.getters.cartProducts"
        class="py-5 border-b lg:py-4"
        :key="product.name"
        :to="product.slug"
        :img="product.img"
        :title="product.name"
        :size="product.size"
        :count="product.count"
        :price="product.price * product.count"
      />
    </div>
    <div class="mb-4">
      <VTableRow>
        <div>Товаров:</div>
        <div>{{ $store.getters.cartProductsCount }}</div>
      </VTableRow>
      <VTableRow>
        <div>На сумму:</div>
        <div>{{ $store.getters.cartProductsPrice }} RUB</div>
      </VTableRow>
      <VTableRow>
        <div>Доставка:</div>
        <div>{{ $store.getters.delivery }} RUB</div>
      </VTableRow>
      <VTableFooter>
        <div>Итого:</div>
        <div>{{ totalPrice }} RUB</div>
      </VTableFooter>
    </div>
    <VButton full>Оформить заказ</VButton>
    <div class="mt-4 font-medium text-center">
      <span>Нажимая на кнопку "оформить заказ", вы подтверждаете согласие с </span>
      <router-link
        to="#"
        class="underline text-theme hover:no-underline"
      >
        пользовательским соглашением
      </router-link>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/base/VButton.vue';
import VTableRow from '@/components/base/VTableRow.vue';
import VTableFooter from '@/components/base/VTableFooter.vue';
import VPreviewCartItem from '@/components/base/VPreviewCartItem.vue';

export default {
  name: 'TheCheckoutInfo',
  components: {
    VButton, VPreviewCartItem, VTableFooter, VTableRow,
  },
  computed: {
    totalPrice() {
      return this.$store.getters.cartProductsPrice + this.$store.getters.delivery;
    },
  },
};
</script>
