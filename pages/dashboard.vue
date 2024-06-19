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
      :x="dashboardList[0].x"
      :y="dashboardList[0].y"
      :w="dashboardList[0].w"
      :h="dashboardList[0].h"
      :i="dashboardList[0].i"
    >
      <v-card height="100%">
        <v-card-title>
          <span class="font-weight-bold"
            >TWAREN 400G骨幹網路即時監控狀態圖</span
          >
        </v-card-title>
        <v-chart
          :options="mapOptions"
          class="mx-auto"
          style="width: 100%; height: calc(100% - 70px)"
          autoresize
        />
      </v-card>
    </grid-item>
    <grid-item
      :x="dashboardList[1].x"
      :y="dashboardList[1].y"
      :w="dashboardList[1].w"
      :h="dashboardList[1].h"
      :i="dashboardList[1].i"
    >
      <v-card height="100%">
        <v-card-title>
          <span class="font-weight-bold">未結案事件比例圖</span>
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
      :x="dashboardList[2].x"
      :y="dashboardList[2].y"
      :w="dashboardList[2].w"
      :h="dashboardList[2].h"
      :i="dashboardList[2].i"
    >
      <v-card height="100%">
        <v-card-title>
          <span class="font-weight-bold">設備CPU狀態列表</span>
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
import events from '~/assets/json/device-event.json'
import deviceStatus from '~/assets/json/device-status-stastic.json'

export default {
  name: 'Dashboard',
  layout: 'admin-layout',
  data() {
    return {
      dashboardList: [
        {
          name: 'TWAREN 400G骨幹網路即時監控狀態圖',
          i: 1,
          w: 7,
          h: 2,
          x: 0,
          y: 0,
          moved: false,
        },
        {
          name: '未結案事件比例圖',
          i: 2,
          w: 3,
          h: 1,
          x: 7,
          y: 0,
          moved: false,
        },
        { name: '設備狀態統計圖', i: 3, w: 3, h: 1, x: 7, y: 1, moved: false },
      ],
    }
  },
  computed: {
    mapOptions() {
      return {
        geo: {
          itemStyle: {
            emphasis: {
              areaColor: 'gray',
            },
            normal: {
              areaColor: 'lightgray',
              borderColor: 'gray',
            },
          },
          label: {
            emphasis: {
              show: false,
            },
          },
          map: 'world',
          roam: true,
          silent: true,
        },
        grid: {
          left: '5%',
          right: '5%',
        },
        series: [],
      }
    },
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
          }
        }),
      }
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
      }
    },
  },
  methods: {
    onLayoutUpdated(list) {
      this.dashboardList = list
    },
  },
}
</script>
