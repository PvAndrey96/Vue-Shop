<template>
  <li>
    <component
      :is="component"
      :to="to"
      class="flex h-12 cursor-pointer group"
      @click="$emit('click')"
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
    </component>
  </li>
</template>

<script>
export default {
  name: 'VSearchListItem',
  props: {
    to: {
      type: [String, Object],
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
      type: Number,
      required: true,
    },
  },
  computed: {
    component() {
      return this.to ? 'router-link' : 'div';
    },
  },
};
</script>
