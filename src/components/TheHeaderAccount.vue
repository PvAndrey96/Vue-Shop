<template>
  <div class="flex lg:hidden">
    <router-link
      to="#"
      class="flex items-center h-10 px-2 my-auto transition-colors duration-200 text-black-50 hover:text-black-70"
    >
      <VSvg
        class="w-7 h-7"
        name="user"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderAccount',
};
</script>
