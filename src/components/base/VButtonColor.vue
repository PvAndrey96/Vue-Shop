<template>
  <router-link
    class="flex transition-transform duration-200 transform border w-7 h-7 hover:scale-120 hover:border-black-80"
    :style="{background: color}"
    :to="to"
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
