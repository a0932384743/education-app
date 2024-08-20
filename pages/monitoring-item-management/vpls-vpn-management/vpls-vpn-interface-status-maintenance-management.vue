<template>
  <v-row>
    <v-col cols="12">
      <table-card
        title="VPLS VPN狀態-VPLS VPN界接介面狀況維護管理"
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
            <template #[`header.ip`]="{ header }">
              {{ header.text }} IP
            </template>
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.vpn_node`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-1 `"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.vpn_node || '-' }}
              </td>
            </template>
            <template #[`item.packageLossRate`]="{ item }">
              <div v-if="!item.editable">{{ item.packageLossRate }}</div>
              <v-text-field
                v-else
                v-model="item.packageLossRate"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.packageLossRate_low`]="{ item }">
              <div v-if="!item.editable">{{ item.packageLossRate_low }}</div>
              <v-text-field
                v-else
                v-model="item.packageLossRate_low"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.packageLossRate_high`]="{ item }">
              <div v-if="!item.editable">{{ item.packageLossRate_high }}</div>
              <v-text-field
                v-else
                v-model="item.packageLossRate_high"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.isAlerting`]="{ item }">
              <div v-if="!item.editable">{{ item.isAlerting }}</div>
              <v-btn
                v-else
                small
                class="white--text"
                :color="item.isAlerting === 'On' ? 'success' : 'danger'"
                @click="
                  item.isAlerting = item.isAlerting === 'On' ? 'Off' : 'On'
                "
              >
                <v-icon size="20" dark>mdi-power</v-icon>
                {{ item.isAlerting }}
              </v-btn>
            </template>
            <template #[`item.operate`]="{ item }">
              <v-btn
                small
                :disabled="Object.keys(item).some((key) => item[key] === '')"
                :color="item.editable ? 'secondary' : 'info'"
                @click="onChange(item)"
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
import moment from 'moment';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'vpls-vpn-management/vpls-vpn-interface-status-maintenance-management',
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('vpn.id'),
          value: 'vpn_id',
          width: 80,
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
          text: this.$t('vpn.node'),
          value: 'ip',
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('package.loss.rate'),
          value: 'packageLossRate',
        },
        {
          text: this.$t('package.loss.rate.low'),
          value: 'packageLossRate_low',
        },
        {
          text: this.$t('package.loss.rate.high'),
          value: 'packageLossRate_high',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'isAlerting',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  created() {
    this.items = this.$store.getters['vpls/getVPLSList'].map((item) => ({
      ...item,
      editable: false,
    }));
  },
  destroyed() {
    this.$store.dispatch('vpls/setVPLSList', this.items);
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${statusMap[item.status]} lighten-1 `;
      }
    },
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        avg_in_rate: 0,
        avg_out_rate: 0,
        bandwidth_usage: '50G',
        check_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        device: `TWAREN-NTHU-ASR9010-${`0${this.items.length}${1}`.substr(-2)}`,
        historical_input_usage: [],
        interface: '',
        ip: '',
        isAlerting: 'On',
        packageLossRate: 0,
        packageLossRate_low: 0,
        packageLossRate_high: 0,
        pingResult: {
          avg: 0,
          max: 0,
          min: 0,
        },
        status: '',
        vpn_id: 0,
        vpn_name: '',
        vpn_node: '',
        editable: true,
      });
    },
    deleteParam(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
    onChange(item) {
      Object.keys(item).every((key) => item[key])
        ? (item.editable = !item.editable)
        : (item.editable = true);
      if (!item.editable) {
        this.$snackbar.info('更新成功');
      }
    },
  },
};
</script>
