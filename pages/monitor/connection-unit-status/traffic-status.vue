<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="連線單位流量狀態監控統計圖">
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
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="連線單位流量狀態趨勢圖">
        <chart-check-list :items="lineData">
          <template #default="{ options }">
            <v-chart
              :options="options"
              style="width: 100%; height: 250px"
              autoresize
            />
          </template>
        </chart-check-list>
      </chart-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="連線單位狀態-連線單位流量狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            loading,
            headerProps,
          }"
        >
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
            :item-class="setRowClass"
          >
            <template #[`item.unit`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important;"
              >
                {{ item.unit || '-' }}
              </td>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important;"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.ips`]="{ item }">
              <div v-for="ip in item.ips" :key="ip" class="text-no-wrap">
                {{ ip }}
              </div>
            </template>

            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
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
import items from '~/assets/json/routing-status.json';
import lineData from '~/assets/json/routing-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'TrafficStatus',
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
        { text: this.$t('id'), value: 'id', width: 80 },
        { text: this.$t('connection.unit'), value: 'unit' },
        { text: this.$t('device'), value: 'device' },
        { text: this.$t('interface'), value: 'interface' },
        { text: 'Input(Mbps)', value: 'input' },
        { text: 'Output(Mbps)', value: 'output' },
        { text: this.$t('status'), value: 'status' },
        { text: this.$t('remark'), value: 'remark' },
        { text: this.$t('check.time'), value: 'check_time' },
      ];
    },
    items() {
      return items;
    },
    lineData() {
      return lineData;
    },
    pieData() {
      return ['normal', 'abnormal', 'non-warning'].map((status) => {
        const map = {
          normal: 'up',
          abnormal: 'down',
          'non-warning': 'non-warning',
        };
        return {
          name: status,
          value:
            items.filter((item) => item.status === map[status]).length +
            (status === 'normal' ? 310 : status === 'abnormal' ? 150 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${this.statusMap[item.status]} lighten-2`;
      }
    },
  },
};
</script>
