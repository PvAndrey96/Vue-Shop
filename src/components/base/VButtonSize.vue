<template>
  <components
    :is="to ? 'router-link' : 'button'"
    class="flex items-center justify-center w-10 h-10 font-medium uppercase border"
    :class="active ? 'bg-theme text-white' : 'transition-colors duration-200 hover:bg-theme hover:text-white'"
    :to="to"
    @click="$emit('click')"
  >
    {{size}}
  </components>
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
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
