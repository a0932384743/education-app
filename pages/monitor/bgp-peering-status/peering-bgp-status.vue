<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="Peering BGP狀況監控統計圖">
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
      <chart-card title="Peering BGP狀況趨勢圖">
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
      <table-card title="BGP Peering狀態-Peering BGP狀況" :items="items">
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
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.peering_name`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.peering_name }}
              </td>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.device }}
              </td>
            </template>
            <template #[`item.received`]="{ item }">
              {{ item.received ? item.received.toLocaleString() : '未監控' }}
            </template>
            <template #[`item.submitted`]="{ item }">
              {{ item.submitted ? item.submitted.toLocaleString() : '未監控' }}
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
import items from '~/assets/json/peering-bgp-status.json'
import pieData from '~/assets/json/peering-bgp-status-statistics.json'
import lineData from '~/assets/json/peering-bgp-status-history.json'
import ChartCard from '~/components/ChartCard.vue'
import { statusMap } from '~/utils/statusMap'

export default {
  name: 'PeeringBgpStatus',
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
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('peering.name'),
          value: 'peering_name',
        },
        {
          text: this.$t('peering.device'),
          value: 'device',
        },
        {
          text: this.$t('bgp.status'),
          value: 'bgp_status',
        },
        {
          text: this.$t('bgp.status.check.time'),
          value: 'bgp_check_time',
        },
        {
          text: this.$t('received.num.current'),
          value: 'received',
        },
        {
          text: this.$t('received.check.time'),
          value: 'received_check_time',
        },
        {
          text: this.$t('received.num.history'),
          value: 'history',
        },
        {
          text: this.$t('submitted.num.current'),
          value: 'submitted',
        },
        {
          text: this.$t('submitted.check.time'),
          value: 'submitted_check_time',
        },
      ]
    },

    items() {
      return items
    },
    lineData() {
      return lineData
    },
    pieData() {
      return pieData
    },
  },
}
</script>
