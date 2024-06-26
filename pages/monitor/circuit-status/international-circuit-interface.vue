<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <chart-card title="國際電路界接介面狀態統計圖">
        <chart-pie-list :items="pieData">
          <template #default="{ options }">
            <v-chart
              :options="options"
              style="width: 100%; height: 250px"
              autoresize
            />
          </template>
        </chart-pie-list>
      </chart-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="電路狀態-國際電路界接介面狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            headerProps,
          }"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
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
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/international-circuit-Interface.json';
import pieData from '~/assets/json/device-summary.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'InternationalCircuitInterface',
  components: { ChartCard },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
    };
  },
  computed: {
    headers() {
      return [
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
      ];
    },
    items() {
      return items;
    },
    pieData() {
      return pieData;
    },
  },
};
</script>
