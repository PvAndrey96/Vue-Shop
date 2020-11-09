<template>
  <div
    class="relative flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': $store.getters.searchFocus}"
  >
    <VTextFieldA
      icon="loupe"
      placeholder="Поиск"
      type="text"
      class="my-auto"
      ref="textField"
      :value="$store.getters.searchString"
      @input="$store.dispatch('searchInput', $event)"
      @focus="$store.commit('searchFocus')"
      @blur="$store.commit('searchBlur')"
    />
    <div
      v-if="$store.getters.searchResult.length && $store.getters.searchFocus"
      class="absolute z-10 w-full pt-2 mt-18 min-w-xs"
      @mousedown.prevent
    >
      <ul class='px-3 pt-3 bg-white border'>
        <VSearchListItem
          v-for="result in $store.getters.searchResult"
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
};
</script>
