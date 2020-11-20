<template>
  <form class="grid gap-4 p-5 border lg:border-0 lg:border-t lg:px-0">
    <VFieldset legend="Адрес доставки">
      <VSelect
        class='col-span-3 sm:col-span-6'
        placeholder='Город'
        :options="optionsCities"
        :selected="formCity"
        @select="$store.commit('updateCity', $event)"
      />
      <VTextFieldB
        class='col-span-3 sm:col-span-6'
        placeholder='Адрес'
        :textError="textErrorAddress"
        :value="formAddress"
        @input="$store.commit('updateAddress', $event)"
      />
    </VFieldset>
    <VFieldset legend="Контактная информация">
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
    </VFieldset>
    <VFieldset legend="Дополнительная информация">
      <VTextFieldB
        class='col-span-6'
        placeholder='Коментарий к заказу'
      />
    </VFieldset>
  </form>
</template>

<script>
import VSelect from '@/components/base/VSelect.vue';
import VTextFieldB from '@/components/base/VTextFieldB.vue';
import VFieldset from '@/components/base/VFieldset.vue';
import { mapGetters } from 'vuex';
import { maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'TheCheckoutForm',
  components: {
    VTextFieldB, VSelect, VFieldset,
  },
  validations: {
    formAddress: { maxLength: maxLength(4) },
  },
  computed: {
    ...mapGetters(['formCity', 'formAddress']),
    textErrorAddress() {
      if (!this.$v.formAddress.maxLength) {
        return 'Косяк';
      }
      return 'Все четко';
    },
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
