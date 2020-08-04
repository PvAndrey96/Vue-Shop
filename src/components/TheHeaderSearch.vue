<template>
  <div
    class="relative flex mr-8 duration-200 transition-grow lg:hidden"
    :class="{'flex-grow': searchFocus}"
  >
    <div class="flex w-full h-10 my-auto">
      <VSvg
        class="absolute self-center mx-2 h-7 w-7 text-black-50"
        name="loupe"
      />
      <input
        class="w-full pr-4 font-medium transition-colors duration-200 border-r-4 border-transparent pl-11 pb-2px focus:border-theme bg-theme-7 text-5 placeholder-black-50"
        placeholder="Поиск"
        type="text"
        @focus="toggleSearchFocus"
        @blur="toggleSearchFocus"
      >
    </div>
    <div class="absolute hidden w-full pt-2 mt-18">
      <ul class='px-3 pt-3 bg-white border'>
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
  name: 'TheHeaderSearch',
  computed: mapGetters(['searchFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchFocus']),
};
</script>
