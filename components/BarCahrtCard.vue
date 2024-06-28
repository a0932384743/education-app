<template>
  <v-card v-show="show" class="mx-auto" :height="collapse ? 'auto' : '100%'">
    <v-card-title class="info white--text flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
      <v-menu
        min-width="100"
        transition="slide-y-transition"
        offset-y
        bottom
        left
      >
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" text v-on="on">
            <v-icon color="white">mdi-tools</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2">
                編輯圖表
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="white" icon @click="collapse = !collapse">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn color="white" icon @click="show = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-if="!collapse" class="fill-height w-100">
        <slot />
        <v-chart
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
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'BarChartCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    chartType: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    },
    xAxis: {
      type: Array,
      required: false,
    },
    seriesProps: {
      type: Object,
      required: false,
    },
    legendsProps: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      collapse: false,
      show: true,
    };
  },
  computed: {
    options() {
      return {
        grid: {
          bottom: '15%',
        },
        tooltip: {
          trigger: this.chartType !== 'pie' ? 'axis' : 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        xAxis: {
          show: this.chartType !== 'pie',
          type: 'category',
          data: this.xAxis || [],
          axisLabel: {
            formatter: function (value) {
              if (value.length > 10) {
                return `${value.substring(0, 10)}...`;
              } else {
                return value;
              }
            },
          },
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          show: true,
          ...(this.legendsProps || {}),
        },
        series: this.items.map((s) => {
          return {
            ...s,
            type: this.chartType || 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ][statusMap[s.type]],
            },
            ...(this.seriesProps || {}),
          };
        }),
      };
    },
  },
};
</script>
