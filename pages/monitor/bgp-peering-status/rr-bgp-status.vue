<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="RR BGP狀況監控統計圖">
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
      <chart-card title="RR BGP狀態趨勢圖">
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
      <table-card title="BGP Peering狀態-RR BGP狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            headerProps,
            loading,
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
          >
            <template #[`item.rr_server`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.rr_server }}
              </td>
            </template>
            <template #[`item.rr_client`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.rr_client }}
              </td>
            </template>
            <template #[`item.routes_received`]="{ item }">
              {{ item.routes_received.toLocaleString() }}
            </template>
            <template #[`item.routes_received_high`]="{ item }">
              {{ item.routes_received_high.toLocaleString() }}
            </template>
            <template #[`item.routes_received_low`]="{ item }">
              {{ item.routes_received_low.toLocaleString() }}
            </template>
            <template #[`item.history`]>
              <td align="center">
                <v-btn color="secondary" small dark>
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
import items from '~/assets/json/rr-bgp-status.json';
import pieData from '~/assets/json/rr-bgp-status-statistics.json';
import lineData from '~/assets/json/rr-bgp-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'RrBgpStatus',
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
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('rr.server'),
          value: 'rr_server',
        },
        {
          text: this.$t('rr.client'),
          value: 'rr_client',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('bgp.status'),
          value: 'bgp_status',
        },
        {
          text: this.$t('routes.received.num.current'),
          value: 'routes_received',
        },
        {
          text: this.$t('routes.received.num.high'),
          value: 'routes_received_high',
        },
        {
          text: this.$t('routes.received.num.low'),
          value: 'routes_received_low',
        },
        {
          text: this.$t('routes.received.num.history'),
          value: 'history',
        },
      ];
    },

    items() {
      return items;
    },
    lineData() {
      return lineData;
    },
    pieData() {
      return pieData;
    },
  },
};
</script>
