<template>
  <div class="self-start col-span-2 p-5 border lg:col-span-6 lg:p-0 lg:border-0">
    <div class="mb-4 -mt-5 lg:mt-0">
      <VPreviewCartItem
        v-for="(product) in cartItems"
        class="py-5 border-b"
        :key="product.name"
        :to="product.url"
        :img="product.img"
        :title="product.name"
        :size="product.size"
        :count="product.count"
        :price="product.price"
      />
    </div>
    <div class="mb-4">
      <VTableRow>
        <div>Товаров:</div>
        <div>2</div>
      </VTableRow>
      <VTableRow>
        <div>На сумму:</div>
        <div>1280 RUB</div>
      </VTableRow>
      <VTableRow>
        <div>Доставка:</div>
        <div>0 RUB</div>
      </VTableRow>
      <VTableFooter>
        <div>Итого:</div>
        <div>1280 RUB</div>
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
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheCheckoutInfo',
  components: {
    VButton, VPreviewCartItem, VTableFooter, VTableRow,
  },
  computed: mapGetters(['cartItems']),
  methods: mapMutations(['updateCountCartItem', 'removeCartItem']),
};
</script>
