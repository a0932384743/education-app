<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left center"
    />
    <v-container class="px-0" fluid>
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '150px' : '10px',
        }"
      >
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div
        class="d-flex justify-center align-center products-link flex-column flex-sm-row pb-10 pb-sm-16"
      >
        <span>{{ title }} : </span>
        <v-breadcrumbs :items="children" class="px-1 py-0">
          <template #divider>
            <span style="color: #ba9545">|</span>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="d-none d-sm-flex flex-column py-16">
        <div
          v-for="(product, index) in products"
          :key="'img-' + index"
          class="catalog"
        >
          <v-img v-if="index % 2 === 0" :src="product.img" />
          <div
            class="catalog-download text-start"
            :class="index % 2 ? 'pr-8 pl-16' : 'pl-8 pr-16'"
          >
            <h3 class="d-block" :class="index % 2 ? 'text-end' : 'text-start'">
              {{ product.name }}
            </h3>
            <v-divider
              class="d-block"
              style="border-color: black; width: 80%; min-width: 400px"
              :class="index % 2 ? 'ml-auto' : 'mr-auto'"
            />
            <v-btn
              text
              more
              class="d-block px-0 mb-10"
              :class="index % 2 ? 'ml-auto' : 'mr-auto'"
            >
              <arrow-icon v-if="index % 2 === 0" direction="left" />
              <span class="px-2">more</span>
              <arrow-icon v-if="index % 2 === 1" direction="right" />
            </v-btn>
          </div>
          <v-img v-if="index % 2 === 1" :src="product.img" />
        </div>
      </div>
      <div
        class="d-sm-none d-flex flex-column products-container-mobile"
        style="gap: 30px"
      >
        <v-card
          v-for="product in products"
          :key="'mobile-' + product.id"
          class="pa-0 align-self-start mx-auto"
          tile
        >
          <v-img :src="product.img" width="355px" :alt="product.img">
            <v-app-bar flat style="background: linear-gradient(180deg, #000 0, #000 60%, #0000 100%);">
              <h6 class="white--text text-no-wrap">
                {{ product.name }}
                <v-btn icon dark>
                  <v-icon size="20">mdi-arrow-right-circle</v-icon>
                </v-btn>
              </h6>
            </v-app-bar>
          </v-img>
        </v-card>
      </div>
      <v-img
        class="py-sm-16 my-sm-16"
        width="100%"
        :src="windowSize > 600 ? '/image/step1.png' : '/image/mobile-step1.png'"
        contain
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product, products } from '../../dummy';
import { EXTRA_SIZE } from '../../utils/themes';
import ArrowIcon from '../../components/ArrowIcon.vue';

@Component({
  name: 'products',
  components: { ArrowIcon },
  layout: 'default-layout',
  asyncData() {
    return {
      products,
    };
  },
})
export default class Products extends Vue {
  title: string = '洋峰專營各類管束';
  products: Array<Product> = products;

  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('products.intro'), disabled: true },
    ];
  }

  get children() {
    return [
      { text: '汽車油路管', disabled: false, href: '/products/0' },
      { text: '空氣風管', disabled: false, href: '/products/1' },
      { text: '手壓式管束', disabled: false, href: '/products/2' },
      { text: '特殊管束', disabled: false, href: '/products/3' },
    ];
  }

  windowSize: number = EXTRA_SIZE;

  handleResize() {
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
<style scoped lang="scss">
.products-link {
  font-weight: 600;
  font-size: 24px;
  line-height: 180%;
  text-align: center;
  color: #ba9545 !important;

  @media screen and (max-width: 600px) {
    & {
      font-size: 14px;
    }
  }

  * {
    font-size: 24px !important;
  }

  ::v-deep .v-breadcrumbs__item {
    font-size: 24px !important;
  }

  @media screen and (max-width: 600px) {
    & {
      * {
        font-size: 14px !important;
      }

      ::v-deep .v-breadcrumbs__item {
        font-size: 14px !important;
      }
    }
  }
}

.catalog {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(140px, 1fr)
  ); /* 左 2 份，右 1 份 */
  align-items: end;
}

h3 {
  font-weight: 600;
  font-size: 45px;
  line-height: 180%;
  white-space: nowrap;
}

h6 {
  font-weight: 600;
  line-height: 180%;
  color: #000000;
  font-size: 23.96px;
  text-align: right;
}

.more {
  font-weight: 600;
  font-size: 20px;
  line-height: 180%;
}
</style>
