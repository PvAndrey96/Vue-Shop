<template>
  <li class="flex items-center">
    <router-link
      v-if="to"
      :to="to"
      class="mr-2 font-medium transition-colors duration-200 text-4 text-black-50 hover:text-black-70"
    >
      {{text}}
    </router-link>
    <VSvg
      v-if="to"
      name="arrow-right"
      class="w-4 h-4 mr-2 text-black-30 sm:transform sm:rotate-180"
    />
    <div
      v-else
      class="font-medium text-4 text-theme"
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
  },
};
</script>
