<template>
  <router-link
    class="flex transform border w-7 h-7"
    :class="active ? 'scale-120 border-black-80' : 'transition-transform duration-200 hover:scale-120 hover:border-black-80'"
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
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
