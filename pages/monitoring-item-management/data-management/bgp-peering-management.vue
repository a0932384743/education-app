<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <chart-card title="BGP Peering狀況監控統計圖">
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
      <table-card title="監控項目管理-BGP Peering狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            loading,
            items,
            headerProps,
          }"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :loading="loading"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
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
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/device-traffic.json';
import pieData from '~/assets/json/device-summary.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'BgpPeeringManagement',
  components: { ChartCard },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
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
    };
  },
  computed: {
    items() {
      return items;
    },
    pieData() {
      return pieData;
    },
  },
};
</script>
