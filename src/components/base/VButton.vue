<template>
  <component
    :is="component"
    :to="to"
    class="flex items-center justify-center px-5 text-white uppercase transition-colors duration-200 bg-theme hover:bg-theme-accent"
    :class="classButton"
    @click="$emit('click')"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    to: {
      type: [String, Object],
    },
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
    component() {
      return this.to ? 'router-link' : 'button';
    },
  },
};
</script>
