<template>
  <div class="flex flex-col h-full">
    <TheNavbarMobile/>
    <TheHeader/>
    <div class="flex-grow">
      <slot/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbarMobile from '@/components/TheNavbarMobile.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'TheMainLayout',
  components: {
    TheNavbarMobile, TheHeader, TheFooter,
  },
};
</script>
