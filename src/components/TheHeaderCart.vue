<template>
  <div class="flex">
    <router-link
      to="#"
      class="flex items-center h-10 px-2 my-auto -mr-2 lg:h-auto lg:my-0"
    >
      <VSvg
        class="w-6 h-6 text-black-50 md:w-5 md:h-5"
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
