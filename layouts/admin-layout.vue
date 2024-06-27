<template>
  <v-app id="inspire">
    <v-app-bar
      app
      :color="headerSettings.color"
      :dense="headerSettings.dense"
      :elevation="headerSettings.elevation"
      :flat="headerSettings.flat"
      :clipped-left="headerSettings.absolute"
      :outlined="headerSettings.outlined"
      :prominent="headerSettings.prominent"
      :rounded="headerSettings.rounded"
      :shaped="headerSettings.shaped"
      :fixed="headerSettings.absolute"
    >
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-autocomplete
          ref="searchEle"
          class="my-0 align-center"
          dense
          hide-details
        >
          <template #append-outer>
            <v-btn icon @click="toggleSearchInput">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-autocomplete>
        <v-btn icon @click="toggleFullScreen">
          <v-icon ref="fullscreenEle">mdi-fullscreen</v-icon>
        </v-btn>
        <v-menu
          v-if="vuetify.breakpoint.mdAndUp"
          transition="slide-y-transition"
          offset-y
          bottom
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" text v-on="on">
              <v-icon size="24">mdi-translate-variant</v-icon>
              {{ $t('language') }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="lang in ['zh-tw', 'en']"
              :key="lang"
              :class="{ 'info white--text': currentLocale === lang }"
              @click="changeLanguage(lang)"
            >
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon
                    size="22"
                    :class="{ 'white--text': currentLocale === lang }"
                  >
                    mdi-earth </v-icon
                  >{{ $t('lang.' + lang) }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          v-if="vuetify.breakpoint.mdAndUp"
          transition="slide-y-transition"
          offset-y
          bottom
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" text v-on="on">
              <v-icon size="24"> mdi-account </v-icon> User
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon size="22"> mdi-logout </v-icon> Logout
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          v-if="!vuetify.breakpoint.mdAndUp"
          min-width="150px"
          transition="slide-y-transition"
          offset-y
          bottom
          left
        >
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" class="hidden-md-and-up" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title class="subtitle-2">
                <v-icon size="20"> mdi-account </v-icon>User</v-list-item-title
              >
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-subheader> {{ $t('language') }}</v-list-subheader>
            </v-list-item>
            <v-list-item
              :class="{ 'info white--text': currentLocale === 'zh-tw' }"
              @click="changeLanguage('zh-tw')"
            >
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon
                    size="20"
                    :class="{ 'white--text': currentLocale === 'zh-tw' }"
                  >
                    mdi-earth </v-icon
                  >{{ $t('lang.zh-tw') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              :class="{ 'info white--text': currentLocale === 'en' }"
              @click="changeLanguage('en')"
            >
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon
                    size="20"
                    :class="{ 'white--text': currentLocale === 'en' }"
                  >
                    mdi-earth </v-icon
                  >{{ $t('lang.en') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon size="20"> mdi-logout </v-icon
                  >Logout</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <side-menu :drawer.sync="drawer" />
    <tool-menu :drawer.sync="toolDrawer" />
    <v-main>
      <v-btn
        class="tool-btn info lighten-2"
        icon
        fab
        small
        dark
        color="white"
        @click.stop="toolDrawer = !toolDrawer"
      >
        <v-icon dark>mdi-cog-outline</v-icon>
      </v-btn>
      <v-row
        class="mt-4 mb-2 mx-0 px-2 flex-nowrap flex-sm-row flex-column-reverse"
      >
        <h2 class="flex-grow-1">
          {{ items?.slice(-1)[0]?.text }}
        </h2>
        <v-breadcrumbs
          light
          class="justify-end py-1 flex-grow-1"
          :items="[
            {
              text: 'Home',
              href: '/',
            },
            ...items.filter((item) => item.text !== 'Home'),
          ]"
        >
          <template #item="{ item }">
            <v-breadcrumbs-item :to="item.href" :disabled="item.disabled">
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-container fluid class="pt-5">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      class="mt-8 justify-space-between"
      :app="footerSettings.absolute"
      :clipped="footerSettings.clipped"
      :color="footerSettings.color"
      :inset="footerSettings.inset"
      :outlined="footerSettings.outlined"
      :shaped="footerSettings.shaped"
      :height="footerSettings.height"
      :elevation="footerSettings.elevation"
      padless
    >
      <v-col class="text-left">
        Copyright © 2024 <a href="www.cht.com.tw">www.cht.com.tw</a> All rights
        reserved.
      </v-col>
      <v-col class="text-right">Version 2.0.0-rc</v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SideMenu from '~/components/SideMenu.vue';
import menus from '~/assets/json/menu.json';

export default {
  name: 'AdminLayout',
  components: { SideMenu },
  layout: 'AdminLayout',
  data() {
    return {
      drawer: false,
      toolDrawer: false,
      items: [],
    };
  },
  head() {
    return {
      title: this.$t('app.welcome'),
    };
  },
  computed: {
    headerSettings() {
      return this.$store.getters['common/getHeaderSetting'];
    },
    footerSettings() {
      return this.$store.getters['common/getFooterSetting'];
    },
    currentLocale() {
      return this.$i18n.locale;
    },
    flatMenu() {
      const flatList = [];
      function flatten(item) {
        flatList.push(item);
        if (item.children && item.children.length > 0) {
          item.children.forEach(flatten);
        }
      }
      menus.forEach(flatten);
      return flatList;
    },
    vuetify() {
      return this.$vuetify;
    },
  },
  watch: {
    $route(to) {
      this.items = this.flatMenu
        .filter(
          (f) =>
            f.url === to.path ||
            f.url === to.path.split('/').slice(0, 4).join('/') ||
            f.url === to.path.split('/').slice(0, 3).join('/') ||
            f.url === to.path.split('/').slice(0, 2).join('/') ||
            f.url === to.path.split('/').slice(0, 1).join('/')
        )
        .map((m) => {
          return {
            text: this.$i18n.locale === 'en' ? m.name_en : m.name,
            href: m.url,
            disabled: true,
          };
        });
    },
    currentLocale(locale) {
      this.items = this.flatMenu
        .filter((f) => f.url === this.$router.currentRoute.path)
        .map((m) => {
          return {
            text: locale === 'en' ? m.name_en : m.name,
            href: m.url,
            disabled: true,
          };
        });
    },
  },
  mounted() {
    this.items = this.flatMenu
      .filter(
        (f) =>
          f.url === this.$router.currentRoute.path ||
          f.url ===
          this.$router.currentRoute.path.split('/').slice(0, 4).join('/') ||
          f.url ===
          this.$router.currentRoute.path.split('/').slice(0, 3).join('/') ||
          f.url ===
            this.$router.currentRoute.path.split('/').slice(0, 2).join('/') ||
          f.url ===
            this.$router.currentRoute.path.split('/').slice(0, 1).join('/')
      )
      .map((m) => {
        return {
          text: m.name,
          href: m.url,
          disabled: true,
        };
      });
    this.initSearchInput();
  },
  methods: {
    initSearchInput() {
      if (this.$refs.searchEle) {
        this.$refs.searchEle.$el
          .querySelector('.v-input__control')
          .classList.add('wipe', 'in', 'd-none');
        this.$refs.searchEle.$el
          .querySelector('.v-input__append-inner')
          .classList.toggle('d-none');
      }
    },
    toggleFullScreen() {
      if (this.$refs.fullscreenEle) {
        this.$refs.fullscreenEle.$el.classList.toggle('mdi-fullscreen-exit');
      }
      const docElement = document.documentElement;
      if (!document.fullscreenElement) {
        if (docElement.requestFullscreen) {
          docElement.requestFullscreen();
        } else if (docElement.webkitRequestFullscreen) {
          /* Safari */
          docElement.webkitRequestFullscreen();
        } else if (docElement.msRequestFullscreen) {
          /* IE11 */
          docElement.msRequestFullscreen();
        }
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    },
    toggleSearchInput() {
      if (this.$refs.searchEle) {
        this.$refs.searchEle.$el
          .querySelector('.v-input__control')
          .classList.remove('d-none');

        this.$refs.searchEle.$el
          .querySelector('.v-input__control')
          .classList.toggle('in');

        this.$refs.searchEle.$el
          .querySelector('.v-input__append-inner')
          .classList.toggle('d-none');
      }
    },
    changeLanguage(lang) {
      this.$i18n.setLocale(lang);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style lang="scss">
@keyframes wipeOut {
  from {
    width: 0px;
  }
  to {
    width: 180px;
  }
}

.wipe {
  animation: wipeOut 0.2s ease-in-out forwards;
}

@keyframes wipeIn {
  from {
    width: 180px;
  }
  to {
    width: 0px;
  }
}

.wipe.in {
  animation: wipeIn 0.2s ease-in-out forwards;
}

.wipe.w-0 {
  width: 0px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.tool-btn {
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 999;

  .v-icon {
    animation: rotate 2s linear infinite;
  }
}
</style>
