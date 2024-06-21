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
            <!-- 事件類別 -->
            <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
              <v-select
                v-model="category"
                :items="categories"
                label="事件類別"
              ></v-select>
            </v-col>
            <!-- 嚴重等級 -->
            <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
              <v-select
                v-model="level"
                :items="levels"
                label="嚴重等級"
              ></v-select>
            </v-col>
            <!-- 事件是否結束 -->
            <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
              <v-switch
                v-model="isEventEnded"
                label="事件是否結束"
                class="mt-0"
              ></v-switch>
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
          <span class="font-weight-bold">異常事件紀錄</span>
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
import items from '~/assets/json/abnormal-event.json'

export default {
  name: 'AbnormalEventRecord',
  layout: 'admin-layout',
  data: () => {
    return {
      headers: [
        {
          text: '編號',
          value: 'id',
        },
        {
          text: '事件編號',
          value: 'eventId',
        },
        {
          text: '事件類別',
          value: 'category',
        },
        {
          text: '等級',
          value: 'level',
        },
        {
          text: '事件開始時間',
          value: 'startTime',
        },
        {
          text: '事件結束時間',
          value: 'endTime',
        },
        {
          text: '事件持續時間',
          value: 'duration',
        },
        {
          text: '界接設備/單位',
          value: 'device',
        },
        {
          text: '描述',
          value: 'desc',
        },
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
      isEventEnded: false,
      level: '',
      category: '',
      categories: ['Network', 'Server', 'Database', 'Application', 'Power'],
      levels: ['Critical', 'High', 'Medium', 'Low'],
      startDate: moment().startOf('week').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    }
  },
  mounted() {
    this.items = items
  },
  methods: {
    onSearchEvents() {
      this.items = items.filter((item) => {
        return (
          (!this.endDate ||
            moment(item.endTime).isBefore(
              moment(this.endDate).endOf('days')
            )) &&
          (!this.startDate ||
            moment(item.startTime).isAfter(
              moment(this.startDate).startOf('days')
            )) &&
          (!this.category || item.category === this.category) &&
          (!this.level || item.level === this.level)
        )
      })
    },
  },
}
</script>
