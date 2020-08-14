<template>
  <router-link
    :to="to"
    class="flex items-center justify-center w-10 h-10 font-medium uppercase transition-colors duration-200 border hover:bg-theme hover:text-white"
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
  },
};
</script>
