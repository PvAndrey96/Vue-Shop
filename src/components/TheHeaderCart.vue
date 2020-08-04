<template>
  <div class="flex">
    <router-link
      to="#"
      class="flex items-center h-10 px-2 my-auto -mr-2 transition-colors duration-200 lg:h-auto lg:my-0 text-black-50 hover:text-black-70"
    >
      <VSvg
        class="w-6 h-6 md:w-5 md:h-5"
        name="cart"
      />
      <div class="ml-1 font-medium text-black-50">2</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderCart',
};
</script>
