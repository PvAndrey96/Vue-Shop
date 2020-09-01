<template>
  <div
    class="relative flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': searchFocus}"
  >
    <VTextField
      icon="loupe"
      placeholder="Поиск"
      type="text"
      class="my-auto"
      @focus="toggleSearchFocus"
      @blur="toggleSearchFocus"
    />
    <div class="absolute z-10 hidden w-full pt-2 mt-18 min-w-xs">
      <ul class='px-3 pt-3 bg-white border'>
        <VSearchListItem
          v-for="(result, id) in searchResult"
          :key="id"
          :img="result.img"
          :title="result.title"
          :price="result.price"
          to="#"
          class="mb-3"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import VTextField from '@/components/base/VTextField.vue';
import VSearchListItem from '@/components/base/VSearchListItem.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheHeaderSearch',
  components: {
    VTextField, VSearchListItem,
  },
  computed: mapGetters(['searchFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchFocus']),
};
</script>
