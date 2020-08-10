<template>
  <VModalSidebar
    v-if="displayFiltersMob"
    @close="toggleDisplayFiltersMob"
    right
  >
  </VModalSidebar>
</template>

<script>
import VModalSidebar from '@/components/base/VModalSidebar.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheMobileFilters',
  components: {
    VModalSidebar,
  },
  computed: mapGetters(['displayFiltersMob']),
  methods: mapMutations(['toggleDisplayFiltersMob']),

};
</script>
