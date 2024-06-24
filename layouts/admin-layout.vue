<template>
  <v-app id="inspire">
    <v-app-bar app color="header">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu transition="slide-y-transition" offset-y bottom left>
          <template #activator="{ on, attrs }">
            <v-btn v-bind="attrs" text v-on="on">
              <v-icon size="24">mdi-translate-variant</v-icon>
              {{ $t('language') }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              :class="{ 'info white--text': currentLocale === 'zh-tw' }"
              @click="changeLanguage('zh-tw')"
            >
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  <v-icon
                    size="22"
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
                    size="22"
                    :class="{ 'white--text': currentLocale === 'en' }"
                  >
                    mdi-earth </v-icon
                  >{{ $t('lang.en') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text> <v-icon size="24"> mdi-account </v-icon> User</v-btn>
        <v-btn text> <v-icon size="24"> mdi-logout </v-icon> Logout </v-btn>
      </v-toolbar-items>
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
            <v-list-item-title class="subtitle-2">
              <v-icon size="20"> mdi-account </v-icon>User</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2">
                <v-icon size="20"> mdi-logout </v-icon>Logout</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <side-menu :drawer.sync="drawer" />
    <v-main>
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
            <v-breadcrumbs-item
              tag="a"
              :to="item.href"
              :disabled="item.disabled"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from '~/components/SideMenu.vue'
import menus from '~/assets/json/menu.json'

export default {
  name: 'AdminLayout',
  components: { SideMenu },
  layout: 'AdminLayout',
  data() {
    return {
      drawer: false,
      items: [],
    }
  },
  head() {
    return {
      title: this.$t('app.welcome'),
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
    flatMenu() {
      const flatList = []
      function flatten(item) {
        flatList.push(item)
        if (item.children && item.children.length > 0) {
          item.children.forEach(flatten)
        }
      }
      menus.forEach(flatten)
      return flatList
    },

    vuetify() {
      return this.$vuetify
    },
  },
  watch: {
    $route(to) {
      this.items = this.flatMenu
        .filter((f) => f.url === to.path)
        .map((m) => {
          return {
            text: this.$i18n.locale === 'en' ? m.name_en : m.name,
            href: m.url,
            disabled: true,
          }
        })
    },
    currentLocale(locale) {
      this.items = this.flatMenu
        .filter((f) => f.url === this.$router.currentRoute.path)
        .map((m) => {
          return {
            text: locale === 'en' ? m.name_en : m.name,
            href: m.url,
            disabled: true,
          }
        })
    },
  },
  mounted() {
    this.items = this.flatMenu
      .filter((f) => f.url === this.$router.currentRoute.path)
      .map((m) => {
        return {
          text: m.name,
          href: m.url,
          disabled: true,
        }
      })
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>
<style lang="scss">
.aside {
  .v-list-item__icon {
    margin-right: 10px !important;
  }
  .v-list-item--link:before {
    background-color: transparent;
  }
  .v-list-group__items {
    overflow-x: hidden;
  }

  .v-list-group--active
    > .v-list-group__header
    > .v-list-group__header__append-icon
    .v-icon {
    transform: rotate(-90deg);
  }

  .v-list-group--sub-group > .v-list-item {
    padding-left: 8px !important;
  }
}
</style>
