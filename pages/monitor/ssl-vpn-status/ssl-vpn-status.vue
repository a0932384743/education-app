<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="SSL VPN狀況監控統計圖">
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
      <chart-card title="SSL VPN狀態趨勢圖">
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
      <table-card title="SSL VPN狀態-SSL VPN狀況" :items="items">
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
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            :loading="loading"
            hide-default-footer
            :item-class="setRowClass"
          >
            <template #[`item.school`]="{ item }">
              <td
                class="secondary lighten-1  font-weight-bold"
                style="border-color: inherit !important"
                align="center"
              >
                {{ item.school || '-' }}
              </td>
            </template>
            <template #[`item.gateway`]="{ item }">
              <td
                class="secondary lighten-1  font-weight-bold"
                style="border-color: inherit !important"
              >
                {{ item.gateway || '-' }}
              </td>
            </template>

            <template #[`item.status`]="{ item }">
              <v-chip
                :small="true"
                :color="statusMap[item.status]"
                class="lighten-1  align-content-center"
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
import lineData from '~/assets/json/ssl-vpn-status-history.json';
import items from '~/assets/json/ssl-vpn-status.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'SslVpnStatus',
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
          text: 'VLAN ID',
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('unit.name'),
          value: 'school',
        },

        {
          text: 'Gateway',
          value: 'gateway',
        },
        {
          text: this.$t('status.current'),
          value: 'status',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
      ];
    },
    lineData() {
      return lineData;
    },
    items() {
      return items;
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
            (status === 'normal' ? 210 : status === 'abnormal' ? 150 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'secondary lighten-1 ';
      }
    },
  },
};
</script>
