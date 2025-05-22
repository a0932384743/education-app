<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg7.png' : '/image/mobile-bg7.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0 mx-auto" style="max-width: 1440px">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '300px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-img
        v-if="windowSize > 600"
        :src="'/image' + lang + '/bg8.png'"
        width="100%"
      />
      <v-img
        v-else
        :src="'/image' + lang + '/mobile-bg8.png'"
        width="100%"
        contain
      />
      <div class="feature-grid fill-width align-start">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="feature-item"
        >
          <v-img
            :src="service.imgMobile"
            :width="size4"
            :height="size4"
            :max-height="size4"
            contain
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
      <div class="position-relative hover">
        <v-img
          :src="windowSize > 600 ? '/image'+ lang +'/bg10.png' : '/image'+ lang +'/mobile-bg10.png'"
          width="100%"
          contain
        />
        <v-img
          src="/image/hover-bg10.png"
          width="100%"
          class="hover-img d-none d-sm-block"
          contain
        />

      </div>
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

  get lang() {
    return this.$i18n.locale === 'en' ? '/en' : '';
  }

  size4: number = 320;
  services: Array<Service> = services;
  windowSize: number = EXTRA_SIZE;

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size4 = 320;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size4 = 320;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size4 = 220;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size4 = 120;
    } else {
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
  padding: 330px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  text-align: center;

  @media screen and (max-width: 600px) {
    & {
      padding: 80px 0;
      grid-template-columns: repeat(1, minmax(100%, 1fr));
      gap: 50px;
    }
  }
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
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
