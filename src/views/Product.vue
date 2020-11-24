<template>
  <VContainer
    v-if="$store.getters.productSlug"
    class="py-6 lg:py-4"
  >
    <div class="grid grid-cols-3 gap-8 mt-2">
      <div class="col-span-2 lg:col-span-3">
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 sm:gap-2">
          <img
            v-for="(img, id) in $store.getters.productImages"
            :key="id"
            :src="img"
            :class="[id === $store.getters.productImages.length - 1 ? 'col-span-2 row-span-2' : 'h-full col-span-1 row-span-1']"
          />
        </div>
      </div>
      <div class="col-span-1 lg:col-span-3 lg:mb-4">
        <h1 class="mb-1 font-bold uppercase text-6 text-black-70">{{ $store.getters.productTitle }}</h1>
        <div class="font-medium uppercase mb-7 text-5 text-black-70">{{ $store.getters.productPrice }} rub</div>
        <div class="mb-7">
          <div class="mb-3 font-bold uppercase text-theme">
            Цвет
          </div>
          <ul class="flex flex-wrap -mb-3 -mr-2">
            <li
              v-for="color in $store.getters.productColors"
              :key="color.href"
              class="mb-3 mr-2"
            >
              <VButtonColor
                :to="color.href"
                :color="color.value"
                :active="color.href === $route.params.product"
              />
            </li>
          </ul>
        </div>
        <div class="mb-7">
          <div class="mb-3 font-bold uppercase text-theme">
            Размер
          </div>
          <ul class="flex flex-wrap -mb-3 -mr-2">
            <li
              v-for="size in $store.getters.productSizes"
              :key="size.slug"
              class="mb-3 mr-2"
            >
              <VButtonSize
                :size="size.value"
                :active="size.slug === $store.getters.productSelectedSize"
                @click="$store.commit('selectSize', size.slug)"
              />
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <div class="mb-2 font-bold uppercase text-theme">Описание</div>
          <div class="font-medium">{{ $store.getters.productDescription }}</div>
        </div>
        <VButton @click="addToCart()">Добавить в корзину</VButton>
      </div>
    </div>
  </VContainer>
  <VNotFound v-else />
</template>

<script>
import VButtonColor from '@/components/base/VButtonColor.vue';
import VButtonSize from '@/components/base/VButtonSize.vue';
import VButton from '@/components/base/VButton.vue';
import VNotFound from '@/components/base/VNotFound.vue';

export default {
  name: 'Product',
  components: {
    VButtonColor, VButtonSize, VButton, VNotFound,
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('fetchProductInfo', this.$route.params.product);
    },
    async addToCart() {
      if (this.$store.getters.productSelectedSize) {
        await this.$store.dispatch('addToCart', {
          slug: this.$store.getters.productSlug,
          size: this.$store.getters.productSelectedSize,
          count: 1,
        });
        this.$toasted.show('Товар добавлен в корзину');
      } else {
        this.$toasted.show('Выберите размер');
      }
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
