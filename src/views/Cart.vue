<template>
  <VContainer class="py-6 lg:py-4">
    <h1 class="mt-2 mb-6 font-medium text-8">Корзина</h1>
    <div class="grid grid-cols-6 gap-8 lg:gap-0">
      <TheCartItems/>
      <TheCartInfo/>
    </div>
  </VContainer>
</template>

<script>
import TheCartItems from '@/components/TheCartItems.vue';
import TheCartInfo from '@/components/TheCartInfo.vue';

export default {
  name: 'Catalog',
  components: {
    TheCartItems, TheCartInfo,
  },
};
</script>
