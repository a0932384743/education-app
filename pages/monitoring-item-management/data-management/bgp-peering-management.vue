<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title class="info white--text">
          <span class="font-weight-bold">BGP Peering狀況監控統計圖</span>
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
        </v-row>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold"
            >BGP Peering狀態 - BGP Peering狀況</span
          >
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
          <template #[`item.status`]="{ item }">
            <v-chip
              :small="true"
              :color="statusMap[item.status]"
              class="lighten-1 text--black align-content-center"
            >
              <v-icon size="15" :color="statusMap[item.status]"
                >mdi-circle</v-icon
              >
              {{ item.status.toUpperCase() }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import deviceTraffic from '~/assets/json/device-traffic.json'
import pieData from '~/assets/json/device-summary.json'

export default {
  name: 'BgpPeeringManagement',
  layout: 'admin-layout',
  data() {
    return {
      statusMap: {
        停報: 'secondary',
        異常: 'danger',
        正常: 'success',
        正常數: 'success',
        不正常數: 'danger',
        不警告數: 'warning',
      },
      search: '',
      headers: [
        {
          text: '編號',
          value: 'id',
        },
        {
          text: '狀態',
          value: 'status',
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
          text: 'Input(Mbps)',
          value: 'input',
        },
        {
          text: 'Output(Mbps)',
          value: 'output',
        },
        {
          text: '備註',
          value: 'remark',
        },
        {
          text: '檢查時間',
          value: 'checkTime',
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
      return deviceTraffic
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
  },
}
</script>
