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
        <div class="font-medium text-black-70">Размер: XL</div>
      </div>
      <div class="font-medium text-black-70">Количество: 3</div>
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
