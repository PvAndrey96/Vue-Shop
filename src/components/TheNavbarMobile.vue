<template>
  <VModalSidebar
    v-if="displayNavbarMob"
    @close="toggleDisplayNavbarMob"
  >
    <nav>
      <ul class="px-5">
        <li class="border-b">
          <router-link
            to="#"
            class="flex items-center font-bold uppercase transition-colors duration-200 h-14 text-theme hover:text-theme-accent"
          >
            Личный кабинет
          </router-link>
        </li>
        <li
          v-for="item in navCategories"
          :key="item.slug"
          class="py-3 border-b"
        >
          <router-link
            :to="`/catalog/${item.slug}`"
            class="flex items-center h-10 font-bold uppercase transition-colors duration-200 text-theme hover:text-theme-accent"
          >
            {{item.name}}
          </router-link>
          <ul>
            <li
              v-for="subItem in item.subItems"
              :key="subItem.slug"
            >
              <router-link
                :to="`/catalog/${subItem.slug}`"
                class="flex items-center h-10 px-4 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
              >
                {{subItem.name}}
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
  computed: mapGetters(['displayNavbarMob', 'navCategories']),
  methods: mapMutations(['toggleDisplayNavbarMob']),
  async mounted() {
    await this.$store.dispatch('fetchNavCategories');
  },
};
</script>
