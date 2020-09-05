<template>
  <li class="flex">
    <router-link
      :to="to"
      class="mr-5 lg:mr-4"
    >
      <img
        :src="img"
        class="object-cover w-40 h-40 lg:w-32 lg:h-32"
      />
    </router-link>
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <router-link
          :to="to"
          class="flex font-bold uppercase transition-colors duration-200 text-4 text-black-70 hover:text-black-80"
        >
          {{title}}
        </router-link>
        <div>
          <span class="font-medium text-black-50 text-4">Размер: </span>
          <span class="font-medium uppercase text-black-50 text-4">{{size}}</span>
        </div>
        <div>
          <span class="font-medium text-black-50 text-4">Цена: </span>
          <span class="font-medium uppercase text-black-50 text-4">{{price}} rub</span>
        </div>
      </div>
      <VQuantityField
        :min="1"
        :value="count"
        @input='$emit("update:count", $event)'
      />
    </div>
    <div class="flex items-center sm:items-stretch">
      <button
        class="p-2 -mr-2 sm:px-0 sm:mr-0"
        @click="$emit('delete')"
      >
        <VSvg
          name="close"
          class="w-5 h-5 text-black-50"
        />
      </button>
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
