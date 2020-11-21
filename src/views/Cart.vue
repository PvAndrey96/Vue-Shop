<template>
  <div>
    <VContainer class="py-6 lg:py-4">
      <h1 class="mt-2 mb-6 font-medium text-8">Корзина / Оформление</h1>
      <div
        v-if="$store.getters.cartProducts.length"
        class="grid grid-cols-6 gap-8 lg:gap-0"
      >
        <div class="grid self-start col-span-4 gap-6 lg:gap-0 lg:-mt-4 lg:col-span-6">
          <TheCartItems/>
          <TheCartForm/>
        </div>
        <div class="col-span-2 -mt-6 lg:col-span-6">
          <div class="sticky top-0 pt-6">
            <TheCartInfo/>
          </div>
        </div>
      </div>
      <div
        v-else
        class="p-5 font-medium border lg:border-0 lg:border-t lg:px-0 lg:py-4 text-5"
      >
        Ваша корзина пуста
      </div>
    </VContainer>
    <VModalWindow
      v-if="$store.getters.checkoutWindowSuccess"
      @close="$store.commit('closseWindowSuccess')"
    >
      <div class="p-8 text-center sm:px-4">
        <div class="font-bold uppercase text-4">Ваш заказ успешно оформлен</div>
        <div class="mt-2 text-4">Наш менеджер свяжется с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки и оплаты.
        Спасибо за заказ!</div>
      </div>
      <VButton
        full
        small
        @click="$store.commit('closseWindowSuccess')"
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
import VButton from '@/components/base/VButton.vue';

export default {
  name: 'Catalog',
  components: {
    TheCartItems, TheCartForm, TheCartInfo, VModalWindow, VButton,
  },
};
</script>
