<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="電路介面管理-國內電路界接介面資料維護" :items="items">
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
            <template #[`header.ifindex`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>(ifindex)</div>
              </div>
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
                <div>{{ $t('high.threshold') }}</div>
              </div>
            </template>
            <template #[`header.outflow_high_threshold`]="{ header }">
              <div
                class="d-inline-flex align-center flex-column"
                style="gap: 0.5rem"
              >
                <div>{{ header.text }}</div>
                <div>{{ $t('low.threshold') }}</div>
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
import items from '~/assets/json/domestic-backbone-traffic.json';

export default {
  name: 'DomesticCircuit',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
    };
  },
  computed: {
    headers() {
      return [
        { text: this.$t('interface.id'), value: 'id', width: 80 },
        { text: this.$t('type'), value: 'type' },
        {
          text: this.$t('interface.description'),
          value: 'description',
          width: 250,
        },
        { text: this.$t('interface.source'), value: 'source' },
        { text: this.$t('interface.destination'), value: 'destination' },
        { text: this.$t('interface.equipment'), value: 'device', width: 350 },
        { text: this.$t('ifindex'), value: 'ifindex', width: 150 },
        { text: this.$t('port'), value: 'port', width: 150 },
        { text: this.$t('inflow'), value: 'inflow_high_threshold' },
        { text: this.$t('inflow'), value: 'inflow_low_threshold' },
        { text: this.$t('outflow'), value: 'outflow_high_threshold' },
        { text: this.$t('outflow'), value: 'outflow_low_threshold' },
        { text: this.$t('bandwidth'), value: 'bandwidth' },
        { text: this.$t('interface.alerting'), value: 'is_alert' },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
};
</script>
