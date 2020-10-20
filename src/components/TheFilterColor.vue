<template>
  <div class="mb-4 lg:pb-6 lg:border-b lg:mb-0">
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Фильтр по цвету
    </div>
    <ul class="flex flex-wrap -mb-3 -mr-2">
      <li
        v-for="filter in filtersColor"
        :key="filter.slug"
        class="mb-3 mr-2"
      >
        <VButtonColor
          :to="filterRoute(filter.slug)"
          :color="filter.value"
          :active="$route.query.color === filter.slug"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VButtonColor from '@/components/base/VButtonColor.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheFilterColor',
  components: {
    VButtonColor,
  },
  computed: mapGetters(['filtersColor']),
  watch: {
    $route: 'fetchFiltersColor',
  },
  methods: {
    async fetchFiltersColor() {
      await this.$store.dispatch('fetchFiltersColor', this.$route.params.category);
    },
    filterRoute(slugColor) {
      return {
        query: {
          ...this.$route.query,
          color: this.$route.query.color === slugColor ? undefined : slugColor,
        },
      };
    },
  },
  async mounted() {
    await this.fetchFiltersColor();
  },
};
</script>
