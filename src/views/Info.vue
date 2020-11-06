<template>
  <VContainer class="py-6 lg:py-4">
    <h1 class="mt-2 mb-6 font-medium text-8">
      {{ $store.getters.infoPageTitle }}
    </h1>
    <div class="text-4">
      {{ $store.getters.infoPageContent }}
    </div>
  </VContainer>
</template>

<script>
export default {
  name: 'Info',
  watch: {
    $route: 'fetchInfoPage',
  },
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
