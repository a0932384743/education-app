<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="電路介面管理-資策會界接介面資料維護" :items="items">
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
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <div>(ifindex)</div>
              </div>
            </template>
            <template #[`header.inflow_high_threshold`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <div>{{ $t('high.threshold') }}</div>
              </div>
            </template>
            <template #[`header.inflow_low_threshold`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <div>{{ $t('high.threshold') }}</div>
              </div>
            </template>
            <template #[`header.outflow_high_threshold`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <div>{{ $t('low.threshold') }}</div>
              </div>
            </template>
            <template #[`header.outflow_low_threshold`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <div>{{ $t('low.threshold') }}</div>
              </div>
            </template>
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="addCircuit()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.ifindex`]="{ item }">
              <div v-if="!item.editable">{{ item.ifindex }}</div>
              <v-select
                v-else
                v-model="item.ifindex"
                small
                label=""
                required
                :items="ifindexOptions"
              />
            </template>
            <template #[`item.port`]="{ item }">
              <div v-if="!item.editable">{{ item.port }}</div>
              <v-select
                v-else
                v-model="item.port"
                small
                label=""
                required
                :items="portOptions"
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.inflow_high_threshold`]="{ item }">
              <div v-if="!item.editable">{{ item.inflow_high_threshold }}</div>
              <v-text-field
                v-else
                v-model="item.inflow_high_threshold"
                small
                label=""
                required
                type="number"
                min="0"
                max="1500"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.inflow_low_threshold`]="{ item }">
              <div v-if="!item.editable">{{ item.inflow_low_threshold }}</div>
              <v-text-field
                v-else
                v-model="item.inflow_low_threshold"
                small
                label=""
                required
                type="number"
                min="0"
                max="1500"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.outflow_high_threshold`]="{ item }">
              <div v-if="!item.editable">{{ item.outflow_high_threshold }}</div>
              <v-text-field
                v-else
                v-model="item.outflow_high_threshold"
                small
                label=""
                required
                type="number"
                min="0"
                max="1500"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.outflow_low_threshold`]="{ item }">
              <div v-if="!item.editable">{{ item.outflow_low_threshold }}</div>
              <v-text-field
                v-else
                v-model="item.outflow_low_threshold"
                small
                label=""
                required
                type="number"
                min="0"
                max="1500"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.bandwidth`]="{ item }">
              <div v-if="!item.editable">{{ item.bandwidth }}</div>
              <v-text-field
                v-else
                v-model="item.bandwidth"
                small
                label=""
                required
                type="number"
                min="0"
                max="2000"
                :rules="[
                  (val) => val > 0 || 'This field must be greater than 0',
                ]"
              />
            </template>
            <template #[`item.is_alert`]="{ item }">
              <div v-if="!item.editable">{{ item.is_alert }}</div>
              <v-switch
                v-else
                v-model="item.is_alert"
                small
                label=""
                required
                color="info"
                :true-value="'Yes'"
                :false-value="'No'"
              />
            </template>

            <template #[`item.operate`]="{ item }">
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
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/iii-circuit.json';

export default {
  name: 'IiiCircuit',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
      ifindexOptions: [39, 75, 137],
      portOptions: ['Gi0/0/1/7', 'Bundle-Ether80'],
    };
  },
  computed: {
    headers() {
      return [
        { text: this.$t('interface.id'), value: 'id' },
        { text: this.$t('type'), value: 'type' },
        { text: this.$t('interface.description'), value: 'description' , width: 250},
        { text: this.$t('interface.source'), value: 'source' },
        { text: this.$t('interface.destination'), value: 'destination' },
        { text: this.$t('interface.equipment'), value: 'equipment' },
        { text: this.$t('ifindex'), value: 'ifindex' },
        { text: this.$t('port'), value: 'port' },
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
  methods: {
    addCircuit() {
      this.items.push({
        id: this.items.length + 1,
        type: 'III',
        description: `TWAREN-TRTC-ASR9006-${
          this.items.length + 1
        } to III Cisco-3650`,
        source: '科技大樓',
        destination: '臺北(資策會)',
        equipment: `TWAREN-TRICASR9006-${this.items.length + 1}`,
        ifindex: 39,
        port: 'Bundle-Ether80',
        inflow_high_threshold: 0,
        inflow_low_threshold: 0,
        outflow_high_threshold: 0,
        outflow_low_threshold: 0,
        bandwidth: 0,
        is_alert: 'No',
        editable: true,
      });
    },
  },
};
</script>
