<template>
  <v-container fluid>
    <v-card class="px-10 py-5">
      <v-card-title>
        <h3>點對點 VPN 數量：3 筆</h3>
      </v-card-title>
      <v-data-table :headers="headers" :items="items" hide-default-footer>
        <template #top>
          <v-toolbar flat>
            <v-toolbar-title>VPN List</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'VPNAutoProvisioningSearch',
  layout: 'admin-layout',
  data() {
    return {
      headers: [
        { text: '#', value: 'index' },
        { text: '申請單位', value: 'applicantUnit' },
        { text: 'VLAN ID', value: 'vlanID' },
        { text: '甲端', value: 'endpointA' },
        { text: '乙端', value: 'endpointB' },
        { text: '申請時間', value: 'applicationDate' },
      ],
      items: [
        {
          index: 1,
          applicantUnit: '台大醫學中心',
          vlanID: '101',
          endpointA: '臺大GigaPOP',
          endpointB: '成大GigaPOP',
          applicationDate: '114/2/1',
        },
        {
          index: 2,
          applicantUnit: '中山大學',
          vlanID: '102',
          endpointA: '中山GigaPOP',
          endpointB: '臺東GigaPOP',
          applicationDate: '114/2/7',
        },
        {
          index: 3,
          applicantUnit: '台大計算機中心',
          vlanID: '103',
          endpointA: '臺大GigaPOP',
          endpointB: '中山GigaPOP',
          applicationDate: '114/5/1',
        },
      ],
    };
  },
};
</script>
