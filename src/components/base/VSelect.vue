<template>
  <div>
    <div class="relative font-medium text-5 text-black-70">
      <div
        class="flex h-10 px-4 border cursor-pointer"
        :class="{'border-error': textError}"
        @click='optionsOpen = !optionsOpen'
      >
        <div
          class="flex items-center flex-grow"
          :class="{'text-black-30': !selectedOption}"
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
          class="flex items-center h-10 px-4 cursor-pointer"
          :class="option.value === selected ? 'bg-theme text-white font-normal' : 'hover:bg-theme-10 transition-colors duration-200'"
          @click="selectOption(option.value)"
        >
          {{option.text}}
        </div>
      </div>
    </div>
    <div
      v-if="textError !== undefined"
      class="mt-1 text-error min-h-5"
    >
      {{textError}}
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
      type: [String, Number],
    },
    placeholder: {
      type: String,
      default: '',
    },
    textError: {
      type: String,
    },
  },
  data() {
    return {
      optionsOpen: false,
    };
  },
  computed: {
    selectedOption() {
      return this.options.find((el) => el.value === this.selected);
    },
    text() {
      return this.selectedOption ? this.selectedOption.text : this.placeholder;
    },
  },
  methods: {
    selectOption(optionVal) {
      this.$emit('select', optionVal);
      this.optionsOpen = false;
    },
  },
};
</script>
