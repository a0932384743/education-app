<template>
  <v-row>
    <load-history-model
      :show="show"
      @close:show="show = false"
    />
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="RPM總負載電流狀態統計圖">
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
      <chart-card title="RPM總負載電流狀態趨勢圖">
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
      <table-card title="機房環境狀態-RPM總負載電流狀況" :items="items">
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
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
            :item-class="setRowClass"
          >
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                :style="
                  item.status !== 'none' && 'border-color: inherit !important;'
                "
              >
                {{ item.device }}
              </td>
            </template>
            <template #[`item.current_voltage`]="{ item }">
              {{ item.current_voltage || '-' }} V
            </template>
            <template #[`item.high_critical_voltage`]="{ item }">
              {{ item.high_critical_voltage || '-' }} V
            </template>
            <template #[`item.low_critical_voltage`]="{ item }">
              {{ item.low_critical_voltage || '-' }} V
            </template>
            <template #[`item.current_current`]="{ item }">
              {{ item.current_current || '-' }}A
            </template>
            <template #[`item.high_critical_current`]="{ item }">
              {{ item.high_critical_current || '-' }}A
            </template>
            <template #[`item.low_critical_current`]="{ item }">
              {{ item.low_critical_current || '-' }}A
            </template>
            <template #[`item.current_kwh`]="{ item }">
              {{ item.current_kwh || '-' }}kWh
            </template>
            <template #[`item.high_critical_kwh`]="{ item }">
              {{ item.high_critical_kwh|| '-' }}kWh
            </template>
            <template #[`item.low_critical_kwh`]="{ item }">
              {{ item.low_critical_kwh || '-' }}kWH
            </template>
            <template #[`item.history`]>
              <td align="center">
                <v-btn
                  color="secondary"
                  small
                  dark
                  @click="
                    show = true
                  "
                >
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
import lineData from '~/assets/json/room-temperature-status-history.json';
import items from '~/assets/json/rpm-load-status.json';
import ChartCard from '~/components/ChartCard.vue';
import LoadHistoryModel from '~/components/LoadHistoryModel.vue';

import { statusMap } from '~/utils/statusMap';

export default {
  name: 'RpmTotalLoadCurrentStatus',
  components: { ChartCard , LoadHistoryModel },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      show: false,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('device.name'),
          value: 'device',
          width: 300
        },
        {
          text: this.$t('current.voltage'),
          value: 'current_voltage',
        },
        {
          text: this.$t('high.critical.voltage'),
          value: 'high_critical_voltage',
        },
        {
          text: this.$t('low.critical.voltage'),
          value: 'low_critical_voltage',
        },
        {
          text: this.$t('current.current'),
          value: 'current_current',
        },
        {
          text: this.$t('high.critical.current'),
          value: 'high_critical_current',
        },
        {
          text: this.$t('low.critical.current'),
          value: 'low_critical_current',
        },
        {
          text: this.$t('current.kwh'),
          value: 'current_current',
        },
        {
          text: this.$t('high.critical.kwh'),
          value: 'high_critical_current',
        },
        {
          text: this.$t('low.critical.kwh'),
          value: 'low_critical_kwh',
        },
        {
          text: this.$t('history'),
          value: 'history',
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
        return {
          name: status,
          value: items.filter((item) => item.status === status).length,
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
