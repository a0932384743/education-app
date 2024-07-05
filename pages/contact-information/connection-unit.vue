<template>
  <v-row>
    <table-card title="連線單位聯絡資料維護" :items="items">
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
          :fixed-header="true"
          :headers="headers"
          :items="items"
          :search="search"
          :page="page"
          :loading="loading"
          :items-per-page="itemPerPage"
          :footer-props="footerProps"
          :header-props="headerProps"
          height="500px"
          hide-default-footer
        >
          <template #[`item.whoisOrgID`]="{ item }">
            <div v-if="!item.editable">{{ item.whoisOrgID }}</div>
            <v-text-field
              v-else
              :value="item.whoisOrgID"
              small
              label="ORG"
              required
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
              @change="item.whoisOrgID = 'ORG' + $event"
            />
          </template>
          <template #[`item.orgNameZh`]="{ item }">
            <div v-if="!item.editable">{{ item.orgNameZh }}</div>
            <v-select
              v-else
              :value="item.orgNameZh"
              small
              :items="orgOptions"
              required
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
              @change="
                item.orgNameZh = $event
                item.orgNameEn = orgMap[$event].orgNameEn
                item.gigaPoP = orgMap[$event].gigaPoP
              "
            />
          </template>
          <template #[`item.bgpCommunity`]="{ item }">
            <div v-if="!item.editable">{{ item.bgpCommunity }}</div>
            <v-text-field
              v-else
              :value="item.bgpCommunity"
              label=""
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
              @change="
                item.bgpCommunity = $event.substr(0, 5) + ':' + $event.substr(5)
              "
            ></v-text-field>
          </template>
          <template #[`item.ipv4Route`]="{ item }">
            <div v-if="!item.editable">{{ item.ipv4Route }}</div>
            <v-text-field
              v-else
              v-model="item.ipv4Route"
              label=""
              :rules="[
                (v) => !!v || 'IPv4 address is required',
                (v) =>
                  /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\/\d{1,2})?$/.test(v) ||
                  'Invalid IPv4 address format',
              ]"
            ></v-text-field>
          </template>
        </v-data-table>
      </template>
    </table-card>
  </v-row>
</template>

<script>
import items from '~/assets/json/connection-unit.json';

export default {
  name: 'ConnectionUnit',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
      orgMap: {
        '國網中心-北部分部': {
          orgNameZh: '國網中心-北部分部',
          orgNameEn: 'NCT - TP',
          gigaPoP: 'TPE',
        },
        '國網中心-中部分部': {
          orgNameZh: '國網中心-中部分部',
          orgNameEn: 'NCT - TXG',
          gigaPoP: 'TXG',
        },
        '國網中心-南部分部': {
          orgNameZh: '國網中心-南部分部',
          orgNameEn: 'NCT - TNN',
          gigaPoP: 'TNN',
        },
      },
    };
  },
  computed: {
    orgOptions() {
      return ['國網中心-北部分部', '國網中心-中部分部', '國網中心-南部分部'];
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('whois.org.id'),
          value: 'whoisOrgID',
        },
        {
          text: this.$t('org.name.zh'),
          value: 'orgNameZh',
        },
        {
          text: this.$t('org.name.en'),
          value: 'orgNameEn',
        },
        {
          text: this.$t('giga.pop'),
          value: 'gigaPoP',
        },
        {
          text: this.$t('bgp.community'),
          value: 'bgpCommunity',
        },
        {
          text: this.$t('ipv4.route'),
          value: 'ipv4Route',
        },
        {
          text: this.$t('ipv6.route'),
          value: 'ipv6Route',
        },
        {
          text: this.$t('endpoint.ipv6.address'),
          value: 'endpointIpv6Address',
        },
        {
          text: this.$t('contact.info'),
          value: 'contactInfo',
        },
        {
          text: this.$t('interface.device'),
          value: 'interfaceDevice',
        },
        {
          text: this.$t('interface.device.ifindex'),
          value: 'interfaceDeviceIfindex',
        },
        {
          text: this.$t('interface.port.name'),
          value: 'interfacePortName',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'isAlerting',
        }
      ];
    },
  },
  methods: {
    log(e) {
      console.log(e);
    },
  },
};
</script>
