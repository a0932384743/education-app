<template>
  <grid-layout
    :layout.sync="dashboardList"
    :col-num="12"
    :row-num="6"
    :row-height="250"
    is-draggable
    is-resizable
    vertical-compact
    :use-css-transforms="true"
    :responsive="true"
    @layout-updated="onLayoutUpdated"
  >
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[0].x"
      :y="dashboardList[0].y"
      :w="dashboardList[0].w"
      :h="dashboardList[0].h"
      :i="dashboardList[0].i"
    >
      <map-card
        title="TWAREN 400G骨幹網路即時監控狀態圖"
        :links="links"
        :nodes="nodes"
        :center="[121, 24.033]"
        :map="'taiwanGEO'"
      />
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[1].x"
      :y="dashboardList[1].y"
      :w="dashboardList[1].w"
      :h="dashboardList[1].h"
      :i="dashboardList[1].i"
    >
      <bar-chart-card
        title="未結案比例統計圖表"
        :items="events"
        :legends-props="{
          show: false,
        }"
        :x-axis="eventsCategory"
      >
        <template>
          <div class="subtitle-2">依據事件告警嚴重等級統計</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[2].x"
      :y="dashboardList[2].y"
      :w="dashboardList[2].w"
      :h="dashboardList[2].h"
      :i="dashboardList[2].i"
    >
      <bar-chart-card
        title="設備存活狀態統計圖表"
        :items="cpus"
        :x-axis="cpus[0].category"
        :series-props="{
          stack: 'Total',
        }"
      >
        <template>
          <div class="subtitle-2">TWAREN設備存活狀態比較圖</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[5].x"
      :y="dashboardList[5].y"
      :w="dashboardList[5].w"
      :h="dashboardList[5].h"
      :i="dashboardList[5].i"
    >
      <bar-chart-card
        title="未結案比例統計圖表"
        :items="events"
        :legends-props="{
          show: false,
        }"
        :x-axis="eventsCategory"
      >
        <template>
          <div class="subtitle-2">依據事件告警嚴重等級統計</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[6].x"
      :y="dashboardList[6].y"
      :w="dashboardList[6].w"
      :h="dashboardList[6].h"
      :i="dashboardList[6].i"
    >
      <bar-chart-card
        title="設備存活狀態統計圖表"
        :items="cpus"
        :x-axis="cpus[0].category"
        :series-props="{
          stack: 'Total',
        }"
      >
        <template>
          <div class="subtitle-2">TWAREN設備存活狀態比較圖</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[3].x"
      :y="dashboardList[3].y"
      :w="dashboardList[3].w"
      :h="dashboardList[3].h"
      :i="dashboardList[3].i"
    >
      <chart-card title="至今尚未關閉事件">
        <div class="overflow-auto fill-height">
          <v-data-table
            :headers="eventsNotCloseListHeader"
            :items="eventsNotCloseList"
            fixed-header
            hide-default-footer
          >
            <template #[`header.equipment`]="{ header }">
              <div class="d-inline-block text-center">
                {{ header.text }}/Unit
              </div>
            </template>
            <template #item="{ item }">
              <tr
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                <td>{{ item.id }}</td>
                <td nowrap="nowrap">{{ item.event }}</td>
                <td nowrap="nowrap">{{ item.category }}</td>
                <td><v-icon :color="item.level">mdi-alert</v-icon></td>
                <td nowrap="nowrap">{{ item.startTime }}</td>
                <td nowrap="nowrap">{{ item.endTime }}</td>
                <td>{{ item?.equipment || '-' }}</td>
                <td>{{ item.desc }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[4].x"
      :y="dashboardList[4].y"
      :w="dashboardList[4].w"
      :h="dashboardList[4].h"
      :i="dashboardList[4].i"
    >
      <chart-card title="外部監控事件報警列表">
        <div class="overflow-auto fill-height">
          <v-data-table
            :headers="eventsAlertListHeader"
            :items="eventsAlertList"
            fixed-header
            hide-default-footer
          >
            <template #item="{ item }">
              <tr
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                <td>{{ item.id }}</td>
                <td nowrap="nowrap">{{ item.event }}</td>
                <td nowrap="nowrap">{{ item.category }}</td>
                <td><v-icon :color="item.level">mdi-alert</v-icon></td>
                <td nowrap="nowrap">{{ item.startTime }}</td>
                <td>{{ item?.equipment || '-' }}</td>
                <td>{{ item.desc }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </chart-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import eventsNotCloseList from '~/assets/json/event-not-close.json'
import eventsAlertList from '~/assets/json/event-alert.json'

import events from '~/assets/json/device-event.json'
import cpus from '~/assets/json/device-cpu-stastic.json'
import BarChartCard from '~/components/BarCahrtCard.vue'
import ChartCard from '~/components/ChartCard.vue'
import MapCard from '~/components/MapCard.vue'
import { statusMap } from '~/utils/statusMap'

export default {
  name: 'Dashboard',
  components: { ChartCard, BarChartCard, MapCard },
  layout: 'admin-layout',
  data() {
    return {
      nodes: [
        { name: '台北市', value: [121.5654, 25.033, 50], status: 'normal' },
        { name: '台中市', value: [120.6736, 24.1477, 50], status: 'normal' },
        { name: '台南市', value: [120.2049, 22.9999, 60], status: 'abnormal' },
        { name: '高雄市', value: [120.666, 23.0109, 50], status: 'normal' },
      ],
      links: [
        { source: '台北市', target: '台中市', value: 50 },
        { source: '台北市', target: '台南市', value: 50, status: 'normal' },
        { source: '台中市', target: '台南市', value: 50, status: 'normal' },
        { source: '台南市', target: '高雄市', value: 50, status: 'normal' },
      ],
      eventsNotCloseList,
      eventsAlertList,
      cpus,
      dashboardList: [
        {
          name: 'TWAREN 400G骨幹網路即時監控狀態圖',
          i: 1,
          w: 4,
          h: 2,
          x: 0,
          y: 0,
          moved: false,
        },
        {
          name: '未結案事件比例圖',
          i: 2,
          w: 4,
          h: 1,
          x: 4,
          y: 0,
          moved: false,
        },
        {
          name: '未結案事件比例圖',
          i: 3,
          w: 4,
          h: 1,
          x: 8,
          y: 0,
          moved: false,
        },
        {
          name: '至今尚未關閉事件',
          i: 4,
          w: 12,
          h: 1,
          x: 0,
          y: 5,
          moved: false,
        },
        {
          name: '外部監控事件報警列表',
          i: 5,
          w: 12,
          h: 1,
          x: 0,
          y: 7,
          moved: false,
        },

        {
          name: '設備存活狀態統計圖',
          i: 6,
          w: 4,
          h: 1,
          x: 4,
          y: 1,
          moved: false,
        },
        {
          name: '設備存活狀態統計圖',
          i: 7,
          w: 4,
          h: 1,
          x: 8,
          y: 1,
          moved: false,
        },
      ],
    }
  },
  computed: {
    eventsCategory() {
      return events.map((item) => item.name)
    },
    events() {
      return [
        {
          name: 'data',
          data: events.map((item) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ][statusMap[item.type]],
            },
          })),
        },
      ]
    },
    eventsNotCloseListHeader() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('event.number'),
          value: 'event',
        },
        {
          text: this.$t('event.category'),
          value: 'category',
        },
        {
          text: this.$t('level'),
          value: 'level',
        },
        {
          text: this.$t('event.start.time'),
          value: 'startTime',
        },
        {
          text: this.$t('event.end.time'),
          value: 'endTime',
        },
        {
          text: this.$t('interface.equipment'),
          value: 'equipment',
        },
        {
          text: this.$t('event.description'),
          value: 'desc',
        },
      ]
    },
    eventsAlertListHeader() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('event.number'),
          value: 'event',
        },
        {
          text: this.$t('event.category'),
          value: 'category',
        },
        {
          text: this.$t('level'),
          value: 'level',
        },
        {
          text: this.$t('event.start.time'),
          value: 'startTime',
        },
        {
          text: this.$t('alert.equipment'),
          value: 'equipment',
        },
        {
          text: this.$t('event.description'),
          value: 'desc',
        },
      ]
    },
  },
  methods: {
    onLayoutUpdated(list) {
      this.dashboardList = list
    },
  },
}
</script>
