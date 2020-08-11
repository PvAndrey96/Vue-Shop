<template>
  <router-link
    :to="to"
    :style="{background: color}"
    class="flex w-6 h-6 transition-transform duration-200 transform border hover:scale-120 hover:border-black-80"
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
