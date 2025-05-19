<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg7.png' : '/image/mobile-bg7.png'"
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
      <div class="position-relative py-16 pr-sm-10 pl-sm-10 pr-16">
        <div
          class="position-relative fill-width px-12 pt-16"
          style="background: #d8ae5e"
          :style="{
            paddingBottom:
              (windowSize > 600 ? size2 * 0.6 : size1 * 0.9) + 'px',
          }"
        >
          <v-img
            class="position-absolute"
            src="/image/bg8.png"
            :width="size1"
            style="right: -80px; z-index: 1"
            :style="{
              bottom: windowSize > 600 ? '' : '-40px',
              top: windowSize > 600 ? '-100px' : '',
            }"
          />
          <v-img
            class="position-absolute"
            src="/image/bg9.png"
            :width="size2"
            style="z-index: 1"
            :style="{
              bottom: windowSize > 600 ? '-100px' : -size1 + 'px',
              left: windowSize > 600 ? '-80px' : '0px',
            }"
          />
          <v-img
            class="position-absolute"
            src="/image/icon6.png"
            :width="size3"
            style="right: -70px; z-index: 2"
            :style="{
              bottom: windowSize > 600 ? '-100px' : '',
              top: windowSize > 600 ? '' : '-100px',
            }"
          />
          <h1
            class="white--text"
            :style="{
              width:
                'calc(100% - ' + (windowSize > 600 ? size1 : 0) * 0.9 + 'px)',
            }"
          >
            {{ $t('title1') }}
          </h1>
          <pre
            class="white--text"
            :style="{
              width:
                'calc(100% - ' + (windowSize > 600 ? size1 : 0) * 0.9 + 'px)',
            }"
          >
            {{ $t('paragraph1') }}
          </pre>
        </div>
      </div>
      <div class="feature-grid fill-width">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="feature-item"
        >
          <v-img
            :src="service.imgMobile"
            :width="size4"
            contain
            class="mb-5 mb-sm-10"
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
      <v-img
        :src="windowSize > 600 ? '/image/bg10.png' : '/image/mobile-bg10.png'"
        width="100%"
        class="mb-10"
        contain
      />
    </v-container>
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
import { Service, services } from '../dummy';

@Component({
  name: 'about-us',
  layout: 'default-layout',
  asyncData() {
    return {
      services,
    };
  },
})
export default class aboutUs extends Vue {
  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('about.us'), disabled: true },
    ];
  }

  size1: number = 850;
  size2: number = 950;
  size3: number = 430;
  size4: number = 320;
  services: Array<Service> = services;
  windowSize: number = EXTRA_SIZE;

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 850;
      this.size2 = 950;
      this.size3 = 430;
      this.size4 = 320;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 750;
      this.size2 = 950;
      this.size3 = 430;
      this.size4 = 320;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 450;
      this.size2 = 550;
      this.size3 = 430;
      this.size4 = 220;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 269;
      this.size2 = 285;
      this.size3 = 200;
      this.size4 = 120;
    } else {
      this.size1 = 269;
      this.size2 = 285;
      this.size3 = 200;
      this.size4 = 120;
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
h1 {
  font-family: 'Kufam', serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    & {
      font-size: 16px;
    }
  }
}

pre {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  white-space: break-spaces;

  @media screen and (max-width: 600px) {
    & {
      font-size: 12px;
    }
  }
}

.feature-grid {
  padding: 350px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  text-align: center;

  @media screen and (max-width: 600px) {
    & {
      padding: 350px 20px 150px 20px;
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
  font-size: 24px;
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
</style>
