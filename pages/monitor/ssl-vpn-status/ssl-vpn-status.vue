<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title class="info white--text">
          <span class="font-weight-bold">SSL VPN狀態總覽</span>
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
          <span class="font-weight-bold">SSL VPN狀態-SSL VPN狀況</span>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
          <template #[`item.school`]="{ item }">
            <td
              class="secondary lighten-1 font-weight-bold"
              style="border-color: white !important"
            >
              {{ item.school || '-' }}
            </td>
          </template>
          <template #[`item.gateway`]="{ item }">
            <td
              class="secondary lighten-1 font-weight-bold"
              style="border-color: white !important"
            >
              {{ item.gateway || '-' }}
            </td>
          </template>

          <template #[`item.status`]="{ item }">
            <v-chip
              :small="true"
              :color="statusMap[item.status]"
              class="lighten-1 text--black align-content-center"
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
import items from '~/assets/json/ssl-vpn-status.json'
import pieData from '~/assets/json/device-summary.json'

export default {
  name: 'SslVpnStatus',
  layout: 'admin-layout',
  data() {
    return {
      statusMap: {
        異常: 'danger',
        停報: 'secondary',
        正常: 'success',
        不正常數: 'danger',
        不發報數: 'secondary',
        正常數: 'success',
        down: 'danger',
        up: 'success',
      },
      search: '',
      headers: [
        {
          text: 'VLAN ID',
          value: 'id',
        },
        {
          text: '使用單位名稱',
          value: 'school',
        },

        {
          text: 'Gateway',
          value: 'gateway',
        },
        {
          text: '目前狀態',
          value: 'status',
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
      return items
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
