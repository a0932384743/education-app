<template>
  <v-footer color="footer" dark>
    <v-container class="py-10" fluid>
      <v-row>
        <!-- 左邊公司資訊 -->
        <v-col cols="12" sm="6" md="4" class="text-left">
          <h5 class="font-weight-bold title mb-8">
            {{ $t('app.info') }}
          </h5>
          <p class="text-subtitle-2 mb-0">{{ $t('app.address1') }}</p>
          <p class="text-subtitle-2 mb-0">{{ $t('app.address2') }}</p>
          <div class="my-14" />

          <a
            class="text-subtitle-1 mb-0 white--text text-decoration-none fill-width"
            href="tel:04-23320088"
            >{{ $t('tel') }}: 04-23320088</a
          >
          <a
            class="text-subtitle-1 mb-0 white--text text-decoration-none fill-width"
            href="fax:04-23320088"
            >{{ $t('fax') }}: 04-23320066</a
          >
          <a
            class="text-subtitle-1 mb-0 white--text text-decoration-none fill-width"
            href="mailto:aeropower651@gmail.com"
            >E-mail: aeropower651@gmail.com</a
          >
          <div class="my-4" />
          <div class="d-flex" style="gap: 1rem">
            <v-icon size="30" class="social-icon">mdi-facebook</v-icon>
            <v-icon size="30" class="social-icon">mdi-twitter</v-icon>
            <v-icon size="30" class="social-icon">mdi-pinterest</v-icon>
            <v-icon size="30" class="social-icon">mdi-instagram</v-icon>
          </div>
        </v-col>

        <!-- 中間代表資訊 -->
        <v-col cols="12" sm="6" md="4" class="text-left">
          <h5 class="font-weight-bold title mb-8">{{ $t('app.info1') }}</h5>
          <p class="text-subtitle-2 mb-2 mb-md-6">{{ $t('app.info2') }}</p>
          <a
            class="text-subtitle-1 mb-2 mb-md-6 white--text text-decoration-none fill-width"
            href="tel:+44-7591-969585"
            >{{ $t('tel') }}: +44 (0) 7591-969585</a
          >
          <a
            class="text-subtitle-1 mb-2 mb-md-6 white--text text-decoration-none fill-width"
            href="mailto:aeropower.sd@gmail.com"
            >{{$t('email')}}: aeropower.sd@gmail.com</a
          >
        </v-col>

        <!-- 右邊其他資訊 -->
        <v-col cols="12" sm="4" md="2" class="text-left">
          <h5 class="font-weight-bold title mb-8">{{ $t(company.name) }}</h5>
          <nuxt-link
            v-for="url in company.children"
            :key="'footer_' + url.name"
            class="text-subtitle-1 mb-2 mb-md-6 white--text fill-width"
            :to="url.url"
            >{{ $t(url.name) }}</nuxt-link
          >
          <div class="my-8" />
          <h5 class="font-weight-bold title mb-8">{{ $t(resource.name) }}</h5>
          <nuxt-link
            v-for="url in resource.children"
            :key="'footer_' + url.name"
            class="text-subtitle-1 mb-2 mb-md-6 white--text fill-width"
            :to="url.url"
            >{{ $t(url.name) }}</nuxt-link
          >
        </v-col>
        <v-col cols="12" sm="4" md="2" class="text-left">
          <h5 class="font-weight-bold title mb-8">{{ $t(product.name) }}</h5>
          <nuxt-link
            v-for="url in product.children"
            :key="'footer_' + url.name"
            :to="url.url"
            class="text-subtitle-1 mb-2 mb-md-6 white--text fill-width"
            >{{ $t(url.name) }}</nuxt-link>
        </v-col>
      </v-row>
      <!-- 底部版權資訊 -->
      <v-row justify="center" class="mt-5">
        <p class="text-center text-subtitle-2">
          Copyright © 2024 AEROPOWER VENTILATION All Rights Reserved.
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  asyncData() {
    return {
      product: {
        name: 'product',
        url: '/product',
        children: [
          {
            name: 'hvls.fan',
            url: '/product/hvls-fan',
            children: [],
          },
          {
            name: 'evap.fan',
            url: '/product/evap-fan',
            children: [],
          },
          {
            name: 'exhaust.fan',
            url: '/product/exhaust-fan',
            children: [],
          },
          {
            name: 'air.supply.fan',
            url: '/product/air-supply-fan',
            children: [],
          },
          {
            name: 'controllers',
            url: '/product/controllers',
            children: [],
          },
          {
            name: 'accessories',
            url: '/product/accessories',
            children: [],
          },
        ],
      },
      company: {
        name: 'company',
        url: '/about-company',
        children: [
          {
            name: 'about.us',
            url: '/about-company/about-us',
            children: [],
          },
          {
            name: 'global.layout',
            url: '/about-company/global-layout',
            children: [],
          },
        ],
      },
      resource: {
        name: 'resource',
        url: '/resource',
        children: [
          {
            name: 'articles',
            url: '/resource/articles',
            children: [],
          },
          {
            name: 'downloads',
            url: '/resource/downloads',
            children: [],
          },
          {
            name: 'faqs',
            url: '/resource/faqs',
            children: [],
          },
        ],
      },
    };
  },
  data() {
    return {
      product: {
        name: 'product',
        url: '/product',
        children: [
          {
            name: 'hvls.fan',
            url: '/product/hvls-fan',
            children: [],
          },
          {
            name: 'evap.fan',
            url: '/product/evap-fan',
            children: [],
          },
          {
            name: 'exhaust.fan',
            url: '/product/exhaust-fan',
            children: [],
          },
          {
            name: 'air.supply.fan',
            url: '/product/air-supply-fan',
            children: [],
          },
          {
            name: 'controllers',
            url: '/product/controllers',
            children: [],
          },
          {
            name: 'accessories',
            url: '/product/accessories',
            children: [],
          },
        ],
      },
      company: {
        name: 'company',
        url: '/about-company',
        children: [
          {
            name: 'about.us',
            url: '/about-company/about-us',
            children: [],
          },
          {
            name: 'global.layout',
            url: '/about-company/global-layout',
            children: [],
          },
        ],
      },
      resource: {
        name: 'resource',
        url: '/resource',
        children: [
          {
            name: 'articles',
            url: '/resource/articles',
            children: [],
          },
          {
            name: 'downloads',
            url: '/resource/downloads',
            children: [],
          },
          {
            name: 'faqs',
            url: '/resource/faqs',
            children: [],
          },
        ],
      },
    };
  },
};
</script>
<style scoped lang="scss">
h5.title {
  font-size: 2.15rem;
  color: white;
  position: relative;
  padding: 10px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    right: 50%;
    bottom: 0;
    height: 3px;
    background-color: var(--v-orange-base);
    z-index: 1;
    border-radius: 0;
    opacity: 1;
  } /* 橙色線條效果 */

  &:hover::after {
    animation-name: after-slide;
    animation-duration: 500ms;
  } /* 橙色線條效果 */

  @keyframes after-slide {
    from {
      right: 100%;
    }
    to {
      right: 50%;
    }
  }
}

::v-deep .v-icon.social-icon:hover {
  color: var(--v-orange-base); /* 滑鼠移入橙色效果 */
  cursor: pointer;
  transition: color 500ms;
}
</style>
