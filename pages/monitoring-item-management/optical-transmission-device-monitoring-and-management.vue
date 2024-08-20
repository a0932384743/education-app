<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="監控項目管理-光傳輸元件監控管理" :items="items">
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
            :item-class="setRowClass"
          >
            <template #[`header.pre_fec_bit_error_rate`]="{ header }">
              <span v-html="header.text"></span>
            </template>
            <template #[`header.uncorrectable_bit_errors`]="{ header }">
              <span v-html="header.text"></span>
            </template>
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.received_power`]="{ item }">
              <div v-if="!item.editable">{{ item.received_power }} dBM</div>
              <v-text-field
                v-else
                v-model="item.received_power"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.optical_signal_to_noise_ratio`]="{ item }">
              <div v-if="!item.editable">
                {{ item.optical_signal_to_noise_ratio }} dB
              </div>
              <v-text-field
                v-else
                v-model="item.optical_signal_to_noise_ratio"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.pre_fec_bit_error_rate`]="{ item }">
              <div v-if="!item.editable">{{ item.pre_fec_bit_error_rate }}</div>
              <v-text-field
                v-else
                v-model="item.pre_fec_bit_error_rate"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.uncorrectable_bit_errors`]="{ item }">
              <div v-if="!item.editable">
                {{ item.uncorrectable_bit_errors }}
              </div>
              <v-text-field
                v-else
                v-model="item.uncorrectable_bit_errors"
                type="number"
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
  name: 'OpticalTransmissionDeviceMonitoringStatus',
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
          text: this.$t('check.time'),
          value: 'check_time',
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('received.power'),
          value: 'received_power',
        },
        {
          text: this.$t('optical.signal.to.noise.ratio'),
          value: 'optical_signal_to_noise_ratio',
        },
        {
          text: this.$t('pre.fec.bit.error.rate'),
          value: 'pre_fec_bit_error_rate',
        },
        {
          text: this.$t('uncorrectable.bit.errors'),
          value: 'uncorrectable_bit_errors',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
    items() {
      return this.$store.getters['optical/getOpticalList'].map((l) => ({
        ...l,
        editable: false,
      }));
    },
  },
  destroyed() {
    this.$store.dispatch('optical/setOpticalList', this.items);
  },
  methods: {
    setRowClass() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return '';
      }
    },
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        check_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        device: `MX10008-400G-0/0/${`0${this.items.length}${1}`.substr(-2)}`,
        optical_signal_to_noise_ratio: 0,
        pre_fec_bit_error_rate: '0E-12',
        received_power: 0,
        status: 'normal',
        uncorrectable_bit_errors: 0,
        editable: true,
      });
    },
    onDelete(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
};
</script>
