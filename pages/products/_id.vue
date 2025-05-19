<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '150px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="title px-4 px-md-0">
        <h1 class="mb-2">
          {{ title }}
        </h1>
        <hr class="double-color-hr" />
      </div>
      <v-row class="pa-8 pa-sm-16 mb-10">
        <v-col
          v-for="product in products.slice(
            perPage * (page - 1),
            perPage * page
          )"
          :key="product.id"
          cols="6"
          sm="6"
          md="4"
          xl="3"
        >
          <v-card color="#cfae63" rounded="0" outlined>
            <v-img
              :src="product.img"
              width="100%"
              :height="size1"
              contain
              class="white"
            />
            <v-card-actions class="justify-center align-center">
              <h6>{{ product.name }}</h6>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div
        class="d-flex justify-space-between align-center flex-column-reverse flex-md-row"
      >
        <div class="flex-grow-1 d-none d-sm-block">&nbsp;</div>
        <div class="flex-grow-1 text-center py-8 py-md-0">
          <v-btn class="back-btn" color="#D8AE5E" to="/products" dark>
            <span class="text">{{ $t('word11') }}</span>
          </v-btn>
        </div>
        <v-pagination
          v-model="page"
          color="#ba9545"
          light
          :total-visible="4"
          :length="Math.ceil(products.length / perPage)"
        ></v-pagination>
      </div>
      <div class="py-16 my-16" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product, subProducts } from '../../dummy';
import {EXTRA_SIZE, LARGE_SIZE, MEDIUM_SIZE, SMALL_SIZE} from '../../utils/themes';

@Component({
  name: 'product',
  layout: 'default-layout',
  asyncData() {
    return {
      products: subProducts,
    };
  },
})
export default class product extends Vue {
  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('products.intro'), disabled: false, href: '/products' },
      { text: '農機用管束商品', disabled: true },
    ];
  }

  readonly products: Array<Product> = subProducts;

  readonly title: string = '農機用管束商品';

  windowSize: number = EXTRA_SIZE;
  size1: number = 285;

  page: number = 1;

  readonly perPage: number = 6;

  handleResize() {

    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 285;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 250;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 200;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 150;
    } else {
      this.size1 = 150;
    }
    this.windowSize = window.innerWidth;
  }

  mounted() {
    this.$nextTick(this.handleResize);
    window.addEventListener('resize', this.handleResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 20px;
    }
  }
}

h6 {
  font-weight: 600;
  font-size: 26.65px;
  color: white;

  @media screen and (max-width: 780px) {
    & {
      font-size: 14px;
    }
  }
}

::v-deep .v-pagination {
  gap: 10px;
}

::v-deep .v-pagination__item {
  min-width: 60px;
  min-height: 60px;
  font-family: Kufam, serif;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  background: #e6d199 !important;
  color: white !important;

  @media screen and (max-width: 780px) {
    & {
      width: 28px;
      height: 28px;
      min-width: 28px;
      min-height: 28px;
      font-size: 10px;
    }
  }
}
::v-deep .v-pagination__item--active {
  background: #d8ae5e !important;
}

::v-deep .v-pagination__navigation {
  display: none;
}

.text {
  font-family: Kufam, serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 20px;
  text-indent: 20px;

  @media screen and (max-width: 780px) {
    & {
      font-size: 10px;
    }
  }
}

.back-btn {
  font-family: Kufam, serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 0;
  min-width: 250px;
  min-height: 60px;
  text-align: center;

  @media screen and (max-width: 780px) {
    & {
      font-size: 10px;
      min-width: 120px;
      min-height: 30px;
    }
  }
}
</style>
