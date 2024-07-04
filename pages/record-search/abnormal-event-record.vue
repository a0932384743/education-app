<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">{{ $t('condition.search') }}</span>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-form class="px-5">
            <v-row class="my-0">
              <!-- 查詢日期 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-menu
                  ref="startDateMenu"
                  v-model="startDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="startDate"
                      :label="$t('start.time')"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="startDate"
                    @input="startDateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-menu
                  ref="endDateMenu"
                  v-model="endDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate"
                      :label="$t('end.time')"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    @input="endDateMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <!-- 事件類別 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-select
                  v-model="category"
                  :items="categories"
                  :label="$t('event.category')"
                ></v-select>
              </v-col>
              <!-- 嚴重等級 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-select
                  v-model="level"
                  :items="levels"
                  :label="$t('event.level')"
                ></v-select>
              </v-col>
              <!-- 事件是否結束 -->
              <v-col cols="12" sm="6" md="4" lg="3" class="pt-1">
                <v-switch
                  v-model="isEventEnded"
                  :label="$t('event.is.closed')"
                  class="mt-0"
                ></v-switch>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <!-- 查詢按鈕 -->
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="onSearchEvents">{{
            $t('search')
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col :cols="12">
      <table-card title="異常事件紀錄" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
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
            hide-default-footer
          >
            <template #item="{ item }">
              <tr
                :class="!item.endTime && 'error'"
                class="lighten-2"
                :style="
                  item.endTime
                    ? 'border-color: inherit !important'
                    : 'border-color:white !important'
                "
              >
                <td>{{ item.id }}</td>
                <td nowrap="nowrap">{{ item.eventId }}</td>
                <td>{{ item.category }}</td>
                <td nowrap="nowrap">{{ item.level }}</td>
                <td nowrap="nowrap">{{ item.startTime }}</td>
                <td nowrap="nowrap">{{ item.endTime || $t('continued') }}</td>
                <td nowrap="nowrap">{{ item.device }}</td>
                <td nowrap="nowrap">{{ item.duration }}</td>
                <td>{{ item.desc }}</td>
              </tr>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment/moment';
import items from '~/assets/json/abnormal-event.json';

export default {
  name: 'AbnormalEventRecord',
  layout: 'admin-layout',
  data: () => {
    return {
      items,
      startDateMenu: false,
      endDateMenu: false,
      isEventEnded: false,
      level: '',
      category: '',
      categories: [
        'EdgeDevicesPing',
        'ConnectorTraffic',
        'InternationalCircuitV4Ping',
      ],
      levels: ['MN', 'CR'],
      startDate: moment('2024-06-01').format('YYYY-MM-DD'),
      endDate: moment('2024-06-30').format('YYYY-MM-DD'),
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
          text: this.$t('event.id'),
          value: 'eventId',
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
          text: this.$t('event.end.time'),
          value: 'endTime',
        },
        {
          text: this.$t('event.duration'),
          value: 'duration',
        },
        {
          text: this.$t('event.device'),
          value: 'device',
        },
        {
          text: this.$t('event.description'),
          value: 'desc',
        },
      ];
    },
  },
  mounted() {
    this.items = items;
  },
  methods: {
    onSearchEvents() {
      this.items = items.filter((item) => {
        return (
          (!this.startDate ||
            moment(item.startTime).isAfter(
              moment(this.startDate).startOf('days')
            )) &&
          (!this.category || item.category === this.category) &&
          (!this.level || item.level === this.level) &&
          ((this.isEventEnded && item.endTime) ||
            (!this.isEventEnded &&
              moment(item.endTime || new Date()).isBefore(
                moment(this.endDate).endOf('days')
              )))
        );
      });
    },
  },
};
</script>
