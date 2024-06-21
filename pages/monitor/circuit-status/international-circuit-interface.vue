<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">設備狀態總覽</span>
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
          <span class="font-weight-bold"
            >電路狀態-國內骨幹電路界接介面品質</span
          >
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
          <template #[`item.equipment`]="{ item }">
            <td
              :class="statusMap[item.quality]"
              style="border-color: white !important; color: white"
            >
              {{ item.equipment || '-' }}
            </td>
          </template>
          <template #[`item.interface_num`]="{ item }">
            <td
              :class="statusMap[item.quality]"
              style="border-color: white !important; color: white"
            >
              {{ item.interface_num || '-' }}
            </td>
          </template>
          <template #[`item.quality`]="{ item }">
            <v-chip :color="statusMap[item.quality]" dark small>
              {{ item.quality.toUpperCase() }}
            </v-chip>
          </template>
          <template #[`item.history`]>
            <td align="center">
              <v-btn color="secondary" fab x-small dark>
                <v-icon>mdi-chart-areaspline</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/international-circuit-Interface.json'
import data from '~/assets/json/device-summary.json'

export default {
  name: 'InternationalCircuitInterface',
  layout: 'admin-layout',
  data() {
    return {
      statusMap: {
        abnormal: 'danger',
        normal: 'success',
      },
      items,
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
          text: '介面編號',
          value: 'id',
        },
        {
          text: '介面設備',
          value: 'equipment',
        },
        {
          text: '介面',
          value: 'interface_num',
        },
        {
          text: '介面描述',
          value: 'description',
        },
        {
          text: '介面來源端',
          value: 'source',
        },
        {
          text: '介面目的地端',
          value: 'destination',
        },
        {
          text: '檢查時間',
          value: 'checkTime',
        },
        {
          text: '當前介面品質',
          value: 'quality',
        },
        {
          text: '歷史資料查詢',
          value: 'history',
        },
      ],
      footerProps: {
        itemsPerPageAllText: '所有',
        itemsPerPageText: '每頁筆數:',
        pageText: '第{0}-{1}項，共{2}項',
      },
    }
  },
}
</script>
