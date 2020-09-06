<template>
  <footer class="mt-8 border-t">
    <VContainer class="flex justify-between py-7">
      <nav>
        <ul class="flex flex-wrap -mb-4 -mr-4 font-medium text-4">
          <li
            v-for="(item, id) in footerNav"
            :key="id"
            class="mb-4 mr-4"
          >
            <router-link
              :to="item.link"
              class="transition-colors duration-200 hover:text-black"
            >
              {{item.text}}
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
  computed: mapGetters(['footerNav']),
};
</script>
