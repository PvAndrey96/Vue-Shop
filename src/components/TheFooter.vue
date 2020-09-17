<template>
  <footer class="border-t">
    <VContainer class="flex justify-between py-8 lg:py-6">
      <nav>
        <ul class="flex flex-wrap -mb-4 -mr-6 font-medium md:-mr-4 text-4">
          <li
            v-for="item in infoPages"
            :key="item.slug"
            class="mb-4 mr-6 md:mr-4"
          >
            <router-link
              :to="`/info/${item.slug}`"
              class="transition-colors duration-200 hover:text-black"
            >
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="font-medium text-4 lg:hidden">© 2020 Все права защищены</div>
    </VContainer>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheFooter',
  computed: mapGetters(['infoPages']),
  async mounted() {
    await this.$store.dispatch('fetchInfoPages');
  },
};
</script>
