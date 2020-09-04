<template>
  <div class="grid self-start col-span-4 gap-6 p-5 pb-8 border lg:col-span-6 lg:border-l-0 lg:border-r-0 lg:px-0 ">
    <div>
      <div class="mb-4 font-medium text-5">Адрес доставки</div>
      <div class="grid grid-cols-6 gap-5 lg:gap-4">
        <VTextFieldB
          class='col-span-3 sm:col-span-6'
          placeholder='Город'
        />
        <VTextFieldB
          class='col-span-3 sm:col-span-6'
          placeholder='Адрес'
        />
      </div>
    </div>
    <div>
      <div class="mb-4 font-medium text-5">Контактная информация</div>
      <div class="grid grid-cols-6 gap-5 lg:gap-4">
        <VTextFieldB
          placeholder='Email'
          class='col-span-3 sm:col-span-6'
        />
        <VTextFieldB
          placeholder='Телефон'
          class='col-span-3 sm:col-span-6'
        />
        <VTextFieldB
          placeholder='Фамилия'
          class='col-span-2 sm:col-span-6'
        />
        <VTextFieldB
          placeholder='Имя'
          class='col-span-2 sm:col-span-6'
        />
        <VTextFieldB
          placeholder='Отчевство'
          class='col-span-2 sm:col-span-6'
        />
      </div>
    </div>
    <div>
      <div class="mb-4 font-medium text-5">Дополнительная информация</div>
      <div class="grid grid-cols-6 gap-5">
        <VTextFieldB
          class='col-span-6'
          placeholder='Коментарий к заказу'
        />
      </div>
    </div>
  </div>
</template>

<script>
import VTextFieldB from '@/components/base/VTextFieldB.vue';

export default {
  name: 'TheCheckoutForm',
  components: {
    VTextFieldB,
  },
};
</script>
