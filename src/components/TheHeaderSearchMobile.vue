<template>
  <div
    class="hidden lg:flex"
    v-click-outside="closeSearchMob"
  >
    <button
      class="flex items-center px-2 transition-colors duration-200 text-black-50 hover:text-black-70"
      @click="$store.commit('toggleSearchMob')"
    >
      <VSvg
        class="w-6 h-6"
        :name="$store.getters.searchMobOpen ? 'close' : 'loupe'"
      />
    </button>
    <div
      v-show="$store.getters.searchMobOpen"
      class="absolute left-0 z-10 w-full px-4 py-3 bg-white border-b mt-14"
    >
      <VTextFieldA
        placeholder="Поиск"
        type="text"
        :value="$store.getters.searchString"
        @input="$store.dispatch('searchInput', $event)"
      />
      <ul>
        <VSearchListItem
          v-for="result in $store.getters.searchResult"
          :key="result.slug"
          :img="result.img"
          :title="result.name"
          :price="result.price"
          class="mt-3"
          :to="`/product/${result.slug}`"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VTextFieldA from '@/components/base/VTextFieldA.vue';
import VSearchListItem from '@/components/base/VSearchListItem.vue';

export default {
  name: 'TheHeaderSearchMobile',
  components: {
    VTextFieldA, VSearchListItem,
  },
  watch: {
    $route() {
      this.closeSearchMob();
    },
  },
  methods: {
    closeSearchMob() {
      this.$store.commit('closeSearchMob');
    },
  },
};
</script>
