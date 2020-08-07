<template>
  <nav>
    <ul class="flex">
      <VBreadcrumbsItem
        v-for="item in items"
        :key="item"
        :text="item"
        to="#"
      />
      <VBreadcrumbsItem text="Мужчинам"/>
    </ul>
  </nav>
</template>

<script>
import VBreadcrumbsItem from '@/components/base/VBreadcrumbsItem.vue';

export default {
  name: 'VBreadcrumbs',
  components: {
    VBreadcrumbsItem,
  },
  data() {
    return {
      items: ['Главная', 'Каталог', 'Мужчинам'],
    };
  },
};
</script>
