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
      <chart-card title="TWAREN 400G骨幹網路即時監控狀態圖">
        <v-chart
          :options="options"
          class="mx-auto fill-height w-100"
          style="height: 100% !important"
          autoresize
        />
      </chart-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'IndexPage',
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
      dashboardList: [
        {
          name: 'TWAREN 400G骨幹網路即時監控狀態圖',
          i: 1,
          w: 12,
          h: 2,
          x: 0,
          y: 0,
          moved: false,
        },
      ],
    };
  },
  computed: {
    options() {
      return {
        xAxis: {
          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [],
        geo3D: {
          roam: true,
          zoom: 9,
          center: [126.9654, 25.5477],
          map: 'world',
          shading: 'lambert',
          environment: '#0066cc',
          regionHeight: 2,
          itemStyle: {
            areaColor: '#0066cc',
            borderColor: '#111',
            borderWidth: 0.5,
          },
          viewControl: {
            autoRotate: false,
            distance: 120,
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true,
            },
            ambient: {
              intensity: 0.3,
            },
          },
          groundPlane: {
            show: true,
            color: '#00ccff',
          },
          postEffect: {
            enable: true,
            SSAO: {
              radius: 2,
              intensity: 1,
              enable: true,
            },
            depthOfField: {
              enable: false,
              focalRange: 5,
              fstop: 1,
              blurRadius: 6,
            },
          },
          temporalSuperSampling: {
            enable: true,
          },
          regions: this.nodes.map((node) => {
            return {
              ...node,
              itemStyle: {
                areaColor:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'light' : 'dark'
                  ][statusMap[node.status]],
              },
            };
          }),
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
