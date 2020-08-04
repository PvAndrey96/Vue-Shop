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
      class="absolute left-0 w-full px-4 py-3 bg-white border-b mt-14"
    >
      <input
        class="w-full h-10 px-4 mb-3 font-medium transition-colors duration-200 border-r-4 border-transparent focus:border-theme bg-theme-7 text-5 placeholder-black-50"
        placeholder="Поиск"
        type="text"
      >
      <ul>
        <li
          v-for="result in searchResult"
          :key="result.title"
        >
          <router-link
            to="#"
            class="flex items-center h-10 px-4 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
          >
            {{result.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheHeaderSearchMobile',
  computed: mapGetters(['searchMobFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchMobFocus']),
};
</script>
