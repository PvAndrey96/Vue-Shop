<template>
  <div class="grid gap-6 p-5 pb-8 border lg:border-0 lg:border-t lg:px-0 ">
    <div>
      <div class="mb-4 font-medium text-5">Адрес доставки</div>
      <div class="grid grid-cols-6 gap-5 lg:gap-4">
        <VSelect
          class='col-span-3 sm:col-span-6'
          placeholder='Город'
          :options="optionsCities"
          :selected="$store.getters.selectedCity"
          @select="$store.commit('selectCity', $event)"
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
import VSelect from '@/components/base/VSelect.vue';
import VTextFieldB from '@/components/base/VTextFieldB.vue';

export default {
  name: 'TheCheckoutForm',
  components: {
    VTextFieldB, VSelect,
  },
  computed: {
    optionsCities() {
      return this.$store.getters.cities.map((item) => ({
        value: item.id,
        text: item.name,
      }));
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchCities');
  },
};
</script>
