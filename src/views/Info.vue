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

export default {
  name: 'Info',
  components: {
    VBreadcrumbs,
  },
  computed: {
    infoPageTitle() {
      return this.$store.getters.infoPageTitle(this.$route.params.page);
    },
    infoPageContent() {
      return this.$store.getters.infoPageContent(this.$route.params.page);
    },
  },
};
</script>
