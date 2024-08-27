<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="VPLS VPN界接介面Port IP Ping狀況監控統計圖">
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
      <chart-card title="VPLS VPN界接介面Port IP Ping狀態趨勢圖">
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
      <table-card title="VPLS VPN狀態-VPLS VPN界接介面Port IP Ping狀況" :items="items">
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
            <template #[`item.pingResult`]="{ item }">
              <div class="d-inline-block">
                Min: {{ item.pingResult.min }}(ms), Avg:
                {{ item.pingResult.avg }}(ms), Max:
                {{ item.pingResult.max }}(ms)
              </div>
            </template>
            <template #[`item.packageLossRate`]="{ item }">
              <div style="width: 100px" class="mt-2">
                <v-progress-linear
                  v-model="item.packageLossRate"
                  striped
                  :color="item.packageLossRate ? 'normal' : 'error'"
                  height="10"
                ></v-progress-linear>
              </div>
              <div>{{ item.packageLossRate }}%</div>
            </template>
          </v-data-table>
        </template>
      </table-card>

    </v-col>
  </v-row>
</template>

<script>
import ChartCard from '@/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
import lineData from '~/assets/json/peering-bgp-status-history.json';

export default {
  name: 'VplsVpnInterfacePortIpPingStatus',
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
          text: this.$t('vpn.id'),
          value: 'vpn_id',
          width: 80,
        },
        {
          text: this.$t('vpn.name'),
          value: 'vpn_name',
          cellClass: 'text-no-wrap'
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
          text: this.$t('connect.unit.port.ip'),
          value: 'ip',
        cellClass: 'text-no-wrap'
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('ping.result'),
          value: 'pingResult',
          cellClass: 'text-no-wrap'
        },
        {
          text: this.$t('package.loss.rate'),
          value: 'packageLossRate'

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
