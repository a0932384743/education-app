<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="監控項目管理-PDU智慧排插管理" :items="items">
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
            :item-class="setRowClass"
          >
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.current_voltage`]="{ item }">
              <div v-if="!item.editable">
                {{ item.current_voltage || '-' }} V
              </div>
              <v-text-field
                v-else
                v-model="item.current_voltage"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.high_critical_voltage`]="{ item }">
              <div v-if="!item.editable">
                {{ item.high_critical_voltage || '-' }} V
              </div>
              <v-text-field
                v-else
                v-model="item.high_critical_voltage"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.low_critical_voltage`]="{ item }">
              <div v-if="!item.editable">
                {{ item.low_critical_voltage || '-' }} V
              </div>
              <v-text-field
                v-else
                v-model="item.low_critical_voltage"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.current_current`]="{ item }">
              <div v-if="!item.editable">
                {{ item.current_current || '-' }}A
              </div>
              <v-text-field
                v-else
                v-model="item.current_current"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.high_critical_current`]="{ item }">
              <div v-if="!item.editable">
                {{ item.high_critical_current || '-' }}A
              </div>
              <v-text-field
                v-else
                v-model="item.high_critical_current"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.low_critical_current`]="{ item }">
              <div v-if="!item.editable">
                {{ item.low_critical_current || '-' }}A
              </div>
              <v-text-field
                v-else
                v-model="item.low_critical_current"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.current_kwh`]="{ item }">
              <div v-if="!item.editable">{{ item.current_kwh || '-' }}kWh</div>
              <v-text-field
                v-else
                v-model="item.current_kwh"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.high_critical_kwh`]="{ item }">
              <div v-if="!item.editable">
                {{ item.high_critical_kwh || '-' }}kWh
              </div>
              <v-text-field
                v-else
                v-model="item.high_critical_kwh"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.low_critical_kwh`]="{ item }">
              <div v-if="!item.editable">
                {{ item.low_critical_kwh || '-' }}kWH
              </div>
              <v-text-field
                v-else
                v-model="item.low_critical_kwh"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn
                  small
                  :disabled="Object.keys(item).some((key) => item[key] === '')"
                  :color="item.editable ? 'secondary' : 'info'"
                  @click="
                    Object.keys(item).every((key) => item[key])
                      ? (item.editable = !item.editable)
                      : (item.editable = true)
                  "
                >
                  <v-icon size="20">mdi-pencil</v-icon>
                  <span class="d-none d-sm-inline-block">{{ $t('edit') }}</span>
                </v-btn>
                <v-btn
                  small
                  color="danger"
                  class="px-2"
                  @click="onDelete(item)"
                >
                  <v-icon class="white--text" size="20"
                    >mdi-trash-can-outline</v-icon
                  ><span class="d-none d-sm-inline-block white--text">{{
                    $t('delete')
                  }}</span>
                </v-btn>
              </div>
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
  name: 'PduSmartPowerStripManagement',
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
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('device.name'),
          value: 'device',
          width: 300,
          cellClass:'text-no-wrap'
        },
        {
          text: this.$t('pdu.voltage'),
          value: 'current_voltage',
        },
        {
          text: this.$t('high.critical.voltage'),
          value: 'high_critical_voltage',
        },
        {
          text: this.$t('low.critical.voltage'),
          value: 'low_critical_voltage',
        },
        {
          text: this.$t('pdu.current'),
          value: 'current_current',
        },
        {
          text: this.$t('high.critical.current'),
          value: 'high_critical_current',
        },
        {
          text: this.$t('low.critical.current'),
          value: 'low_critical_current',
        },
        {
          text: this.$t('pdu.kwh'),
          value: 'current_current',
        },
        {
          text: this.$t('high.critical.kwh'),
          value: 'high_critical_current',
        },
        {
          text: this.$t('low.critical.kwh'),
          value: 'low_critical_kwh',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  created() {
    this.items = this.$store.getters['pdu/getPDUList'].map((item) => ({
      ...item,
      editable: false,
    }));
  },
  destroyed() {
    this.$store.dispatch('pdu/setPDUList', this.items);
  },
  methods: {
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        check_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        current_current: 0,
        current_kwh: 0,
        current_voltage: 0,
        device: `TP-Rack1-PDU-${`0${this.items.length + 1}`.substr(-2)}`,
        high_critical_current: 0,
        high_critical_kwh: 0,
        high_critical_voltage: 0,
        low_critical_current: 0,
        low_critical_kwh: 0,
        low_critical_voltage: 0,
        status: 'normal',
        editable: true,
        isNew: true,
      });
    },
    setRowClass() {
      return '';
    },
    onDelete(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
};
</script>
