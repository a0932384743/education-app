<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="光傳輸元件監控狀況監控統計圖">
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
      <chart-card title="光傳輸元件監控狀態趨勢圖">
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
      <table-card title="設備狀態-光傳輸元件監控狀況" :items="items">
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
            <template #[`header.pre_fec_bit_error_rate`]="{ header }">
              <span v-html="header.text"></span>
            </template>
            <template #[`header.uncorrectable_bit_errors`]="{ header }">
              <span v-html="header.text"></span>
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
            <template #[`item.received_power`]="{ item }">
              {{item.received_power}} dBM
            </template>
            <template #[`item.optical_signal_to_noise_ratio`]="{ item }">
              {{item.optical_signal_to_noise_ratio}} dB
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import lineData from '~/assets/json/cpu-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'OpticalTransmissionDeviceMonitoringStatus',
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
          text: this.$t('device'),
          value: 'device',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
          cellClass: 'text-no-wrap'
        },
        {
          text: this.$t('received.power'),
          value: 'received_power',
        },
        {
          text: this.$t('optical.signal.to.noise.ratio'),
          value: 'optical_signal_to_noise_ratio',
        },
        {
          text: this.$t('pre.fec.bit.error.rate'),
          value: 'pre_fec_bit_error_rate',
        },
        {
          text: this.$t('uncorrectable.bit.errors'),
          value: 'uncorrectable_bit_errors',
        },
      ];
    },
    lineData() {
      return lineData;
    },
    items() {
      return this.$store.getters['optical/getOpticalList'];
    },
    pieData() {
      return ['normal', 'abnormal', 'non-warning'].map((status) => {
        return {
          name: status,
          value:
            this.items.filter((item) => item.status === status).length +
            (status === 'normal' ? 310 : status === 'abnormal' ? 50 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${this.statusMap[item.status]} lighten-1`;
      }
    },
  },
};
</script>
