<template>
  <div class="d-inline-flex flex-column py-3 w-100" style="gap: 1rem">
    <h3 class="text-center bold">事件列表</h3>
    <v-card>
      <v-simple-table fixed-header height="300px">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">事件類型</th>
              <th class="text-left">事件描述</th>
              <th class="text-end">發生時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 離線</td>
              <td class="text-end">今天 10:02:27</td>
            </tr>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 流量異常</td>
              <td class="text-end">今天 09:02:27</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <h3 class="text-center bold">設備節點</h3>
    <div class="w-100">
      <v-chart
        ref="chart"
        :options="options"
        class="mx-auto"
        style="width: 100%; height: 350px"
      />
    </div>
    <h3 class="text-center bold">
      {{ item.interfaceDevice }} PING測試 <v-chip color="success" class="ma-2" label>測試</v-chip>
    </h3>
    <v-card>
      <v-simple-table fixed-header height="300px">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">PING目標</th>
              <th class="text-left">Min(ms)</th>
              <th class="text-left">Avg(ms)</th>
              <th class="text-left">Max(ms)</th>
              <th class="text-left">Stddev(ms)</th>
              <th class="text-left">Packket Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>103.124.72.0</td>
              <td>5.274</td>
              <td>6.703</td>
              <td>9.528</td>
              <td>1.998</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>103.124.72.0</td>
              <td>5.274</td>
              <td>6.703</td>
              <td>9.528</td>
              <td>1.998</td>
              <td>10%</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <h3 class="text-center bold">{{ item.interfaceDevice }} 過往流量比較</h3>
    <div class="d-inline-flex flex-wrap" style="gap: 1rem">
      <v-select
        v-model="interface"
        color="info"
        class="d-inline-block"
        :items="interfaceOptions"
        label="介面"
      ></v-select>
      <v-select
        v-model="range"
        color="info"
        class="d-inline-block"
        :items="rangeOption"
        item-text="text"
        item-value="value"
        label="時間區間"
      ></v-select>
      <v-select
        v-model="compare"
        color="info"
        class="d-inline-block"
        :items="compareOptions"
        item-text="text"
        item-value="value"
        label="比較時間"
      ></v-select>
    </div>
    <div class="d-inline-flex flex-column flex-md-row" style="gap: 1rem">
      <v-card class="flex-grow-1 p-5">
        <small-line-chart
          color="success"
          class="w-100"
          :smooth="0"
          :height="150"
          :width="500"
          :line-width="2"
          :value="Array.from({ length: range }).map((_) => Math.random() * 10)"
          auto-draw
        ></small-line-chart>
      </v-card>
      <v-card class="flex-grow-1 p-5 text">
        <small-line-chart
          class="w-100"
          :height="150"
          :width="500"
          color="success"
          :smooth="0"
          :line-width="2"
          :value="Array.from({ length: range }).map((_) => Math.random() * 10)"
          auto-draw
        ></small-line-chart>
      </v-card>
    </div>
  </div>
</template>

<script>
import SmallLineChart from '@/components/SmallLineChart.vue';
import { colorBrightness } from '@/utils/color';

export default {
  name: 'EventAlert',
  components: { SmallLineChart },
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      interface: 'Eth 1/4',
      interfaceOptions: ['Eth 1/4'],
      range: 180,
      rangeOption: [
        {
          text: '3小時',
          value: 180,
        },
        {
          text: '6小時',
          value: 360,
        },
        {
          text: '12小時',
          value: 720,
        },
      ],
      compare: '一天前',
      compareOptions: [
        {
          text: '一天前',
          value: 1,
        },
        {
          text: '一周前',
          value: 7,
        },
        {
          text: '一月前',
          value: 30,
        },
      ],
    };
  },
  computed: {
    interfaceName(){
      const arr = this.item.interfaceDevice.split('-');
      arr.pop();
      return arr.join('-');
    },
    options() {
      return {
        legend: {
          show: false
        },
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            links:[
              {
                source: `${this.interfaceName}-01`,
                target: 'cloud',
                lineStyle: {
                  cap:'butt',
                  join: 'miter',
                  color: '#0098fd',
                  width: 5,
                  type: [5, 10],
                  dashOffset: 5
                }
              },
              {
                source: `${this.interfaceName}-02`,
                target: 'cloud',
                lineStyle: {
                  cap:'butt',
                  join: 'miter',
                  color: '#0098fd',
                  width: 5,
                  type: [5, 10],
                  dashOffset: 5
                }
              },
              {
                source: `${this.interfaceName}-03`,
                target: 'cloud',
                lineStyle: {
                  cap:'butt',
                  join: 'miter',
                  color: '#0098fd',
                  width: 5,
                  type: [5, 10],
                  dashOffset: 5
                }
              },

            ],
            data: [
              {
                name: `${this.interfaceName}-01`,
                x: 300,
                y: 100,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: this.$vuetify.theme.isDark ? '#fff' : '#aaa',
                  color: colorBrightness(this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ].success,1.2)
                },
                label: {
                  align: 'center',
                  offset: [0, 35],
                  color: this.$vuetify.theme.isDark ? '#fff' : '#000000',
                  borderWidth: 0
                }
              },
              {
                name: `${this.interfaceName }-02`,
                x: 800,
                y: 100,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: this.$vuetify.theme.isDark ? '#fff' : '#aaa',
                  color: colorBrightness(this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ].success,1.2)
                },
                label: {
                  align: 'center',
                  offset: [0, 35],
                  color: this.$vuetify.theme.isDark ? '#fff' : '#000000',
                  borderWidth: 0
                }
              },
              {
                name: `${this.interfaceName }-03`,
                x: 550,
                y: 200,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: this.$vuetify.theme.isDark ? '#fff' : '#aaa',
                  color:colorBrightness( this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ].danger , 1.2)
                },  draggable: true,
                label: {
                  align: 'center',
                  offset: [0, 35],
                  color: this.$vuetify.theme.isDark ? '#fff' : '#000000',
                  borderWidth: 0
                }
              },
              {
                itemStyle: {
                  borderWidth: 0,
                  color: '#FFFFFF00'
                },
                name: 'cloud',
                x: 550,
                y: 100,
                label: {
                  formatter: () => {
                    return '{img|}\n\n';
                  },
                  rich: {
                    img: {
                      height: 100,
                      width: 100,
                      backgroundColor: {
                        image: '/image/icons/cloud.png'
                      }
                    },
                  },
                  align: 'center',
                  borderWidth: 0
                }
              }
            ]
          }
        ]
      };
    }
  },
};
</script>
