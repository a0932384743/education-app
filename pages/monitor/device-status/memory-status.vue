<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="設備Memory狀況統計圖">
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
      <chart-card title="設備Memory狀況趨勢圖">
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
      <table-card title="設備狀態-設備Memory狀態" :items="items">
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
            <template #[`header.memory`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}(MB)</div>
              </div>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="statusMap[item.status]"
                style="border-color: white !important; color: white"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.memory`]="{ item }">
              <div>{{ (item?.memory ?? 0) / 1000 }}(MB)</div>
              <v-sparkline
                fill
                :color="
                  item?.memory_history?.some((v) => v > 750)
                    ? 'danger'
                    : 'success'
                "
                :smooth="16"
                :line-width="2"
                :value="item?.memory_history || []"
                auto-draw
              ></v-sparkline>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
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
import items from '~/assets/json/memory-status.json';
import pieData from '~/assets/json/memory-status-summary.json';
import lineData from '~/assets/json/memory-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'MemoryStatus',
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
          text: this.$t('device'),
          value: 'device',
        },
        {
          text: this.$t('device.desc'),
          value: 'desc',
        },
        {
          text: this.$t('memory'),
          value: 'memory',
        },
        {
          text: this.$t('device.status'),
          value: 'status',
        },
        {
          text: this.$t('check.time'),
          value: 'checkTime',
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
      return pieData;
    },
  },
};
</script>
