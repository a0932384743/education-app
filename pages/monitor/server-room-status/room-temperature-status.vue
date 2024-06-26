<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <chart-card title="機房溫度狀況統計圖">
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
    <v-col :cols="12">
      <table-card title="機房環境狀態-機房溫度狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
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
            hide-default-footer
          >
            <template #[`item.current_temperature`]="{ item }">
              {{ item.current_temperature || '-' }}°C
            </template>
            <template #[`item.high_critical_temperature`]="{ item }">
              {{ item.high_critical_temperature || '-' }}°C
            </template>
            <template #[`item.low_critical_temperature`]="{ item }">
              {{ item.low_critical_temperature || '-' }}°C
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/room-temperature-status.json'
import pieData from '~/assets/json/room-temperature-summary.json'
import ChartCard from '~/components/ChartCard.vue'
import { statusMap } from '~/utils/statusMap'

export default {
  name: 'RoomTemperatureStatus',
  components: { ChartCard },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('device.name'),
          value: 'device_name',
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
      ]
    },
    items() {
      return items
    },
    pieData() {
      return pieData
    },
  },
}
</script>
