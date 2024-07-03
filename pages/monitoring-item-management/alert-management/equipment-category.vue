<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="告警管理-設備類" :items="items">
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
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`item.device`]="{ item }">
              <td
                :class="item.is_alert === 'On' ? 'success' : 'secondary'"
                nowrap="nowrap"
                style="border-color: white !important; color: white !important"
              >
                {{ item.device || '-' }}
              </td>
            </template>
            <template #[`item.is_alert`]="{ item }">
              <div v-if="!item.editable">{{ item.is_alert }}</div>
              <v-switch
                v-else
                color="info"
                class="mt-0"
                :value="item.is_alert === 'on'"
                hide-details
                @change="item.is_alert = item.is_alert === 'on' ? 'off' : 'on'"
              ></v-switch>
            </template>
            <template #[`item.cpu_utilization`]="{ item }">
              <div v-if="!item.editable">{{ item.cpu_utilization }}</div>
              <v-text-field
                v-else
                v-model="item.cpu_utilization"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.memory_utilization`]="{ item }">
              <div v-if="!item.editable">{{ item.memory_utilization }}</div>
              <v-text-field
                v-else
                v-model="item.memory_utilization"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.temp_high`]="{ item }">
              <div v-if="!item.editable">{{ item.temp_high }}</div>
              <v-text-field
                v-else
                v-model="item.temp_high"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.temp_low`]="{ item }">
              <div v-if="!item.editable">{{ item.temp_low }}</div>
              <v-text-field
                v-else
                v-model="item.temp_low"
                type="number"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
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
import items from '~/assets/json/equipment-category-alert.json'

export default {
  name: 'EquipmentCategory',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('device.id'),
          value: 'id',
        },
        {
          text: this.$t('device.name'),
          value: 'device',
        },
        {
          text: this.$t('interface.alerting'),
          value: 'is_alert',
        },
        {
          text: this.$t('cpu.usage'),
          value: 'cpu_utilization',
        },
        {
          text: this.$t('memory.usage'),
          value: 'memory_utilization',
        },
        {
          text: this.$t('high.temperature'),
          value: 'temp_high',
        },
        {
          text: this.$t('low.temperature'),
          value: 'temp_low',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ]
    },
  },
}
</script>
