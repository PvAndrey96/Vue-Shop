<template>
  <VModalSidebar
    v-if="displayFiltersMob"
    @close="toggleDisplayFiltersMob"
    right
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
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheMobileFilters',
  components: {
    VModalSidebar, TheFilterSize, TheFilterColor,
  },
  computed: mapGetters(['displayFiltersMob']),
  methods: mapMutations(['toggleDisplayFiltersMob']),

};
</script>
