<template>
  <nav>
    <ul class="flex">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-center"
      >
        <router-link
          to="#"
          class="mr-2 font-medium transition-colors duration-200 text-4 text-black-50 hover:text-black-70"
        >
          {{item}}
        </router-link>
        <VSvg
          name="arrow"
          class="w-4 h-4 mr-2 text-black-30"
        />
      </li>
      <li class="flex items-center font-medium text-4 text-theme">
        Футболки
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VBreadcrumbs',
  data() {
    return {
      items: ['Главная', 'Каталог', 'Мужчинам'],
    };
  },
};
</script>
