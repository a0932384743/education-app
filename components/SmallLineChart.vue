<template>
  <div>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import moment from 'moment/moment';
import { colorBrightness } from '@/utils/color';

export default {
  name: 'SmallLineChart',
  props: {
    value: {
      type: Array,
      required: true,
    },
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 30,
    },
    color: {
      type: String,
      default: 'secondary',
    },
  },
  data() {
    return {
      data: Array.from(
        new Array(50),
        (_) => Math.round(Math.random() * 10) * 10
      ),
    };
  },
  watch: {
    value() {
      this.drawChart();
    },
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, this.width, this.height);

      if (this.data.length === 0) return;

      const maxValue = Math.max(...this.data);
      const minValue = Math.min(...this.data);
      const stepX = this.width / (this.data.length - 1);
      const range = maxValue - minValue;

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(
        0,
        this.height - ((this.data[0] - minValue) / range) * this.height
      );

      this.data.forEach((value, index) => {
        const x = index * stepX;
        const y = this.height - ((value - minValue) / range) * this.height;
        ctx.lineTo(x, y);
      });
      const color =
        this.color === 'success' ||
        this.color === 'normal' ||
        this.color === 'up'
          ? '#92C1DC'
          : this.$vuetify.theme.themes[
              this.$vuetify.theme.isDark ? 'dark' : 'light'
            ][this.color || 'secondary'];
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Fill the area under the line
      ctx.lineTo(this.width, this.height);
      ctx.lineTo(0, this.height);
      ctx.closePath();
      ctx.fillStyle = `${color}6E`;
      ctx.fill();
    },
  },
};
</script>
