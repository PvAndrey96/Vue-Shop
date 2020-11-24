<template>
  <VContainer
    v-if="$store.getters.infoPageSlug"
    class="py-6 lg:py-4"
  >
    <h1 class="mt-2 mb-6 font-medium text-8">
      {{ $store.getters.infoPageTitle }}
    </h1>
    <div class="text-4">
      {{ $store.getters.infoPageContent }}
    </div>
  </VContainer>
  <VNotFound v-else />
</template>

<script>
import VNotFound from '@/components/base/VNotFound.vue';

export default {
  name: 'Info',
  components: {
    VNotFound,
  },
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
