<template>
  <button
    class="flex items-center justify-center px-5 text-white uppercase transition-colors duration-200 bg-theme hover:bg-theme-accent"
    :class="classButton"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    small: {
      type: Boolean,
    },
    full: {
      type: Boolean,
    },
  },
  computed: {
    classButton() {
      return [this.small ? 'h-8' : 'h-10', { 'w-full': this.full }];
    },
  },
};
</script>
