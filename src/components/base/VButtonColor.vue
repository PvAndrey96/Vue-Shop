<template>
  <router-link
    :to="to"
    :style="{background: color}"
    class="flex transition-transform duration-200 transform border w-7 h-7 hover:scale-120 hover:border-black-80"
  />
</template>

<script>
export default {
  name: 'VButtonColor',
  props: {
    color: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
};
</script>
