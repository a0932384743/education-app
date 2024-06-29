<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="設備CPU狀況監控統計圖">
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
      <chart-card title="設備CPU狀況趨勢圖">
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
      <table-card title="設備狀態-設備CPU狀態" :items="items">
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
          >
            <template #[`header.cpu`]="{ header }">
                {{ header.text }}(%)<br>
                ({{ $t('average.per.min' , [5]) }})
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="statusMap[item.status]"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.cpu`]="{ item }">
              <div style="width: 100px" class="mt-2">
                <v-progress-linear
                  v-model="item.cpu"
                  :color="statusMap[item.status]"
                  height="10"
                ></v-progress-linear>
              </div>
              <div>{{ Math.round(item.cpu * 100 )}}%</div>
            </template>

          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/device-cpu-status.json';
import pieData from '~/assets/json/device-summary.json';
import lineData from '~/assets/json/cpu-status-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'CPUStatus',
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
          text: this.$t('check.time'),
          value: 'checkTime',
        },
        {
          text: this.$t('cpu.usage'),
          value: 'cpu',
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
