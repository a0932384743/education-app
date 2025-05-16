<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg12.png' : '/image/mobile-bg11.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left center"
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
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="title" style="padding: 0 40px;">
        <h1 class="d-block d-sm-none mx-auto mt-10">
          {{ $t('word10') }}
        </h1>
        <hr class="double-color-hr d-block d-sm-none" />
      </div>
      <div
        class="position-relative fill-width mx-auto py-16 catalog"
        style="max-width: 1260px"
      >
        <v-img src="/image/catalog.png" width="100%" contain />
        <div class="catalog-download text-start">
          <h3 class="d-none d-sm-block">{{ $t('word10') }}</h3>
          <v-divider class="d-none d-sm-block" />
          <v-btn icon light class="mr-auto d-none d-sm-block">
            <v-icon size="30">mdi-arrow-left-thin</v-icon>
          </v-btn>
          <v-btn
            color="#D8AE5E"
            class="d-block d-sm-none mx-auto mt-10"
            max-width="135px"
            width="100%"
            dark
            large
          >
            DOWNLOAD
          </v-btn>
        </div>
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

@Component({
  name: 'catalog',
  layout: 'default-layout',
})
export default class catalog extends Vue {
  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('about.us'), disabled: true },
    ];
  }

  windowSize: number = EXTRA_SIZE;
  size1: number = 850;

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 850;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 750;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 450;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 269;
    } else {
      this.size1 = 269;
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
.catalog {
  display: grid;
  grid-template-columns: minmax(500px, 1fr) minmax(140px, 1fr); /* 左 2 份，右 1 份 */
  gap: 20px;
  align-items: end;

  @media screen and (max-width: 780px) {
    & {
      padding: 50px 40px;
      grid-template-columns: 1fr !important; /* 每列只有一欄 */
    }
  }
}

h1 {
  font-weight: 500;
  font-size: 18.39px;
  line-height: 180%;
}

h3 {
  font-weight: 600;
  font-size: 45px;
  line-height: 180%;
  text-align: right;
}

.double-color-hr {
  height: 5px;
  border: none;
  background: linear-gradient(to right, #cfae63 40%, #e9daa5 40%);
}
</style>
