<template>
  <div class="relative w-56 font-medium text-5 text-black-70">
    <div
      class="flex h-10 px-4 border cursor-pointer"
      @click='optionsOpen = !optionsOpen'
    >
      <div
        class="flex items-center flex-grow"
        :class="{'text-black-30': !selected}"
      >
        {{text}}
      </div>
      <VSvg
        name='arrow-down'
        class="w-6 -mr-2 text-black-10"
      />
    </div>
    <div
      v-if="optionsOpen"
      class="absolute w-full py-1 mt-2 bg-white border"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="flex items-center h-10 px-4"
        @click="selectOption(option)"
      >
        {{option.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  model: {
    prop: 'selected',
    event: 'select',
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: Object,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      optionsOpen: false,
    };
  },
  computed: {
    text() {
      return this.selected ? this.selected.text : this.placeholder;
    },
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.optionsOpen = false;
    },
  },
};
</script>
