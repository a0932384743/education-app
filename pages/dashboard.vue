<template>
  <grid-layout
    :layout="dashboardList"
    :col-num="3"
    :row-num="6"
    :row-height="250"
    is-draggable
    is-resizable
    vertical-compact
    use-css-transforms
  >
    <grid-item :x="0" :y="0" :w="2" :h="2" :i="1">
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
    <grid-item :x="2" :y="0" :w="1" :h="1" :i="2">
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
    <grid-item :x="2" :y="1" :w="1" :h="1" :i="3">
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
          w: 2,
          h: 2,
          x: 0,
          y: 0,
        },
        {
          name: '未結案事件比例圖',
          i: 2,
          w: 2,
          h: 2,
          x: 0,
          y: 2,
        },
        {
          name: '設備狀態統計圖',
          i: 3,
          w: 2,
          h: 2,
          x: 1,
          y: 2,
        },
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
}
</script>
