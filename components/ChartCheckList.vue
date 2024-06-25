<template>
  <div class="d-flex">
    <div class="flex-grow-1" style="max-width: calc(100% - 200px)">
      <slot :options="options" />
    </div>
    <v-list class="flex-grow-1" style="max-width: 200px">
      <v-list-item>
        <v-select
          v-model="range"
          item-text="label"
          item-value="value"
          hide-details
          :items="[
            {
              value: 12,
              label: $t('hours', { e: 12 }),
            },
            {
              value: 6,
              label: $t('hours', { e: 6 }),
            },
            {
              value: 3,
              label: $t('hours', { e: 3 }),
            },
          ]"
        />
      </v-list-item>
      <v-list-item
        v-for="item in items
          .map((d) => d.name)
          .filter((d) => d.indexOf('yesterday') === -1)"
        :key="item.name"
      >
        <v-checkbox
          v-model="selected"
          :label="$t(item)"
          :value="item"
          class="text-no-wrap"
          hide-details
        ></v-checkbox>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { statusMap } from '~/utils/statusMap'

export default {
  name: 'ChartCheckList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      statusMap,
      selected: [],
      range: 12,
    }
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: this.items
            .filter((d) => {
              return this.selected.some((s) => {
                return d.name.includes(s)
              })
            })
            .map((item) => this.$t(item.name + '.count')),
          icon: 'rect',
          top: '10%',
          left: 'center',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.items[0].time.slice(-this.range),
        },
        yAxis: {
          type: 'value',
        },
        series: this.items
          .filter((d) => {
            return this.selected.some((s) => {
              return d.name.includes(s)
            })
          })
          .map((d) => ({
            name: this.$t(d.name + '.count'),
            type: 'line',
            showSymbol: false,
            smooth: true,
            label: {
              show: true,
              position: 'top',
            },
            data: d.value.slice(-this.range),
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ][this.statusMap[d.name] || 'secondary'],
            },
          })),
      }
    },
  },
  mounted() {
    this.selected = this.items
      .map((d) => d.name)
      .filter((d) => !d.includes('yesterday'))
      .slice(0, 1)
  },
}
</script>
