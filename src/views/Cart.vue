<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <h1 class="mb-6 font-medium text-8">Корзина</h1>
    <div class="grid grid-cols-6 gap-8 lg:gap-0">
      <TheCartItems/>
      <TheCartInfo/>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import TheCartItems from '@/components/TheCartItems.vue';
import TheCartInfo from '@/components/TheCartInfo.vue';

export default {
  name: 'Catalog',
  components: {
    VBreadcrumbs, TheCartItems, TheCartInfo,
  },
};
</script>
