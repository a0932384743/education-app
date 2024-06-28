<template>
  <v-list-group
    v-if="menu?.children && menu.children.length"
    :key="menu.id"
    active-class="faded-info-background"
    :value.sync="active"
    sub-group
  >
    <template #prependIcon>
      <v-icon v-if="!isSubMenu" size="20" class="white--text">mdi-view-grid-outline</v-icon>
      <v-icon v-else size="20" class="white--text">mdi-blank</v-icon>
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
    <side-menu-group
      v-for="children in menu.children"
      :key="children.id"
      :menu="children"
      is-sub-menu
    />
  </v-list-group>
  <v-list-item v-else :key="menu.id" :to="menu.url">
    <v-list-item-icon v-if="!isSubMenu" class="mr-1">
      <v-icon size="20" class="white--text">mdi-view-grid-outline</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title class="white--text">{{
        currentLocale === 'en' ? menu.name_en : menu.name
      }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: 'SideMenuGroup',
  props: {
    menu: {
      type: Object,
      required: true,
    },
    isSubMenu:{
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      active: '',
    };
  },
  computed: {
    sideMenuSettings() {
      return this.$store.getters['common/getSideMenuSetting'];
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.active = this.$router.currentRoute.path.includes(this.menu.url);
  },
};
</script>
