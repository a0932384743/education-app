<template>
  <v-footer dark class="pa-0">
    <v-container class="pt-16 pb-10 px-10 px-sm-0">
      <v-row class="mx-0">
        <v-col
          cols="12"
          class="d-flex align-start align-sm-end justify-space-between pt-16 px-0 flex-column flex-sm-row"
          style="border-bottom: 1px solid #fff"
        >
          <v-img
            max-width="185"
            height="48"
            src="/logo.svg"
            class="d-black d-sm-none"
          />
          <p class="d-black d-sm-none paragraph my-2">
            “Established in 1987, as a traditional family factory, we started
            from the first generation using a small press at home, and gradually
            expanded to our current 100 ping factory with many professional
            molding machines. All molds are designed and developed by in-house
            professionals without outsourcing. We have always been committed to
            serving our customers, saving costs and creating greater business
            opportunities for them.
          </p>
          <div class="d-flex mb-4 mb-sm-0" style="gap: 1rem">
            <v-icon size="30" class="social-icon">$facebook</v-icon>
            <v-icon size="30" class="social-icon">$instagram</v-icon>
            <v-icon size="30" class="social-icon">$line</v-icon>
            <v-icon size="30" class="social-icon">$youtube</v-icon>
          </div>
          <v-img
            max-width="350"
            height="90"
            src="/logo.svg"
            class="d-none d-sm-block"
          />
        </v-col>
      </v-row>
      <v-row class="flex-column-reverse flex-sm-row mx-0">
        <!-- 左邊公司資訊 -->
        <v-col cols="12" sm="6" class="text-left py-10 px-0 section">
          <h5 class="title mb-2">Company Info</h5>
          <p class="paragraph">{{ $t('address') }}:{{ $t('app.address1') }}</p>
          <p class="paragraph">
            {{ $t('tel') }}:+886-4-7389650 |+886-4-7385200
          </p>
          <p class="paragraph">{{ $t('fax') }}:+886-4-7384890</p>
          <div class="my-10" />
          <h5 class="title mb-2">Contact us</h5>
          <p class="paragraph">TEL:+886-4-7389650 |+886-4-7385200</p>
          <p class="paragraph">FAX:+886-4-7384890</p>
          <p class="paragraph">E-mail：yangfen7@ms78.hinet.net</p>
        </v-col>

        <!-- 右邊其他資訊 -->
        <v-col cols="12" sm="6" class="text-left py-10 px-0 section">
          <h5 class="title mb-2">Connections</h5>
          <div class="d-flex justify-space-between">
            <div>
              <nuxt-link
                v-for="url in menus"
                :key="'footer_' + url.name"
                :to="url.url"
                class="paragraph"
                >{{ $t(url.name) }}</nuxt-link
              >
            </div>
            <div>
              <p class="paragraph">{{ products.name }}</p>
              <nuxt-link
                v-for="url in products.children"
                :key="'footer_' + url.name"
                :to="url.url"
                class="paragraph"
                >{{ $t(url.name) }}</nuxt-link
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-10 copyright">
      <!-- 底部版權資訊 -->
      <v-row justify="center">
        <p class="text--white text-center text-subtitle-2">
          ©洋峰企業社 Yang Fung Enterprise Co.,Ltd 版權所有
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
interface MenuItem {
  name: string
  url: string
  children: MenuItem[]
}
@Component({
  name: 'CustomFooter',
})
export default class CustomFooter extends Vue {
  menus: MenuItem[] = [
    { name: 'home', url: '/', children: [] },
    { name: 'about.us', url: '/about-us', children: [] },
    { name: '製造|批發|ODM|OEM', url: '/products', children: [] },
    { name: 'contact.us', url: '/contact-us', children: [] },
  ];

  products: MenuItem = {
    name: '洋峰專營各類管束',
    url: '/products/0',
    children: [
      { name: '|汽車油路管|', url: '/products/detail/0', children: [] },
      { name: '|空氣風管|', url: '/products/detail/1', children: [] },
      { name: '|手壓式管束|', url: '/products/detail/2', children: [] },
      { name: '|特殊管束|', url: '/products/detail/3', children: [] },
    ],
  };

  asyncData() {
    return {
      menus: this.menus,
      products: this.products,
    };
  }
}
</script>
<style scoped lang="scss">
footer {
  background-image: url('/image/footer-bg.jpg') !important;
  background-size: cover !important;
}

.social-icon {
  width: 33px !important;
  height: 33px !important;

  @media (max-width: 532px) {
    & {
      width: 18px !important;
      height: 18px !important;
    }
  }
}

h5.title {
  font-family: Expletus Sans;
  font-weight: 700;
  font-style: italic;
  font-size: 22px;
  text-align: left;
  color: white;
  margin-bottom: 1em;

  @media (max-width: 532px) {
    & {
      font-size: 20px;
    }
  }
}

.paragraph {
  display: block;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: white;
  margin-bottom: 5px;
}

.section {
  @media (max-width: 532px) {
    & {
      border-bottom: 1px solid #fff;
    }
  }
}

.copyright {
  background-color: #000;
  @media (max-width: 532px) {
    & {
      background-color: transparent;
    }
  }
}
</style>
