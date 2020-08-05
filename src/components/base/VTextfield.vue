<template>
  <div class="flex w-full h-10">
    <VSvg
      v-if='icon'
      :name='icon'
      class="absolute self-center mx-2 h-7 w-7 text-black-50"
    />
    <input
      class="w-full font-medium transition-colors duration-200 border-r-4 border-transparent pb-2px focus:border-theme bg-theme-7 text-5 placeholder-black-50"
      :class="classInput"
      :type='type'
      :placeholder='placeholder'
      :value='value'
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
export default {
  name: 'VTextfield',
  props: {
    icon: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'password'].indexOf(val) !== -1;
      },
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  computed: {
    classInput() {
      return [this.icon ? 'pr-4 pl-11' : 'px-4'];
    },
  },
};
</script>
