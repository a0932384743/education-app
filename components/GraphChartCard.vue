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
      <v-card-text
        v-if="!collapse"
        class="w-100"
        style="height: calc(100% - 80px)"
      >
        <img v-if="false" src="/image/network.png" width="100%" height="100%" />
        <v-chart
          :options="options"
          class="mx-auto"
          style="width: 100%; height: 100%"
          autoresize
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
<script>
import { colorBrightness } from '@/utils/color';

const nodes = [
  {
    name: '光傳輸設備',
    x: 500,
    y: 100,
    value: 20,
    img: '/image/icons/device.png',
  },
  {
    name: 'Internet1',
    x: 350,
    y: 20,
    value: 20,
    img: '/image/icons/cloud.png',
  },
  {
    name: 'Internet2',
    x: 650,
    y: 20,
    value: 20,
    img: '/image/icons/cloud.png',
  },
  {
    name: '邊際路由器01',
    x: 350,
    y: 150,
    value: 20,
    img: '/image/icons/router-2.png',
  },
  {
    name: '邊際路由器02',
    x: 650,
    y: 150,
    value: 20,
    img: '/image/icons/router-2.png',
  },
  {
    name: '骨幹路由器01',
    x: 200,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器02',
    x: 400,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器03',
    x: 600,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器04',
    x: 800,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器交換器01',
    x: 300,
    y: 450,
    value: 20,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器02',
    x: 500,
    y: 500,
    value: 20,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器03',
    x: 700,
    y: 450,
    value: 0,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器04',
    x: 900,
    y: 500,
    value: 0,
    img: '/image/icons/switch.png',
  },
];

const lines = [
  {
    source: '光傳輸設備',
    target: '骨幹路由器01',
  },
  {
    source: 'Internet1',
    target: '邊際路由器01',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器01',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器03',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器04',
  },
  {
    source: 'Internet2',
    target: '邊際路由器02',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器交換器01',
  },
  {
    source: '骨幹路由器02',
    target: '骨幹路由器交換器02',
  },
  {
    source: '骨幹路由器交換器02',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器交換器01',
    target: '骨幹路由器交換器03',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器03',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器04',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器交換器03',
  },
];

const category = [
  {
    name: '使用率<20%',
    color: 'success',
  },
  {
    name: '20%<使用率<40%',
    color: 'info',
  },
  {
    name: '40%<使用率<60%',
    color: 'warning',
  },
  {
    name: '60%<使用率<80%',
    color: 'primary',
  },
  {
    name: '80%<使用率',
    color: 'danger',
  },
];
export default {
  name: 'GraphChartCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      collapse: false,
      show: true,
      options: {
        legend: {
          data: category.map((c) => {
            return {
              ...c,
              itemStyle: {
                color: colorBrightness(
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][c.color],
                  1.3
                ),
              },
            };
          }),
          orient: 'vertical',
          left: '10%', // Adjust position as needed
          top: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
          formatter(value) {
            return value;
          },
        },
        tooltip: {},
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            categories: category,
            links: lines.reduce((array, value) => {
              array.push(value, {
                source: value.target,
                target: value.source,
              });
              return array;
            }, []),
            data: nodes.map((data) => {
              let color = colorBrightness(
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].success,
                2
              );

              if (data.value >= 20 && data.value < 40) {
                color = colorBrightness(
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].info,
                  2
                );
              }

              if (data.value >= 40 && data.value < 60) {
                color = colorBrightness(
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].warning,
                  2
                );
              }

              if (data.value >= 60 && data.value < 80) {
                color = colorBrightness(
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].primary,
                  2
                );
              }
              if (data.value >= 80) {
                color = colorBrightness(
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].danger,
                  2
                );
              }
              return {
                ...data,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: this.$vuetify.theme.isDark ?  '#fff' : '#aaa',
                  color,
                },
                tooltip: {
                  formatter(value) {
                    return `${value.name}，使用率:${value.value}%`;
                  },
                },
                label: {
                  formatter(label) {
                    if (label.name.includes('Internet')) {
                      return ['{img|}', '{name|Internet}'].join('\n');
                    }
                    return ['{img|}', `{name|${label.name}}`].join('\n');
                  },
                  rich: {
                    img: {
                      height: 30,
                      width: 30,
                      backgroundColor: {
                        image: data.img,
                      },
                    },
                    name: {
                      padding: [10, 0, 0, 0], // 调整标签位置
                    },
                  },
                  align: 'center',
                  offset: [0, 12],
                  color: this.$vuetify.theme.isDark ?  '#fff' : '#aaa',
                  borderWidth: 0,
                },
              };
            }),
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      },
    };
  },
};
</script>
