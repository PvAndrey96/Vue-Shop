<template>
  <router-link
    class="group"
    :to="to"
  >
    <img :src="img"/>
    <div class="py-4">
      <div class="mb-2 font-medium transition-colors duration-200 text-5 group-hover:text-black">
        {{title}}
      </div>
      <div class="font-medium uppercase text-black-50">
        {{price}} rub
      </div>
    </div>
  </router-link>
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
