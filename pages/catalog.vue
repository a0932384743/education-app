<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg12.png' : '/image/mobile-bg12.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0 mx-auto" style="max-width: 1360px">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '235px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="title px-4 px-md-0 d-block d-md-none">
        <h1 class="mb-2">
          {{ $t('word10') }}
        </h1>
        <hr class="double-color-hr"/>
      </div>
      <div
        class="position-relative mx-auto catalog fill-width"
        style="max-width: 1260px"
        :style="{
          marginBottom: windowSize > 960 ? '290px' : '0',
        }"
      >
        <v-img src="/image/catalog.png" width="100%" contain>
          <div class="hover">
            <div class="hover-img">DOWNLOAD</div>
          </div>
        </v-img>
        <div class="catalog-download">
          <h3 class="d-none d-md-block">{{ $t('word10') }}</h3>
          <v-divider class="d-none d-md-block" style="border-color: black"/>
          <v-btn text class="mr-auto d-none d-md-block">
            <arrow-icon direction="left"/>
          </v-btn>
          <v-btn
            color="#D8AE5E"
            class="d-block d-md-none mx-auto"
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
import {Component, Vue} from 'vue-property-decorator';
import {
  EXTRA_SIZE,
  LARGE_SIZE,
  MEDIUM_SIZE,
  SMALL_SIZE,
} from '../utils/themes';
import ArrowIcon from '../components/ArrowIcon.vue';

@Component({
  name: 'catalog',
  components: {ArrowIcon},
  layout: 'default-layout',
})
export default class catalog extends Vue {
  get menus() {
    return [
      {text: this.$t('home'), disabled: false, href: '/'},
      {text: this.$t('about.us'), disabled: true},
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
  gap: 65px;
  align-items: end;

  @media screen and (max-width: 960px) {
    & {
      grid-template-columns: 1fr !important; /* 每列只有一欄 */
      padding: 50px 40px 90px 40px;
      gap: 50px;
    }
  }
}

.catalog-download {
  @media screen and (max-width: 960px) {
    padding-top: 30px;
  }
}

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

h3 {
  font-weight: 600;
  font-size: 45px;
  line-height: 180%;
  letter-spacing: 5px;
  text-align: right;
  color: #000000;
}

.hover:hover {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5) 100%, rgba(0, 0, 0, .5) 100%);
  animation: hover 1s;
}

@keyframes hover {
  0% {
    background-size: 100% 0;
  }
  100% {
    background-size:  100% 100%;
  }
}


.hover-img {
  background: rgba(0, 0, 0, 0.8) !important;
  width: 260px;
  height: 65px;
  font-weight: 700;
  font-size: 40px;
  color: white;
  margin: auto;
  bottom: 1%;
  left: calc(50% - 130px);
  text-align: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    & {
      font-size: 20px;
    }
  }
}
</style>
