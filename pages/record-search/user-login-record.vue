<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">查詢條件</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-form class="px-5">
          <v-row>
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
                    label="登入開始時間"
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
                    label="登入結束時間"
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
          </v-row>
        </v-form>
        <!-- 查詢按鈕 -->
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="onSearchEvents">查詢</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">使用者系統操作紀錄</span>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment/moment'
import items from '~/assets/json/user-login-record.json'

export default {
  name: 'UserLoginRecord',
  layout: 'admin-layout',
  data: () => {
    return {
      headers: [
        { text: '序號', value: 'id' },
        { text: '使用者代號', value: 'userId' },
        { text: 'IP來源', value: 'ip_address' },
        { text: '登入時間', value: 'login_time' },
        { text: '登出時間', value: 'logout_time' },
      ],
      footerProps: {
        itemsPerPageAllText: '所有',
        itemsPerPageText: '每頁筆數:',
        pageText: '第{0}-{1}項，共{2}項',
      },
      search: '',
      items,
      startDateMenu: false,
      endDateMenu: false,
      startDate: moment().startOf('week').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    }
  },
  methods: {
    onSearchEvents() {
      this.items = items.filter((item) => {
        return (
          (!this.endDate ||
            moment(item.login_time).isBefore(
              moment(this.endDate).endOf('days')
            )) &&
          (!this.startDate ||
            moment(item.login_time).isAfter(
              moment(this.startDate).startOf('days')
            ))
        )
      })
    },
  },
}
</script>
