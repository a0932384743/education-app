<template>
  <v-row>
    <flow-history-model :show="show" @close:show="show=false"/>
    <v-col :cols="12">
      <table-card title="關聯式分析清單" :items="items">
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
            :loading="loading"
            :headers="headers"
            :items="
              items.map((item) => {
                return {
                  ...item,
                  interface_desc_text: item.devices
                    ?.map((d) => d.interface_desc)
                    .join(','),
                  device_text: item.devices?.map((d) => d.device).join(','),
                  interface_text: item.devices
                    ?.map((d) => d.interface)
                    .join(','),
                  events_text: item.devices
                    ?.map((d) => d.events.map((e) => e).join(','))
                    .join(','),
                }
              })
            "
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
            :item-class="setRowClass"
          >
            <template #body="{ items }">
              <tbody>
                <template v-if="$vuetify.breakpoint.smAndUp">
                  <template v-for="item in items">
                    <template v-if="item.devices.length > 0">
                      <tr
                        v-for="(device, index) in item.devices"
                        :key="`${item.id}_${device.id}`"
                      >
                        <td v-if="index === 0" :rowspan="item.devices?.length">
                          {{ item.id }}
                        </td>
                        <td
                          v-if="index === 0"
                          :rowspan="item.devices?.length"
                          nowrap="nowrap"
                        >
                          {{ item.customer }}
                          <v-btn
                            class="ma-2 rounded-0"
                            outlined
                            x-small
                            fab
                            color="info"
                          >
                            <v-icon color="info" size="15">mdi-magnify</v-icon>
                          </v-btn>
                        </td>
                        <td
                          v-if="index === 0"
                          :rowspan="item.devices?.length"
                          nowrap="nowrap"
                        >
                          <v-chip :color="statusMap[item.status]" dark small>
                            {{ item.status.toUpperCase() }}
                          </v-chip>
                        </td>
                        <td nowrap="nowrap">
                          {{ device.interface_desc }}
                        </td>
                        <td nowrap="nowrap">
                          {{ device.device }}
                          <v-btn
                            class="ma-2 rounded-0"
                            outlined
                            x-small
                            fab
                            color="info"
                            @click="show=true"
                          >
                            <v-icon color="info" size="15"
                              >mdi-chart-line</v-icon
                            >
                          </v-btn>
                        </td>
                        <td nowrap="nowrap">
                          {{ device.interface }}
                        </td>
                        <td>
                          <a
                            v-for="event in device.events"
                            :key="`${item.id}_${device.id}_${event.id}`"
                            class="d-block info--text"
                          >
                            {{ event.event }}
                            <v-btn
                              class="ma-2 rounded-0"
                              outlined
                              x-small
                              fab
                              color="info"
                            >
                              <v-icon color="info" size="15"
                                >mdi-magnify</v-icon
                              >
                            </v-btn>
                          </a>
                        </td>
                      </tr>
                    </template>
                    <tr v-else :key="`${item.id}`">
                      <td>
                        {{ item.id }}
                      </td>
                      <td nowrap="nowrap">
                        {{ item.customer
                        }}<v-btn
                          class="ma-2 rounded-0"
                          outlined
                          x-small
                          fab
                          color="info"
                        >
                          <v-icon color="info" size="15">mdi-magnify</v-icon>
                        </v-btn>
                      </td>
                      <td nowrap="nowrap">
                        <v-chip :color="statusMap[item.status]" dark small>
                          {{ item.status.toUpperCase() }}
                        </v-chip>
                      </td>
                      <td nowrap="nowrap"></td>
                      <td nowrap="nowrap"></td>
                      <td nowrap="nowrap"></td>
                      <td></td>
                    </tr>
                  </template>
                </template>
                <template v-else>
                  <v-card v-for="item in items" :key="item.id" class="mb-3">
                    <v-card-title
                      class="subheading font-weight-bold d-inline-flex justify-space-between w-100"
                    >
                      <div>
                        {{ item.id }} {{ item.customer }}
                        <v-btn
                          class="ma-2 rounded-0"
                          outlined
                          x-small
                          fab
                          color="info"
                        >
                          <v-icon color="info" size="15">mdi-magnify</v-icon>
                        </v-btn>
                      </div>
                      <v-chip :color="statusMap[item.status]" dark small>
                        {{ item.status.toUpperCase() }}
                      </v-chip>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item
                        v-for="device in item.devices"
                        :key="device.id"
                        class="flex-column"
                      >
                        <v-list-item-content class="w-100">
                          <v-list-item-title class="subtitle-1"
                            >{{ device.device
                            }}<v-btn
                              class="ma-2 rounded-0"
                              outlined
                              x-small
                              fab
                              color="info"
                              @click="show=true"
                          >
                              <v-icon color="info" size="15"
                                >mdi-chart-line</v-icon
                              >
                            </v-btn></v-list-item-title
                          >
                          <v-row>
                            <v-col>
                              {{ device.interface }}
                            </v-col>
                            <v-col>
                              {{ device.interface_desc }}
                            </v-col>
                            <v-col>
                              <a
                                v-for="event in device.events"
                                :key="`${item.id}_${device.id}_${event.id}`"
                                class="d-block info--text"
                              >
                                {{ event.event}}
                                <v-btn
                                  class="ma-2 rounded-0"
                                  outlined
                                  x-small
                                  fab
                                  color="info"
                                >
                                  <v-icon color="info" size="15"
                                    >mdi-magnify</v-icon
                                  >
                                </v-btn>
                              </a>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </template>
              </tbody>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import FlowHistoryModel from '@/components/FlowHistoryModel.vue';
import TableCard from '@/components/TableCard.vue';
import { statusMap } from '@/utils/statusMap';
import items from '~/assets/json/correlation-device.json';

export default {
  name: 'CorrelationAnalysis',
  components: { FlowHistoryModel, TableCard },
  layout: 'admin-layout',
  data() {
    return {
      statusMap,
      show:false
    };
  },
  computed: {
    headers() {
      return [
        { text: this.$t('id'), value: 'id', width: 80 },
        { text: '連線單位/客戶', value: 'customer' },
        { text: this.$t('status'), value: 'status' },
        { text: '關聯介面描述', value: 'interface_desc_text' },
        { text: '關聯介面設備', value: 'device_text' },
        { text: '關聯介面', value: 'interface_text' },
        { text: '事件編號', value: 'events_text' },
      ];
    },
    items() {
      return items;
    },
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${this.statusMap[item.status]} lighten-2`;
      }
    },
  },
};
</script>
