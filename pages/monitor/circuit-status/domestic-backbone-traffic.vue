<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="國內骨幹流量狀態監控統計圖">
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
      <chart-card title="國內骨幹流量狀態趨勢圖">
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
      <table-card title="電路狀態-國內骨幹電路狀態" :items="items">
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
            <template #[`header.input`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['五']) }})</div>
              </div>
            </template>
            <template #[`header.output`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['五']) }})</div>
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
            <template #[`item.interface`]="{ item }">
              <td
                :class="statusMap[item.status]"
                style="border-color: white !important; color: white"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="statusMap[item.status]"
                style="border-color: white !important; color: white"
              >
                {{ item.desc || '-' }}
              </td>
            </template>
            <template #[`item.input`]="{ item }">
              <div>{{ item.input }}(Mpbs)</div>
              <v-sparkline
                fill
                :color="statusMap[item.status]"
                :smooth="16"
                :line-width="2"
                :value="item?.inputHistory || []"
                auto-draw
              ></v-sparkline>
            </template>
            <template #[`item.output`]="{ item }">
              <div>{{ item.output }}(Mpbs)</div>
              <v-sparkline
                fill
                :color="statusMap[item.status]"
                :smooth="16"
                :line-width="2"
                :value="item?.outputHistory || []"
                auto-draw
              ></v-sparkline>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/domestic-backbone-traffic.json';
import pieData from '~/assets/json/domestic-backbone-traffic-statistics.json';
import lineData from '~/assets/json/domestic-backbone-traffic-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'DomesticBackboneTraffic',
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
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('interface.description'),
          value: 'desc',
        },
        {
          text: this.$t('check.time'),
          value: 'checkTime',
        },
        {
          text: this.$t('input.usage'),
          value: 'input',
        },
        {
          text: this.$t('output.usage'),
          value: 'output',
        },
        {
          text: this.$t('remark'),
          value: 'remark',
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
      return pieData;
    },
  },
};
</script>
