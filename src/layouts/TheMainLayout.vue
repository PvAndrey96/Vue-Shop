<template>
  <div>
    <TheNavbarMobile/>
    <TheHeader/>
    <img src="https://admin.roadtothedream.com/images/main_page_poster.jpg?v=1595859317" alt="">
    <router-view/>
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
