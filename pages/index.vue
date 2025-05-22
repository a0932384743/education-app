<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-carousel :show-arrows="false" cycle :height="size1">
      <v-carousel-item
        :src="
          windowSize > 600
            ? '/image/' + lang + '/carousel1.png'
            : '/image/' + lang + '/mobile-carousel1.png'
        "
      ></v-carousel-item>
      <v-carousel-item
        :src="
          windowSize > 600
            ? '/image/' + lang + '/carousel2.png'
            : '/image/' + lang + '/mobile-carousel2.png'
        "
      ></v-carousel-item>
      <v-carousel-item
        :src="
          windowSize > 600
            ? '/image/' + lang + '/carousel3.png'
            : '/image/' + lang + '/mobile-carousel3.png'
        "
      ></v-carousel-item>
    </v-carousel>
    <v-img
      :src="'/image/' + lang + '/bg4.png'"
      width="100%"
      contain
      position="center left"
      class="d-none d-sm-block"
    />
    <div class="product-container d-none d-sm-flex align-center">
      <v-img
        src="/image/text2.png"
        role="button"
        width="320"
        max-width="320"
        height="250"
        contain
        class="mx-10"
      />
      <div class="d-none d-sm-flex flex-grow-1" style="gap: 30px">
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
          <v-card-text class="pa-0">
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
    </div>
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
              {{ $t(service.desc1) }}<br/>{{ $t(service.desc2) }}
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
      :src="'/image/' + lang + '/bg5.png'"
      width="100%"
      contain
      class="d-none d-sm-block"
      style="margin-bottom: 200px"
    />
    <div class="fill-width position-relative hover d-none d-sm-block">
      <v-img
        :src="'/image/' + lang + '/bg6.png'"
        width="100%"
        height="100%"
      />
      <v-img
        :src="'/image/' + lang + '/hover-bg6.png'"
        width="100%"
        height="100%"
        class="hover-img"
      />
    </div>
    <v-img src="/image/mobile-bg6.png" width="100%" class="d-sm-none d-block"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {
  EXTRA_SIZE,
  LARGE_SIZE,
  MEDIUM_SIZE,
  SMALL_SIZE,
} from '../utils/themes';
import {Product, Service, products, services} from '../dummy';

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
  size1: number = 820;
  size3: number = 1925;
  products: Array<Product> = products;
  services: Array<Service> = services;
  windowSize: number = EXTRA_SIZE;

  get lang() {
    return this.$i18n.locale === 'en' ? '/en' : '';
  }

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 820;
      this.size3 = 1925;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 720;
      this.size3 = 1620;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 520;
      this.size3 = 1280;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 460;
      this.size3 = 820;
    } else {
      this.size1 = 460;
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
::v-deep .v-carousel__controls {
  background: transparent;
}

::v-deep .v-carousel__controls__item .v-icon {
  font-size: 14px;
  color: white;
  opacity: 1 !important;

  @media screen and (max-width: 600px) {
    & {
      font-size: 10px !important;
    }
  }
}

::v-deep .v-carousel {
  margin-bottom: 200px;

  @media screen and (max-width: 1264px) {
    & {
      margin-bottom: 0;
    }
  }
}

.product-container {
  display: flex;
  padding: 50px 150px 150px 180px;

  @media screen and (max-width: 1264px) {
    & {
      padding: 0 50px 50px 80px;
    }
  }
}

h5 {
  font-weight: 600;
  font-size: 30px;
  line-height: 180%;
  color: #000000;
  margin-bottom: 8px;
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
