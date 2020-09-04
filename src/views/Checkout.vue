<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <h1 class="mb-6 font-medium text-8">Оформление заказа</h1>
    <div class="grid grid-cols-6 gap-8 lg:gap-0">
      <TheCheckoutForm/>
      <TheCheckoutInfo/>
    </div>
  </VContainer>
</template>

<script>
import TheCheckoutForm from '@/components/TheCheckoutForm.vue';
import TheCheckoutInfo from '@/components/TheCheckoutInfo.vue';
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';

export default {
  name: 'Checkout',
  components: {
    VBreadcrumbs, TheCheckoutInfo, TheCheckoutForm,
  },
};
</script>
