<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title class="info white--text">
          <span class="font-weight-bold">國內骨幹流量狀態監控統計圖</span>
        </v-card-title>
        <v-row class="my-0">
          <v-col :cols="12" :sm="6" class="d-flex">
            <v-chart
              :options="pieOption"
              class="mx-auto"
              style="width: 100%; height: 250px"
              autoresize
            />
            <v-list>
              <v-list-item v-for="item in pieData" :key="item.name">
                <v-list-item-content>
                  <v-list-item-title
                    >{{ item.name }} :
                    <span :class="`${statusMap[item.name]}--text`">{{
                      item.value
                    }}</span></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col :cols="12" :sm="6" class="d-flex">
            <v-chart
              :options="lineOption"
              class="mx-auto"
              style="width: 100%; height: 250px"
              autoresize
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">電路狀態-國內骨幹電路狀態</span>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
          <template #[`header.input`]="{ header }">
            <div class="d-inline-block text-center">
              <div>{{ header.text }}</div>
              <div>(每五分鐘平均值)</div>
            </div>
          </template>
          <template #[`header.output`]="{ header }">
            <div class="d-inline-block text-center">
              <div>{{ header.text }}</div>
              <div>(每五分鐘平均值)</div>
            </div>
          </template>
          <template #[`item.device`]="{ item }">
            <td
              :class="statusMap[item.status]"
              style="border-color: white !important"
            >
              {{ item.device || '-' }}
            </td>
          </template>
          <template #[`item.interface`]="{ item }">
            <td
              :class="statusMap[item.status]"
              style="border-color: white !important"
            >
              {{ item.interface || '-' }}
            </td>
          </template>
          <template #[`item.desc`]="{ item }">
            <td
              :class="statusMap[item.status]"
              style="border-color: white !important"
            >
              {{ item.desc || '-' }}
            </td>
          </template>
          <template #[`item.input`]="{ item }">
            <div>{{ item.input }}(Mpbs)</div>
            <v-sparkline
              fill
              :color="statusMap[item.status]"
              :smooth="16"
              :line-width="2"
              :value="Array.from({ length: 10 }, () => Math.random())"
              auto-draw
            ></v-sparkline>
          </template>
          <template #[`item.output`]="{ item }">
            <div>{{ item.output }}(Mpbs)</div>
            <v-sparkline
              fill
              :color="statusMap[item.status]"
              :smooth="16"
              :line-width="2"
              :value="Array.from({ length: 10 }, () => Math.random())"
              auto-draw
            ></v-sparkline>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/device-traffic.json'
import pieData from '~/assets/json/domestic-backbone-traffic-statistics.json'
import lineData from '~/assets/json/domestic-backbone-traffic-history.json'

export default {
  name: 'DomesticBackboneTraffic',
  layout: 'admin-layout',
  data() {
    return {
      statusMap: {
        異常: 'danger',
        正常: 'success',
        正常數: 'success',
        異常數: 'danger',
        不警告數: 'warning',
      },
      search: '',
      headers: [
        {
          text: '編號',
          value: 'id',
        },
        {
          text: '設備',
          value: 'device',
        },
        {
          text: '介面',
          value: 'interface',
        },
        {
          text: '介面敘述',
          value: 'desc',
        },
        {
          text: '檢查時間',
          value: 'checkTime',
        },
        {
          text: 'Input使用量',
          value: 'input',
        },
        {
          text: 'Output使用量',
          value: 'output',
        },
        {
          text: '備註',
          value: 'remark',
        },
      ],
      footerProps: {
        itemsPerPageAllText: '所有',
        itemsPerPageText: '每頁筆數:',
        pageText: '第{0}-{1}項，共{2}項',
      },
    }
  },
  computed: {
    items() {
      return items
    },
    pieOption() {
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
            data: pieData.map((d) => ({
              ...d,
              itemStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][this.statusMap[d.name] || 'secondary'],
              },
            })),
          },
        ],
      }
    },
    lineOption() {
      return {
        title: {
          text: '異常數趨勢圖',
          left: 'center', // 將標題水平置中
          textStyle: {
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['異常數', '昨日同期異常數'],
          icon: 'rect',
          top: '10%',
          left: 'center',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: lineData[0].time,
        },
        yAxis: {
          type: 'value',
        },
        series: lineData.map((d) => ({
          name: d.name,
          type: 'line',
          showSymbol: false,
          smooth: true,
          data: d.value,
          itemStyle: {
            color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
              ][this.statusMap[d.name] || 'secondary'],
          },
        })),
      }
    },
    pieData() {
      return [
        ...pieData,
        {
          value: pieData.reduce((sum, d) => sum + d.value, 0),
          name: '總監控數',
        },
      ]
    },
  },
}
</script>
