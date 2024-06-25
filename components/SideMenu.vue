<template>
  <v-navigation-drawer
    :value="drawer"
    app
    dark
    :absolute="sideMenuSettings.absolute"
    :clipped="sideMenuSettings.clipped"
    :color="sideMenuSettings.color"
    :mini-variant="sideMenuSettings.miniVariant"
    :floating="sideMenuSettings.floating"
    :bottom="sideMenuSettings.bottom"
    :permanent="sideMenuSettings.permanent"
    :width="sideMenuSettings.width"
    @input="updateDrawer"
  >
    <v-list-item
      active-class="info"
      dark
      :style="{
        height: `${vuetify.application.top}px`,
      }"
    >
      <v-list-item-content class="py-1">
        <v-img
          class="mx-auto"
          contain
          lazy-src="/logo-2.png"
          max-width="120"
          :alt="$t('app.welcome')"
          src="/logo-2.png"
        ></v-img>
      </v-list-item-content>
    </v-list-item>
    <v-list
      nav
      dense
      :color="sideMenuSettings.color"
      class="overflow-auto pb-5"
      :style="{
        height: `calc(100% - ${vuetify.application.top}px)`,
      }"
    >
      <v-list-item-group v-model="activePath" active-class="info">
        <template v-for="menu in menus">
          <v-list-group
            v-if="menu.children && menu.children.length"
            :key="JSON.stringify(menu)"
            active-class="faded-info-background"
            sub-group
          >
            <template #prependIcon>
              <v-icon size="20" class="white--text"
                >mdi-view-grid-outline</v-icon
              >
            </template>
            <template #appendIcon>
              <v-icon size="20" class="white--text">mdi-menu-left</v-icon>
            </template>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  currentLocale === 'en' ? menu.name_en : menu.name
                }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <template v-for="children1 in menu.children">
              <v-list-group
                v-if="children1.children && children1.children.length"
                :key="JSON.stringify(children1)"
                sub-group
              >
                <template #prependIcon>
                  <v-icon size="20" class="white--text"></v-icon>
                </template>
                <template #appendIcon>
                  <v-icon size="20" class="white--text">mdi-menu-left</v-icon>
                </template>
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">{{
                      currentLocale === 'en'
                        ? children1.name_en
                        : children1.name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="children2 in children1.children"
                  :key="JSON.stringify(children2)"
                  :to="children2.url"
                  :value="children2.url"
                  :link="false"
                >
                  <v-list-item-content>
                    <v-list-item-title class="white--text">{{
                      currentLocale === 'en'
                        ? children2.name_en
                        : children2.name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item
                v-else
                :key="JSON.stringify(children1)"
                :to="children1.url"
                :value="children1.url"
              >
                <v-list-item-content>
                  <v-list-item-title class="white--text">{{
                    currentLocale === 'en' ? children1.name_en : children1.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-list-item
            v-else
            :key="JSON.stringify(menu)"
            :to="menu.url"
            :value="menu.url"
          >
            <v-list-item-icon class="mr-1">
              <v-icon size="20" class="white--text"
                >mdi-view-grid-outline</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                currentLocale === 'en' ? menu.name_en : menu.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import menus from '~/assets/json/menu.json'
export default {
  name: 'SideMenu',
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activePath: '',
    }
  },
  computed: {
    sideMenuSettings() {
      return this.$store.getters['common/getSideMenuSetting']
    },
    currentLocale() {
      return this.$i18n.locale
    },
    flatMenu() {
      const flatList = []
      function flatten(item) {
        flatList.push({
          icon: item.icon,
          name: item.name,
          url: item.url,
        })
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
    menus() {
      return menus
    },
  },
  watch: {
    $route(to) {
      this.activePath = to.path
    },
  },
  mounted() {
    this.activePath = this.$router.currentRoute.path
  },
  methods: {
    updateDrawer(value) {
      this.$emit('update:drawer', value)
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
    width: 100%;
  }
}
</style>
