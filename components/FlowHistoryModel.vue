<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">分析流量狀況</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-chart :options="options1" autoresize class="w-100"></v-chart>
          </v-col>
          <v-col cols="12" md="6">
            <v-chart :options="options2" autoresize class="w-100"></v-chart>
          </v-col>
          <v-col cols="12" md="6">
            <v-chart :options="options3" autoresize class="w-100"></v-chart>
          </v-col>
          <v-col cols="12" md="6">
            <v-chart :options="options4" autoresize class="w-100"></v-chart>
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
import moment from 'moment';

const date = Array.from(
  new Array(30),
  (_ ,index) => moment().hour(14).minute(index * 5).format('HH:mm')
);
const up1 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const up2 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const up3 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const up4 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);


const down1 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const down2 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const down3 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);

const down4 = Array.from(new Array(30), () =>
  Number(4000 + Math.random() * 1000 - 1000).toFixed(0) * 1
);
export default {
  name: 'FlowHistoryModel',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      date,
      up1,
      up2,
      up3,
      up4,
      down1,
      down2,
      down3,
      down4,
    };
  },
  computed: {
    options1() {
      return {
        grid:{
          left:50,
          right: 50
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['下載', '上傳'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: 'Mbps',
            position: 'left',
            axisLabel: {
              formatter(value){
                return value.toLocaleString();
              },
            },
            min: 2000,
            max: 6000
          },
        ],
        series: [
          {
            name: '下載',
            type: 'line',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.up1,
          },
          {
            name: '上傳',
            type: 'line',
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.down1,
          },
        ],
      };
    },
    options2() {
      return {
        grid:{
          left:50,
          right: 50
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['下載', '上傳'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: 'Mbps',
            position: 'left',
            axisLabel: {
              formatter(value){
                return value.toLocaleString();
              },
            },
            min: 2000,
            max: 6000
          },
        ],
        series: [
          {
            name: '下載',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.up2,
          },
          {
            name: '上傳',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.down2,
          },
        ],
      };
    },
    options3() {
      return {
        grid:{
          left:50,
          right: 50
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['下載', '上傳'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: 'Mbps',
            position: 'left',
            axisLabel: {
              formatter(value){
                return value.toLocaleString();
              },
            },
            min: 2000,
            max: 6000
          },
        ],
        series: [
          {
            name: '下載',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.up3,
          },
          {
            name: '上傳',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.down3,
          },
        ],
      };
    },
    options4() {
      return {
        grid:{
          left:50,
          right: 50
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['下載', '上傳'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.date,
        },
        yAxis: [
          {
            type: 'value',
            name: 'Mbps',
            position: 'left',
            axisLabel: {
              formatter(value){
                return value.toLocaleString();
              },
            },
            min: 2000,
            max: 6000
          },
        ],
        series: [
          {
            name: '下載',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            data: this.up4,
          },
          {
            name: '上傳',
            type: 'line',
            itemStyle: {
              color:
              this.$vuetify.theme.themes[
                this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            data: this.down4,
          },
        ],
      };
    },

  },
  methods: {
    onClose() {
      this.$emit('close:show', false);
    },
  },
};
</script>
