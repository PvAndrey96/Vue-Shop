<template>
  <VModalSidebar
    v-if="$store.getters.displayFiltersMob"
    right
    @close="$store.commit('toggleDisplayFiltersMob')"
  >
    <div class="px-5">
      <TheFilterSize/>
      <TheFilterColor/>
    </div>
  </VModalSidebar>
</template>

<script>
import VModalSidebar from '@/components/base/VModalSidebar.vue';
import TheFilterSize from '@/components/TheFilterSize.vue';
import TheFilterColor from '@/components/TheFilterColor.vue';

export default {
  name: 'TheMobileFilters',
  components: {
    VModalSidebar, TheFilterSize, TheFilterColor,
  },
};
</script>
