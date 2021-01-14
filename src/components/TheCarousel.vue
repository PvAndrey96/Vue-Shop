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
      v-for="(slide, id) in $store.getters.carouselSlides"
      :key="id"
    >
      <img
        :src="slide"
        class="object-cover w-full h-128 sm:h-64 lg:h-96"
      />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
