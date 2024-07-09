<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        class="d-inline-flex align-center justify-center flex-column flex-sm-row"
        style="gap: 0.8rem"
      >
        <label class="subtitle-2 flex-grow-0">{{ $t('select.year') }}</label>
        <div class="d-flex flex-grow-0" style="gap: 0.5rem">
          <v-select
            v-model="start"
            small
            class="flex-grow-0"
            :items="years"
            :label="$t('start.time')"
            dense
            outlined
            hide-details
          ></v-select>
          <v-select
            v-model="end"
            small
            class="flex-grow-0"
            :items="years"
            :label="$t('end.time')"
            dense
            outlined
            hide-details
          ></v-select>
        </div>
      </v-col>
      <v-col cols="12">
        <v-alert
          border="left"
          colored-border
          color="warning accent-4"
          elevation="2"
        >
          <div class="subtitle-2">註:國際電路架構、設備更動日期</div>
          <ul style="list-style: number">
            <li>2011/01 新增紐約ASR設備NY-9010</li>
            <li>
              2013/01
              台北、新竹出國設備GSR變更為ASR1000(國際netflow改計算國內ASR資料)
            </li>
            <li>2013/06 LA、CHI國外路由設備C7606變更為ASR-9010</li>
          </ul>
        </v-alert>
      </v-col>
      <v-col cols="12">
        <v-chart
          ref="map"
          :options="options1"
          class="mx-auto"
          style="width: 100%; height: calc(80vh - 70px); min-height: 300px"
          autoresize
        />
      </v-col>
      <v-col cols="12">
        <v-chart
          ref="map"
          :options="options2"
          class="mx-auto"
          style="width: 100%; height: calc(80vh - 70px); min-height: 300px"
          autoresize
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import items from '~/assets/json/connection-comparison.json';
export default {
  name: 'ConnectionComparison',
  layout: 'admin-layout',
  data() {
    return {
      start: 0,
      end: 3,
    };
  },
  computed: {
    years() {
      return items[0].time.map((t, index) => {
        return {
          value: index,
          text: t,
        };
      });
    },
    options1() {
      return {
        title: {
          text: `${items[0].time.slice(this.start, this.end + 1).join(',')} ${
            this.$vuetify.breakpoint.mdAndDown ? '\n' : ''
          } 國外->連線單位(Top10)`,
          left: 'center', // Center the title
        },
        grid: {
          left: 150,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: items[0].time.slice(this.start, this.end + 1),
          orient: 'vertical',
          right: '10%', // Adjust position as needed
          top: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            myExcel: {
              show: true,
              title: 'Export to Excel',
              icon: 'path://M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.8,20H14L12,16.6L10,20H8.2L11.1,15.5L8.2,11H10L12,14.4L14,11H15.8L12.9,15.5L15.8,20M13,9V3.5L18.5,9H13Z',
              onclick: () => {
                const wb = XLSX.utils.book_new();
                // Convert data to worksheet format
                const wsData = items
                  .filter((item) => item.data1.length > 0)
                  .map((item) => {
                    return [
                      item.name,
                      ...item.data1.slice(this.start, this.end + 1),
                    ];
                  });
                // Define the worksheet
                const ws = XLSX.utils.aoa_to_sheet([
                  ['Name', ...items[0].time.slice(this.start, this.end + 1)],
                  ...wsData,
                ]);
                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                // Save the workbook as an Excel file
                XLSX.writeFile(
                  wb,
                  `${items[0].time
                    .slice(this.start, this.end + 1)
                    .join(',')} 國外->連線單位(Top10).xlsx`
                );
              },
            },
            myPdf: {
              show: true,
              title: 'Export to PDF',
              icon: 'path://M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z',
              onclick: () => {
                // eslint-disable-next-line new-cap
                const doc = new jsPDF({
                  orientation: 'landscape', // Set orientation to landscape
                });
                const canvas = this.$refs.map.chart.getRenderedCanvas();
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save(
                  `${items[0].time
                    .slice(this.start, this.end + 1)
                    .join(',')} 國外->連線單位(Top10).pdf`
                );
              },
            },
          },
        },
        xAxis: {
          type: 'value',
          name: 'Unit: TB',
          position: 'bottom', // Ensure the xAxis is at the bottom
          axisLabel: {
            formatter: '{value}',
            align: 'center', // Center the labels
            verticalAlign: 'middle',
          },
        },
        yAxis: {
          type: 'category',
          data: items.filter((item) => item.data1.length > 0).map((i) => i.name),
          axisLabel: {
            formatter: function (value) {
              return `${value.substring(0, 10)}\n${value.substring(10)}` ;
            }
          }
        },
        series: items[0].time
          .slice(this.start, this.end + 1)
          .map((year, index) => {
            const color = ['info', 'warning', 'success', 'danger', 'primary'];

            return {
              type: 'bar',
              name: year,
              data: items
                .filter((item) => item.data1.length > 0)
                .map((item) => {
                  return item.data1[this.start + index];
                }),
              itemStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][color[index]],
              },
              label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
                fontFamily: 'monospace',
              },
            };
          }),
      };
    },
    options2() {
      return {
        title: {
          text: `${items[0].time.slice(this.start, this.end + 1).join(',')} ${
            this.$vuetify.breakpoint.mdAndDown ? '\n' : ''
          } 連線單位->國外(Top10)`,
          left: 'center', // Center the title
        },
        grid: {
          left: 150,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: items[0].time.slice(this.start, this.end + 1),
          orient: 'vertical',
          right: '10%', // Adjust position as needed
          top: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            myExcel: {
              show: true,
              title: 'Export to Excel',
              icon: 'path://M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.8,20H14L12,16.6L10,20H8.2L11.1,15.5L8.2,11H10L12,14.4L14,11H15.8L12.9,15.5L15.8,20M13,9V3.5L18.5,9H13Z',
              onclick: () => {
                const wb = XLSX.utils.book_new();
                // Convert data to worksheet format
                const wsData = items
                  .filter((item) => item.data2.length > 0)
                  .map((item) => {
                    return [
                      item.name,
                      ...item.data2.slice(this.start, this.end + 1),
                    ];
                  });
                // Define the worksheet
                const ws = XLSX.utils.aoa_to_sheet([
                  ['Name', ...items[0].time.slice(this.start, this.end + 1)],
                  ...wsData,
                ]);
                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                // Save the workbook as an Excel file
                XLSX.writeFile(
                  wb,
                  `${items[0].time
                    .slice(this.start, this.end + 1)
                    .join(',')} 國外->連線單位(Top10).xlsx`
                );
              },
            },
            myPdf: {
              show: true,
              title: 'Export to PDF',
              icon: 'path://M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z',
              onclick: () => {
                // eslint-disable-next-line new-cap
                const doc = new jsPDF({
                  orientation: 'landscape', // Set orientation to landscape
                });
                const canvas = this.$refs.map.chart.getRenderedCanvas();
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save(
                  `${items[0].time
                    .slice(this.start, this.end + 1)
                    .join(',')} 國外->連線單位(Top10).pdf`
                );
              },
            },
          },
        },
        xAxis: {
          type: 'value',
          name: 'Unit: TB',
          position: 'bottom', // Ensure the xAxis is at the bottom
          axisLabel: {
            formatter: '{value}',
            align: 'center', // Center the labels
            verticalAlign: 'middle',
          },
        },
        yAxis: {
          type: 'category',
          data: items.filter((item) => item.data2.length > 0).map((i) => i.name),
          axisLabel: {
            formatter: function (value) {
              return `${value.substring(0, 10)}\n${value.substring(10)}` ;
            }
          }
        },
        series: items[0].time
          .slice(this.start, this.end + 1)
          .map((year, index) => {
            const color = ['info', 'warning', 'success', 'danger', 'primary'];
            return {
              type: 'bar',
              name: year,
              data: items
                .filter((item) => item.data2.length > 0)
                .map((item) => {
                  return item.data2[this.start + index];
                }),
              itemStyle: {
                color:
                  this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][color[index]],
              },
              label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
                fontFamily: 'monospace',
              },
            };
          }),
      };
    },
  },
};
</script>
