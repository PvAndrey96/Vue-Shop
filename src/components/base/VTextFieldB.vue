<template>
  <label>
    <input
      class="w-full h-10 px-4 pb-px font-medium border text-5 placeholder-black-30"
      :class="{'border-error': textError}"
      :type='type'
      :placeholder='placeholder'
      :value='value'
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <div class="mt-1 text-error min-h-5">{{textError}}</div>
  </label>
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
    textError: {
      type: String,
    },
  },
};
</script>
