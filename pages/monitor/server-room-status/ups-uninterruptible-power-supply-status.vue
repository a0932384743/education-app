<template>
  <v-row>
    <power-history-model
      :show="show"
      @close:show="show = false"
    />
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="UPS不斷電系統狀態統計圖">
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
      <chart-card title="UPS不斷電系統狀態趨勢圖">
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
                :class="`${statusMap[item.battery_health]} lighten-1 `"
                :style="
                  item.status !== 'none' && 'border-color: inherit !important;'
                "
              >
                {{ item.device }}
              </td>
            </template>
            <template #[`item.battery_capacity`]="{ item }">
              {{ $t(item.battery_capacity) }} %
            </template>
            <template #[`item.battery_health`]="{ item }">
              {{ $t(item.battery_health) }}
            </template>
            <template #[`item.mains_power_interruption`]="{ item }">
              {{ $t(item.mains_power_interruption) }}
            </template>
            <template #[`item.battery_voltage`]="{ item }">
              {{ $t(item.battery_voltage) }} V
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
import ChartCard from '~/components/ChartCard.vue';
import PowerHistoryModel from '~/components/PowerHistoryModel.vue';

import { statusMap } from '~/utils/statusMap';

export default {
  name: 'UpsUninterruptiblePowerSupplyStatus',
  components: { ChartCard , PowerHistoryModel },
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
          text: this.$t('battery.health'),
          value: 'battery_health',
        },
        {
          text: this.$t('battery.capacity'),
          value: 'battery_capacity',
        },
        {
          text: this.$t('mains.power.interruption'),
          value: 'mains_power_interruption',
        },
        {
          text: this.$t('battery.voltage'),
          value: 'battery_voltage',
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
      return this.$store.getters['ups/getUPSList'];
    },
    pieData() {
      return ['normal', 'abnormal', 'non-warning'].map((status) => {
        return {
          name: status,
          value: this.items.filter((item) => item.battery_health === status).length,
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${this.statusMap[item.battery_health]} lighten-1 `;
      }
    },
  },
};
</script>
