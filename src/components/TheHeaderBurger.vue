<template>
  <button
    class="items-center hidden px-4 mr-8 -ml-4 lg:flex"
    @click="$store.commit('openNavbarMob')"
  >
    <VSvg
      class="w-5 h-5"
      name="bars"
    />
  </button>
</template>

<script>
export default {
  name: 'TheHeaderBurger',
};
</script>
