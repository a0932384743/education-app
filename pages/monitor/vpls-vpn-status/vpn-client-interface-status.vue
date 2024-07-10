<template>
  <v-row>
    <v-col cols="12">
      <table-card title="VPLS VPN狀態-VPN Client界接介面狀況" :items="items">
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
            :item-class="setRowClass"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.vpn_node`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.vpn_node || '-' }}
              </td>
            </template>
            <template #[`item.device`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.interface`]="{ item }">
              <td
                :class="`${statusMap[item.status]} lighten-2`"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.interface || '-' }}
              </td>
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip :color="statusMap[item.status]" dark small>
                {{ item.status.toUpperCase() }}
              </v-chip>
            </template>
          </v-data-table>
        </template>
      </table-card>

    </v-col>
  </v-row>
</template>

<script>
import { statusMap } from '~/utils/statusMap';
import items from '~/assets/json/vpls-vpn-status.json';

export default {
  name: 'VpnClientInterfaceStatus',
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('vpn.id'),
          value: 'vpn_id',
          width: 80,
        },
        {
          text: this.$t('vpn.name'),
          value: 'vpn_name',
        },
        {
          text: this.$t('vpn.node'),
          value: 'vpn_node',
        },
        {
          text: this.$t('interface.device'),
          value: 'device',
        },
        {
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
      ];
    },
    items() {
      return items;
    },
  },
  methods: {
    setRowClass(item) {
      console.log(this.$vuetify.breakpoint)
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${statusMap[item.status]} lighten-2`;
      }
    },
  },
};
</script>
