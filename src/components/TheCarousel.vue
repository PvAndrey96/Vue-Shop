<template>
  <Carousel
    :perPage="1"
    :perPageCustom="[[2560, 2]]"
    :paginationEnabled="false"
    :autoplayTimeout="4000"
    :loop="true"
    autoplay
  >
    <Slide
      v-for="slide in carouselSlides"
      :key="slide"
    >
      <img
        class="object-cover w-full h-128 bg-black-50 lg:h-96"
      />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapGetters } from 'vuex';

export default {
  components: {
    Carousel,
    Slide,
  },
  computed: mapGetters(['carouselSlides']),
};
</script>
