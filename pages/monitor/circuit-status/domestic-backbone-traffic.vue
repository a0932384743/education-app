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
            :item-class="setRowClass"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`header.input`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['5']) }})</div>
              </div>
            </template>
            <template #[`header.output`]="{ header }">
              <div class="d-inline-block text-center">
                <div>{{ header.text }}</div>
                <div>({{ $t('average.per.min', ['5']) }})</div>
              </div>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
              >
                {{ item.desc || '-' }}
              </td>
            </template>
            <template #[`item.input`]="{ item }">
              <div>{{ item.input }}(Mpbs)</div>
              <small-line-chart
                fill
                color="success"
                :smooth="0"
                :line-width="2"
                :value="item?.inputHistory || []"
                auto-draw
              ></small-line-chart>
            </template>
            <template #[`item.output`]="{ item }">
              <div>{{ item.output }}(Mpbs)</div>
              <small-line-chart
                fill
                :color="statusMap[item.status]"
                :smooth="0"
                :line-width="2"
                :value="item?.outputHistory || []"
                auto-draw
              ></small-line-chart>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import SmallLineChart from '@/components/SmallLineChart.vue';
import items from '~/assets/json/domestic-backbone-traffic.json';
import lineData from '~/assets/json/domestic-backbone-traffic-history.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'DomesticBackboneTraffic',
  components: { SmallLineChart, ChartCard },
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
          width: 250
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
          width: 200
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
      return ['normal', 'abnormal', 'non-warning'].map((status) => {
        return {
          name: status,
          value:
            items.filter((item) => item.status === status).length +
            (status === 'normal' ? 310 : status === 'abnormal' ? 50 : 2),
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
