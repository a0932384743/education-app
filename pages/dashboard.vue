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
      <v-card height="100%">
        <v-card-title>
          <span class="font-weight-bold text-truncate">未結案事件比例圖</span>
        </v-card-title>
        <v-chart
          :options="eventOptions"
          class="mx-auto"
          style="width: 100%; height: calc(100% - 70px)"
          autoresize
        />
      </v-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[2].x"
      :y="dashboardList[2].y"
      :w="dashboardList[2].w"
      :h="dashboardList[2].h"
      :i="dashboardList[2].i"
    >
      <v-card height="100%">
        <v-card-title>
          <span class="font-weight-bold text-truncate">設備CPU狀態列表</span>
        </v-card-title>
        <v-chart
          :options="statusOptions"
          class="mx-auto"
          style="width: 100%; height: calc(100% - 70px)"
          autoresize
        />
      </v-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import events from '~/assets/json/device-event.json';
import deviceStatus from '~/assets/json/device-status-stastic.json';
import MapCard from '~/components/MapCard.vue';

export default {
  name: 'Dashboard',
  components: { MapCard },
  layout: 'admin-layout',
  data() {
    return {
      nodes: [
        { name: '台北市', value: [121.5654, 25.033, 50], status: 'normal' },
        { name: '台中市', value: [120.6736, 24.1477, 50], status: 'normal' },
        { name: '台南市', value: [120.2049, 22.9999, 60], status: 'abnormal' },
        { name: '高雄市', value: [120.666, 23.0109, 50], status: 'normal' },
        {
          name: 'New York',
          value: [145 - 74.0059 / 6, 20 + 40.71282 / 6, 60],
          status: 'abnormal',
        },
        {
          name: 'California',
          value: [145 - 118.2437 / 6, 20 + 34.0522 / 6, 50],
          status: 'normal',
        },
        {
          name: 'Indiana',
          value: [145 - 87.6298 / 6, 20 + 41.8781 / 6, 40],
          status: 'non-warning',
        },
        {
          name: 'Texas',

          value: [145 - 95.3698 / 6, 20 + 29.7604 / 6, 60],
          status: 'abnormal',
        },
        {
          name: 'Arizona',
          value: [145 - 112.074 / 6, 20 + 33.4484 / 6, 40],
          status: 'non-warning',
        },
      ],
      links: [
        { source: '台北市', target: '台中市', value: 50 },
        { source: '台北市', target: 'New York', value: 50, status: 'normal' },
        { source: '台南市', target: 'New York', value: 50, status: 'normal' },
        {
          source: '台中市',
          target: 'Indiana',
          value: 40,
          status: 'non-warning',
        },
        { source: '台中市', target: '台南市', value: 50, status: 'normal' },
        { source: '台南市', target: '高雄市', value: 50, status: 'normal' },
        {
          source: 'New York',
          target: 'California',
          value: 60,
          status: 'normal',
        },
        {
          source: 'New York',
          target: 'Indiana',
          value: 60,
          status: 'abnormal',
        },
        {
          source: 'California',
          target: 'Indiana',
          value: 60,
          status: 'abnormal',
        },
        {
          source: 'California',
          target: 'Arizona',
          value: 60,
          status: 'abnormal',
        },
        { source: 'Indiana', target: 'Arizona', value: 60, status: 'abnormal' },
        {
          source: 'Arizona',
          target: 'Texas',
          value: 40,
          status: 'non-warning',
        },
      ],
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
      ],
    };
  },
  computed: {
    statusOptions() {
      return {
        grid: {
          top: 10,
          bottom: 20,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          data: [
            'Backbone Equipment',
            'Central Office Equipment',
            'Control EQ',
          ],
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          show: false,
        },
        series: deviceStatus.map((s) => {
          return {
            ...s,
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              color:
                s.name === 'down'
                  ? this.$vuetify.theme.themes.light.danger
                  : this.$vuetify.theme.themes.light.success,
            },
          };
        }),
      };
    },
    eventOptions() {
      return {
        grid: {
          top: 10,
          bottom: 20,
        },
        xAxis: {
          data: events.map((e) => e.name),
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          show: false,
        },
        series: {
          type: 'bar',
          data: events,
        },
      };
    },
  },
  methods: {
    onLayoutUpdated(list) {
      this.dashboardList = list;
    },
  },
};
</script>
