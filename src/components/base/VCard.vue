<template>
  <div class="group">
    <router-link
      :to="to"
      class="flex"
    >
      <img
        :src="img"
        class="w-full"
      />
    </router-link>
    <div class="py-4">
      <router-link
        :to="to"
        class="flex mb-2 font-medium transition-colors duration-200 text-5 group-hover:text-black"
      >
        {{title}}
      </router-link>
      <div class="font-medium uppercase text-black-50">
        {{price}} rub
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
