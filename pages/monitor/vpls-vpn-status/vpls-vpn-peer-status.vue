<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="VPLS VPN Peer狀況監控統計圖">
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
      <chart-card title="VPLS VPN Peer狀況趨勢圖">
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
    <v-col cols="12">
      <table-card title="VPLS VPN狀態-VPLS VPN Peer狀況" :items="items">
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
            :item-class="setRowClass"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`header.input`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['5']) }})</div>
              </div>
            </template>
            <template #[`header.output`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['5']) }})</div>
              </div>
            </template>
            <template #[`header.avg_in_rate`]="{ header }">
              {{ header.text }}(%)
            </template>
            <template #[`header.avg_out_rate`]="{ header }">
              {{ header.text }}(%)
            </template>
            <template #[`item.vpn_node`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.vpn_node || '-' }}
              </td>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.input`]="{ item }">
              <div>{{ Number(item.historical_input_usage[0]).toFixed(2) }}(Mpbs)</div>
              <small-line-chart
                fill
                color="success"
                :smooth="0"
                :line-width="2"
                :value="item?.historical_input_usage || []"
                auto-draw
              ></small-line-chart>
            </template>
            <template #[`item.output`]="{ item }">
              <div>{{ Number(item.historical_output_usage[0]).toFixed(2) }}(Mpbs)</div>
              <small-line-chart
                fill
                :color="statusMap[item.status]"
                :smooth="0"
                :line-width="2"
                :value="item?.historical_output_usage || []"
                auto-draw
              ></small-line-chart>
            </template>

          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import ChartCard from '@/components/ChartCard.vue';
import SmallLineChart from '@/components/SmallLineChart.vue';
import { statusMap } from '~/utils/statusMap';
import lineData from '~/assets/json/peering-bgp-status-history.json';

export default {
  name: 'VplsVpnPeerStatus',
  components: { SmallLineChart, ChartCard },
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
          text: this.$t('vpn.id'),
          value: 'vpn_id',
          width: 80,
        },
        {
          text: this.$t('vpn.name'),
          value: 'vpn_name',
        },
        {
          text: this.$t('vpn.node'),
          value: 'vpn_node',
        },
        {
          text: this.$t('interface.device'),
          value: 'device',
        },
        {
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('bandwidth.usage'),
          value: 'bandwidth_usage',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
          cellClass: 'text-no-wrap'
        },
        {
          text: this.$t('input.usage'),
          value: 'input',
        },
        {
          text: this.$t('output.usage'),
          value: 'output',
        },
        {
          text: this.$t('average.in.rate'),
          value: 'avg_in_rate',
        },
        {
          text: this.$t('average.out.rate'),
          value: 'avg_out_rate',
        },
      ];
    },
    items() {
      return this.$store.getters['vpls/getVPLSList'];
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
            this.items.filter((item) => item.status === map[status]).length +
            (status === 'normal' ? 310 : status === 'abnormal' ? 150 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${statusMap[item.status]} lighten-1 `;
      }
    },
  },
};
</script>
