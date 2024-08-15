<template>
  <v-row>
    <v-col cols="12">
      <table-card title="監控項目管理-VPLS VPN界接介面資料" :items="items">
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
            <template #[`header.ifindex`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>(ifindex)</div>
              </div>
            </template>
            <template #[`item.vpn_node`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.vpn_node || '-' }}
              </td>
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

            <template #[`header.inflow_high_threshold`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>{{ $t('high.threshold') }}</div>
              </div>
            </template>
            <template #[`header.inflow_low_threshold`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>{{ $t('low.threshold') }}</div>
              </div>
            </template>
            <template #[`header.outflow_high_threshold`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>{{ $t('high.threshold') }}</div>
              </div>
            </template>
            <template #[`header.outflow_low_threshold`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>{{ $t('low.threshold') }}</div>
              </div>
            </template>
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn
                  small
                  color="success"
                  @click="
                    $router.push(
                      `/monitoring-item-management/data-management/circuit-interface-management/domestic-circuit/0`
                    )
                  "
                >
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.operate`]="{ item }">
              <v-btn
                small
                :color="'info'"
                @click="
                  $router.push(
                    `/monitoring-item-management/data-management/circuit-interface-management/domestic-circuit/${item.id}`
                  )
                "
              >
                <v-icon size="20">mdi-pencil</v-icon>
                <span class="d-none d-sm-inline-block">{{ $t('edit') }}</span>
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import { statusMap } from '~/utils/statusMap';
import items from '~/assets/json/domestic-backbone-traffic.json';

export default {
  name: 'VplsVpnManagement',
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
          text: this.$t('vpn.id'),
          value: 'vpn_id',
          width: 80,
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('vpn.name'),
          value: 'vpn_name',
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('vpn.node'),
          value: 'vpn_node',
        },
        {
          text: this.$t('interface.device'),
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
        { text: this.$t('inflow'), value: 'inflow_high_threshold' },
        { text: this.$t('inflow'), value: 'inflow_low_threshold' },
        { text: this.$t('outflow'), value: 'outflow_high_threshold' },
        { text: this.$t('outflow'), value: 'outflow_low_threshold' },
        { text: this.$t('bandwidth'), value: 'bandwidth' },
        { text: this.$t('interface.alerting'), value: 'is_alert' },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
    items() {
      return items;
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${statusMap[item.status]} lighten-2`;
      }
    },
  },
};
</script>
