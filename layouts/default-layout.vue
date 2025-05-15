<template>
  <v-app>
    <v-app-bar app color="header" light :height="windowSize >= 960 ? 250 : 100">
      <v-container
        fluid
        class="d-flex align-self-end py-0 align-end fill-height flex-nowrap"
      >
        <div class="pb-5 flex-grow-1 text-center">
          <v-img
            :src="windowSize >= 960 ? '/logo.png' : '/logo-mobile.png'"
            alt="Logo"
            :max-width="windowSize >= 960 ? 320 : 240"
            :height="windowSize >= 960 ? 85 : 45"
            contain
            :class="windowSize >= 960 ? 'mx-auto' : 'mr-auto'"
          />
        </div>
        <v-spacer />
        <!-- Navigation Links -->
        <div
          class="d-none d-md-flex align-end justify-space-between fill-height position-relative"
          style="margin-right: 150px"
        >
          <div
            v-for="m in menus"
            :key="'menu_' + m.name"
            class="menu-item pb-5"
          >
            <nuxt-link :to="m.url"> {{ $t(m.name) }}</nuxt-link>
          </div>
          <div style="position: absolute; right: -50px; bottom: 10px">
            <v-btn icon @click="onGoCart">
              <v-icon color="white">mdi-cart-variant</v-icon>
            </v-btn>
          </div>
          <div style="position: absolute; right: -120px; bottom: 10px">
            <v-btn icon @click="onChangeLang">
              <v-icon color="white">mdi-web</v-icon>
            </v-btn>
          </div>
        </div>
        <div
          class="d-flex d-md-none align-end justify-space-between fill-height"
          style="padding-bottom: 10px"
        >
          <v-btn icon @click="onGoCart">
            <v-icon size="30" color="white">mdi-cart-variant</v-icon>
          </v-btn>
          <v-btn icon @click="showMenu = !showMenu">
            <v-icon size="30" color="white">{{
              showMenu ? 'mdi-close' : 'mdi-menu'
            }}</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="showMenu"
      absolute
      right
      temporary
      color="#BA9545E5"
      style="
        height: 100vh;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      "
      class="pt-16 d-md-none"
    >
      <v-btn
        icon
        class="p-0"
        style="
          border: 1px solid white;
          position: absolute;
          right: 10px;
          top: 10px;
        "
        small
        @click="showMenu = false"
      >
        <v-icon size="20" color="white">mdi-close</v-icon>
      </v-btn>
      <v-list nav dense class="fill-height" style="gap: 1rem">
        <v-list-item-group
          class="d-flex flex-column mx-auto py-15"
          style="gap: 2rem"
        >
          <v-list-item
            v-for="m in menus"
            :key="'mobile_menu_' + m.name"
            class="menu-item"
          >
            <v-list-item-title :href="m.url">{{
              $t(m.name)
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item style="background: transparent !important">
            <v-list-item-title class="text-center white--text">
              <v-btn text dark>EN</v-btn> |
              <v-btn text dark>中文</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="layout">
      <Nuxt />
      <custom-footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomFooter from '../components/CustomFooter.vue';
interface MenuItem {
  name: string
  url: string
  children: MenuItem[]
}

const menus: MenuItem[] = [
  { name: 'home', url: '/', children: [] },
  { name: 'about.us', url: '/about-us', children: [] },
  { name: 'products.intro', url: '/products', children: [] },
  { name: 'catalog.download', url: '/catalog', children: [] },
  { name: 'contact.us', url: '/contact-us', children: [] },
];

@Component({
  name: 'DefaultLayout',
  components: { CustomFooter },
  layout: 'DefaultLayout',
  head() {
    return {
      title: this.$t('app.name'),
    };
  },
  asyncData() {
    return {
      menus,
    };
  },
})
export default class DefaultLayout extends Vue {
  showMenu: boolean = false;
  menus: MenuItem[] = menus;

  windowSize: number = 960;

  onGoCart() {}

  onChangeLang() {}

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
header {
  background: url('/image/header-bg.png') !important;
  background-position-x: right !important;
  background-position-y: bottom !important;
  background-size: 18% 130px !important;
  background-repeat: no-repeat !important;
  background-color: white !important;

  ::v-deep .v-toolbar__content {
    padding: 0 !important;
  }

  @media screen and (max-width: 960px) {
    background: #d8ad5e !important;
  }
}

.menu-item {
  display: flex;
  height: 100%;
  color: black;
  min-width: 100px;
  transition: background-color 0.3s ease;
  align-items: end;
  justify-content: center;

  & > a {
    color: black;
    text-decoration: none;
  }

  &:hover {
    background-color: #d8ae5e;
    color: white;

    & > a {
      color: white;
    }
  }

  @media screen and (max-width: 960px) {
    & {
      font-weight: 400;
      font-size: 14px;
      line-height: 210%;
      text-align: center;
      height: auto;

      & > * {
        font-weight: 400;
        color: white;
      }
    }
  }
}
</style>
