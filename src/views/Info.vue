<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <h1 class="mb-6 font-medium text-8">
      {{infoPageTitle}}
    </h1>
    <div class="text-4">
      {{infoPageContent}}
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Info',
  components: {
    VBreadcrumbs,
  },
  watch: {
    $route: 'fetchInfoPage',
  },
  computed: mapGetters(['infoPageTitle', 'infoPageContent']),
  methods: {
    async fetchInfoPage() {
      await this.$store.dispatch('fetchInfoPage', this.$route.params.page);
    },
  },
  async mounted() {
    await this.fetchInfoPage();
  },
};
</script>
