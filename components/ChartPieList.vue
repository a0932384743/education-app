<template>
  <div class="d-flex">
    <div class="flex-grow-1" style="max-width: calc(100% - 200px)">
      <slot :options="options" />
    </div>
    <v-list class="flex-grow-1" style="max-width: 200px">
      <v-list-item
        v-for="item in [
          ...items,
          {
            value: items.reduce((sum, d) => sum + d.value, 0),
            name: 'total',
          },
        ]"
        :key="item.name"
      >
        <v-list-item-content>
          <v-list-item-title
            :class="statusMap[item.name] === 'error' && 'title'"
          >
            {{ $t(item.name + '.count') }} :
            <span :class="`${statusMap[item.name]}--text`">{{
              item.value
            }}</span></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'ChartPieList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      statusMap,
    };
  },
  computed: {
    options() {
      return {
        grid: {
          top: 0,
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            name: '設備總覽',
            type: 'pie',
            radius: ['30%', '60%'],
            data: this.items.map((d) => ({
              ...d,
              name: this.$t(d.name),
              itemStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][this.statusMap[d.name] || 'secondary'],
              },
            })),
          },
        ],
      };
    },
  },
};
</script>
