<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="設備Power Supply狀態監控統計圖">
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
      <chart-card title="設備Power Supply狀態趨勢圖">
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
      <table-card title="設備狀態-設備Power Supply狀況" :items="items">
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
            :item-class="setRowClass"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            :loading="loading"
            hide-default-footer
          >
            <template #[`header.status`]="{ header }">
              {{ header.text }}<br />({{ $t('query.day.per.minute', [5]) }})
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important;"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :small="true" dark :color="statusMap[item.status]">
                {{ $t(item.status) }} ({{
                  item.status === 'normal' ? 'on' : 'off'
                }})
              </v-chip>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/power-status.json';
import lineData from '~/assets/json/power-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'PowerSupplyStatus',
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
          text: this.$t('device.id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('device'),
          value: 'device',
        },
        {
          text: this.$t('Sub ID'),
          value: 'subId',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('power.supply.status'),
          value: 'status',
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
          value:
            items.filter((item) => item.status === status).length +
            (status === 'normal' ? 70 : status === 'abnormal' ? 4 : 2),
        };
      });
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${this.statusMap[item.status]} lighten-1 `;
      }
    },
  },
};
</script>
