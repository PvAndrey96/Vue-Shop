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
        class="w-full h-10 px-4 font-medium transition-colors duration-200 border-r-4 border-transparent focus:border-theme bg-theme-7 text-5 placeholder-black-50"
        placeholder="Поиск"
        type="text"
      >
      <ul class='mt-3 -mb-3'>
        <li
          v-for="result in searchResult"
          :key="result.title"
          class="mb-3"
        >
          <router-link
            to="#"
            class="flex h-12 group"
          >
            <img
              :src="result.img"
              class="h-full"
            >
            <div class="flex items-center flex-grow px-4 font-medium transition-colors duration-200 text-4 group-hover:text-black text-black-70">
              {{result.title}}
            </div>
            <div class="flex items-center font-medium uppercase text-black-70">
              {{result.price}} rub
            </div>
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
