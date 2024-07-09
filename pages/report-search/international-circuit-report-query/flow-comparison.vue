<template>
  <v-container>
    <v-chart
      ref="map"
      :options="options"
      class="mx-auto"
      style="width: 100%; height: calc(80vh - 70px); min-height: 300px"
      autoresize
    />
  </v-container>
</template>

<script>
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import items from '~/assets/json/flow-comparison.json';
export default {
  name: 'UsCircuits',
  layout: 'admin-layout',
  computed: {
    options() {
      return {
        title: {
          text: `2024-02,2024-01,2023-12${this.$vuetify.breakpoint.mdAndDown}`
            ? '\n'
            : '' + '國外->連線單位(Top10)',
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
          data: items[0].time,
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
                const wsData = items.map((item) => {
                  return [item.name, ...item.data];
                });
                // Define the worksheet
                const ws = XLSX.utils.aoa_to_sheet([
                  ['Name', ...items[0].time],
                  ...wsData,
                ]);
                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                // Save the workbook as an Excel file
                XLSX.writeFile(
                  wb,
                  '2024-02,2024-01,2023-12 國外->連線單位(Top10).xlsx'
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
                doc.save('2024-02,2024-01,2023-12 國外->連線單位(Top10).pdf');
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
          data: items.map((i) => i.name),
          axisLabel: {
            formatter: function (value) {
              return `${value.substring(0, 10)}\n${value.substring(10)}` ;
            }
          }
        },
        series: [
          {
            type: 'bar',
            name: '2024-02',
            data: items.map((item) => {
              return item.data[0];
            }),
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].info,
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
            },
          },
          {
            type: 'bar',
            name: '2024-01',
            data: items.map((item) => {
              return item.data[1];
            }),
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].warning,
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
            },
          },
          {
            type: 'bar',
            name: '2023-12',
            data: items.map((item) => {
              return item.data[2];
            }),
            itemStyle: {
              color:
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                ].success,
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
            },
          },
        ],
      };
    },
  },
};
</script>
