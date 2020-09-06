<template>
  <VContainer class="py-6 lg:py-4">
    <VBreadcrumbs class="mb-8"/>
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 lg:col-span-3">
        <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 sm:gap-2">
          <img
            v-for="(img, id) in images"
            :key="id"
            :src="img"
            :class="[id === images.length - 1 ? 'col-span-2 row-span-2' : 'h-full col-span-1 row-span-1']"
          />
        </div>
      </div>
      <div class="col-span-1 lg:col-span-3 lg:mb-4">
        <h1 class="mb-1 font-bold uppercase text-6 text-black-70">Футболка мужская</h1>
        <div class="font-medium uppercase mb-7 text-5 text-black-70">1180 rub</div>
        <div class="mb-7">
          <div class="mb-3 font-bold uppercase text-theme">
            Цвет
          </div>
          <ul class="flex flex-wrap -mb-3 -mr-2">
            <li
              v-for="(color, id) in ['#000', '#fff', '#006', '#484', '#33a']"
              :key="id"
              class="mb-3 mr-2"
            >
              <VButtonColor
                to="#"
                :color="color"
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
              v-for="(size, id) in ['s', 'm', 'l', 'xl']"
              :key="id"
              class="mb-3 mr-2"
            >
              <VButtonSize
                to="#"
                :size="size"
              />
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <div class="mb-2 font-bold uppercase text-theme">Описание</div>
          <div class="font-medium">
            Шорты Focus - это продолжение минималистичной линии бренда, с мощными улучшениями в сторону деталей и стиля. Новый дизайн шорт, пошив и карманы на молнии - идеально подойдут как во время тяжелых активных тренировок, так и для повседневного уличного стиля или деловой встречи. Посадка шорт и конструкция швов, а также эластичная ткань позволяет не сковывать движения, давая максимальную свободу для любой активности. Вставка Road to the Dream создана, чтобы дополнять дизайн и вдохновлять на фокус над мечтой и путь ее достижения!
          </div>
        </div>
        <VButton>Добавить в корзину</VButton>
      </div>
    </div>
  </VContainer>
</template>

<script>
import VBreadcrumbs from '@/components/base/VBreadcrumbs.vue';
import VButtonColor from '@/components/base/VButtonColor.vue';
import VButtonSize from '@/components/base/VButtonSize.vue';
import VButton from '@/components/base/VButton.vue';
// import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Product',
  components: {
    VBreadcrumbs, VButtonColor, VButtonSize, VButton,
  },
  data() {
    return {
      images: [
        'https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab583f2f3f2.07685677.jpg',
        'https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab584176645.31120481.jpg',
        'https://admin.roadtothedream.com/images/products/lg/road-to-the-dream-minimal-longsleeve-indigo_5f0ab583d7f0e6.48112297.jpg',
      ],
    };
  },
  // computed: mapGetters(['products']),
  // methods: mapMutations(['toggleDisplayFiltersMob']),
};
</script>
