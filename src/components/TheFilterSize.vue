<template>
  <div class="mb-4 lg:pb-6 lg:border-b lg:mb-0">
    <div class="flex items-center h-12 mb-3 font-bold uppercase border-b text-theme lg:mb-0 lg:border-0 lg:h-14">
      Фильтр по размеру
    </div>
    <ul class="flex flex-wrap -mb-3 -mr-2">
      <li
        v-for="(size, id) in ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']"
        :key="id"
        class="mb-3 mr-2"
      >
        <VButtonSize
          to="#"
          :size="size"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import VButtonSize from '@/components/base/VButtonSize.vue';

export default {
  name: 'TheFilterSize',
  components: {
    VButtonSize,
  },
};
</script>
