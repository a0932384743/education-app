<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="電路狀態-資策會線路界接介面狀況" :items="items">
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
            :headers="headers1"
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
            <template #[`item.description`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.description || '-' }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
                {{ $t(item.status) }}

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
    <v-col :cols="12">
      <table-card
        title="電路狀態-資策會線路界接介面WAN Port IP Ping狀況"
        :items="items"
      >
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
            :headers="headers2"
            :items="items"
            :search="search"
            :page="page"
            :item-class="setRowClass1"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.unit`]="{ item }">
              <td
                :class="
                  item.status === 'non-warning'
                    ? 'non-warning lighten-1 '
                    : item.packageLossRate
                    ? 'success lighten-1 '
                    : 'error lighten-1 '
                "
                nowrap="nowrap"
                style="border-color: inherit !important"
              >
                {{ item.unit }}
              </td>
            </template>
            <template #[`item.pingResult`]="{ item }">
              <div class="d-inline-block">
                Min: {{ item.pingResult.min }}(ms), Avg:
                {{ item.pingResult.avg }}(ms), Max:
                {{ item.pingResult.max }}(ms)
              </div>
            </template>
            <template #[`item.packageLossRate`]="{ item }">
              <div style="width: 100px" class="mt-2">
                <v-progress-linear
                  :value="item.packageLossRate"
                  striped
                  :color="item.packageLossRate ? 'success' : 'error'"
                  height="10"
                ></v-progress-linear>
              </div>
              <div>{{ item.packageLossRate }}%</div>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="電路狀態-資策會線路流量狀況" :items="items">
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
            :headers="headers3"
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
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.description`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
              >
                {{ item.description || '-' }}
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
import items from '~/assets/json/international-circuit-Interface.json';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'IiiLineInterface',
  layout: 'admin-layout',
  components: { SmallLineChart },
  data() {
    return {
      statusMap,
    };
  },
  computed: {
    headers1() {
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
          value: 'check_time',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
      ];
    },
    headers3() {
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
          value: 'description',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
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
    headers2() {
      return [
        {
          text: this.$t('interface.id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('connect.unit'),
          value: 'unit',
        },
        {
          text: this.$t('connection.unit.ip'),
          value: 'wanPortIp',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },

        {
          text: this.$t('ping.result'),
          value: 'pingResult',
        },
        {
          text: this.$t('package.loss.rate'),
          value: 'packageLossRate',
        },
      ];
    },
    items() {
      return items.filter((item) => item.unit.includes('資策會'));
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${statusMap[item.status]} lighten-1 `;
      }
    },
    setRowClass1(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return item.status === 'non-warning'
          ? 'non-warning lighten-1 '
          : item.packageLossRate
            ? 'success lighten-1 '
            : 'error lighten-1 ';
      }
    },
  },
};
</script>
