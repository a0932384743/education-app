<template>
  <v-footer dark :min-height="windowSize > 600 ? 1195 : 900">
    <div class="content">
      <v-row class="mx-0">
        <v-col
          cols="12"
          class="d-flex align-start align-sm-end justify-space-between px-0 flex-column flex-sm-row"
          style="border-bottom: 1px solid #fff"
        >
          <logo-icon width="185" height="48" class="d-black d-sm-none mb-4"/>
          <p class="d-black d-sm-none paragraph my-2">
            {{ $t('paragraph3') }}
          </p>
          <div class="d-flex mb-4 mb-sm-0" style="gap: 1rem">
            <v-icon :size="windowSize > 600 ? 35 : 18" class="social-icon">$facebook</v-icon>
            <v-icon :size="windowSize > 600 ? 35 : 18" class="social-icon">$instagram</v-icon>
            <v-icon :size="windowSize > 600 ? 35 : 18" class="social-icon">$line</v-icon>
            <v-icon :size="windowSize > 600 ? 35 : 18" class="social-icon">$youtube</v-icon>
          </div>
          <logo-icon width="350" height="90" class="d-none d-sm-block mb-1"/>
        </v-col>
      </v-row>
      <v-row class="flex-column-reverse flex-sm-row mx-0">
        <!-- 左邊公司資訊 -->
        <v-col cols="12" sm="6" class="text-left py-3 py-sm-10 px-0 section">
          <h5>Company Info</h5>
          <p class="paragraph">{{ $t('address') }}:{{ $t('app.address1') }}</p>
          <p class="paragraph">
            {{ $t('tel') }}:+886-4-7389650 |+886-4-7385200
          </p>
          <p class="paragraph">{{ $t('fax') }}:+886-4-7384890</p>
          <div class="py-2 py-sm-10"/>
          <h5>Contact us</h5>
          <p class="paragraph">TEL:+886-4-7389650 |+886-4-7385200</p>
          <p class="paragraph">FAX:+886-4-7384890</p>
          <p class="paragraph">E-mail：yangfen7@ms78.hinet.net</p>
        </v-col>
        <!-- 右邊其他資訊 -->
        <v-col cols="12" sm="6" class="text-left py-3 py-sm-10 px-0 section section">
          <h5 class="col-12 pa-0">Connections</h5>
          <div class="d-flex flex-wrap">
            <div class="col-6 pa-0">
              <nuxt-link
                v-for="url in menus"
                :key="'footer_' + url.name"
                :to="url.url"
                class="paragraph"
              >
                {{ $t(url.name) }}
              </nuxt-link>
            </div>
            <div class="col-6 pa-0">
              <p class="paragraph">{{ products.name }}</p>
              <nuxt-link
                v-for="url in products.children"
                :key="'footer_' + url.name"
                :to="url.url"
                class="paragraph"
              >
                {{ $t(url.name) }}
              </nuxt-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="copyright">
      <!-- 底部版權資訊 -->
      ©洋峰企業社 Yang Fung Enterprise Co.,Ltd 版權所有
    </div>
  </v-footer>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LogoIcon from './LogoIcon.vue';

interface MenuItem {
  name: string
  url: string
  children: MenuItem[]
}

const menus: MenuItem[] = [
  {name: 'home', url: '/', children: []},
  {name: 'about.us', url: '/about-us', children: []},
  {name: 'catalog.download', url: '/catalog', children: []},
  {name: 'contact.us', url: '/contact-us', children: []},
  {name: '製造|批發|ODM|OEM', url: '/products', children: []},
];

const products: MenuItem = {
  name: '洋峰專營各類管束',
  url: '/products/0',
  children: [
    {name: '|汽車油路管|', url: '/products/detail/0', children: []},
    {name: '|空氣風管|', url: '/products/detail/1', children: []},
    {name: '|手壓式管束|', url: '/products/detail/2', children: []},
    {name: '|特殊管束|', url: '/products/detail/3', children: []},
  ],
};

@Component({
  name: 'CustomFooter',
  components: {LogoIcon},
  asyncData() {
    return {
      menus,
      products,
    };
  },
})
export default class CustomFooter extends Vue {
  menus: MenuItem[] = menus;
  products: MenuItem = products;
  windowSize: number = 960;

  handleResize() {
    this.windowSize = window.innerWidth;
  }

  mounted() {
    this.windowSize = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style scoped lang="scss">
footer {
  padding: 0;
  flex-direction: column;
  justify-content: end;
  background-image: url('/image/footer-bg.jpg') !important;
  background-size: cover !important;
  overflow: hidden !important;
}

.content {
  padding: 185px 270px;
  width: 100%;
  align-self: end;

  @media (max-width: 1264px) {
    & {
      padding: 185px 180px;
    }
  }

  @media (max-width: 960px) {
    & {
      padding: 57px 35px 0 35px;
    }
  }
}

.copyright {
  background-color: #000;
  height: 150px;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  letter-spacing: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 35px 0;
  width: 100%;

  @media (max-width: 600px) {
    & {
      background-color: transparent;
      font-size: 10px;
      letter-spacing: 1px;
      height: 100px;
    }
  }
}

.social-icon {
  width: 33px !important;
  height: 33px !important;

  @media (max-width: 600px) {
    & {
      width: 18px !important;
      height: 18px !important;
    }
  }
}

h5 {
  font-family: Expletus Sans, serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 8px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    & {
      font-size: 20px;
      letter-spacing: 3px;
    }
  }
}

.paragraph {
  display: block;
  font-weight: 400;
  font-size: 18px;
  color: white;
  margin-bottom: 5px;
  letter-spacing: 8px;
  text-decoration: none;


  @media (max-width: 600px) {
    & {
      font-weight: 400;
      font-size: 12px;
      line-height: 180%;
      letter-spacing: 2px;
    }
  }
}

.section {
  @media (max-width: 600px) {
    & {
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
