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
              <!-- 查詢日期 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-menu
                  ref="startDateMenu"
                  v-model="startDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="startDate"
                      :label="$t('start.time')"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="startDate"
                    @input="startDateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-menu
                  ref="endDateMenu"
                  v-model="endDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate"
                      :label="$t('end.time')"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    @input="endDateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <!-- 嚴重等級 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-select
                  v-model="status"
                  :items="statusOptions"
                  :label="$t('status')"
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
      <table-card title="日誌記錄" :items="items">
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
                <v-btn small color="success" @click="goToWorkOrderAdd">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.source`]="{ item }">
              <v-chip color="secondary" label outlined>
                {{ $t('event') }} : {{ item.source }}
              </v-chip>
            </template>
            <template #[`item.desc`]="{ item }">
              <div v-if="!item.editable">{{ item.desc }}</div>
              <v-text-field
                v-else
                v-model="item.desc"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.resource`]="{ item }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div class="text-no-wrap">{{ $t(item.resource) }}</div>
                <v-btn icon color="black" small>
                  <v-icon size="15">mdi-dots-vertical</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.status`]="{ item }">
              <div
                class="d-inline-flex align-center"
                :class="
                  item.status === 'done' ? 'success--text' : 'warning--text'
                "
                style="gap: 0.5rem"
              >
                <v-icon :color="item.status === 'done' ? 'success' : 'warning'">
                  {{ item.status === 'done' ? 'mdi--check' : 'mdi-alert' }}
                </v-icon>
                <div class="text-no-wrap">{{ $t(item.status) }}</div>
              </div>
            </template>
            <template #[`item.process`]="{ item }">
              <div
                class="d-inline-flex align-center"
                :class="
                  item.status === 'done' ? 'success--text' : 'warning--text'
                "
                style="gap: 0.5rem"
              >
                <div>{{ $t(item.process) }}</div>
              </div>
            </template>
            <template #[`item.createTime`]="{ item }">
              <span class="text-center d-inline-block">{{
                item.createTime || '--'
              }}</span>
            </template>
            <template #[`item.closeTime`]="{ item }">
              <span class="text-center d-inline-block">{{
                item.closeTime || '--'
              }}</span>
            </template>
            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn
                  small
                  :color="item.editable ? 'secondary' : 'info'"
                  @click="item.editable = !item.editable"
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
  name: 'WorkOrderManagement',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
      startDateMenu: false,
      endDateMenu: false,
      isEventEnded: false,
      status: '',
      startDate: moment('2024-06-01').format('YYYY-MM-DD'),
      endDate: moment('2024-06-30').format('YYYY-MM-DD'),
    };
  },
  computed: {
    workId() {
      return this.$router.currentRoute.params?.id || '';
    },
    statusOptions() {
      return ['process', 'done'].map((value) => {
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
          text: this.$t('work.id'),
          value: 'workId',
        },
        {
          text: this.$t('resource.name'),
          value: 'resource',
        },
        {
          text: this.$t('work.desc'),
          value: 'desc',
        },
        {
          text: this.$t('work.source'),
          value: 'source',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
        {
          text: this.$t('assigned'),
          value: 'assign',
        },
        {
          text: this.$t('work.process'),
          value: 'process',
          width: 300,
        },
        {
          text: this.$t('creator'),
          value: 'creator',
          width: 100,
        },
        {
          text: this.$t('create.time'),
          value: 'createTime',
          width: 150,
        },
        {
          text: this.$t('close.time'),
          value: 'closeTime',
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
    goToWorkOrderAdd() {
      this.$router.push('/work-order-management/add/0');
    },
    onDelete(item) {
      const list = this.$store.getters['work/getWorkList'].filter(
        (w) => w.id !== item.id
      );
      this.$store.dispatch('work/setWorkList', list);
      this.onSearch();
    },
    onSearch() {
      this.items = this.$store.getters['work/getWorkList']
        .filter((item) => !this.workId || item.workId === Number(this.workId))
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
