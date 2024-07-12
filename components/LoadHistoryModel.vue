<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">RPM總負載電流歷史查詢</span>
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
const voltage = Array.from(new Array(30), () =>
  Number(200 + Math.random() * 30 - 30).toFixed(2) * 1
);

const current = Array.from(new Array(30), () =>
  Number(1000 + Math.random() * 50 - Math.random() * 50).toFixed(2) * 1
);

const kwh = voltage.map((v, index) => {
  return  Number(current[index] / v).toFixed(2)  * 1;
});

export default {
  name: 'LoadHistoryModel',
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
      voltage,
      current,
      kwh,
    };
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['電壓', '電流', '功率'],
        },
        grid:{
          left: 100,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: '電壓(V)',
            position: 'left',
            axisLine: {
              lineStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].info,
              },
            },
            axisLabel: {
              formatter: '{value} V',
            },
          },
          {
            type: 'value',
            name: '電流(A)',
            position: 'left',
            offset: 50,
            axisLine: {
              lineStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ].danger,
              },
            },
            axisLabel: {
              formatter: '{value} A',
            },
          },
          {
            type: 'value',
            name: '功率(kWh)',
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
              formatter: '{value} kWh',
            },
          },
        ],
        series: [
          {
            name: '電壓',
            type: 'line',
            yAxisIndex: 0,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.voltage,
          },
          {
            name: '電流',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].danger,
            },
            data: this.current,
          },
          {
            name: '功率',
            type: 'line',
            yAxisIndex: 2,
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].primary,
            },
            data: this.kwh,
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
      this.voltage = voltage.slice(startIndex, endIndex + 1);
      this.current = current.slice(startIndex, endIndex + 1);
      this.kwh = kwh.slice(startIndex, endIndex + 1);
    },
  },
};
</script>
