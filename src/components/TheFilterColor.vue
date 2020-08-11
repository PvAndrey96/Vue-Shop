<template>
  <div class="mb-4 lg:pb-6 lg:border-b lg:mb-0">
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Фильтр по цвету
    </div>
    <ul class="flex flex-wrap -mr-2">
      <li
        v-for="(color, id) in ['#000', '#fff', '#dd5555', '#33aa44', '#dd8', '#006', '#484', '#33a', '#222', '#aa2222']"
        :key="id"
        class="mb-3 mr-2"
      >
        <VButtonColor
          to="#"
          :color="color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VButtonColor from '@/components/base/VButtonColor.vue';

export default {
  name: 'TheFilterColor',
  components: {
    VButtonColor,
  },
};
</script>
