<template>
  <v-container fluid>
    <v-alert
      transition="fade-transition"
      border="left"
      colored-border
      color="warning accent-4"
      elevation="2"
    >
      <div class="subtitle-1 font-weight-bold">
        <v-icon size="20">mdi-information-slab-symbol</v-icon
        >{{ $t('notify') }}:
      </div>
      <ul style="list-style: number">
        <li>
          {{ $t('login.hint.1') }}
        </li>
        <li>
          {{ $t('login.hint.2') }}
        </li>
      </ul>
    </v-alert>
    <v-row class="px-2" dense>
      <v-col cols="12" sm="6" md="3" class="h-100">
        <v-card elevation="3" color="danger" class="lighten-1">
          <v-card-text>
            <div class="d-flex align-center">
              <div class="flex-grow-1">
                <h4 class="text-h4 font-weight-bold">15件</h4>
                <p class="text-h5">嚴重事件</p>
              </div>
              <v-icon
                class="flex-grow-0"
                style="opacity: 0.5"
                size="60"
                color="secondary"
              >
                mdi-alert-circle
              </v-icon>
            </div>
          </v-card-text>
          <v-card-actions class="px-0 py-0">
            <v-btn text class="w-100" style="background: #80808042" dark>
              查看更多<v-icon size="15" dark> mdi-arrow-right-circle </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="h-100">
        <v-card elevation="3" color="danger" class="lighten-1">
          <v-card-text>
            <div class="d-flex align-center">
              <div class="flex-grow-1">
                <h4 class="text-h4 font-weight-bold">
                  2 <small>失聯設備/40</small>
                </h4>
                <p class="text-h5">國內骨幹</p>
              </div>
              <v-icon
                class="flex-grow-0"
                style="opacity: 0.5"
                size="60"
                color="secondary"
              >
                mdi-server
              </v-icon>
            </div>
          </v-card-text>
          <v-card-actions class="px-0 py-0">
            <v-btn text class="w-100" style="background: #80808042" dark>
              查看更多<v-icon size="15" dark> mdi-arrow-right-circle </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="h-100">
        <v-card elevation="3" color="success" class="lighten-1">
          <v-card-text>
            <div class="d-flex align-center">
              <div class="flex-grow-1">
                <h4 class="text-h4 font-weight-bold">
                  0 <small>失聯設備/10</small>
                </h4>
                <p class="text-h5">國際骨幹</p>
              </div>
              <v-icon
                class="flex-grow-0"
                style="opacity: 0.5"
                size="60"
                color="secondary"
              >
                mdi-chip
              </v-icon>
            </div>
          </v-card-text>
          <v-card-actions class="px-0 py-0">
            <v-btn text class="w-100" style="background: #80808042" dark>
              查看更多<v-icon size="15" dark> mdi-arrow-right-circle </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="h-100">
        <v-card elevation="3" color="warning" class="lighten-1">
          <v-card-text>
            <div class="d-flex align-center">
              <div class="flex-grow-1">
                <h4 class="text-h4 font-weight-bold">
                  1 <small>失聯設備/10</small>
                </h4>
                <p class="text-h5">軟體資源</p>
              </div>
              <v-icon
                class="flex-grow-0"
                style="opacity: 0.5"
                size="60"
                color="secondary"
              >
                mdi-broadcast
              </v-icon>
            </div>
          </v-card-text>
          <v-card-actions class="px-0 py-0">
            <v-btn text class="w-100" style="background: #80808042" dark>
              查看更多<v-icon size="15" dark> mdi-arrow-right-circle </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <grid-layout
      v-if="dashboardList.length > 0"
      :layout.sync="dashboardList"
      :col-num="12"
      :row-num="6"
      :row-height="250"
      is-draggable
      is-resizable
      vertical-compact
      :use-css-transforms="true"
      @layout-updated="onLayoutUpdated"
    >
      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[0].x"
        :y="dashboardList[0].y"
        :w="dashboardList[0].w"
        :h="dashboardList[0].h"
        :i="dashboardList[0].i"
      >
        <map-card
          :title="dashboardList[0].name"
          :links="links"
          :nodes="nodes"
        />
      </grid-item>
      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[1].x"
        :y="dashboardList[1].y"
        :w="dashboardList[1].w"
        :h="dashboardList[1].h"
        :i="dashboardList[1].i"
      >
        <bar-chart-card
          :title="dashboardList[1].name"
          :items="events"
          :legends-props="{ show: false }"
          :x-axis="eventsCategory"
        />
      </grid-item>
      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[2].x"
        :y="dashboardList[2].y"
        :w="dashboardList[2].w"
        :h="dashboardList[2].h"
        :i="dashboardList[2].i"
      >
        <bar-chart-card
          :title="dashboardList[2].name"
          :items="cpus"
          :x-axis="cpus[0].category"
          :series-props="{
            stack: 'Total',
          }"
        />
      </grid-item>
      <grid-item
        v-if="dashboardList[5]"
        drag-allow-from=".v-card__title"
        :x="dashboardList[5].x"
        :y="dashboardList[5].y"
        :w="dashboardList[5].w"
        :h="dashboardList[5].h"
        :i="dashboardList[5].i"
      >
        <chart-card :title="dashboardList[5].name">
          <div class="overflow-auto fill-height">
            <v-data-table
              :items="configurations"
              :headers="configurationHeaders"
              fixed-header
              :items-per-page="5"
              :hide-default-footer="configurations.length <= 5"
            >
              <template #[`item.contact`]="{ item }">
                <div class="d-inline-flex flex-column" style="gap: 0.4rem">
                  <a class="info--text text-no-wrap" href="#"
                    >{{ item.contact }}
                    <v-icon size="20" class="mx-2" color="info"
                      >mdi-card-account-details-outline</v-icon
                    ></a
                  >
                  <a
                    class="info--text text-no-wrap"
                    :href="`tel:${item.mobile}`"
                    >{{ item.mobile }}</a
                  >
                  <a
                    class="info--text text-no-wrap"
                    :href="`tel:${item.phone}`"
                    >{{ item.phone }}</a
                  >
                </div>
              </template>
              <template #[`item.config`]="{ item }">
                <v-btn
                  small
                  color="info"
                  @click="goToDeviceConfiguration(item)"
                >
                  <v-icon>mdi-magnify</v-icon>
                  <span class="d-none d-sm-inline-block">{{ $t('view') }}</span>
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </chart-card>
      </grid-item>

      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[3].x"
        :y="dashboardList[3].y"
        :w="dashboardList[3].w"
        :h="dashboardList[3].h"
        :i="dashboardList[3].i"
      >
        <chart-card title="至今尚未關閉事件">
          <div class="overflow-auto fill-height">
            <v-data-table
              :headers="eventsNotCloseListHeader"
              :items="eventsNotCloseList"
              fixed-header
              :items-per-page="5"
              :hide-default-footer="eventsNotCloseList.length <= 5"
              :item-class="setRowClass"
            >
              <template #[`header.equipment`]="{ header }">
                <div class="d-inline-block text-center">
                  {{ header.text }}/Unit
                </div>
              </template>
              <template #[`item.id`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item.id }}
                </td>
              </template>
              <template #[`item.event`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.event }}
                </td>
              </template>
              <template #[`item.category`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.category }}
                </td>
              </template>
              <template #[`item.level`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  <v-icon :color="item.level">mdi-alert</v-icon>
                </td>
              </template>
              <template #[`item.startTime`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.startTime }}
                </td>
              </template>
              <template #[`item.endTime`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.endTime }}
                </td>
              </template>
              <template #[`item.equipment`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item?.equipment || '-' }}
                </td>
              </template>
              <template #[`item.desc`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item?.desc || '-' }}
                </td>
              </template>
            </v-data-table>
          </div>
        </chart-card>
      </grid-item>
      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[4].x"
        :y="dashboardList[4].y"
        :w="dashboardList[4].w"
        :h="dashboardList[4].h"
        :i="dashboardList[4].i"
      >
        <chart-card :title="dashboardList[4].name">
          <div class="overflow-auto fill-height">
            <v-data-table
              :headers="eventsAlertListHeader"
              :items="eventsAlertList"
              fixed-header
              :items-per-page="5"
              :hide-default-footer="eventsAlertList.length <= 5"
              :item-class="setRowClass"
            >
              <template #[`item.id`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item.id }}
                </td>
              </template>
              <template #[`item.event`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.event }}
                </td>
              </template>
              <template #[`item.category`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.category }}
                </td>
              </template>
              <template #[`item.level`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  <v-icon :color="item.level">mdi-alert</v-icon>
                </td>
              </template>
              <template #[`item.startTime`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                  nowrap="nowrap"
                >
                  {{ item.startTime }}
                </td>
              </template>
              <template #[`item.equipment`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item?.equipment || '-' }}
                </td>
              </template>
              <template #[`item.desc`]="{ item }">
                <td
                  :class="item.level"
                  class="lighten-1 "
                  style="border-color: inherit !important"
                >
                  {{ item?.desc || '-' }}
                </td>
              </template>
            </v-data-table>
          </div>
        </chart-card>
      </grid-item>
      <grid-item
        drag-allow-from=".v-card__title"
        :x="dashboardList[6].x"
        :y="dashboardList[6].y"
        :w="dashboardList[6].w"
        :h="dashboardList[6].h"
        :i="dashboardList[6].i"
      >
        <graph-chart-card :title="dashboardList[6].name" />
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import eventsNotCloseList from '~/assets/json/event-not-close.json';
import eventsAlertList from '~/assets/json/event-alert.json';
import nodes from '~/assets/map/tw-node.json';
import events from '~/assets/json/device-event.json';
import cpus from '~/assets/json/device-cpu-stastic.json';
import GraphChartCard from '~/components/GraphChartCard.vue';
import BarChartCard from '~/components/BarCahrtCard.vue';

import ChartCard from '~/components/ChartCard.vue';
import MapCard from '~/components/MapCard.vue';
import { statusMap } from '~/utils/statusMap';

export default {
  name: 'Dashboard',
  components: { ChartCard, BarChartCard, MapCard, GraphChartCard },
  layout: 'admin-layout',
  data() {
    return {
      nodes: [
        ...nodes,
        {
          name: 'New York',
          value: [128 - 75.98665 / 25, 22.5 + 42.550516 / 25, 3],
          status: 'non-warning',
        },
        {
          name: 'Illinois',
          value: [128 - 88.782984 / 25, 22.5 + 41.729062 / 25, 2],
          status: 'non-warning',
        },
        {
          name: 'California',
          value: [128 - 118.121125 / 25, 22.5 + 33.987429 / 25, 1],
          status: 'error',
        },
      ],
      links: [
        { source: '台北市', target: '台中市', value: 3 },
        { source: '台北市', target: '新北市', value: 2 },
        { source: '台北市', target: '宜蘭縣', value: 3 },
        { source: '台北市', target: '桃園縣', value: 1 },
        { source: '桃園縣', target: '新竹市', value: 1 },
        { source: '新竹市', target: '新竹縣', value: 1 },
        { source: '新竹市', target: '台中市', value: 1 },
        { source: '台北市', target: 'California', value: 2 },
        { source: '宜蘭縣', target: 'Illinois', value: 3 },
        { source: '台中市', target: '嘉義市', value: 2 },
        { source: '台中市', target: '南投縣', value: 2 },
        { source: '嘉義市', target: '台南市', value: 2 },
        { source: '台南市', target: '高雄市', value: 0 },
        { source: '台南市', target: '台東縣', value: 0 },
        { source: '花蓮縣', target: '宜蘭縣', value: 2 },
        { source: '台北市', target: '教育部資科司機房', value: 3 },
        { source: '台北市', target: '中央研究院', value: 3 },
        {
          source: '台北市',
          target: '國立臺灣大學 計算機及資訊網路中心',
          value: 3,
        },
        { source: '台北市', target: '國立政治大學 電子計算機中心', value: 3 },
        { source: '新北市', target: '教育部國教院三峽院區', value: 2 },
        { source: '桃園縣', target: '國立中央大學 電子計算機中心', value: 1 },
        { source: '宜蘭縣', target: '國立宜蘭大學 圖書資訊館', value: 3 },
        {
          source: '新竹縣',
          target: '國立陽明交通大學 資訊技術服務中心',
          value: 1,
        },
        { source: '新竹市', target: '國網中心新竹本部', value: 1 },
        { source: '新竹市', target: '國立清華大學 計算機與通訊中心', value: 1 },
        {
          source: '新竹市',
          target: '國立陽明交通大學 資訊技術服務中心',
          value: 1,
        },
        {
          source: '南投縣',
          target: '國立暨南國際大學 計算機與網路中心',
          value: 0,
        },
        { source: '台中市', target: '國網中心臺中分部', value: 0 },
        {
          source: '台中市',
          target: '國立中興大學計算機及資訊網路中心',
          value: 0,
        },
        { source: '嘉義市', target: '國立中正大學 資訊處', value: 0 },
        { source: '台南市', target: '國網中心臺南分部', value: 1 },
        { source: '台南市', target: '國立成功大學 計算機與網路中心', value: 1 },
        { source: '高雄市', target: '國立中山大學 圖書與資訊處', value: 2 },
        { source: '台東縣', target: '國立台東大學 圖書資訊館', value: 3 },
        { source: '花蓮縣', target: '國立東華大學 圖書資訊處', value: 3 },
        {
          source: 'California',
          target: 'Illinois',
          value: 2,
          status: 'abnormal',
        },
        {
          source: 'California',
          target: 'New York',
          value: 1,
          status: 'abnormal',
        },
      ],
      eventsNotCloseList,
      eventsAlertList,
      dashboardList: [],
    };
  },
  computed: {
    vuetify() {
      return this.$vuetify;
    },
    eventsCategory() {
      return events.map((item) => item.name);
    },
    configurations() {
      return this.$store.getters['configuration/getConfigurationList'];
    },
    configurationHeaders() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },

        {
          text: this.$t('device.category'),
          value: 'type',
        },
        {
          text: this.$t('device.name'),
          value: 'device',
        },
        { text: 'GigaPop', value: 'gigapop' },
        { text: 'OOB IP', value: 'ip' },
        { text: 'IPv4', value: 'ipv4' },
        { text: 'IPv6', value: 'ipv6' },
        {
          text: this.$t('contact.info'),
          value: 'contact',
        },
        { text: 'Config', value: 'config' },
      ];
    },
    cpus() {
      return cpus;
    },
    events() {
      return [
        {
          name: 'data',
          data: events.map((item) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ][statusMap[item.type]],
            },
          })),
        },
      ];
    },
    eventsNotCloseListHeader() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('event.number'),
          value: 'event',
        },
        {
          text: this.$t('event.category'),
          value: 'category',
        },
        {
          text: this.$t('level'),
          value: 'level',
        },
        {
          text: this.$t('event.start.time'),
          value: 'startTime',
        },
        {
          text: this.$t('interface.equipment'),
          value: 'equipment',
        },
        {
          text: this.$t('event.description'),
          value: 'desc',
        },
      ];
    },
    eventsAlertListHeader() {
      return [
        {
          text: this.$t('id'),
          value: 'id',
          width: 80,
        },
        {
          text: this.$t('event.number'),
          value: 'event',
        },
        {
          text: this.$t('event.category'),
          value: 'category',
        },
        {
          text: this.$t('level'),
          value: 'level',
        },
        {
          text: this.$t('event.start.time'),
          value: 'startTime',
        },
        {
          text: this.$t('alert.equipment'),
          value: 'equipment',
        },
        {
          text: this.$t('event.description'),
          value: 'desc',
        },
      ];
    },
  },
  watch: {
    '$vuetify.breakpoint.smAndUp'(value) {
      this.updateDashboardList(value);
    },
  },
  mounted() {
    this.updateDashboardList(this.$vuetify.breakpoint.smAndUp);
  },
  methods: {
    setRowClass(item) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return `${item.level} lighten-1 `;
      }
    },
    updateDashboardList(value) {
      if (value) {
        this.dashboardList = [
          {
            name: 'TWAREN 400G骨幹網路即時監控狀態圖',
            i: 1,
            w: 6,
            h: 2,
            x: 0,
            y: 0,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 2,
            w: 6,
            h: 1,
            x: 0,
            y: 2,
            moved: false,
          },
          {
            name: '設備狀態統計圖',
            i: 3,
            w: 6,
            h: 1,
            x: 6,
            y: 2,
            moved: false,
          },
          {
            name: '至今尚未關閉事件',
            i: 4,
            w: 12,
            h: 1,
            x: 0,
            y: 5,
            moved: false,
          },
          {
            name: '外部監控事件報警列表',
            i: 5,
            w: 12,
            h: 1,
            x: 0,
            y: 6,
            moved: false,
          },
          {
            name: '教育部節點-設備資料',
            i: 6,
            w: 12,
            h: 2,
            x: 0,
            y: 3,
            moved: false,
          },
          { name: '拓樸圖', i: 7, w: 6, h: 2, x: 6, y: 0, moved: false },
        ];
      } else {
        this.dashboardList = [
          {
            name: 'TWAREN 400G骨幹網路即時監控狀態圖',
            i: 1,
            w: 12,
            h: 2,
            x: 0,
            y: 0,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 2,
            w: 12,
            h: 1,
            x: 0,
            y: 4,
            moved: false,
          },
          {
            name: '設備狀態統計圖',
            i: 3,
            w: 12,
            h: 1,
            x: 3,
            y: 5,
            moved: false,
          },
          {
            name: '至今尚未關閉事件',
            i: 4,
            w: 12,
            h: 2,
            x: 4,
            y: 6,
            moved: false,
          },
          {
            name: '外部監控事件報警列表',
            i: 5,
            w: 12,
            h: 2,
            x: 6,
            y: 8,
            moved: false,
          },
          {
            name: '教育部節點-設備資料',
            i: 6,
            w: 12,
            h: 2,
            x: 8,
            y: 10,
            moved: false,
          },
          { name: '拓樸圖', i: 7, w: 12, h: 2, x: 0, y: 2, moved: false },
        ];
      }
    },
    onLayoutUpdated(list) {
      this.dashboardList = list;
    },
    goToDeviceConfiguration(item) {
      this.$router.push(`/device-configuration/${item.id}`);
    },
  },
};
</script>
