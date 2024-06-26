<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold"
            >國科會線路界接介面與流量狀況(總數:{{ items?.length ?? '-' }})</span
          >
          <v-spacer></v-spacer>
          <v-row align="center" justify="end" style="gap: 0.6rem" class="my-0">
            <v-btn depressed>
              <v-icon>mdi-filter-outline</v-icon>
              過濾
            </v-btn>
            <v-btn depressed>
              <v-icon>mdi-calendar-range</v-icon>
              選擇日期
            </v-btn>
            <v-btn depressed>
              <v-icon>mdi-download</v-icon>
              下載CSV
            </v-btn>
          </v-row>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
          <template #[`item.status`]="{ item }">
            <v-chip :color="item.status === 'down' ? 'danger' : 'success'" dark>
              {{ item.status.toUpperCase() }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import deviceStatus from '~/assets/json/device-status.json';
export default {
  name: 'InternationalCircuitInterface',
  layout: 'admin-layout',
  data() {
    return {
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
          text: 'Input(Mbps)',
          value: 'input',
        },
        {
          text: 'Output(Mbps)',
          value: 'output',
        },
        {
          text: '現在介面狀態',
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
    };
  },
  computed: {
    items() {
      return deviceStatus;
    },
  },
};
</script>
