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
                      label="開始時間"
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
                      label="結束時間"
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
              <!-- 使用者代碼 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-select
                  v-model="category"
                  :items="categories"
                  label="使用者代碼"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <!-- 查詢按鈕 -->
        <v-card-actions class="justify-end">
          <v-btn color="blue darken-4" dark @click="onSearchEvents">查詢</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="使用者系統操作紀錄" :items="items">
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
          />
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment/moment';
import items from '~/assets/json/user-system-operation-record.json';

export default {
  name: 'UserSystemOperationRecord',
  layout: 'admin-layout',
  data: () => {
    return {
      headers: [
        {
          text: '編號',
          value: 'id',
          width: 80,
        },
        {
          text: '使用者代號',
          value: 'userId',
        },
        {
          text: '操作功能名稱',
          value: 'action',
        },
        {
          text: '操作行為',
          value: 'details',
        },
        {
          text: '操作時間',
          value: 'timestamp',
        },
      ],
      items,
      startDateMenu: false,
      endDateMenu: false,
      category: '',
      categories: [
        'user_001',
        'user_002',
        'user_003',
        'user_004',
        'user_005',
        'user_006',
        'user_007',
        'user_008',
        'user_009',
        'user_010',
        'user_011',
        'user_012',
        'user_013',
        'user_014',
        'user_015',
        'user_016',
        'user_017',
        'user_018',
        'user_019',
        'user_020',
      ],
      startDate: moment().startOf('week').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };
  },
  methods: {
    onSearchEvents() {
      this.items = items.filter((item) => {
        return (
          (!this.endDate ||
            moment(item.timestamp).isBefore(
              moment(this.endDate).endOf('days')
            )) &&
          (!this.startDate ||
            moment(item.timestamp).isAfter(
              moment(this.startDate).startOf('days')
            )) &&
          (!this.category || item.userId === this.category)
        );
      });
    },
  },
};
</script>
