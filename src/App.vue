<template>
  <div
    id="app"
    class="text-3 text-black-80"
  >
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import TheMainLayout from '@/layouts/TheMainLayout.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    TheMainLayout,
  },
};
</script>
