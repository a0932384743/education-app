<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <v-card>
        <v-card-title>
          設備CPU狀態列表
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
          :item-class="setRowClass"
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
  name: 'CPUStatus',
  layout: 'admin-layout',
  data() {
    return {
      search: '',
      headers: [
        {
          text: '編號',
          value: 'id',
          width: 80,
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
          value: 'check_time',
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
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return item.status === 'down' ? 'danger lighten-1 ' : 'success lighten-1 ';
      }
    },
  },
};
</script>
