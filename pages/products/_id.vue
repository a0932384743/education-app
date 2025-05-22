<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg11.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0 mx-auto" style="max-width: 1360px">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '140px' : '10px',
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
        <hr class="double-color-hr"/>
      </div>
      <div class="product-container">
        <v-col
          v-for="product in products.slice(
            perPage * (page - 1),
            perPage * page
          )"
          :key="product.id"
          cols="6"
          sm="6"
          md="4"
        >
          <v-card color="#cfae63" rounded="0" outlined class="fill-height">
            <v-img
              :src="product.img"
              width="100%"
              :max-height="windowSize > 600 ? '340px' : '171px'"
              :min-height="windowSize > 600 ? '340px' : '171px'"
              class="white"
              contain
            />
            <v-card-actions
              class="justify-center align-center"
              :style="{
              height: windowSize > 600 ? '90px' : '45px'
              }"
            >
              <nuxt-link to="/products/detail/0">{{ product.name }}</nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </div>
      <div
        class="d-flex justify-space-between align-center flex-column-reverse flex-md-row product-btn"
      >
        <div class="flex-grow-1 d-none d-sm-block">&nbsp;</div>
        <div class="flex-grow-1 text-center">
          <v-btn class="back-btn" color="#D8AE5E" to="/products" dark :min-width="windowSize > 600 ? 235 : 120" :min-height="windowSize > 600 ? 60 : 30">{{ $t('word11') }}</v-btn>
        </div>
        <v-pagination
          v-model="page"
          color="#ba9545"
          light
          :total-visible="4"
          :length="Math.ceil(products.length / perPage)"
        ></v-pagination>
      </div>
      <div class="py-16 my-16"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Product, subProducts} from '../../dummy';
import {EXTRA_SIZE} from '../../utils/themes';

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
      {text: this.$t('home'), disabled: false, href: '/'},
      {text: this.$t('products.intro'), disabled: false, href: '/products'},
      {text: '農機用管束商品', disabled: true},
    ];
  }

  readonly products: Array<Product> = subProducts;
  readonly title: string = '農機用管束商品';
  windowSize: number = EXTRA_SIZE;

  page: number = 1;

  readonly perPage: number = 6;

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
<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 180%;
  letter-spacing: 5px;

  @media screen and (max-width: 600px) {
    & {
      font-size: 20px;
    }
  }
}

.product-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 110px 50px 150px 50px;

  ::v-deep .v-image:hover {
    .v-image__image {
      background-size: 150%;
      animation: hover 1s;
    }
  }

  @keyframes hover {
    0% {
      background-size: 100%;
    }

    100% {
      background-size: 120%;
    }
  }


  & > * {
    padding: 0 40px 80px 40px;
  }

  @media screen and (max-width: 780px) {
    & {
      padding: 24px 0 50px 0;
      > * {
        padding: 0 11px 23px 11px;
      }
    }
  }
}

.product-btn {
  padding: 0 50px 0 50px;
  @media screen and (max-width: 780px) {
    & {
      padding: 0;
    }
  }
}

a {
  font-weight: 600;
  font-size: 26.65px;
  line-height: 180%;
  letter-spacing: 5px;
  text-align: right;
  color: white;
  text-decoration: none;
  @media screen and (max-width: 600px) {
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

  @media screen and (max-width: 600px) {
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

.back-btn {
  margin: 15px auto;

  .v-btn__content {
    font-family: Kufam,serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 8px;
  }

  @media screen and (max-width: 600px) {
    & {
      .v-btn__content {
        font-size: 10px;
      }
    }
  }
}
</style>
