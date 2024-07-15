<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">BGP Peering歷史查詢</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="d-flex flex-wrap">
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
            <v-btn @click.stop="onSearch">{{ $t('search') }}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-chart :options="options" autoresize class="w-100"></v-chart>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onClose">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
const date = Array.from(
  new Array(30),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (val, index) => `2024-06-${`0${index + 1}`.substr(-2)}`
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const idle = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const connect = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);

const active = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);

const openSent = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);

const openConfirm = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);

const established = Array.from(new Array(30), () =>
  Number(Number(Math.random()).toFixed(2))
);

export default {
  name: 'PeerHistoryModel',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      startDateMenu: false,
      endDateMenu: false,
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      date,
      data: {
        idle,
        connect,
        active,
        openSent,
        openConfirm,
        established,
      },
    };
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: [
            'BGP Status=idle',
            'BGP Status=Connect',
            'BGP Status=Active',
            'BGP Status=OpenSent',
            'BGP Status=OpenConfirm',
            'BGP Status=Established',
          ],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'BGP Status=idle',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].primary,
            },
            data: this.data.idle,
          },
          {
            name: 'BGP Status=Connect',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.data.connect,
          },
          {
            name: 'BGP Status=Active',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].success,
            },
            data: this.data.active,
          },
          {
            name: 'BGP Status=OpenSent',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.data.openSent,
          },
          {
            name: 'BGP Status=OpenConfirm',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].danger,
            },
            data: this.data.openConfirm,
          },
          {
            name: 'BGP Status=Established',
            type: 'bar',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].secondary,
            },
            data: this.data.established,
          },
        ],
      };
    },
  },
  methods: {
    onClose() {
      this.$emit('close:show', false);
    },
    onSearch() {
      const startIndex = date.indexOf(this.startDate);
      const endIndex = date.indexOf(this.endDate);
      this.date = date.slice(startIndex, endIndex + 1);
      this.data = {
        idle: idle.slice(startIndex, endIndex + 1),
        connect: connect.slice(startIndex, endIndex + 1),
        active: active.slice(startIndex, endIndex + 1),
        openSent: openSent.slice(startIndex, endIndex + 1),
        openConfirm: openConfirm.slice(startIndex, endIndex + 1),
        established: established.slice(startIndex, endIndex + 1),
      };
    },
  },
};
</script>
