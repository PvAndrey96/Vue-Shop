<template>
  <VModalSidebar
    v-if="displayNavbarMob"
    @close="toggleDisplayNavbarMob"
  >
    <nav>
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
    </nav>
  </VModalSidebar>
</template>

<script>
import VModalSidebar from '@/components/base/VModalSidebar.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheNavbarMobile',
  components: {
    VModalSidebar,
  },
  computed: mapGetters(['categories', 'displayNavbarMob']),
  methods: mapMutations(['toggleDisplayNavbarMob']),
};
</script>
