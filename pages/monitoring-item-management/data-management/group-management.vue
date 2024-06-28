<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text class="d-inline-flex align-center" style="gap: 1rem">
          <v-select
            v-model="selectedRole"
            class="d-inline-block flex-grow-0"
            :items="roles"
            item-text="name"
            item-value="id"
            :label="$t('select.group')"
          ></v-select>
          <v-btn color="primary" @click="savePermissions">{{
            $t('save')
          }}</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title class="info white--text flex-nowrap">
          <span class="font-weight-bold text-truncate">{{
            $t('群組授權設定')
          }}</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <div class="d-flex">
            <v-text-field
              v-model="searchMenu"
              :label="$t('search')"
              append-icon="mdi-magnify"
            ></v-text-field>
          </div>
          <v-treeview
            v-model="selectedMenus"
            :items="menus"
            :search="searchMenu"
            selection-type="leaf"
            selectable
            return-object
            open-all
            selected-color="info"
            :item-text="currentLocale === 'en' ? 'name_en' : 'name'"
          >
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import menus from '~/assets/json/menu.json';

export default {
  name: 'GroupManagement',
  layout: 'admin-layout',
  data() {
    return {
      selectedMenus: [],
      selectedRole: '',
      searchMenu: '',
      roles: [
        { id: 1, name: '系統管理者' },
        { id: 2, name: 'Admin' },
        { id: 3, name: '訪客' },
      ],
    };
  },
  computed: {
    menus() {
      return menus;
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
  updated() {
    console.log(this.selectedMenus);
  },

  methods: {
    savePermissions() {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        this.$snackbar.info('儲存成功');
      } else {
        this.$snackbar.alert('儲存失敗');
      }
    },
  },
};
</script>
