<template>
  <router-link
    to="#"
    class="group"
  >
    <img :src="img"/>
    <div class="py-4">
      <div class="mb-2 font-medium transition-colors duration-200 text-5 group-hover:text-black">
        {{title}}
      </div>
      <div class="font-medium uppercase text-black-50">
        {{price}} rub
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'VCard',
  props: ['title', 'img', 'price'],
};
</script>
