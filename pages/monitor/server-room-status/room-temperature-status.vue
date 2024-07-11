<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="機房溫度狀態統計圖">
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
      <chart-card title="機房溫度狀態趨勢圖">
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
      <table-card title="機房環境狀態-機房溫度狀況" :items="items">
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
            <template #[`item.current_temperature`]="{ item }">
              <div style="width: 100px" class="mt-2">
                <v-progress-linear
                  v-model="item.current_temperature"
                  :color="statusMap[item.status]"
                  height="10"
                ></v-progress-linear>
              </div>
              <div>{{ item.current_temperature || '-' }}°C</div>
            </template>
            <template #[`item.high_critical_temperature`]="{ item }">
              {{ item.high_critical_temperature || '-' }}°C
            </template>
            <template #[`item.low_critical_temperature`]="{ item }">
              {{ item.low_critical_temperature || '-' }}°C
            </template>
            <template #[`item.current_humidity`]="{ item }">
              <div style="width: 100px" class="mt-2">
                <v-progress-linear
                  v-model="item.current_humidity"
                  :color="statusMap[item.status]"
                  height="10"
                ></v-progress-linear>
                <div> {{ item.current_humidity || '-' }}%</div>
              </div>
            </template>
            <template #[`item.high_critical_humidity`]="{ item }">
              {{ item.high_critical_humidity || '-' }}%
            </template>
            <template #[`item.low_critical_humidity`]="{ item }">
              {{ item.low_critical_humidity || '-' }}%
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
import lineData from '~/assets/json/room-temperature-status-history.json';
import items from '~/assets/json/room-temperature-status.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'RoomTemperatureStatus',
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
        },
        {
          text: this.$t('device.name'),
          value: 'device',
        },
        {
          text: this.$t('device.location'),
          value: 'location',
        },
        {
          text: this.$t('current.temperature'),
          value: 'current_temperature',
        },
        {
          text: this.$t('high.critical.temperature'),
          value: 'high_critical_temperature',
        },
        {
          text: this.$t('low.critical.temperature'),
          value: 'low_critical_temperature',
        },
        {
          text: this.$t('current.humidity'),
          value: 'current_humidity',
        },
        {
          text: this.$t('high.critical.humidity'),
          value: 'high_critical_humidity',
        },
        {
          text: this.$t('low.critical.humidity'),
          value: 'low_critical_humidity',
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
