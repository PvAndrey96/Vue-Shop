<template>
  <input
    class="w-full h-10 px-4 pb-px font-medium border text-5 placeholder-black-30"
    :type='type'
    :placeholder='placeholder'
    :value='value'
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
</template>

<script>
export default {
  name: 'VTextFieldA',
  props: {
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
};
</script>
