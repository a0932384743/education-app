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
      <v-list-item-content class="py-1 d-inline-flex w-100 align-center flex-nowrap" style="gap:1rem;">
        <v-img
          class="mx-auto"
          contain
          :max-width="
            currentPath.includes('/dashboard-edu')
              ? '50'
              : '120'
          "
          :alt="$t('app.welcome')"
          :src="
            currentPath.includes('/dashboard-edu')
              ? '/logo-3.png'
              : '/logo-2.png'
          "
        ></v-img>
        <h3
          v-if="currentPath.includes('/dashboard-edu')"
          style="color: inherit !important"
        >
          {{ $t('app.welcome') }}
        </h3>
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
      <v-list-item-group active-class="info">
        <side-menu-group v-for="menu in menus" :key="menu.id" :menu="menu" />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import menus from '~/assets/json/menu.json';
import SideMenuGroup from '~/components/SideMenuGroup.vue';
export default {
  name: 'SideMenu',
  components: { SideMenuGroup },
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    currentPath() {
      return this.$router.currentRoute.path;
    },
    sideMenuSettings() {
      return this.$store.getters['common/getSideMenuSetting'];
    },
    vuetify() {
      return this.$vuetify;
    },
    menus() {
      return menus;
    },
  },
  methods: {
    updateDrawer(value) {
      this.$emit('update:drawer', value);
    },
  },
};
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
