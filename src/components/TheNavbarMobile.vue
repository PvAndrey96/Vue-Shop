<template>
  <div
    v-if="displayNavbarMob"
    class="fixed z-10 flex w-full h-full"
  >
    <nav class="flex flex-col w-full max-w-xs bg-white">
      <header class="flex flex-row-reverse flex-shrink-0 px-4 border-b h-14">
        <button
          class="px-4 -mr-4"
          @click="toggleDisplayNavbarMob"
        >
          <VSvg
            class="w-6 h-6 text-black-30"
            name="close"
          />
        </button>
      </header>
      <VScrollContainer class="flex-grow">
        <ul class="px-4">
          <li class="border-b">
            <router-link
              to="#"
              class="flex items-center font-bold uppercase transition-colors duration-200 h-14 text-theme hover:text-theme-accent"
            >
              Личный кабинет
            </router-link>
          </li>
          <li
            v-for="category in categories"
            :key="category.name"
            class="py-3 border-b"
          >
            <router-link
              to="#"
              class="flex items-center h-10 font-bold uppercase transition-colors duration-200 text-theme hover:text-theme-accent"
            >
              {{category.name}}
            </router-link>
            <ul>
              <li
                v-for="subcategory in category.subcategories"
                :key="subcategory"
              >
                <router-link
                  to="#"
                  class="flex items-center h-10 px-4 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
                >
                  {{subcategory}}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </VScrollContainer>
    </nav>
    <div
      class="flex-grow bg-black-50"
      @click="toggleDisplayNavbarMob"
    >
    </div>
  </div>
</template>

<script>
import VScrollContainer from '@/components/base/VScrollContainer.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheNavbarMobile',
  components: {
    VScrollContainer,
  },
  computed: mapGetters(['categories', 'displayNavbarMob']),
  methods: mapMutations(['toggleDisplayNavbarMob']),
};
</script>
