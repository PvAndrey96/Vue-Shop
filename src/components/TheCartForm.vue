<template>
  <form
    class="grid gap-4 p-5 border lg:border-0 lg:border-t lg:px-0"
    @submit.prevent='formSubmit'
  >
    <VFieldset legend="Адрес доставки">
      <VSelect
        class='col-span-3 sm:col-span-6'
        placeholder='Город'
        :textError="textErrorCity"
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
        :textError="textErrorEmail"
        :value="formEmail"
        @input="$store.commit('updateEmail', $event)"
      />
      <VTextFieldB
        placeholder='Телефон'
        class='col-span-3 sm:col-span-6'
        :textError="textErrorPhone"
        :value="formPhone"
        @input="$store.commit('updatePhone', $event)"
      />
      <VTextFieldB
        placeholder='Фамилия'
        class='col-span-2 sm:col-span-6'
        :textError="textErrorSurname"
        :value="formSurname"
        @input="$store.commit('updateSurname', $event)"
      />
      <VTextFieldB
        placeholder='Имя'
        class='col-span-2 sm:col-span-6'
        :textError="textErrorName"
        :value="formName"
        @input="$store.commit('updateName', $event)"
      />
      <VTextFieldB
        placeholder='Отчевство'
        class='col-span-2 sm:col-span-6'
        :textError="textErrorPatr"
        :value="formPatr"
        @input="$store.commit('updatePatr', $event)"
      />
    </VFieldset>
    <VFieldset legend="Дополнительная информация">
      <VTextFieldB
        class='col-span-6'
        placeholder='Коментарий к заказу'
        :textError="textErrorComment"
        :value="formComment"
        @input="$store.commit('updateComment', $event)"
      />
    </VFieldset>
  </form>
</template>

<script>
import VSelect from '@/components/base/VSelect.vue';
import VTextFieldB from '@/components/base/VTextFieldB.vue';
import VFieldset from '@/components/base/VFieldset.vue';
import { mapGetters } from 'vuex';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'TheCheckoutForm',
  components: {
    VTextFieldB, VSelect, VFieldset,
  },
  validations: {
    formCity: { selected: (v) => v !== null },
    formAddress: { required, maxLength: maxLength(32) },
    formEmail: { required, email, maxLength: maxLength(32) },
    formPhone: { required, minLength: minLength(9), maxLength: maxLength(32) },
    formSurname: { maxLength: maxLength(32) },
    formName: { required, maxLength: maxLength(32) },
    formPatr: { maxLength: maxLength(32) },
    formComment: { maxLength: maxLength(128) },
  },
  computed: {
    ...mapGetters(['formCity', 'formAddress', 'formEmail', 'formPhone', 'formSurname', 'formName', 'formPatr', 'formComment']),
    textErrorCity() {
      if (this.$v.formCity.$dirty) {
        if (!this.$v.formCity.selected) return 'Обязательное поле';
      }
      return '';
    },
    textErrorAddress() {
      if (this.$v.formAddress.$dirty) {
        if (!this.$v.formAddress.required) return 'Обязательное поле';
        if (!this.$v.formAddress.maxLength) return `Макс. длинна ${this.$v.formAddress.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorEmail() {
      if (this.$v.formEmail.$dirty) {
        if (!this.$v.formEmail.required) return 'Обязательное поле';
        if (!this.$v.formEmail.email) return 'Не коректный email';
        if (!this.$v.formEmail.maxLength) return `Макс. длинна ${this.$v.formEmail.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorPhone() {
      if (this.$v.formPhone.$dirty) {
        if (!this.$v.formPhone.required) return 'Обязательное поле';
        if (!this.$v.formPhone.minLength) return `Мин. длинна ${this.$v.formPhone.$params.minLength.min} символов`;
        if (!this.$v.formPhone.maxLength) return `Макс. длинна ${this.$v.formPhone.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorSurname() {
      if (this.$v.formSurname.$dirty) {
        if (!this.$v.formSurname.maxLength) return `Макс. длинна ${this.$v.formSurname.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorName() {
      if (this.$v.formName.$dirty) {
        if (!this.$v.formName.required) return 'Обязательное поле';
        if (!this.$v.formName.maxLength) return `Макс. длинна ${this.$v.formName.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorPatr() {
      if (this.$v.formPatr.$dirty) {
        if (!this.$v.formPatr.maxLength) return `Макс. длинна ${this.$v.formPatr.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorComment() {
      if (this.$v.formComment.$dirty) {
        if (!this.$v.formComment.maxLength) return `Макс. длинна ${this.$v.formComment.$params.maxLength.max} символов`;
      }
      return '';
    },
    optionsCities() {
      return this.$store.getters.cities.map((item) => ({
        value: item.id,
        text: item.name,
      }));
    },
  },
  methods: {
    async formSubmit() {
      // if (!this.$v.$invalid) {
      //   alert(1);
      // } else {
      //   this.$v.$touch();
      // }
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchCities');
  },
};
</script>
