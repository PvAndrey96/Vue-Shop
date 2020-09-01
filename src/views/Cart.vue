<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <h1 class="mb-6 font-medium text-8">Корзина</h1>
    <div class="grid grid-cols-5 gap-8">
      <div class="col-span-3 -mt-5">
      </div>
      <div class="grid-cols-2"></div>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VCartItem from '@/components/base/VCartItem.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    VBreadcrumbs, VCartItem,
  },
  computed: mapGetters(['cartItems']),
  methods: mapMutations(['updateCountCartItem']),
};
</script>
