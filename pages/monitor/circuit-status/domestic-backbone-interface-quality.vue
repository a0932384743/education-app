<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="國內骨幹電路介面品質監控統計圖">
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
      <chart-card title="國內骨幹電路介面品質狀態趨勢圖">
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
      <table-card title="電路狀態-國內骨幹電路界接介面品質" :items="items">
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
            :loading="loading"
            :items-per-page="itemPerPage"
            :item-class="setRowClass"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.device`]="{ item }">
              <td
                :class="`${
                  $vuetify.breakpoint.mdAndUp &&
                  statusMap[item.interface_status]
                }`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${
                  $vuetify.breakpoint.mdAndUp &&
                  statusMap[item.interface_status]
                }`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.interface_status`]="{ item }">
              <v-chip
                :color="statusMap[item.interface_status || 'normal']"
                dark
                small
              >
                {{ $t(item.interface_status || 'normal') }}
              </v-chip>
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
import items from '~/assets/json/domestic-backbone-traffic.json';
import lineData from '~/assets/json/domestic-backbone-traffic-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'DomesticBackboneInterfaceQuality',
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
          text: this.$t('interface.id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('interface.equipment'),
          value: 'device',
        },
        {
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('interface.description'),
          value: 'desc',
          width: 250,
        },
        {
          text: this.$t('interface.source'),
          value: 'source',
        },
        {
          text: this.$t('interface.destination'),
          value: 'destination',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('status'),
          value: 'interface_status',
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
        return {
          name: status,
          value:
            items.filter((item) => item.status === status).length +
            (status === 'normal' ? 120 : status === 'abnormal' ? 110 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      return `${statusMap[item.interface_status]} lighten-2`;
    },
  },
};
</script>
