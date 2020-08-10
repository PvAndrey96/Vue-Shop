<template>
  <div>
    <TheNavbarMobile/>
    <TheHeader/>
    <slot/>
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
