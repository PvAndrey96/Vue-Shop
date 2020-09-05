<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
    <div
      class="absolute w-full h-full bg-black-50"
      @click="$emit('close')"
    >
    </div>
    <div class="relative w-full max-w-sm p-4 bg-white">
      <button
        class="absolute right-0 px-4"
        @click="$emit('close')"
      >
        <VSvg
          class="w-6 h-6 text-black-30"
          name="close"
        />
      </button>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModalWindow',
};
</script>
