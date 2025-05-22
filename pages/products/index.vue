<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container
      class="px-0 mx-auto"
      style="max-width: 1440px"
      :style="{ marginBottom: windowSize > 600 ? '80px' : '10px' }"
    >
      <v-breadcrumbs :items="menus" class="pt-0">
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>
    <v-container class="px-2 px-md-4 px-lg-0 mx-auto" fluid>
      <div
        class="d-flex flex-wrap justify-center align-center products-link flex-column flex-sm-row"
      >
        <span class="text-no-wrap">{{ title }} : </span>
        <v-breadcrumbs :items="children" class="px-1 py-0">
          <template #divider>
            <span style="color: #ba9545">|</span>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="d-none d-lg-flex flex-column py-16">
        <div
          v-for="(product, index) in products"
          :key="'img-' + index"
          class="catalog"
        >
          <div v-if="index % 2 === 0" class="hover">
            <v-img :src="product.img" width="100%"/>
            <div class="hover-img d-flex align-end">
              <h1>{{ product.name }}</h1>
            </div>
          </div>
          <div
            class="catalog-download"
            :class="index % 2 ? 'text-end' : 'text-start'"
          >
            <h3
              class="d-block"
              :class="index % 2 ? 'text-start ml-auto' : 'text-end mr-auto'"
            >
              {{ product.name }}
            </h3>
            <v-divider
              class="d-block"
              style="border-color: black"
              :class="index % 2 ? 'ml-auto' : 'mr-auto'"
            />
            <v-btn
              text
              more
              class="px-0"
              :class="index % 2 ? 'ml-auto' : 'mr-auto'"
            >
              <arrow-icon v-if="index % 2 === 0" direction="left"/>
              <span class="px-2">more</span>
              <arrow-icon v-if="index % 2 === 1" direction="right"/>
            </v-btn>
          </div>
          <div v-if="index % 2 === 1" class="hover">
            <v-img :src="product.img" width="100%"/>
            <div class="hover-img d-flex align-end">
              <h1>{{ product.name }}</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-lg-none d-flex flex-column products-container-mobile"
        style="gap: 30px"
      >
        <v-card
          v-for="product in products"
          :key="'mobile-' + product.id"
          class="pa-0 position-relative"
          tile
        >
          <h6 class="card-title">
            {{ product.name }}
            <v-btn icon dark>
              <v-icon size="25">mdi-arrow-right-circle</v-icon>
            </v-btn>
          </h6>
          <v-img :src="product.mobile_img" width="100%" :alt="product.img" contain/>
        </v-card>
      </div>
      <v-img
        :style="{
          marginTop: windowSize > 1260 ? '250px' : '10px',
          marginBottom: windowSize > 1260 ? '260px' : '40px',
        }"
        width="100%"
        :src="
          windowSize > 600
            ? '/image' + lang + '/step1.png'
            : '/image' + lang + '/mobile-step1.png'
        "
        :contain="windowSize > 600"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Product, categories} from '../../dummy';
import ArrowIcon from '../../components/ArrowIcon.vue';
import {EXTRA_SIZE} from '../../utils/themes';

@Component({
  name: 'products',
  components: {ArrowIcon},
  layout: 'default-layout',
  asyncData() {
    return {
      products: categories,
    };
  },
})
export default class Products extends Vue {
  title: string = '洋峰專營各類管束';
  products: Array<Product> = categories;

  get lang() {
    return this.$i18n.locale === 'en' ? '/en' : '';
  }

  get menus() {
    return [
      {text: this.$t('home'), disabled: false, href: '/'},
      {text: this.$t('products.intro'), disabled: true},
    ];
  }

  get children() {
    return [
      {text: '汽車油路管', disabled: false, href: '/products/0'},
      {text: '空氣風管', disabled: false, href: '/products/1'},
      {text: '手壓式管束', disabled: false, href: '/products/2'},
      {text: '特殊管束', disabled: false, href: '/products/3'},
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
  max-width: 960px;
  margin: auto auto 166px auto;

  @media screen and (max-width: 600px) {
    & {
      margin: auto auto 22px auto;
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

.catalog-download {
  padding: 130px 35px;
  gap: 5px;

  h3,
  hr {
    max-width: 580px;
    width: 100%;
  }

  @media screen and (max-width: 1904px) {
    padding: 65px 35px;
  }
}

.hover-img {
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      rgb(0, 0, 0) 0%,
      rgba(255, 255, 255, 0%) 14%
  );
}

h1 {
  font-weight: 700;
  font-style: italic;
  font-size: 55px;
  letter-spacing: 5px;
  text-align: right;
  padding: 30px 50px;
  color: white;
}

h3 {
  font-weight: 600;
  font-size: 45px;
  line-height: 180%;
  white-space: nowrap;
}


.card-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgb(0, 0, 0) 0%,
      rgba(255, 255, 255, 0%) 20%
  );
  font-weight: 600;
  font-size: 45px;
  letter-spacing: 5px;
  padding: 12px 19px;
  color: white;
  @media screen and (max-width: 600px) {
    & {
      font-size: 26px;

    }
  }
}

.more {
  font-weight: 600;
  font-size: 20px;
  line-height: 180%;
  letter-spacing: 5px;
  color: black;
}
</style>
