<template>
  <li>
    <router-link
      :to="url"
      class="flex h-12 group"
    >
      <img
        :src="img"
        class="h-full"
      >
      <div class="flex items-center flex-grow px-4 font-medium transition-colors duration-200 text-4 group-hover:text-black text-black-70">
        {{title}}
      </div>
      <div class="flex items-center font-medium uppercase text-black-70">
        {{price}} rub
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'VSearchResultsItem',
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
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
