<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">SSL VPN狀態總覽</span>
        </v-card-title>
        <v-chart
          :options="options"
          class="mx-auto"
          style="width: 100%; height: 250px"
          autoresize
        />
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
import data from '~/assets/json/device-summary.json'
import items from '~/assets/json/ssl-vpn-status.json'

export default {
  name: 'SslVpnStatus',
  layout: 'admin-layout',
  data() {
    return {
      statusMap: {
        down: 'danger',
        up: 'success',
      },
      options: {
        grid: {
          top: 0,
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          top: 'center',
          formatter: function (name) {
            if (name === '總數') {
              return `${name} ${data
                .reduce((sum, d) => sum + d.value, 0)
                .toLocaleString()}`
            }
            return `${name} ${data
              .filter((d) => d.name === name)[0]
              .value.toLocaleString()}`
          },
          data: [
            ...data.map((d) => {
              return {
                ...d,
                icon: 'circle',
              }
            }),
            {
              name: '總數',
              icon: 'circle',
            },
          ],
        },
        series: [
          {
            name: '設備總覽',
            type: 'pie',
            radius: ['40%', '100%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            data: [
              ...data,
              {
                value: 0,
                name: '總數',
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            ],
          },
        ],
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
  },
}
</script>
