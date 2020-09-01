<template>
  <div class="hidden lg:flex">
    <button
      class="flex items-center px-2 transition-colors duration-200 text-black-50 hover:text-black-70"
      @click="toggleSearchMobFocus"
    >
      <VSvg
        class="w-6 h-6"
        :name="searchMobFocus ? 'close' : 'loupe'"
      />
    </button>
    <div
      v-if="searchMobFocus"
      class="absolute left-0 z-10 w-full px-4 py-3 bg-white border-b mt-14"
    >
      <VTextField
        placeholder="Поиск"
        type="text"
      />
      <ul>
        <VSearchListItem
          v-for="result in searchResult"
          :key="result.title"
          :img="result.img"
          :title="result.title"
          :price="result.price"
          to="#"
          class="mt-3"
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
  name: 'TheHeaderSearchMobile',
  components: {
    VTextField, VSearchListItem,
  },
  computed: mapGetters(['searchMobFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchMobFocus']),
};
</script>
