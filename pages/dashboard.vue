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
            :item-class="setRowClass"
          >
            <template #[`header.equipment`]="{ header }">
              <div class="d-inline-block text-center">
                {{ header.text }}/Unit
              </div>
            </template>
            <template #[`item.id`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item.id }}
              </td>
            </template>
            <template #[`item.event`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.event }}
              </td>
            </template>
            <template #[`item.category`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.category }}
              </td>
            </template>
            <template #[`item.level`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                <v-icon :color="item.level">mdi-alert</v-icon>
              </td>
            </template>
            <template #[`item.startTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.startTime }}
              </td>
            </template>
            <template #[`item.endTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.endTime }}
              </td>
            </template>
            <template #[`item.equipment`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.equipment || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.desc || '-' }}
              </td>
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
            :item-class="setRowClass"
          >
            <template #[`item.id`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item.id }}
              </td>
            </template>
            <template #[`item.event`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.event }}
              </td>
            </template>
            <template #[`item.category`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.category }}
              </td>
            </template>
            <template #[`item.level`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                <v-icon :color="item.level">mdi-alert</v-icon>
              </td>
            </template>
            <template #[`item.startTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.startTime }}
              </td>
            </template>
            <template #[`item.equipment`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.equipment || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.desc || '-' }}
              </td>
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
        { name: '台北市', value: [121.524184, 25.046737, 3], status: 'normal' },
        {
          name: '淡水',
          value: [121.503207, 25.200766, 0],
          status: 'non-warning',
        },
        {
          name: '陽明山',
          value: [121.563715, 25.096987, 1],
          status: 'non-warning',
        },
        { name: '新北市', value: [121.463386, 25.006809, 2], status: 'normal' },
        { name: '桃園縣', value: [121.322603, 25.028983, 0], status: 'normal' },
        { name: '大園', value: [121.230977, 25.059194, 3], status: 'normal' },
        {
          name: '宜蘭縣',
          value: [121.768084, 24.758391, 3],
          status: 'non-warning',
        },
        { name: '新竹縣', value: [120.949163, 24.811721,  0], status: 'normal' },
        { name: '新竹市', value: [121.042898, 24.766474,  0], status: 'error' },
        { name: '台中市', value: [120.6736, 24.1477, 0], status: 'normal' },
        { name: '台南市', value: [120.2049, 22.9999, 1], status: 'error' },
        { name: '高雄市', value: [120.666, 23.0109, 2], status: 'normal' },
        { name: '台東縣', value: [120.98421, 22.90113, 3], status: 'normal' },
        { name: '花蓮縣', value: [121.43969, 23.54531, 3], status: 'normal' },

        {
          name: 'New York',
          value: [128 - 75.98665 / 25, 22.5 + 42.550516 / 25, 3],
          status: 'non-warning',
        },
        {
          name: 'Illinois',
          value: [128 - 88.782984 / 25, 22.5 + 41.729062 / 25, 2],
          status: 'non-warning',
        },
        {
          name: 'California',
          value: [128 - 118.121125 / 25, 22.5 + 33.987429 / 25, 1],
          status: 'error',
        },
      ],
      links: [
        { source: '台北市', target: '台中市', value: 3 },
        { source: '台北市', target: '新北市', value: 2 },
        { source: '台北市', target: '陽明山', value: 1 },
        { source: '台北市', target: '淡水', value: 0 },
        { source: '台北市', target: '宜蘭縣', value: 3 },
        { source: '台北市', target: '桃園縣', value: 1 },
        { source: '桃園縣', target: '大園', value: 0 },
        { source: '桃園縣', target: '新竹市', value: 1 },
        { source: '新竹市', target: '新竹縣', value: 1 },
        { source: '新竹市', target: '台中市', value: 1 },
        { source: '台北市', target: 'California', value: 2 },
        { source: '宜蘭縣', target: 'Illinois', value: 3 },
        { source: '台中市', target: '台南市', value: 2 },
        { source: '台南市', target: '高雄市', value: 0 },
        { source: '高雄市', target: '台東縣', value: 0 },
        { source: '花蓮縣', target: '宜蘭縣', value: 2 },
        {
          source: 'California',
          target: 'Illinois',
          value: 2,
          status: 'abnormal',
        },
        {
          source: 'California',
          target: 'New York',
          value: 1,
          status: 'abnormal',
        },
      ],
      eventsNotCloseList,
      eventsAlertList,
      cpus,
      dashboardList: [
        {
          name: 'TWAREN 400G骨幹網路即時監控狀態圖',
          i: 1,
          w: 8,
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
          x: 8,
          y: 0,
          moved: false,
        },
        { name: '設備狀態統計圖', i: 3, w: 4, h: 1, x: 8, y: 1, moved: false },
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
      ],
    }
  },
  computed: {
    vuetify() {
      return this.$vuetify
    },
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
          width: 80,
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
          width: 80,
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
  watch: {
    '$vuetify.breakpoint.smAndUp'(value) {
      this.updateDashboardList(value)
    },
  },
  mounted() {
    this.updateDashboardList(this.$vuetify.breakpoint.smAndUp)
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${item.level} lighten-2`
      }
    },
    updateDashboardList(value) {
      if (value) {
        this.dashboardList = [
          {
            name: 'TWAREN 400G骨幹網路即時監控狀態圖',
            i: 1,
            w: 8,
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
            x: 8,
            y: 0,
            moved: false,
          },
          {
            name: '設備狀態統計圖',
            i: 3,
            w: 4,
            h: 1,
            x: 8,
            y: 1,
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
        ]
      } else {
        this.dashboardList = [
          {
            name: 'TWAREN 400G骨幹網路即時監控狀態圖',
            i: 1,
            w: 12,
            h: 2,
            x: 0,
            y: 0,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 2,
            w: 12,
            h: 1,
            x: 0,
            y: 2,
            moved: false,
          },
          {
            name: '設備狀態統計圖',
            i: 3,
            w: 12,
            h: 1,
            x: 0,
            y: 3,
            moved: false,
          },
          {
            name: '至今尚未關閉事件',
            i: 4,
            w: 12,
            h: 2,
            x: 0,
            y: 5,
            moved: false,
          },
          {
            name: '外部監控事件報警列表',
            i: 5,
            w: 12,
            h: 2,
            x: 0,
            y: 7,
            moved: false,
          },
        ]
      }
    },
    onLayoutUpdated(list) {
      this.dashboardList = list
    },
  },
}
</script>
