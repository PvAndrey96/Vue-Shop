<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <div class="flex items-center justify-between">
      <h1 class="font-medium text-8">Мужчинам</h1>
      <VSelect/>
    </div>
    <div class="hidden">
      <div class="w-1/4">
        <ul>
          <li class="py-3 border-b">
            <router-link
              to="#"
              class="flex items-center h-10 font-bold uppercase transition-colors duration-200 text-theme hover:text-theme-accent"
            >
              Категории
            </router-link>
            <ul>
              <li
                v-for="subcategory in categories[0].subcategories"
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
      </div>
      <div class="w-1/4">

      </div>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VSelect from '@/components/base/VSelect.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    VBreadcrumbs, VSelect,
  },
  computed: mapGetters(['categories']),
};
</script>
