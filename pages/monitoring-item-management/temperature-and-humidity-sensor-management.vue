<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="監控項目管理-溫溼度感應器管理" :items="items">
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
            <template #[`item.current_temperature`]="{ item }">
              <div v-if="!item.editable">
                {{ item.current_temperature || '-' }}°C
              </div>
              <v-text-field
                v-else
                v-model="item.current_temperature"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.high_critical_temperature`]="{ item }">
              <div v-if="!item.editable">
                {{ item.high_critical_temperature || '-' }}°C
              </div>
              <v-text-field
                v-else
                v-model="item.high_critical_temperature"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.low_critical_temperature`]="{ item }">
              <div v-if="!item.editable">
                {{ item.low_critical_temperature || '-' }}°C
              </div>
              <v-text-field
                v-else
                v-model="item.low_critical_temperature"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.current_humidity`]="{ item }">
              <div v-if="!item.editable">
                {{ item.current_humidity || '-' }}%
              </div>
              <v-text-field
                v-else
                v-model="item.current_humidity"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.high_critical_humidity`]="{ item }">
              <div v-if="!item.editable">
                {{ item.high_critical_humidity || '-' }}%
              </div>
              <v-text-field
                v-else
                v-model="item.high_critical_humidity"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.low_critical_humidity`]="{ item }">
              <div v-if="!item.editable">
                {{ item.low_critical_humidity || '-' }}%
              </div>
              <v-text-field
                v-else
                v-model="item.low_critical_humidity"
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
import moment from 'moment/moment';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'RoomTemperatureStatus',
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items:[]
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
          width: 200,
          cellClass: 'text-no-wrap',
        },
        {
          text: this.$t('device.location'),
          value: 'location',
        },
        {
          text: this.$t('current.temperature'),
          value: 'current_temperature',
        },
        {
          text: this.$t('high.critical.temperature'),
          value: 'high_critical_temperature',
        },
        {
          text: this.$t('low.critical.temperature'),
          value: 'low_critical_temperature',
        },
        {
          text: this.$t('current.humidity'),
          value: 'current_humidity',
        },
        {
          text: this.$t('high.critical.humidity'),
          value: 'high_critical_humidity',
        },
        {
          text: this.$t('low.critical.humidity'),
          value: 'low_critical_humidity',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  created() {
    this.items = this.$store.getters['tempAndHumi/getTempAndHumiList'].map(
      (item) => ({
        ...item,
        editable: false,
      })
    );
  },
  destroyed() {
    this.$store.dispatch('tempAndHumi/setTempAndHumiList', this.items);
  },
  methods: {
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        check_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        current_temperature: 9,
        current_humidity: 0,
        device: `TP-P8641-TEMP-HUMI-${`0${this.items.length + 1}`.substr(-2)}`,
        high_critical_temperature: 0,
        high_critical_humidity: 0,
        location: 'RACK 1',
        low_critical_temperature: 12.0,
        low_critical_humidity: 30.0,
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
