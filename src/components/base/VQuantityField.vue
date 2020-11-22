<template>
  <div class="flex h-10 sm:h-9">
    <button
      class="border w-9 sm:w-8"
      @click="decrement"
    >
      -
    </button>
    <input
      class="text-center border-t border-b w-9 sm:w-8"
      disabled
      :value="value"
    >
    <button
      class="border w-9 sm:w-8"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'VQuantityField',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  methods: {
    decrement() {
      if (!this.min || this.value > this.min) {
        this.$emit('input', this.value - 1);
      }
    },
    increment() {
      if (!this.max || this.value < this.max) {
        this.$emit('input', this.value + 1);
      }
    },
  },
};
</script>
