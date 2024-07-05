<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <chart-card title="BGP Peering狀況監控統計圖">
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
      <table-card title="監控項目管理-BGP Peering狀況" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            loading,
            items,
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
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.device }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.interface }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="statusMap[item.status]"
                :style="
                  item.status !== 'none' && 'border-color:white !important'
                "
                nowrap="nowrap"
              >
                {{ item.desc }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip
                :small="true"
                :color="statusMap[item.status]"
                class="lighten-1 text--black align-content-center"
              >
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
import items from '~/assets/json/device-traffic.json';
import pieData from '~/assets/json/device-summary.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'DomesticAndInternationalBgpPeering',
  components: { ChartCard },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
    };
  },
  computed: {
    items() {
      return items;
    },
    pieData() {
      return pieData;
    },
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
          text: 'Input(Mbps)',
          value: 'input',
        },
        {
          text: 'Output(Mbps)',
          value: 'output',
        },
        {
          text: this.$t('remark'),
          value: 'remark',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
        {
          text: this.$t('check.time'),
          value: 'checkTime',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return this.statusMap[item.status];
      }
    },
  },
};
</script>
