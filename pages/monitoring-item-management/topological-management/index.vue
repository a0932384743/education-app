<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="網路流量拓樸圖管理" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            headerProps,
            loading,
          }"
        >
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.name`]="{ item }">
              <div v-if="!item.editable">{{ item.name || '-' }}</div>
              <v-text-field
                v-else
                v-model="item.name"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.latestUpdateTime`]="{ item }">
              <div>{{ latestDate(item.latestUpdateTime) }}</div>
            </template>

            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn
                  small
                  :disabled="Object.keys(item).some((key) => item[key] === '')"
                  :color="item.editable ? 'secondary' : 'info'"
                  @click="onAdd"
                >
                  <v-icon size="20">mdi-pencil</v-icon>
                  <span class="d-none d-sm-inline-block">{{ $t('edit') }}</span>
                </v-btn>
                <v-btn
                  small
                  color="danger"
                  class="px-2"
                  @click="onDelete(item)"
                >
                  <v-icon class="white--text" size="20"
                    >mdi-trash-can-outline</v-icon
                  ><span class="d-none d-sm-inline-block white--text">{{
                    $t('delete')
                  }}</span>
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment';
export default {
  name: 'TopologicalManagement',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
    };
  },
  computed: {
    headers() {
      return [
        { text: this.$t('id'), value: 'id' },
        { text: '名稱', value: 'name' },
        { text: this.$t('creator'), value: 'creator' },
        { text: this.$t('create.time'), value: 'createTime' },
        { text: this.$t('last.update.time'), value: 'latestUpdateTime' },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  created() {
    this.onSearch();
  },
  destroyed() {
    this.$store.dispatch('topological/setTopologicalList', this.items);
  },
  methods: {
    latestDate(time) {
      if (time) {
        return `${moment().diff(moment(time) , 'days')  }天前`;
      } else {
        return '-';
      }
    },
    onSearch() {
      this.items = this.$store.getters['topological/getTopologicalList'].map(
        (item) => {
          return {
            ...item,
            editable: false,
          };
        }
      );
    },
    onAdd() {
      this.$router.push('/monitoring-item-management/topological-management/add');

     /*  this.items.push({
        id: this.items.length + 1,
        name: '',
        creator: 'admin(admin)',
        createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        latestUpdateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        editable: true,
      }); */
    },
    onDelete(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
      this.$store.dispatch('topological/setTopologicalList', this.items);
    },
  },
};
</script>
