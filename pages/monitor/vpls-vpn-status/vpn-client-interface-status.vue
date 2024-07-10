<template>
  <v-row>
  </v-row>
</template>

<script>
import lineData from '~/assets/json/vpls-vpn-status-history.json';
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
    lineData() {
      return lineData;
    },
    pieData() {
      return ['normal', 'abnormal', 'non-warning'].map((status) => {
        const map = {
          normal: 'up',
          abnormal: 'down',
          'non-warning': 'non-warning',
        };
        return {
          name: status,
          value:
            items.filter((item) => item.status === map[status]).length +
            (status === 'normal' ? 110 : status === 'abnormal' ? 100 : 2),
        };
      });
    },
  },
};
</script>
