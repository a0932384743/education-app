<template>
  <v-row>
    <v-col class="text-center" :cols="12" :md="6">
      <chart-card title="國際電路界接介面狀態統計圖">
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
      <chart-card title="國際電路界接介面狀態趨勢圖">
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
      <table-card title="電路狀態-國際電路界接介面狀況" :items="items">
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
          >

            <template #[`item.description`]="{ item }">
              <td
                :class="statusMap[item.status]"
                style="border-color: white !important; color: white"
                nowrap="nowrap"
              >
                {{ item.description || '-' }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
                {{ item.status.toUpperCase() }}
              </v-chip>
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
import lineData from '~/assets/json/international-circuit-interface-history.json';
import items from '~/assets/json/international-circuit-Interface.json';
import pieData from '~/assets/json/device-summary.json';
import ChartCard from '~/components/ChartCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'InternationalCircuitInterface',
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
          text: this.$t('interface.id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('interface.description'),
          value: 'description',
        },
        {
          text: this.$t('interface.equipment'),
          value: 'device',
        },
        {
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('check.time'),
          value: 'checkTime',
        },
        {
          text: this.$t('status'),
          value: 'status',
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
