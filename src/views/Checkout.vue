<template>
  <div>
    <VContainer class="py-6 lg:py-4">
      <VBreadcrumbs class="mb-8"/>
      <h1 class="mb-6 font-medium text-8">Оформление заказа</h1>
      <div class="grid grid-cols-6 gap-8 lg:gap-0">
        <TheCheckoutForm/>
        <TheCheckoutInfo/>
      </div>
    </VContainer>
    <VModalWindow
      v-if="false"
    >
      <div class="p-8 text-center">
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
import TheCheckoutForm from '@/components/TheCheckoutForm.vue';
import TheCheckoutInfo from '@/components/TheCheckoutInfo.vue';
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VModalWindow from '@/components/base/VModalWindow.vue';
import VButton from '@/components/base/VButton.vue';

export default {
  name: 'Checkout',
  components: {
    VBreadcrumbs, TheCheckoutInfo, TheCheckoutForm, VModalWindow, VButton,
  },
};
</script>
