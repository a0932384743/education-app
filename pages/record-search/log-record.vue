<template>
  <v-row>
    <v-col :cols="12">
      <chart-card title="日誌查詢-事件趨勢">
        <div class="d-flex flex-wrap align-center" style="gap: 0.5rem">
          <v-text-field
            v-model="keyword"
            color="info"
            label="過濾條件"
            hide-details
          ></v-text-field>
          <v-menu
            ref="startTimeMenu"
            v-model="startTimeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="startTime"
                color="info"
                :label="$t('start.time')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                hide-details
                v-on="on"
              ></v-text-field>
            </template>
            <div class="flex-column d-inline-flex w-100">
              <v-time-picker
                v-model="startTime"
                color="info"
                use-seconds
                :max="endTime"
              ></v-time-picker>
            </div>
          </v-menu>
          <v-menu
            ref="endTimeMenu"
            v-model="endTimeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="endTime"
                color="info"
                :label="$t('end.time')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                hide-details
                v-on="on"
              ></v-text-field>
            </template>
            <div class="flex-column d-inline-flex w-100">
              <v-time-picker
                v-model="endTime"
                color="info"
                use-seconds
                :min="startTime"
              ></v-time-picker>
            </div>
          </v-menu>
          <v-select
            v-model="category"
            color="info"
            :items="categories"
            hide-details
            label="類型"
          ></v-select>
          <v-btn color="blue darken-4" dark @click.stop="onSearch">{{ $t('search') }}</v-btn>
        </div>

        <v-chart
          :options="options"
          class="mx-auto"
          style="width: 100%; height: 300px"
          autoresize
        />
      </chart-card>
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
            :item-class="setRowClass"
            hide-default-footer
          >
            <template #[`item.operate`]>
              <v-btn color="info" small dark>
                <v-icon>mdi-list-box-outline</v-icon>
                <span class="d-none d-sm-inline-block white--text">詳細資料</span>
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment/moment';
import { colorBrightness } from '@/utils/color';
import items from '@/assets/json/event-log.json';
const category = [
  'System Log(預設)',
  '設備SNMP Trap',
  'OS event log',
  'web log',
  'AP log',
  '網管系統操作紀錄',
  '網管系統登入紀錄',
];
const time = Array.from(new Array(30), (_, index) =>
  moment()
    .hour(19)
    .minute(30)
    .second(index * 10)
    .format('HH:mm:ss')
);

const datas = [
  {
    category: category.join(','),
    name: 'unknown 0',
    time,
    color: 'secondary',
    data: Array.from(new Array(30), (_) => Math.round(Math.random() * 5)),
  },
  {
    category: category.join(','),
    name: 'debug/info',
    time,
    color: 'info',
    data: Array.from(new Array(30), (_) => Math.round(Math.random() * 10)),
  },
  {
    category: category.join(','),
    name: 'notice/warning',
    time,
    color: 'warning',
    data: Array.from(new Array(30), (_) => Math.round(Math.random() * 100)),
  },
  {
    category: category.join(','),
    name: 'error',
    time,
    color: 'primary',
    data: Array.from(new Array(30), (_) => Math.round(Math.random() * 5)),
  },
  {
    category: category.join(','),
    name: 'critical/alert/emergency',
    time,
    color: 'danger',
    data: Array.from(new Array(30), (_) => Math.round(Math.random() * 100)),
  },
];

export default {
  name: 'AbnormalEventRecord',
  layout: 'admin-layout',
  data() {
    return {
      startTime: time[0],
      startTimeMenu: false,
      endTimeMenu: false,
      endTime: time.slice(-1)[0],
      categories: category,
      category,
      keyword: '',
      datas: [],
      items,
    };
  },
  computed: {
    options() {
      return {
        grid: {
          bottom: '20%',
          right: '5%',
          left: '5%',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          show: true,
          name: '時間',
          type: 'category',
          align: 'center',
          position: 'bottom',
          data: this.datas[0]?.time || time,
          axisLabel: {
            color: this.$vuetify.theme.isDark ? '#fff' : '#aaa'
          },
        },
        yAxis: {
          name: '筆數',
          type: 'value',
          position: 'left',
          axisLabel: {
            color: this.$vuetify.theme.isDark ? '#fff' : '#aaa'
          },
        },
        legend: {
          show: true,
          bottom: 0,
          textStyle: {
            color: this.$vuetify.theme.isDark ? '#fff' : '#aaa'
          },
        },
        series: this.datas.map((s) => {
          return {
            ...s,
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              color: colorBrightness(
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ][s.color],
                1
              ),
            },
          };
        }),
      };
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: '日誌接收時間',
          value: 'createTime',
        },
        {
          text: 'host',
          value: 'host',
        },
        {
          text: this.$t('level'),
          value: 'level',
        },
        {
          text: this.$t('message'),
          value: 'message',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
  mounted() {
    this.onSearch();
  },
  methods: {
    onSearch() {
      const startIndex = time.findIndex((t) =>
        moment(`2020-01-01 ${t}`).isAfter(
          moment(`2020-01-01 ${this.startTime}`)
        )
      );
      const endIndex = time.reduceRight(
        (acc, t, index) =>
          acc === -1 &&
          moment(`2020-01-01 ${t}`).isBefore(
            moment(`2020-01-01 ${this.endTime}`)
          )
            ? index
            : acc,
        -1
      );
      console.log(endIndex, time);
      this.datas = datas.map((d) => {
        return {
          ...d,
          time: d.time.slice(startIndex, endIndex),
          data: d.data.slice(startIndex, endIndex),
          name: `${d.name} ${d.data
            .slice(startIndex, endIndex)
            .reduce((sum, v) => sum + v, 0)}`,
        };
      });
    },
  },
};
</script>
