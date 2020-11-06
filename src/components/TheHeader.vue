<template>
  <header class="bg-white border-b h-18 lg:h-14">
    <VContainer class="flex">
      <TheHeaderBurger />
      <TheHeaderLogo />
      <TheHeaderNav />
      <TheHeaderSearch />
      <TheHeaderSearchMobile />
      <TheHeaderCart />
    </VContainer>
  </header>
</template>

<script>
import TheHeaderBurger from '@/components/TheHeaderBurger.vue';
import TheHeaderLogo from '@/components/TheHeaderLogo.vue';
import TheHeaderNav from '@/components/TheHeaderNav.vue';
import TheHeaderSearch from '@/components/TheHeaderSearch.vue';
import TheHeaderSearchMobile from '@/components/TheHeaderSearchMobile.vue';
import TheHeaderCart from '@/components/TheHeaderCart.vue';

export default {
  name: 'TheHeader',
  components: {
    TheHeaderBurger,
    TheHeaderLogo,
    TheHeaderNav,
    TheHeaderSearch,
    TheHeaderSearchMobile,
    TheHeaderCart,
  },
};
</script>
