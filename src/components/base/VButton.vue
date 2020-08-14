<template>
  <button class="flex items-center justify-center h-10 px-5 text-white uppercase transition-colors duration-200 bg-theme hover:bg-theme-accent">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
};
</script>
