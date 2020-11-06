<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="flex items-center justify-center px-5 text-white transition-colors duration-200 bg-theme hover:bg-theme-accent"
    :class="[small ? 'h-8 text-5' : 'h-10 uppercase', { 'w-full': full }]"
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
};
</script>
