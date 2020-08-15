<template>
  <div class="relative flex lg:static">
    <button
      class="flex items-center h-10 px-2 my-auto -mr-2 transition-colors duration-200 lg:h-auto lg:my-0 text-black-50 hover:text-black-70"
      @click="toggleCartPreviewOpen"
    >
      <VSvg
        class="w-6 h-6 md:w-5 md:h-5"
        name="cart"
      />
      <div class="ml-1 font-medium text-black-50">2</div>
    </button>
    <div
      v-if="cartPreviewOpen"
      class="absolute right-0 z-10 pt-2 w-96 mt-18 lg:w-full lg:pt-0 lg:mt-14"
    >
      <div class="px-4 pb-3 bg-white border lg:border-0 lg:border-b">
        <ul class="mb-3">
          <VPreviewCartItem
            url="#"
            img="https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab583f2f3f2.07685677.jpg"
            title="Футболка мужская"
            count="2"
            price="1120"
          />
          <VPreviewCartItem
            url="#"
            img="https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab583f2f3f2.07685677.jpg"
            title="Футболка мужская"
            count="2"
            price="1120"
          />
        </ul>
        <div class="flex justify-between mb-3">
          <div class="font-medium text-4">4 товара на сумму:</div>
          <div class="font-medium uppercase">4400 rub</div>
        </div>
        <VButton
          small
          full
        >
          Перейти в корзину
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VPreviewCartItem from '@/components/base/VPreviewCartItem.vue';
import VButton from '@/components/base/VButton.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheHeaderCart',
  components: {
    VPreviewCartItem, VButton,
  },
  computed: mapGetters(['cartPreviewOpen']),
  methods: mapMutations(['toggleCartPreviewOpen']),
};
</script>
