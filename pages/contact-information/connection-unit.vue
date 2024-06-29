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
        >
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
  computed: {
    items() {
      return items;
    },
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
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
        },
      ];
    },
  },
};
</script>
