<template>
  <div class="self-start col-span-2 p-5 border lg:py-4 lg:border-0 lg:border-t lg:col-span-6 lg:px-0">
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
</template>

<script>
import VButton from '@/components/base/VButton.vue';
import VTableRow from '@/components/base/VTableRow.vue';
import VTableFooter from '@/components/base/VTableFooter.vue';

export default {
  name: 'TheCartInfo',
  components: {
    VButton, VTableRow, VTableFooter,
  },
};
</script>
