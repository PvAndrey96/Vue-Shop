<template>
  <nav>
    <ul class="flex">
      <VBreadcrumbsItem
        v-for="(item, id) in items"
        :key="item.id"
        :text="item.text"
        :to="item.to"
        :past="id === items.length - 2"
      />
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
      items: [
        {
          text: 'Главная',
          to: '#',
        },
        {
          text: 'Каталог',
          to: '#',
        },
        {
          text: 'Мужчинам',
          to: '#',
        },
        {
          text: 'Футболки',
        },
      ],
    };
  },
};
</script>
