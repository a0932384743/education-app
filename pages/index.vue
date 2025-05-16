<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-carousel :show-arrows="false" cycle :height="size1">
      <v-carousel-item
        :src="windowSize > 600 ? '/image/bg1.png' : '/image/mobile-bg1.png'"
      ></v-carousel-item>
      <v-carousel-item
        :src="windowSize > 600 ? '/image/bg2.png' : '/image/mobile-bg2.png'"
      ></v-carousel-item>
      <v-carousel-item
        :src="windowSize > 600 ? '/image/bg3.png' : '/image/mobile-bg3.png'"
      ></v-carousel-item>
    </v-carousel>
    <div class="d-none d-sm-block my-10"></div>
    <v-img
      src="/image/bg4.png"
      width="100%"
      :height="size2"
      contain
      class="d-none d-sm-block"
      role="button"
    />
    <v-container
      class="flex-nowrap px-0 d-none d-sm-flex"
      :fluid="windowSize < 960"
    >
      <div class="align-self-center flex-grow-1">
        <v-img src="/image/text1.png" max-height="160" contain />
        <v-img
          src="/image/button1.png"
          role="button"
          class="ml-auto"
          max-height="50"
          contain
        />
      </div>
      <div class="d-none d-sm-flex" style="gap: 20px">
        <v-card
          v-for="(product, index) in products"
          :key="product.id"
          class="pa-0 align-self-start"
          tile
          outlined
          style="border: 0; border-bottom: 1px solid black"
        >
          <v-img
            :src="product.img"
            width="100%"
            :max-width="index ? 325 : 425"
            contain
            :alt="product.img"
          />
          <v-card-text class="px-0 py-2">
            <h5>{{ product.name }}</h5>
            <p>{{ $t('count') }}:{{ product.count }}</p>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn icon light>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
    <v-img
      src="/image/mobile-bg4.png"
      width="100%"
      class="d-block d-sm-none"
      role="button"
      contain
    />
    <div class="feature d-flex justify-center fill-width">
      <div
        class="feature-grid white fill-height fill-width"
        style="position: relative; max-width: 1260px"
      >
        <v-img
          src="/image/icon5.png"
          width="350"
          height="350"
          class="d-none d-sm-block"
          style="
            position: absolute;
            top: -200px;
            left: -200px;
            z-index: 1;
            object-fit: contain;
          "
        />
        <div
          v-for="(service, index) in services"
          :key="index"
          class="feature-item"
        >
          <v-img
            :src="windowSize > 600 ? service.img : service.imgMobile"
            :width="windowSize > 600 ? 190 : 130"
            contain
            class="mb-sm-10"
          />
          <div
            class="d-flex justify-center align-center"
            style="gap: 10px"
            :class="index % 2 ? 'flex-row-reverse' : ''"
          >
            <div class="title">{{ $t(service.title) }}</div>
            <v-divider
              vertical
              class="d-sm-none"
              style="border-color: #ba9545"
            />
            <div class="sub-title">
              {{ $t(service.desc1) }}<br />{{ $t(service.desc2) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-img
      src="/image/mobile-button1.png"
      width="100%"
      contain
      role="button"
      max-width="320px"
      class="d-sm-none d-block mx-auto"
    />
    <div
      class="d-sm-none d-flex flex-column px-5 py-8 products-container-mobile"
      style="gap: 20px"
    >
      <v-card
        v-for="product in products"
        :key="'mobile-' + product.id"
        class="pa-0 align-self-start mx-auto"
        tile
      >
        <v-img
          :src="product.img"
          width="100%"
          :max-width="325"
          contain
          :alt="product.img"
        >
          <v-app-bar
            flat
            style="
              background: linear-gradient(180deg, #000 0, #000 60%, #0000 100%);
            "
          >
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
      src="/image/bg5.png"
      width="100%"
      :height="size1"
      contain
      class="d-none d-sm-block"
    />
    <v-img
      src="/image/bg6.png"
      width="100%"
      :height="size3"
      class="d-none d-sm-block"
    />
    <v-img src="/image/mobile-bg6.png" width="100%" class="d-sm-none d-block" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  EXTRA_SIZE,
  LARGE_SIZE,
  MEDIUM_SIZE,
  SMALL_SIZE,
} from '../utils/themes';
import { Product, Service, products, services } from '../dummy';

@Component({
  name: 'home',
  layout: 'default-layout',
  asyncData() {
    return {
      products,
      services,
    };
  },
})
export default class home extends Vue {
  size1: number = 600;
  size2: number = 720;
  size3: number = 1925;
  products: Array<Product> = products;
  services: Array<Service> = services;
  windowSize: number = EXTRA_SIZE;

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 600;
      this.size2 = 720;
      this.size3 = 1925;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 500;
      this.size2 = 600;
      this.size3 = 1620;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 400;
      this.size2 = 480;
      this.size3 = 1280;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 300;
      this.size2 = 360;
      this.size3 = 820;
    } else {
      this.size1 = 300;
      this.size2 = 360;
      this.size3 = 820;
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
<style scoped lang="scss">
h5 {
  font-weight: 600;
  font-size: 30px;
  line-height: 180%;
  color: #000000;
  margin-bottom: 5px;
}

h6 {
  font-weight: 600;
  line-height: 180%;
  color: #000000;
  font-size: 23.96px;
  text-align: right;
}

p {
  font-weight: 600;
  font-size: 22px;
  line-height: 180%;
  color: #8d8d8c;
  margin-bottom: 5px;
}

.feature {
  position: absolute;
  bottom: -180px;
  left: 0;
  height: 450px;
  z-index: 1;

  @media screen and (max-width: 600px) {
    & {
      position: initial;
      bottom: 0;
      left: 0;
      height: 750px;
    }
  }
}

.feature-grid {
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  text-align: center;

  @media screen and (max-width: 600px) {
    & {
      grid-template-columns: repeat(1, minmax(100%, 1fr));
      gap: 30px;
    }
  }
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 3px solid #ba9545;

  &:last-child {
    border-right: none;
  }

  @media screen and (max-width: 600px) {
    & {
      border-right: none;
    }
  }
}

.title {
  font-family: 'Zen Kaku Gothic New', serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 180%;
  text-align: center;
  color: #ba9545; /* brown-ish tone */

  @media screen and (min-width: 601px) {
    & {
      display: none;
    }
  }
}

.sub-title {
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  text-align: center;
  color: #ba9545; /* brown-ish tone */

  @media screen and (max-width: 600px) {
    & {
      text-align: left;
      font-weight: 400;
      font-size: 10.24px;
      line-height: 140%;
    }
  }
}

.app-bar ::v-deep .v-toolbar__content {
  background: linear-gradient(180deg, #000 0, #000 60%, #0000 100%);
}
</style>
