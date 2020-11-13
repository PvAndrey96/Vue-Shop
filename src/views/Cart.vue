<template>
  <div>
    <VContainer class="py-6 lg:py-4">
      <h1 class="mt-2 mb-6 font-medium text-8">Корзина / Оформление</h1>
      <div class="grid grid-cols-6 gap-8 lg:gap-0">
        <div class="grid self-start col-span-4 gap-6 lg:gap-0 lg:-mt-4 lg:col-span-6">
          <TheCartItems/>
          <TheCartForm/>
        </div>
        <TheCartInfo/>
      </div>
    </VContainer>
    <VModalWindow
      v-if="false"
    >
      <div class="p-8 text-center sm:px-4">
        <div class="font-bold uppercase text-4">Ваш заказ успешно оформлен</div>
        <div class="mt-2 text-4">Наш менеджер свяжется с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки и оплаты.
        Спасибо за заказ!</div>
      </div>
      <VButton
        full
        small
      >
        Закрыть
      </VButton>
    </VModalWindow>
  </div>
</template>

<script>
import TheCartItems from '@/components/TheCartItems.vue';
import TheCartForm from '@/components/TheCartForm.vue';
import VModalWindow from '@/components/base/VModalWindow.vue';
import TheCartInfo from '@/components/TheCartInfo.vue';

export default {
  name: 'Catalog',
  components: {
    TheCartItems, TheCartForm, TheCartInfo, VModalWindow,
  },
};
</script>
