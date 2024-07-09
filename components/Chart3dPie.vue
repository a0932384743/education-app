<template>
  <v-chart
    ref="pie"
    :options="options"
    class="mx-auto fill-height"
    :style="styles"
    autoresize
  />
</template>

<script>
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

export default {
  name: 'Chart3dPie',
  props: {
    title: {
      type: String,
      required: false,
    },
    datas: {
      type: Array,
      required: true,
    },
    styles: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      internalDiameterRatio: 0,
    };
  },
  computed: {
    options() {
      const pieData = this.datas.sort((a, b) => {
        return b.value > a.value ? 1 : -1;
      });

      const internalDiameterRatio = this.internalDiameterRatio;

      const series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let legendBfb = [];
      const k = 1 - internalDiameterRatio;
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        const seriesItem = {
          name:
            typeof pieData[i].name === 'undefined'
              ? `series${i}`
              : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false,
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k,
          },
        };
        if (typeof pieData[i].itemStyle !== 'undefined') {
          const itemStyle = {};
          if (pieData[i].itemStyle.color) {
            itemStyle.color = pieData[i].itemStyle.color;
          }
          if (pieData[i].itemStyle.opacity) {
            itemStyle.opacity = pieData[i].itemStyle.opacity;
          }
          seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
      }

      legendData = [];
      legendBfb = [];

      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = this.getParametricEquation(
          series[i].pieData.startRatio,
          series[i].pieData.endRatio,
          false,
          false,
          k
        );
        startValue = endValue;
        const bfb = this.fomatFloat(series[i].pieData.value / sumValue, 4);
        legendData.push({
          name: series[i].name,
          value: bfb,
        });
        legendBfb.push({
          name: series[i].name,
          value: bfb,
        });
      }

      const boxHeight = this.getHeight3D(series, 26); // 通过传参设定3d饼/环的高度，26代表26px

      const option = {
        title: {
          text: this.title,
          left: 'center', // Center the title
        },
        legend: {
          orient: 'vertical',
          right: '0%', // Adjust position as needed
          top: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10,
          data: legendData,
          itemGap: 10,
          show: true,
          formatter: (param) => {
            const item = legendBfb.filter((item) => item.name === param)[0];
            const bfs = `${Number((item.value) * 100).toFixed(2)}%`;
            return `${item.name}  (${bfs})`;
          },
        },
        tooltip: {
          formatter: (params) => {
            if (
              params.seriesName !== 'mouseoutSeries' &&
              params.seriesName !== 'pie2d'
            ) {
              const bfb = (
                (option.series[params.seriesIndex].pieData.endRatio -
                  option.series[params.seriesIndex].pieData.startRatio) *
                100
              ).toFixed(2);
              return (
                `${params.seriesName}<br/>` +
                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                `${bfb}%`
              );
            }
          },
        },
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
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
                const wsData = pieData.map((item) => {
                  return [item.name, item.value];
                });
                // Define the worksheet
                const ws = XLSX.utils.aoa_to_sheet([
                  ['Name', 'Value'],
                  ...wsData,
                ]);
                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                // Save the workbook as an Excel file
                XLSX.writeFile(
                  wb,
                  `${this.title}.xlsx`
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
                const canvas = this.$refs.pie.chart.getRenderedCanvas();
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save(`${this.title}.pdf`);
              },
            },
          },
        },

        grid3D: {
          show: false,
          boxHeight, // 圓環高度
          viewControl: {
            alpha: 60, // 角度
            distance: 300, // 調整視角到主體的距離，類似調整zoom
            rotateSensitivity: 0, // 設定為0無法旋轉
            zoomSensitivity: 0, // 設定為0無法縮放
            panSensitivity: 0, // 設定為0無法平移
            autoRotate: false, // 自動旋轉
          },
        },
        series: [
          {
            name: 'pie2d',
            type: 'pie',
            radius: '60%',
            center: ['47%', '52%'],
            data: pieData.map((data) => {
              return {
                ...data,
                itemStyle: {
                  opacity: 0,
                },
                label: {
                  show: true,
                  opacity: 1,
                  formatter: (param) => {
                    const bfs = `${Number(param.percent).toFixed(2)}%`;
                    return bfs;
                  },
                },
                labelLine: {
                  lineStyle: {
                    color: '#414141',
                  },
                },
              };
            }),
            clockwise: false,
            startAngle: -40,
          },
          ...series,
        ],
      };
      return option;
    },
  },
  mounted() {
    this.bindListen(this.$refs.pie.chart);
  },
  methods: {
    getHeight3D(series, height) {
      series.sort((a, b) => {
        return b.pieData.value - a.pieData.value;
      });
      return (height * 25) / series[0].pieData.value;
    },
    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k) {
      const h = 10;
      const midRatio = (startRatio + endRatio) / 2;
      const startRadian = startRatio * Math.PI * 2;
      const endRadian = endRatio * Math.PI * 2;
      const midRadian = midRatio * Math.PI * 2;
      if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
      }
      k = typeof k !== 'undefined' ? k : 1 / 3;
      const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : -0.5;
      const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : -0.5;
      const hoverRate = isHovered ? 1.05 : 1;
      return {
        u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32,
        },
        v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20,
        },
        x: function (u, v) {
          if (u < startRadian) {
            return (
              offsetX +
              Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function (u, v) {
          if (u < startRadian) {
            return (
              offsetY +
              Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function (u, v) {
          if (u < -Math.PI * 0.5) {
            return Math.sin(u);
          }
          if (u > Math.PI * 2.5) {
            return Math.sin(u) * h * 0.1;
          }
          return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
        },
      };
    },
    fomatFloat(num, n) {
      let f = parseFloat(num);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
      let s = f.toString();
      let rs = s.indexOf('.');
      // 判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + n) {
        s += '0';
      }
      return s;
    },
    bindListen(myChart) {
      let selectedIndex = '';
      let hoveredIndex = '';
      myChart.on('click', (params) => {
        const options = { ...this.options };
        const isSelected =
          !options.series[params.seriesIndex].pieStatus.selected;
        const isHovered = options.series[params.seriesIndex].pieStatus.hovered;
        const k = options.series[params.seriesIndex].pieStatus.k;
        const startRatio = options.series[params.seriesIndex].pieData.startRatio;
        const endRatio = options.series[params.seriesIndex].pieData.endRatio;
        if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
          options.series[selectedIndex].parametricEquation =
            this.getParametricEquation(
              options.series[selectedIndex].pieData.startRatio,
              options.series[selectedIndex].pieData.endRatio,
              false,
              false,
              k
            );
          options.series[selectedIndex].pieStatus.selected = false;
        }
        options.series[params.seriesIndex].parametricEquation =
          this.getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k
          );
        options.series[params.seriesIndex].pieStatus.selected = isSelected;
        if (isSelected) {
          selectedIndex = params.seriesIndex;
        }
        myChart.setOption(options);
      });
      myChart.on('mouseover', (params) => {
        const options = { ...this.options };

        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        if (hoveredIndex !== params.seriesIndex) {
          if (hoveredIndex !== '') {
            isSelected = options.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = options.series[hoveredIndex].pieData.startRatio;
            endRatio = options.series[hoveredIndex].pieData.endRatio;
            k = options.series[hoveredIndex].pieStatus.k;
            options.series[hoveredIndex].parametricEquation =
              this.getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k
              );
            options.series[hoveredIndex].pieStatus.hovered = isHovered;
            hoveredIndex = '';
          }
          if (
            params.seriesName !== 'mouseoutSeries' &&
            params.seriesName !== 'pie2d'
          ) {
            isSelected = options.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = options.series[params.seriesIndex].pieData.startRatio;
            endRatio = options.series[params.seriesIndex].pieData.endRatio;
            k = options.series[params.seriesIndex].pieStatus.k;
            options.series[params.seriesIndex].parametricEquation =
              this.getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k
              );
            options.series[params.seriesIndex].pieStatus.hovered = isHovered;
            hoveredIndex = params.seriesIndex;
          }
          myChart.setOption(options);
        }
      });
      myChart.on('globalout', function () {
        const options = { ...this.options };
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        if (hoveredIndex !== '') {
          isSelected = options.series[hoveredIndex].pieStatus.selected;
          isHovered = false;
          k = options.series[hoveredIndex].pieStatus.k;
          startRatio = options.series[hoveredIndex].pieData.startRatio;
          endRatio = options.series[hoveredIndex].pieData.endRatio;
          options.series[hoveredIndex].parametricEquation =
            this.getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k
            );
          options.series[hoveredIndex].pieStatus.hovered = isHovered;
          hoveredIndex = '';
        }
        myChart.setOption(options);
      });
    },
  },
};
</script>
