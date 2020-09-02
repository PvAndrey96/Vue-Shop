<template>
  <li class="flex">
    <router-link
      :to="to"
      class="mr-5"
    >
      <img
        :src="img"
        class="object-cover w-40 h-40"
      />
    </router-link>
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <router-link
          :to="to"
          class="font-bold uppercase transition-colors duration-200 text-4 text-black-70 hover:text-black-80"
        >
          {{title}}
        </router-link>
        <div>
          <span class="font-medium text-black-50 text-4">Размер: </span>
          <span class="font-medium uppercase text-black-50 text-4">{{size}}</span>
        </div>
      </div>
      <div>
        <button
          class="font-medium transition-colors duration-200 text-black-50 hover:text-black-70 text-4"
          @click="$emit('delete')"
        >
          Удалить
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <VQuantityField
        :min="1"
        :value="count"
        @input='$emit("update:count", $event)'
      />
    </div>
    <div class="flex items-center justify-end w-1/6">
      <div class="font-medium text-right uppercase text-black-50">{{price}} rub</div>
    </div>
  </li>
</template>

<script>
import VQuantityField from '@/components/base/VQuantityField.vue';

export default {
  name: 'VPreviewCartItem',
  components: {
    VQuantityField,
  },
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
      validator(val) {
        return ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].indexOf(val) !== -1;
      },
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
