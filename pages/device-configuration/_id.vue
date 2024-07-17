<template>
  <v-row>
    <backup-history-model :show="show" @close:show="show = false" />
    <backup-compare-model :show="compare" @close:show="compare = false" />
    <v-col :cols="12" class="d-inline-flex justify-end" style="gap: 0.6rem">
      <v-btn color="info" @click="onAdd"
        ><v-icon color="white">mdi-menu-right</v-icon> 立即執行檢查與備份</v-btn
      >
      <v-btn color="info" @click="compare = true"> 檔案比對 </v-btn>
    </v-col>
    <v-col :cols="12">
      <table-card :title="'歷史備份紀錄' + (detail?.task || '-新增')" :items="items">
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
            <template #[`item.status`]="{ item }">
              <span
                :class="
                  item.status === 'success' ? 'success--text' : 'info--text'
                "
                class="subtitle-2 d-inline-flex align-center"
              >
                <v-progress-circular
                  v-if="item.status === 'process'"
                  indeterminate
                  color="secondary"
                  :size="20"
                  :width="2"
                ></v-progress-circular>
                {{ $t(item.status) }}</span
              >
            </template>
            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn small color="info" class="px-2" @click="onView">
                  <v-icon class="white--text" size="20">mdi-eye</v-icon
                  ><span class="d-none d-sm-inline-block white--text">{{
                    $t('view')
                  }}</span>
                </v-btn>
                <v-btn
                  small
                  color="info"
                  class="px-2"
                  @click="onDownload(item)"
                >
                  <v-icon class="white--text" size="20">mdi-download</v-icon
                  ><span class="d-none d-sm-inline-block white--text">{{
                    $t('download')
                  }}</span>
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
import BackupCompareModel from '@/components/BackupCompareModel.vue';
import BackupHistoryModel from '@/components/BackupHistoryModel.vue';

export default {
  name: 'DeviceConfigurationManagementEdit',
  components: { BackupCompareModel, BackupHistoryModel },
  layout: 'admin-layout',
  data() {
    return {
      detail: null,
      items: [],
      show: false,
      compare: false,
    };
  },
  computed: {
    taskId() {
      return this.$router.currentRoute.params?.id || '';
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
        {
          text: this.$t('create.time'),
          value: 'createTime',
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
      const item = {
        id: this.items.length + 1,
        createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        status: 'process',
      };
      this.items.push(item);
      setTimeout(() => {
        item.status = 'success';
      }, 1000);
    },
    onSearch() {
      this.detail = this.$store.getters[
        'configuration/getConfigurationList'
      ].filter((item) => item.id === Number(this.taskId))[0];
    },
    onView() {
      this.show = true;
    },
    onDownload(item) {
      this.items = this.items.filter((w) => w.id !== item.id);
    },
    onDelete(item) {
      this.items = this.items.filter((w) => w.id !== item.id);
    },
  },
};
</script>
