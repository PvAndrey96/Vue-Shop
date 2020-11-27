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
      v-if="$store.getters.searchPreviewResult.length && $store.getters.searchFocus && $route.path !== '/search'"
      class="absolute z-10 w-full pt-2 mt-18 min-w-xs"
      @mousedown.prevent
    >
      <div class='p-3 bg-white border'>
        <ul class="grid gap-3">
          <VSearchListItem
            v-for="result in $store.getters.searchPreviewResult"
            :key="result.slug"
            :img="result.img"
            :title="result.name"
            :price="result.price"
            :to="`/product/${result.slug}`"
          />
        </ul>
        <VButton
          v-if="$store.getters.searchExcessPreviewLimit"
          class="mt-3"
          to="/search"
          small
          full
        >
          Смотреть все ({{$store.getters.searchResult.length}})
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VTextFieldA from '@/components/base/VTextFieldA.vue';
import VSearchListItem from '@/components/base/VSearchListItem.vue';
import VButton from '@/components/base/VButton.vue';

export default {
  name: 'TheHeaderSearch',
  components: {
    VTextFieldA, VSearchListItem, VButton,
  },
  watch: {
    $route() {
      this.$refs.textField.blur();
    },
  },
};
</script>
