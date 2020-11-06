<template>
  <div
    class="relative flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': searchFocus}"
  >
    <VTextFieldA
      icon="loupe"
      placeholder="Поиск"
      type="text"
      class="my-auto"
      ref="textField"
      @focus="openSearchFocus"
      @blur="closeSearchFocus"
      @input="fetchSearchResult($event)"
    />
    <div
      v-if="searchResult.length && searchFocus"
      class="absolute z-10 w-full pt-2 mt-18 min-w-xs"
      @mousedown.prevent
    >
      <ul class='px-3 pt-3 bg-white border'>
        <VSearchListItem
          v-for="result in searchResult"
          :key="result.slug"
          :img="result.img"
          :title="result.name"
          :price="result.price"
          class="mb-3"
          :to="`/product/${result.slug}`"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VTextFieldA from '@/components/base/VTextFieldA.vue';
import VSearchListItem from '@/components/base/VSearchListItem.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'TheHeaderSearch',
  components: {
    VTextFieldA, VSearchListItem,
  },
  watch: {
    $route() {
      this.$refs.textField.blur();
    },
  },
  computed: mapGetters(['searchFocus', 'searchResult']),
  methods: {
    ...mapMutations(['openSearchFocus', 'closeSearchFocus']),
    ...mapActions(['fetchSearchResult']),
  },
};
</script>
