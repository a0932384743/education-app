<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">{{ $t('condition.search') }}</span>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-form class="px-5">
            <v-row class="my-0">
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-select
                  v-model="brand"
                  :items="brandOptions"
                  :label="$t('brand')"
                  item-text="label"
                  item-value="value"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <!-- 查詢按鈕 -->
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="onSearch">{{ $t('search') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="組態備份" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            headerProps,
          }"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
            height="500px"
          >
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.task`]="{ item }">
              <div class="d-inline-flex">
                <v-icon size="15" color="success">mdi-check-circle</v-icon> {{ item.task || '--' }}
              </div>
            </template>
            <template #[`item.checkTime`]="{ item }">
              <div class="text-center">
                {{ item.checkTime || '--' }}
              </div>
            </template>
            <template #[`item.resource`]="{ item }">
              <div>
                {{ item.resource || '--' }}
              </div>
            </template>
            <template #[`item.backupCount`]="{ item }">
              <div class="text-center">
                {{ item.backupCount ?? 0 }}
              </div>
            </template>
            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn
                  small
                  :color="'info'"
                  @click="onEdit(item)"
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
export default {
  name: 'DeviceConfigurationManagement',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
      brand: '',
    };
  },
  computed: {
    brandOptions() {
      return ['Cisco'].map((value) => {
        return {
          value,
          label: this.$t(value),
        };
      });
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('task'),
          value: 'task',
        },
        {
          text: this.$t('resource.name'),
          value: 'resource',
        },
        {
          text: this.$t('brand'),
          value: 'brand',
        },
        {
          text: this.$t('backup.count'),
          value: 'backupCount',
        },
        {
          text: this.$t('check.time'),
          value: 'checkTime',
          width: 150,
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  created() {
    this.onSearch();
  },
  methods: {
    onAdd() {
      this.$router.push('/device-configuration/0');
    },
    onEdit(item) {
      this.$router.push(`/device-configuration/${item.id}`);
    },
    onDelete(item) {
      const list = this.$store.getters[
        'configuration/getConfigurationList'
      ].filter((w) => w.id !== item.id);
      this.$store.dispatch(
        'configuration/setConfigurationList',
        list
      );
      this.onSearch();
    },
    onSearch() {
      this.items = this.$store.getters['configuration/getConfigurationList']
        .filter((item) => !this.brand || item.brand === this.brand)
        .map((item) => {
          return {
            ...item,
            editable: false,
          };
        });
    },
  },
};
</script>
