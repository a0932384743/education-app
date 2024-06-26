<template>
  <v-row>
    <v-col :cols="12">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">監控項目-告警管理-設備類</span>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
        >
          <template #[`item.operate`]>
            <v-btn color="secondary" fab x-small dark>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/equipment-category-alert.json';

export default {
  name: 'EquipmentCategory',
  layout: 'admin-layout',
  data: () => {
    return {
      headers: [
        { text: '設備編號', value: 'id' },
        { text: '設備名稱', value: 'device' },
        { text: '是否告警', value: 'is_alert' },
        { text: 'CPU使用率', value: 'cpu_utilization' },
        { text: '最高溫度', value: 'temp_high' },
        { text: '最低溫度', value: 'temp_low' },
        { text: '操作', value: 'operate' },
      ],
      footerProps: {
        itemsPerPageAllText: '所有',
        itemsPerPageText: '每頁筆數:',
        pageText: '第{0}-{1}項，共{2}項',
      },
      search: '',
      items,
    };
  },
};
</script>
