<template>
  <VContainer class="py-6 lg:py-4">
    <div class="grid grid-cols-3 gap-8 mt-2">
      <div class="col-span-2 lg:col-span-3">
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 sm:gap-2">
          <img
            v-for="(img, id) in productImages"
            :key="id"
            :src="img"
            :class="[id === productImages.length - 1 ? 'col-span-2 row-span-2' : 'h-full col-span-1 row-span-1']"
          />
        </div>
      </div>
      <div class="col-span-1 lg:col-span-3 lg:mb-4">
        <h1 class="mb-1 font-bold uppercase text-6 text-black-70">{{productTitle}}</h1>
        <div class="font-medium uppercase mb-7 text-5 text-black-70">{{productPrice}} rub</div>
        <div class="mb-7">
          <div class="mb-3 font-bold uppercase text-theme">
            Цвет
          </div>
          <ul class="flex flex-wrap -mb-3 -mr-2">
            <li
              v-for="color in productColors"
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
              v-for="size in productSizes"
              :key="size.slug"
              class="mb-3 mr-2"
            >
              <VButtonSize
                :size="size.value"
                :active="size.slug === productSelectedSize"
                @click.native="selectSize(size.slug)"
              />
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <div class="mb-2 font-bold uppercase text-theme">Описание</div>
          <div class="font-medium">{{productDescription}}</div>
        </div>
        <VButton>Добавить в корзину</VButton>
      </div>
    </div>
  </VContainer>
</template>

<script>
import VButtonColor from '@/components/base/VButtonColor.vue';
import VButtonSize from '@/components/base/VButtonSize.vue';
import VButton from '@/components/base/VButton.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Product',
  components: {
    VButtonColor, VButtonSize, VButton,
  },
  watch: {
    $route: 'fetchData',
  },
  computed: mapGetters(['productTitle', 'productImages', 'productDescription', 'productPrice', 'productColors', 'productSizes', 'productSelectedSize']),
  methods: {
    ...mapMutations(['selectSize']),
    async fetchData() {
      await this.$store.dispatch('fetchProductInfo', this.$route.params.product);
    },
    test() {
      alert(2);
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
