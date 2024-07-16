<template>
  <grid-layout
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
        title="TWAREN 400G骨幹網路即時監控狀態圖"
        :links="links"
        :nodes="nodes"
        :center="[121, 24.033]"
        :map="'taiwanGEO'"
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
        title="未結案比例統計圖表"
        :items="events"
        :legends-props="{
          show: false,
        }"
        :x-axis="eventsCategory"
      >
        <template>
          <div class="subtitle-2">依據事件告警嚴重等級統計</div>
        </template>
      </bar-chart-card>
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
        title="設備存活狀態統計圖表"
        :items="cpus"
        :x-axis="cpus[0].category"
        :series-props="{
          stack: 'Total',
        }"
      >
        <template>
          <div class="subtitle-2">TWAREN設備存活狀態比較圖</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[5].x"
      :y="dashboardList[5].y"
      :w="dashboardList[5].w"
      :h="dashboardList[5].h"
      :i="dashboardList[5].i"
    >
      <bar-chart-card
        title="未結案比例統計圖表"
        :items="eventCategories"
        :chart-type="'pie'"
        :legends-props="{
          show: false,
        }"
        :x-axis="eventsCategory"
      >
        <template>
          <div class="subtitle-2">依據事件告警嚴重等級統計</div>
        </template>
      </bar-chart-card>
    </grid-item>
    <grid-item
      drag-allow-from=".v-card__title"
      :x="dashboardList[6].x"
      :y="dashboardList[6].y"
      :w="dashboardList[6].w"
      :h="dashboardList[6].h"
      :i="dashboardList[6].i"
    >
      <bar-chart-card
        title="設備存活狀態統計圖表"
        :items="lives"
        :x-axis="lives[0].category"
        :series-props="{
          stack: 'Total',
        }"
      >
        <template>
          <div class="subtitle-2">TWAREN設備存活狀態比較圖</div>
        </template>
      </bar-chart-card>
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
            hide-default-footer
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
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item.id }}
              </td>
            </template>
            <template #[`item.event`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.event }}
              </td>
            </template>
            <template #[`item.category`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.category }}
              </td>
            </template>
            <template #[`item.level`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                <v-icon :color="item.level">mdi-alert</v-icon>
              </td>
            </template>
            <template #[`item.startTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.startTime }}
              </td>
            </template>
            <template #[`item.endTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.endTime }}
              </td>
            </template>
            <template #[`item.equipment`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.equipment || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
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
      <chart-card title="外部監控事件報警列表">
        <div class="overflow-auto fill-height">
          <v-data-table
            :headers="eventsAlertListHeader"
            :items="eventsAlertList"
            fixed-header
            hide-default-footer
            :item-class="setRowClass"
          >
            <template #[`item.id`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item.id }}
              </td>
            </template>
            <template #[`item.event`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.event }}
              </td>
            </template>
            <template #[`item.category`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.category }}
              </td>
            </template>
            <template #[`item.level`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                <v-icon :color="item.level">mdi-alert</v-icon>
              </td>
            </template>
            <template #[`item.startTime`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
                nowrap="nowrap"
              >
                {{ item.startTime }}
              </td>
            </template>
            <template #[`item.equipment`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.equipment || '-' }}
              </td>
            </template>
            <template #[`item.desc`]="{ item }">
              <td
                :class="item.level"
                class="lighten-2"
                style="border-color: inherit !important"
              >
                {{ item?.desc || '-' }}
              </td>
            </template>
          </v-data-table>
        </div>
      </chart-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import eventsNotCloseList from '~/assets/json/event-not-close.json';
import eventsAlertList from '~/assets/json/event-alert.json';
import events from '~/assets/json/device-event.json';
import eventCategories from '~/assets/json/device-event-category.json';
import cpus from '~/assets/json/device-cpu-stastic.json';
import lives from '~/assets/json/device-live-stastic.json';
import BarChartCard from '~/components/BarCahrtCard.vue';
import ChartCard from '~/components/ChartCard.vue';
import MapCard from '~/components/MapCard.vue';
import { statusMap } from '~/utils/statusMap';
import nodes from '~/assets/map/tw-node.json';

export default {
  name: 'Dashboard',
  components: { ChartCard, BarChartCard, MapCard },
  layout: 'admin-layout',
  data() {
    return {
      nodes,
      links: [
        { source: '台北市', target: '台中市', value: 3 },
        { source: '台北市', target: '新北市', value: 2 },
        { source: '台北市', target: '宜蘭縣', value: 3 },
        { source: '台北市', target: '桃園縣', value: 1 },
        { source: '桃園縣', target: '新竹市', value: 1 },
        { source: '新竹市', target: '新竹縣', value: 1 },
        { source: '新竹市', target: '台中市', value: 1 },
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
      ],
      eventsNotCloseList,
      eventsAlertList,
      cpus,
      lives,
      dashboardList: [
        {
          name: 'TWAREN 400G骨幹網路即時監控狀態圖',
          i: 1,
          w: 4,
          h: 2,
          x: 0,
          y: 0,
          moved: false,
        },
        {
          name: '未結案事件比例圖',
          i: 2,
          w: 4,
          h: 1,
          x: 4,
          y: 0,
          moved: false,
        },
        {
          name: '未結案事件比例圖',
          i: 3,
          w: 4,
          h: 1,
          x: 4,
          y: 1,
          moved: false,
        },
        {
          name: '至今尚未關閉事件',
          i: 4,
          w: 12,
          h: 1,
          x: 0,
          y: 2,
          moved: false,
        },
        {
          name: '外部監控事件報警列表',
          i: 5,
          w: 12,
          h: 1,
          x: 0,
          y: 3,
          moved: false,
        },
        {
          name: '設備存活狀態統計圖',
          i: 6,
          w: 4,
          h: 1,
          x: 8,
          y: 0,
          moved: false,
        },
        {
          name: '設備存活狀態統計圖',
          i: 7,
          w: 4,
          h: 1,
          x: 8,
          y: 1,
          moved: false,
        },
      ],
    };
  },
  computed: {
    vuetify() {
      return this.$vuetify;
    },
    eventsCategory() {
      return events.map((item) => item.name);
    },
    eventCategories() {
      return [
        {
          name: '事件類別',
          type: 'pie',
          radius: '80%',
          data: eventCategories.map((d) => {
            return {
              ...d,
              itemStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][statusMap[d.type] || d.type],
              },
            };
          }),
          label: {
            show: false,
          },
        },
      ];
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
        return `${item.level} lighten-2`;
      }
    },
    onLayoutUpdated(list) {
      this.dashboardList = list;
    },
    updateDashboardList(value) {
      if (value) {
        this.dashboardList = [
          {
            name: 'TWAREN 400G骨幹網路即時監控狀態圖',
            i: 1,
            w: 4,
            h: 2,
            x: 0,
            y: 0,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 2,
            w: 4,
            h: 1,
            x: 4,
            y: 0,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 3,
            w: 4,
            h: 1,
            x: 4,
            y: 1,
            moved: false,
          },
          {
            name: '至今尚未關閉事件',
            i: 4,
            w: 12,
            h: 1,
            x: 0,
            y: 2,
            moved: false,
          },
          {
            name: '外部監控事件報警列表',
            i: 5,
            w: 12,
            h: 1,
            x: 0,
            y: 3,
            moved: false,
          },
          {
            name: '設備存活狀態統計圖',
            i: 6,
            w: 4,
            h: 1,
            x: 8,
            y: 0,
            moved: false,
          },
          {
            name: '設備存活狀態統計圖',
            i: 7,
            w: 4,
            h: 1,
            x: 8,
            y: 1,
            moved: false,
          },
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
            y: 2,
            moved: false,
          },
          {
            name: '未結案事件比例圖',
            i: 3,
            w: 12,
            h: 1,
            x: 0,
            y: 3,
            moved: false,
          },
          {
            name: '至今尚未關閉事件',
            i: 4,
            w: 12,
            h: 2,
            x: 0,
            y: 6,
            moved: false,
          },
          {
            name: '外部監控事件報警列表',
            i: 5,
            w: 12,
            h: 2,
            x: 0,
            y: 8,
            moved: false,
          },
          {
            name: '設備存活狀態統計圖',
            i: 6,
            w: 12,
            h: 1,
            x: 0,
            y: 4,
            moved: false,
          },
          {
            name: '設備存活狀態統計圖',
            i: 7,
            w: 12,
            h: 1,
            x: 0,
            y: 5,
            moved: false,
          },
        ];
      }
    },
  },
};
</script>
