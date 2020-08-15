<template>
  <li class="flex py-3 border-b">
    <router-link
      :to="url"
      class="mr-4"
    >
      <img
        :src="img"
        class="object-cover w-20 h-24"
      />
    </router-link>
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <router-link
          :to="url"
          class="font-bold uppercase transition-colors duration-200 text-4 text-black-70 hover:text-black-80"
        >
          {{title}}
        </router-link>
        <div>
          <span class="font-medium text-black-50">Размер: </span>
          <span class="font-medium uppercase text-black-50">{{size}}</span>
        </div>
      </div>
      <div class="font-medium text-black-50">Количество: {{count}}</div>
    </div>
    <div class="flex items-center font-medium uppercase text-black-50">
      {{price}} rub
    </div>
  </li>
</template>

<script>
export default {
  name: 'VPreviewCartItem',
  props: {
    url: {
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
