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
      const nodes = [
        { name: 'Taipei', value: [121.5654, 25.033] },
        { name: 'Taichung', value: [120.6736, 24.1477] },
        { name: 'Tainan', value: [120.2049, 22.9999] },
        { name: 'Kaohsiung', value: [120.666, 23.0109] },
        { name: 'New York', value: [-74.0059, 40.7128] },
        { name: 'Los Angeles', value: [-118.2437, 34.0522] },
        { name: 'Chicago', value: [-87.6298, 41.8781] },
        { name: 'Houston', value: [-95.3698, 29.7604] },
        { name: 'Phoenix', value: [-112.074, 33.4484] },
      ]

      const links = [
        { source: 'Taipei', target: 'Taichung', value: 50 },
        { source: 'Taichung', target: 'Tainan', value: 50 },
        { source: 'Tainan', target: 'Kaohsiung', value: 50 },
        { source: 'New York', target: 'Los Angeles', value: 60 },
        { source: 'New York', target: 'Chicago', value: 40 },
        { source: 'Los Angeles', target: 'Chicago', value: 50 },
        { source: 'Los Angeles', target: 'Houston', value: 30 },
        { source: 'Chicago', target: 'Houston', value: 40 },
        { source: 'Houston', target: 'Phoenix', value: 50 },
      ]
      return {
        geo: [
          {
            map: 'taiwanGEO', // The map type of the second map, e.g., 'world'
            left: '5%',
            right: '50%',
            top: '0%',
            bottom: '0%',
            roam: true, // Whether to enable zoom and move
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#dddddd',
              borderColor: '#888888',
            },
          },
          {
            map: 'usaGEO', // The map type of the first map, e.g., 'china'
            left: '50%',
            right: '5%',
            top: '10%',
            bottom: '10%',
            roam: true, // Whether to enable zoom and move
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#dddddd',
              borderColor: '#888888',
            },
          },
        ],
        grid: {
          left: '5%',
          right: '5%',
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: nodes,
            geoIndex: 0,
            symbolSize: 12,
            label: {
              show: true,
              formatter: '{b}',
              position: 'right',
            },
            itemStyle: {
              color: '#FF6F61',
            },
          },
          {
            type: 'lines',
            coordinateSystem: 'geo',
            geoIndex: 0,
            data: links.map(function (link) {
              return {
                fromName: link.source,
                toName: link.target,
                coords: [
                  nodes.find((n) => n.name === link.source).value,
                  nodes.find((n) => n.name === link.target).value,
                ],
                lineStyle: {
                  color: link.value > 80 ? '#FF0000' : '#00FF00',
                  width: 2,
                },
              }
            }),
            lineStyle: {
              color: '#00FF00',
              width: 2,
            },
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: nodes,
            geoIndex: 1,
            symbolSize: 12,
            label: {
              show: true,
              formatter: '{b}',
              position: 'right',
            },
            itemStyle: {
              color: '#FF6F61',
            },
          },
          {
            type: 'lines',
            coordinateSystem: 'geo',
            geoIndex: 1,
            data: links.map(function (link) {
              return {
                fromName: link.source,
                toName: link.target,
                coords: [
                  nodes.find((n) => n.name === link.source).value,
                  nodes.find((n) => n.name === link.target).value,
                ],
                lineStyle: {
                  color: link.value > 80 ? '#FF0000' : '#00FF00',
                  width: 2,
                },
              }
            }),
            lineStyle: {
              color: '#00FF00',
              width: 2,
            },
          },
        ],
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
