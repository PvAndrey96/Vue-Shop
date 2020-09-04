<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <h1 class="mb-6 font-medium text-8">Корзина</h1>
    <div class="grid grid-cols-6 gap-8">
      <div class="col-span-4 px-5 border">
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
      <div class="self-start col-span-2 p-5 border">
        <div class="mb-4">
          <VTableRow>
            <div>Товаров:</div>
            <div>2</div>
          </VTableRow>
          <VTableRow>
            <div>На сумму:</div>
            <div>1280 RUB</div>
          </VTableRow>
          <VTableFooter>
            <div>Итого:</div>
            <div>1280 RUB</div>
          </VTableFooter>
        </div>
        <VButton
          full
          to="/checkout"
        >
          Оформление заказа
        </VButton>
      </div>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VButton from '@/components/base/VButton.vue';
import VTableRow from '@/components/base/VTableRow.vue';
import VTableFooter from '@/components/base/VTableFooter.vue';
import VCartItem from '@/components/base/VCartItem.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    VBreadcrumbs, VCartItem, VButton, VTableRow, VTableFooter,
  },
  computed: mapGetters(['cartItems']),
  methods: mapMutations(['updateCountCartItem', 'removeCartItem']),
};
</script>
