<template>
  <router-link
    class="flex items-center justify-center w-10 h-10 font-medium uppercase border"
    :class="classes"
    :to="to"
  >
    {{size}}
  </router-link>
</template>

<script>
export default {
  name: 'VButtonSize',
  props: {
    size: {
      type: String,
      required: true,
      validator(val) {
        return ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].indexOf(val) !== -1;
      },
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
  computed: {
    classes() {
      return this.active ? 'bg-theme text-white' : 'transition-colors duration-200 hover:bg-theme hover:text-white';
    },
  },
};
</script>
