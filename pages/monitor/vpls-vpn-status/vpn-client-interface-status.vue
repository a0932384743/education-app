<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="VPN Client界接介面狀況監控統計圖">
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
      <chart-card title="VPN Client界接介面狀態趨勢圖">
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
      <table-card title="VPLS VPN狀態-VPN Client界接介面狀況" :items="items">
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
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.vpn_node || '-' }}
              </td>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
                {{ $t(item.status) }}
              </v-chip>
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
import items from '~/assets/json/vpls-vpn-status.json';
import lineData from '~/assets/json/peering-bgp-status-history.json';

export default {
  name: 'VpnClientInterfaceStatus',
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
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('status'),
          value: 'status',
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
        return `${statusMap[item.status]} lighten-2`;
      }
    },
  },
};
</script>
