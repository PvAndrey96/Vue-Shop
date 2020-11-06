<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-10 flex"
    :class="{'flex-row-reverse': right}"
  >
    <div class="flex flex-col w-full max-w-xs bg-white">
      <header class="flex flex-row-reverse flex-shrink-0 px-4 border-b h-14">
        <button
          class="px-4 -mr-4"
          @click="$emit('close')"
        >
          <VSvg
            class="w-6 h-6 text-black-30"
            name="close"
          />
        </button>
      </header>
      <VScrollContainer class="flex-grow">
        <slot/>
      </VScrollContainer>
    </div>
    <div
      class="flex-grow bg-black-50"
      @click="$emit('close')"
    >
    </div>
  </div>
</template>

<script>
import VScrollContainer from '@/components/base/VScrollContainer.vue';

export default {
  name: 'VModalSidebar',
  components: {
    VScrollContainer,
  },
  props: {
    right: {
      type: Boolean,
    },
  },
};
</script>
