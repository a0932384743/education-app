<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="監控項目管理-BGP Peering管理" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            loading,
            items,
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
            <template #[`item.input`]="{ item }">
              <div v-if="!item.editable">{{ item.input }}</div>
              <v-text-field
                v-else
                v-model="item.input"
                small
                min="0"
                type="number"
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.output`]="{ item }">
              <div v-if="!item.editable">{{ item.output }}</div>
              <v-text-field
                v-else
                v-model="item.output"
                small
                min="0"
                type="number"
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.remark`]="{ item }">
              <div v-if="!item.editable">{{ item.remark }}</div>
              <v-text-field
                v-else
                v-model="item.remark"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.status`]="{ item }">
              <v-chip
                :small="true"
                :color="statusMap[item.status]"
                class="lighten-1 text--black align-content-center"
              >
                {{ item.status.toUpperCase() }}
              </v-chip>
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
import items from '~/assets/json/device-traffic.json';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'BgpPeeringManagement',
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      items: items.map(item=>({
       ...item,
        editable: false,
      }))
    };
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('device'),
          value: 'device',
        },
        {
          text: this.$t('interface'),
          value: 'interface',
        },
        {
          text: this.$t('interface.description'),
          value: 'desc',
        },
        {
          text: 'Input(Mbps)',
          value: 'input',
        },
        {
          text: 'Output(Mbps)',
          value: 'output',
        },
        {
          text: this.$t('remark'),
          value: 'remark',
        },
        {
          text: this.$t('status'),
          value: 'status',
        },
        {
          text: this.$t('check.time'),
          value: 'check_time',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
};
</script>
