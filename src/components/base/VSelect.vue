<template>
  <div class="relative flex w-56 h-10 border">
    <select class="w-full pl-4 pr-10 bg-transparent text-5">
      <option class="block h-10">Сначала дороже</option>
      <option>Сначала дешевле</option>
    </select>
    <VSvg
      name='arrow-down'
      class="absolute right-0 self-center mx-2 h-7 w-7 text-black-10"
    />
  </div>
</template>

<script>
export default {
  name: 'VSelect',
};
</script>
