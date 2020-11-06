<template>
  <div
    id="app"
    class="h-full text-3 text-black-80"
  >
    <component
      v-if="$route.meta.layout"
      :is="$route.meta.layout"
    >
      <router-view/>
    </component>
    <router-view v-else/>
  </div>
</template>

<script>
import TheMainLayout from '@/layouts/TheMainLayout.vue';

export default {
  components: {
    TheMainLayout,
  },
};
</script>
