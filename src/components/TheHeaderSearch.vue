<template>
  <div
    class="flex mr-8 duration-200 transition-grow lg:hidden"
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
    <div class="absolute pt-2 mt-18">
      <ul class="py-2 bg-white border">
        <li
          v-for="result in searchResult"
          :key="result.title"
        >
          <router-link
            to="#"
            class="flex items-center h-10 px-5 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
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
  name: 'TheHeaderSearch',
  computed: mapGetters(['searchFocus', 'searchResult']),
  methods: mapMutations(['toggleSearchFocus']),
};
</script>
