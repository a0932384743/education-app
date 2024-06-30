<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="告警管理-連線單位" :items="items">
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
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            :loading="loading"
            hide-default-footer
          >
            <template #[`item.connectUnit`]="{ item }">
              <td
                :class="item.isAlerting=== 'On'  ? 'success' : 'secondary'"
                nowrap="nowrap"
                style="border-color:white !important;"
              >
                {{ item.connectUnit || '-' }}
              </td>
            </template>
            <template #[`item.isAlerting`]="{ item }">
              <div v-if="!item.editable">{{ item.isAlerting }}</div>
              <v-switch
                v-else
                v-model="item.isAlerting"
                small
                false-value="Off"
                true-value="On"
                color="info"
                label=""
              />
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
    </v-col>
  </v-row>
</template>

<script>
import items from '~/assets/json/connection-unit.json';
import { statusMap } from '~/utils/statusMap';
export default {
  name: 'ConnectionUnit',
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
          text: this.$t('connect.unit.id'),
          value: 'id',
          width: 100
        },
        {
          text: this.$t('connect.unit.name'),
          value: 'connectUnit',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'isAlerting',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
    items() {
      return items.map((item) => ({ ...item, editable: false }));
    },
  },
};
</script>
