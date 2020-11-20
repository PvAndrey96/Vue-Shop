<template>
  <div>
    <div class="mb-4 font-medium text-5">{{legend}}</div>
    <div class="grid grid-cols-6 row-gap-2 col-gap-5 lg:col-gap-4">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFieldset',
  props: {
    legend: {
      type: String,
      required: true,
    },
  },
};
</script>
