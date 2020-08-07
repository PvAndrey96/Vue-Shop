<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <div class="flex items-center justify-between mb-6">
      <h1 class="font-medium text-8">Мужчинам</h1>
      <VSelect/>
    </div>
    <div class="grid grid-cols-5 gap-8">
      <div class="col-span-1">
        <div class="mb-4">
          <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme">
            Категории
          </div>
          <ul>
            <li
              v-for="subcategory in categories[0].subcategories"
              :key="subcategory"
            >
              <router-link
                to="#"
                class="flex items-center h-8 px-3 font-medium transition-colors duration-200 text-4 hover:text-black text-black-70"
              >
                {{subcategory}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme">
            Фильтр по размеру
          </div>
          <ul class="grid grid-cols-5 row-gap-3 col-gap-2">
            <li
              v-for="(size, id) in ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']"
              :key="id"
            >
              <router-link
                to="#"
                class="flex items-center justify-center h-10 font-medium uppercase transition-colors duration-200 border hover:bg-theme hover:text-white"
              >
                {{size}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme">
            Фильтр по цвету
          </div>
          <ul class="flex flex-wrap -mr-2">
            <li
              v-for="(color, id) in ['#000', '#fff', '#dd5555', '#33aa44', '#dd8', '#006', '#484', '#33a', '#222', '#aa2222']"
              :key="id"
              class="mb-3 mr-2"
            >
              <router-link
                to="#"
                :style="{background: color}"
                class="flex transition-transform duration-200 transform border w-7 h-7 hover:scale-120 hover:border-black-80"
              >
                {{size}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-4 col-span-4 gap-6">
        <VCard
          v-for="(product, id) in products"
          :key="id"
          :title="product.name"
          :img="product.img"
          :price="product.price"
        />
      </div>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VSelect from '@/components/base/VSelect.vue';
import VCard from '@/components/base/VCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    VBreadcrumbs, VSelect, VCard,
  },
  computed: mapGetters(['categories', 'products']),
};
</script>
