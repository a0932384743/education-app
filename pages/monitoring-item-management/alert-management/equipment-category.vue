<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="告警管理-設備類" :items="items">
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
            <template #[`item.device`]="{ item }">
              <td
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
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
            <template #[`item.cpu_utilization`]="{ item }">
              <div v-if="!item.editable">{{ item.cpu_utilization }}</div>
              <v-text-field
                v-else
                v-model="item.cpu_utilization"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.memory_utilization`]="{ item }">
              <div v-if="!item.editable">{{ item.memory_utilization }}</div>
              <v-text-field
                v-else
                v-model="item.memory_utilization"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.temp_high`]="{ item }">
              <div v-if="!item.editable">{{ item.temp_high }}</div>
              <v-text-field
                v-else
                v-model="item.temp_high"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.temp_low`]="{ item }">
              <div v-if="!item.editable">{{ item.temp_low }}</div>
              <v-text-field
                v-else
                v-model="item.temp_low"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.power`]="{ item }">
              <div v-if="!item.editable">{{$t(item.power === 'On' ? 'normal' : 'close')}} ({{ item.power }})</div>
              <v-btn
                v-else
                small
                class="white--text"
                :color="item.power === 'On' ? 'success' : 'danger'"
                @click="
                  item.power = item.power === 'On' ? 'Off' : 'On'
                "
              >
                <v-icon size="20" dark>mdi-power</v-icon>
                {{ item.power }}
              </v-btn>
            </template>
            <template #[`item.operate`]="{ item }">
              <v-btn
                small
                :disabled="Object.keys(item).some((key) => item[key] === '')"
                :color="item.editable ? 'secondary' : 'info'"
                @click="changeAlert(item)"
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
import items from '~/assets/json/equipment-category-alert.json';

export default {
  name: 'EquipmentCategory',
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
        {
          text: this.$t('device.id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('device.name'),
          value: 'device',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'isAlerting',
        },
        {
          text: this.$t('cpu.usage'),
          value: 'cpu_utilization',
        },
        {
          text: this.$t('memory.usage'),
          value: 'memory_utilization',
        },
        {
          text: this.$t('high.temperature'),
          value: 'temp_high',
        },
        {
          text: this.$t('low.temperature'),
          value: 'temp_low',
        },
        {
          text: this.$t('power.module'),
          value: 'power',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
  methods:{
    changeAlert(item){
      Object.keys(item).every((key) => item[key])
        ? (item.editable = !item.editable)
        : (item.editable = true);

      if(!item.editable){
        this.$snackbar.info('更新成功');
      }
    }
  },
};
</script>
