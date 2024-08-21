<template>
  <v-row>
    <power-history-model
      :show="show"
      @close:show="show = false"
    />
    <v-col :cols="12">
      <table-card title="監控項目管理-UPS不斷電系統管理" :items="items">
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
            <template #[`item.battery_capacity`]="{ item }">

              <div v-if="!item.editable">
                {{ $t(item.battery_capacity) }} %
              </div>
              <v-text-field
                v-else
                v-model="item.battery_capacity"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.battery_health`]="{ item }">
              {{ $t(item.battery_health) }}
            </template>
            <template #[`item.mains_power_interruption`]="{ item }">
              {{ $t(item.mains_power_interruption) }}
            </template>
            <template #[`item.battery_voltage`]="{ item }">
              <div v-if="!item.editable">
                {{ $t(item.battery_voltage) }} V
              </div>
              <v-text-field
                v-else
                v-model="item.battery_voltage"
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
import PowerHistoryModel from '~/components/PowerHistoryModel.vue';

import { statusMap } from '~/utils/statusMap';

export default {
  name: 'UpsUninterruptiblePowerSystemManagement',
  components: {  PowerHistoryModel },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items:[],
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
          text: this.$t('battery.health'),
          value: 'battery_health',
        },
        {
          text: this.$t('battery.capacity'),
          value: 'battery_capacity',
        },
        {
          text: this.$t('mains.power.interruption'),
          value: 'mains_power_interruption',
        },
        {
          text: this.$t('battery.voltage'),
          value: 'battery_voltage',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },

      ];
    },
  },
  created() {
    this.items = this.$store.getters['ups/getUPSList'].map((item) => ({
      ...item,
      editable: false,
    }));
  },
  destroyed() {
    this.$store.dispatch('ups/setPDUList' , this.items);
  },
  methods: {
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        battery_capacity: 0,
        battery_health: 'normal',
        battery_voltage: 0,
        device: `TP-UPS-${ (`0${  this.items.length + 1}`).substr(-2)}`,
        mains_power_interruption:'normal',
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
