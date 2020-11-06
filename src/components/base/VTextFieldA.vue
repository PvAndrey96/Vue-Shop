<template>
  <div class="flex w-full h-10">
    <VSvg
      v-if='icon'
      class="absolute self-center mx-2 h-7 w-7 text-black-50"
      :name='icon'
    />
    <input
      class="w-full pb-px font-medium transition-colors duration-200 border-r-4 border-transparent focus:border-theme bg-theme-7 text-5 placeholder-black-50"
      :class="[icon ? 'pr-4 pl-11' : 'px-4']"
      :type='type'
      :placeholder='placeholder'
      :value='value'
      ref="input"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
export default {
  name: 'VTextFieldA',
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
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
  },
};
</script>
