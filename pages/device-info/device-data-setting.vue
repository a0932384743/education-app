<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">設備資料設定檔</span>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search">
          <template #[`item.config`]>
            <v-btn color="secondary" fab small dark>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
          <template #[`item.contact`]="{ item }">
            <a
              class="text-no-wrap info--text my-1 d-block"
              :href="`address:${item?.contact}`"
              >{{ item?.contact || '--'
              }}<v-icon color="info">mdi-card-account-mail-outline</v-icon></a
            >
            <a
              class="text-no-wrap info--text my-1 d-block"
              :href="`tel:${item?.phone}`"
              >{{ item?.phone || '--' }}</a
            >
            <a
              class="text-no-wrap info--text my-1 d-block"
              :href="`tel:${item?.mobile}`"
              >{{ item?.mobile || '--' }}</a
            >
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import deviceDataSettings from '~/assets/json/device-data-setting.json'

export default {
  name: 'DeviceDataSetting',
  layout: 'admin-layout',
  data() {
    return {
      search: '',
      headers: [
        {
          text: '編號',
          value: 'id',
        },
        { text: '設備類別', value: 'type' },
        { text: '設備名稱', value: 'device' },
        { text: 'GigaPop', value: 'gigapop' },
        { text: 'OOB IP', value: 'ip' },
        { text: 'IPv4', value: 'ipv4' },
        { text: 'IPv6', value: 'ipv6' },
        { text: '聯絡資訊', value: 'contact' },
        { text: 'Config', value: 'config' },
      ],
    }
  },
  computed: {
    items() {
      return deviceDataSettings
    },
  },
}
</script>
