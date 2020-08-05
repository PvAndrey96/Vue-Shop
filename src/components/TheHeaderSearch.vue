<template>
  <div
    class="relative flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': searchFocus}"
  >
    <VTextfield
      icon="loupe"
      placeholder="Поиск"
      type="text"
      class="my-auto"
      @focus="toggleSearchFocus"
      @blur="toggleSearchFocus"
    />
    <div class="absolute w-full pt-2 mt-18">
      <ul class='px-3 pt-3 bg-white border'>
        <VSearchResultsItem
          v-for="result in searchResult"
          :key="result.title"
          :img="result.img"
          :title="result.title"
          :price="result.price"
          url="#"
          class="mb-3"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VTextfield from '@/components/base/VTextfield.vue';
import VSearchResultsItem from '@/components/base/VSearchResultsItem.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheHeaderSearch',
  components: {
    VTextfield, VSearchResultsItem,
  },
  computed: mapGetters(['searchFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchFocus']),
};
</script>
