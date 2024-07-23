<template>
  <v-card v-show="show" class="mx-auto" :height="collapse ? 'auto' : '100%'">
    <v-card-title class="info white--text flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
      <v-btn color="white" icon @click="collapse = !collapse">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn color="white" icon @click="show = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-if="!collapse" class="fill-height w-100">
        <div class="d-inline-flex flex-column btn-group" style="left: 10px">
          <v-btn x-small icon @click="reload">
            <v-icon size="20">mdi-refresh</v-icon>
          </v-btn>
          <v-btn x-small icon @click="zoomOut">
            <v-icon size="20">mdi-plus</v-icon>
          </v-btn>
          <v-btn x-small icon @click="zoomIn">
            <v-icon size="20">mdi-minus</v-icon>
          </v-btn>
        </div>
        <div class="d-inline-flex flex-column btn-group" style="right: 10px">
          <div class="d-inline-flex">
            <v-icon :color="statusMap.normal"> mdi-circle</v-icon>
            <v-list-item-title>{{ $t('normal') }}</v-list-item-title>
          </div>
          <div class="d-inline-flex">
            <v-icon :color="statusMap.abnormal"> mdi-circle</v-icon>
            <v-list-item-title>{{ $t('abnormal') }}</v-list-item-title>
          </div>
          <div class="d-inline-flex">
            <v-icon :color="statusMap['non-warning']"> mdi-circle</v-icon>
            <v-list-item-title>{{ $t('non-warning') }}</v-list-item-title>
          </div>
        </div>
        <v-chart
          ref="map"
          :options="options"
          class="mx-auto"
          style="width: 100%; height: calc(100% - 70px)"
          autoresize
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
<script>
import colors from 'vuetify/lib/util/colors';
import { colorBrightness } from '@/utils/color';
import { statusMap } from '~/utils/statusMap';
import taiwanGEO from 'assets/map/taiwan-geo.json';
import usaGEO from 'assets/map/usa-geo.json';

export default {
  name: 'MapCard',
  props: {
    center: {
      type: Array,
      required: false,
    },
    map: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    nodes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      statusMap,
      collapse: false,
      show: true,
      times: null,
    };
  },
  computed: {
    options() {
      return {
        geo: [
          {
            map: this.map || 'geo',
            roam: true,
            zoom: this.center ? 2 : 14,
            aspectScale: 1,
            center: this.center || [123.0654, 23.5477],
            regions: [...taiwanGEO.features, ...usaGEO.features].map(
              (node, index) => {
                const colorKeys = Object.keys(colors);
                return {
                  ...node.properties,
                  itemStyle: {
                    areaColor:
                      colors[colorKeys[index % colorKeys.length]].lighten4,
                  },
                };
              }
            ),
          },
        ],
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.nodes.map((node) => {
              return {
                ...node,
                itemStyle: {
                  opacity: 1,
                  borderColor: '#838383',
                  borderWidth: 2,
                  color:
                    this.$vuetify.theme.themes[
                      this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ][statusMap[node.status]],
                },
              };
            }),
            symbolSize: 35,
            label: {
              show: true,
              formatter: function (params) {
                return params.value[2];
              },
              position: 'inside',
              color: '#e7e7e7', // 字體顏色
              fontSize: 16, // 字體大小
            },
          },
          {
            type: 'lines',
            coordinateSystem: 'geo',
            data: this.links.map((link) => {
              return {
                fromName: link.source,
                toName: link.target,
                coords: [
                  this.nodes.find((n) => n.name === link.source).value,
                  this.nodes.find((n) => n.name === link.target).value,
                ],
                lineStyle: {
                  animation: true,
                  type: 'dashed',
                  dashOffset: 0,
                  color: colorBrightness(
                    this.$vuetify.theme.themes[
                      this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ].success,
                    0.6
                  ),
                  width: 5,
                  opacity: 0.6,
                  curveness: 0.1,
                },
              };
            }),
          },
        ],
      };
    },
  },
  mounted() {
    if (this.times) {
      clearInterval(this.time);
    }

    this.time = setInterval(() => {
      if (this.$refs.map) {
        const options = this.$refs.map.chart.getOption();
        const { series } = options;
        series[1].data = series[1].data.map((d) => {
          d.lineStyle.dashOffset += 10;
          return d;
        });
        this.$refs.map.chart.setOption({
          ...options,
          series,
        });
      }
    }, 1000);

    this.$refs.map.chart.on('click', (params) => {
      const options = this.$refs.map.chart.getOption();
      const { geo } = options;
      if (this.nodes.find(n=>n.name === params.name )) {
        geo[0].map = /^[A-Za-z]+$/.test(params.name) ? 'geo' : params.name;
        geo[0].center =this.nodes.find(n=>n.name === params.name).value;
      }

      this.$refs.map.chart.setOption({
        ...options,
        geo,
      });
    });
  },
  destroyed() {
    if (this.times) {
      clearInterval(this.time);
    }
  },
  methods: {
    reload() {
      const options = this.$refs.map.chart.getOption();
      const { geo } = options;
      geo[0].zoom = this.center ? 2 : 14;
      geo[0].map = this.map || 'geo';
      this.$refs.map.chart.setOption({
        ...options,
        geo,
      });
    },
    zoomIn() {
      const options = this.$refs.map.chart.getOption();
      const { geo } = options;
      geo[0].zoom -= 2;
      this.$refs.map.chart.setOption({
        ...options,
        geo,
      });
    },
    zoomOut() {
      const options = this.$refs.map.chart.getOption();
      const { geo } = options;
      geo[0].zoom += 2;
      this.$refs.map.chart.setOption({
        ...options,
        geo,
      });
    },
  },
};
</script>
<style scoped>
.btn-group {
  position: absolute;
  top: 70px;
  gap: 1rem;
  z-index: 1000;
}
</style>
