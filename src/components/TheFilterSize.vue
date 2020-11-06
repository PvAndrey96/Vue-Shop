<template>
  <div class="mb-4 lg:pb-6 lg:border-b lg:mb-0">
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Фильтр по размеру
    </div>
    <ul class="flex flex-wrap -mb-3 -mr-2">
      <li
        v-for="filter in $store.getters.filtersSize"
        :key="filter.slug"
        class="mb-3 mr-2"
      >
        <VButtonSize
          :to="filterRoute(filter.slug)"
          :size="filter.value"
          :active="$route.query.size === filter.slug"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VButtonSize from '@/components/base/VButtonSize.vue';

export default {
  name: 'TheFilterSize',
  components: {
    VButtonSize,
  },
  watch: {
    $route: 'fetchFiltersSize',
  },
  methods: {
    async fetchFiltersSize() {
      await this.$store.dispatch('fetchFiltersSize', this.$route.params.category);
    },
    filterRoute(slugSize) {
      return {
        query: {
          ...this.$route.query,
          size: this.$route.query.size === slugSize ? undefined : slugSize,
        },
      };
    },
  },
  async mounted() {
    await this.fetchFiltersSize();
  },
};
</script>
