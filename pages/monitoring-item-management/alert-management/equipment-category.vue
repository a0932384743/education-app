<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="監控項目-告警管理-設備類" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
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
            hide-default-footer
          >
            <template #[`item.operate`]>
              <v-btn color="secondary" fab x-small dark>
                <v-icon>mdi-pencil</v-icon>
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
  computed: {
    headers(){
      return [
        {
          text: this.$t('device.id'),
          value: 'id'
        },
        {
          text: this.$t('device.name'),
          value: 'device' },
        {

          text: this.$t('interface.alerting'),
          value: 'is_alert' },
        {
          text: this.$t('cpu.usage'),
          value: 'cpu_utilization' },
        {
          text: this.$t('high.temperature'),
          value: 'temp_high' },
        {
          text: this.$t('low.temperature'),
          value: 'temp_low' },
        {
          text: this.$t('operate'),
          value: 'operate' },
      ];
    },
    items() {
      return items;
    },
  },
};
</script>
