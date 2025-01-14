<template>
  <v-app>
    <!-- Start of HubSpot Embed Code -->
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48892397.js"></script>
    <!-- End of HubSpot Embed Code -->
    <v-system-bar app color="black" dark height="50" style="z-index: 100">
      <v-spacer></v-spacer>
      <v-btn icon><v-icon dark color="white">mdi-account</v-icon></v-btn>
      <v-divider
        vertical
        color="white"
        class="my-auto mx-2"
        style="min-height: 60%; height: 60%; max-height: 60%"
      />
      <v-btn icon><v-icon dark color="white">mdi-cart-outline</v-icon></v-btn>
      <v-btn
        small
        color="grey darken-2"
        class="d-lg-none mx-2 rounded-0"
        @click="changeLanguage"
        >{{ currentLocale }}</v-btn
      >
    </v-system-bar>
    <v-app-bar app color="header" dark height="80">
      <v-container ref="header" fluid>
        <div class="d-flex align-center">
          <!-- Logo Section -->
          <v-img
            :src="currentLocale === 'ENGLISH' ? 'logo-zh.svg' : 'logo-en.svg'"
            alt="Logo"
            max-width="350px"
            min-width="250px"
            contain
          />
          <v-spacer />
          <!-- Navigation Links -->
          <div class="d-none d-md-flex align-center justify-space-between px-5">
            <template v-for="m in menus">
              <v-btn
                v-if="m.children.length === 0"
                :key="'lg_' + m.name"
                text
                color="white"
                :to="m.url"
                class="menu-item text-uppercase"
                ><span class="text-lg-h6 text-subtitle-1 font-weight-bold">{{ $t(m.name) }}</span></v-btn
              >
              <v-menu
                v-else
                :key="'lg_' + m.name"
                bottom
                content-class="pt-5 bg-none"
                rounded="0"
                offset-y
                transition="slide-y-transition"
                open-on-hover
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    text
                    color="white"
                    v-bind="attrs"
                    class="menu-item"
                    v-on="on"
                  ><span class="text-lg-h6 text-subtitle-1 font-weight-bold">{{ $t(m.name) }}</span></v-btn
                  >
                </template>
                <v-list class="rounded-0" color="indigo darken-3">
                  <v-list-item
                    v-for="c in m.children"
                    :key="'lg_c' + m.name + '_' + c.name"
                    color="white"
                    class="menu-item py-2"
                    link
                    :to="c.url"
                  >
                    <v-list-item-title
                      class="text-lg-h6 text-subtitle-1 text-uppercase"
                      >{{ $t(c.name) }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </div>
          <v-btn icon class="d-md-none" @click="showMenu = !showMenu">
            <v-expand-transition mode="in-out">
              <v-icon light color="black">{{ showMenu ? 'mdi-close' : 'mdi-menu'}}</v-icon>
            </v-expand-transition>
          </v-btn>
          <v-btn
            text
            color="white"
            class="lang-btn d-none d-lg-inline-block"
            style="margin-right: -28px"
            @click="changeLanguage"
            >{{ currentLocale }}</v-btn
          >
        </div>
      </v-container>
      <v-expand-transition>
        <v-list
          v-if="showMenu"
          light
          elevation="0"
          class="shadow-bottom rounded-0 d-md-none"
          :style="{
            top: $refs.header.clientHeight - 20 + 'px',
          }"
          style="width: 100%; position: absolute; left: 0"
        >
          <template v-for="m in menus">
            <v-list-item
              v-if="m.children.length === 0"
              :key="'mb_' + m.name"
              class="sub-menu"
              color="black"
            >
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-uppercase">{{
                $t(m.name)
              }}</v-list-item-title>
            </v-list-item>
            <v-list-group
              v-else
              :key="'mb_' + m.name"
              v-model="m.active"
              prepend-icon="mdi-home"
              color="black"
              no-action
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title class="text-uppercase">{{
                    $t(m.name)
                  }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="c in m.children"
                :key="'mb_' + m.name + '_' + c.name"
                color="black"
                class="sub-menu"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-uppercase">{{
                    $t(c.name)
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-expand-transition>
    </v-app-bar>
    <v-main class="layout">
      <Nuxt />
      <custom-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  layout: 'DefaultLayout',
  asyncData() {
    return {
      menus: [
        {
          name: 'home',
          url: '/',
          children: [],
        },
        {
          name: 'about.company',
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
        {
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
        {
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
        {
          name: 'contact.us',
          url: '/contact-us',
          children: [],
        },
      ],
    };
  },
  data() {
    return {
      showMenu: false,
      menus: [
        {
          name: 'home',
          url: '/',
          children: [],
        },
        {
          name: 'about.company',
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
        {
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
        {
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
        {
          name: 'contact.us',
          url: '/contact-us',
          children: [],
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t('app.name'),
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale === 'en' ? '繁體中文' : 'ENGLISH';
    },
  },
  methods: {
    changeLanguage() {
      this.$i18n.setLocale(this.$i18n.locale === 'en' ? 'zh-tw' : 'en');
    },
  },
};
</script>
<style scoped lang="scss">
::v-deep .v-btn.menu-item {
  background-color: transparent;
  color: transparent;

  & .v-btn__content {
    font-weight: bold;
    color: black !important;
    transition: color 500ms;
  }

  &.v-btn--active .v-btn__content {
    color: var(--v-orange-base) !important;
  }

  &:hover {
    background-color: transparent;
    color: transparent;
    & > .v-btn__content {
      color: var(--v-orange-base) !important;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: auto;
      right: 3px;
      bottom: 0;
      height: 8px;
      background-color: var(--v-cyan-darken3);
      transform: skew(-25deg);
      z-index: 1;
      border-radius: 0;
      opacity: 1;
      animation-name: after-slide;
      animation-duration: 500ms;
    }

    @keyframes after-slide {
      from {
        right: 100%;
      }
      to {
        right: 3px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 3px;
      top: auto;
      right: 0;
      bottom: -12px;
      height: 16px;
      background-color: var(--v-blue-base);
      transform: skew(-25deg);
      z-index: 2;
      border-radius: 0;
      opacity: 1;
      animation-name: before-slide;
      animation-duration: 500ms;
    }

    @keyframes before-slide {
      from {
        left: 100%;
      }
      to {
        left: 3px;
      }
    }
  }
}

::v-deep .v-list-item.menu-item {
  font-weight: bold !important;
  color: white !important;
  min-height: 10px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

::v-deep .v-list-item.sub-menu {
  & .v-list-item__title {
    position: relative;
    flex: 0 0 auto;
    transition: color 500ms;
    padding: 5px 0;
  }

  &:hover .v-list-item__title {
    color: var(--) !important;
  }

  &:hover .v-list-item__title::after {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: var(--v-orange-base);
    z-index: 1;
    border-radius: 0;
    opacity: 1;
    animation-name: after-slide;
    animation-duration: 500ms;
  }
  @keyframes after-slide {
    from {
      right: 100%;
    }
    to {
      right: 0;
    }
  }
}

::v-deep .v-btn.lang-btn {
  border-radius: 0 !important;
  background-color: var(--v-blue-base);
  height: auto;
  padding: 5px 20px 5px 35px;
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 25% -55%, 5% 0%);
}

.shadow-bottom {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2) !important;
}

.v-app-bar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 10%); /* 使用 0.1 來表示 10% 的透明度 */
  position: fixed;
  top: 0;
  z-index: 1000;
}

.bg-none {
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>
