<template>
  <div class="flex h-10">
    <button
      class="w-8 border"
      @click="decrement"
    >
      -
    </button>
    <input
      class="w-8 text-center border-t border-b"
      type="number"
      :min="min"
      :max="max"
      :value="value"
      @input="$emit('input', $event.target.valueAsNumber)"
    >
    <button
      class="w-8 border"
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
