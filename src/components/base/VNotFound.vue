<template>
  <div class='flex flex-col items-center justify-center min-h-full px-3 py-12 text-center bg-dim'>
    <VSvg
      name='logo'
      class='w-40 h-8 mb-4'
    />
    <div class='w-full max-w-sm px-12 py-10 mb-8 bg-white border'>
      <div class='text-24'>404</div>
      <div class='mb-2 text-7'>Страница не найдена</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VNotFound',
};
</script>
