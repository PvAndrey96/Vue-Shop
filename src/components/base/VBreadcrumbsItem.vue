<template>
  <li
    class="flex items-center mr-2 sm:flex-row-reverse"
    :class="{'sm:hidden': !past}"
  >
    <template v-if="to">
      <router-link
        :to="to"
        class="font-medium transition-colors duration-200 text-4 text-black-50 hover:text-black-70"
      >
        {{text}}
      </router-link>
      <VSvg
        name="arrow-right"
        class="w-4 h-4 ml-2 text-black-30 sm:transform sm:rotate-180 sm:mr-2 sm:ml-0"
      />
    </template>
    <div
      v-else
      class="font-medium text-4 text-theme sm:hidden"
    >
      {{text}}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VBreadcrumbsItem',
  props: {
    to: {
      type: [String, Object],
    },
    text: {
      type: String,
      required: true,
    },
    past: {
      type: Boolean,
    },
  },
};
</script>
