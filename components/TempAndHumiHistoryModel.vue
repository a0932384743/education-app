<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">溫濕度歷史查詢</span>
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const date = Array.from(
  new Array(30),
  (val, index) => `2024-06-${`0${index + 1}`.substr(-2)}`
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const temp = Array.from(new Array(30), () =>
  Number(Number(22 + Math.random()).toFixed(2))
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const humi = Array.from(new Array(30), () =>
  Number(Number(65 + Math.random()).toFixed(2))
);

export default {
  name: 'TempAndHumiHistoryModel',
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
      temp,
      humi,
    };
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['溫度', '濕度'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: '溫度 (°C)',
            position: 'left',
            axisLine: {
              lineStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].warning,
              },
            },
            axisLabel: {
              formatter: '{value} °C',
            },
          },
          {
            type: 'value',
            name: '濕度 (%)',
            position: 'right',
            axisLine: {
              lineStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].primary,
              },
            },
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: '溫度',
            type: 'line',
            yAxisIndex: 0,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.temp,
          },
          {
            name: '濕度',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].primary,
            },
            data: this.humi,
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
      this.temp = temp.slice(startIndex, endIndex + 1);
      this.humi = humi.slice(startIndex, endIndex + 1);
    },
  },
};
</script>
