<template>
  <v-row>
    <table-card title="連線單位-連線單位聯絡資料" :items="items">
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
          <template #[`header.operate`]="{ header }">
            <div class="d-inline-flex align-center" style="gap: 0.5rem">
              <div>{{ header.text }}</div>
              <v-btn small color="success" @click="addConnectionUnit()">
                <v-icon size="20">mdi-plus</v-icon>
              </v-btn>
            </div>
          </template>
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
          <template #[`item.gigaPoP`]="{ item }">
            <div v-if="!item.editable">{{ item.gigaPoP }}</div>
            <v-select
              v-else
              v-model="item.gigaPoP"
              class="d-inline-block"
              :items="
                ['TNN', 'TPE', 'HUN', 'MIA'].map((s) => {
                  return {
                    value: s,
                    name: s,
                  }
                })
              "
              item-text="name"
              item-value="value"
              :label="$t('select.group')"
            ></v-select>
          </template>
          <template #[`item.interfaceDevice`]="{ item }">
            <div v-if="!item.editable">{{ item.interfaceDevice }}</div>
            <v-select
              v-else
              v-model="item.interfaceDevice"
              class="d-inline-block"
              :items="
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s) => {
                  return {
                    value: 'TWAREN-TN-ASR9001-' + ('0' + s).substring(-2),
                    name: 'TWAREN-TN-ASR9001-' + ('0' + s).substring(-2),
                  }
                })
              "
              item-text="name"
              item-value="value"
              :label="$t('select.group')"
            ></v-select>
          </template>
          <template #[`item.interfaceDeviceIfindex`]="{ item }">
            <div v-if="!item.editable">{{ item.interfaceDeviceIfindex }}</div>
            <v-text-field
              v-else
              v-model="item.interfaceDeviceIfindex"
              type="number"
              label=""
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
            ></v-text-field>
          </template>
          <template #[`item.isAlerting`]="{ item }">
            <div v-if="!item.editable">{{ item.isAlerting }}</div>
            <v-btn
              v-else
              small
              class="white--text"
              :color="item.isAlerting === 'On' ? 'success' : 'danger'"
              @click="item.isAlerting = item.isAlerting === 'On' ? 'Off' : 'On'"
            >
              <v-icon size="20" dark>mdi-power</v-icon>
              {{ item.isAlerting }}
            </v-btn>
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
  </v-row>
</template>

<script>
import items from '~/assets/json/connection-unit.json';

export default {
  name: 'ConnectionUnitManagement',
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
          orgNameEn: 'NCT-TP',
          gigaPoP: 'TPE',
        },
        '國網中心-中部分部': {
          orgNameZh: '國網中心-中部分部',
          orgNameEn: 'NCT-TXG',
          gigaPoP: 'TXG',
        },
        '國網中心-南部分部': {
          orgNameZh: '國網中心-南部分部',
          orgNameEn: 'NCT-TNN',
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
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  methods: {
    addConnectionUnit() {
      this.items.push({
        id: this.items.length + 1,
        bgpCommunity: '',
        connectUnit: '中央研究院',
        contactInfo: '',
        endpointIpv6Address: '2001:db8:22::1',
        gigaPoP: 'TPE',
        interfaceDevice: '',
        interfaceDeviceIfindex: 400,
        interfacePortName: 'Bundle-Ether23.1',
        ipv4Route: '0.0.0.0/24',
        ipv6Route: '2001:db8:22::/32',
        isAlerting: 'On',
        orgNameEn: '',
        orgNameZh: '',
        whoisOrgID: '',
      });
    },
  },
};
</script>
