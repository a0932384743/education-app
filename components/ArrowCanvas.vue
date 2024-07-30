<template>
  <canvas
    ref="arrowCanvas"
    :width="width"
    :height="height"
  ></canvas>
</template>

<script>
export default {
  name: 'ArrowCanvas',
  props: {
    fromX: {
      type: Number,
      default: 50,
    },
    fromY: {
      type: Number,
      default: 300,
    },
    toX: {
      type: Number,
      default: 350,
    },
    toY: {
      type: Number,
      default: 50,
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  mounted() {
    this.drawArrow();
  },
  methods: {
    drawArrow() {
      const canvas = this.$refs.arrowCanvas;
      const ctx = canvas.getContext('2d');
      const { fromX, fromY, toX, toY } = this;

      const headlen = 10; // length of head in pixels
      const angle = Math.atan2(toY - fromY, toX - fromX);
      const color = this.$vuetify.theme.isDark ? '#fff' : '#aaa';
      // Draw the arrow line
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      // Draw the arrowhead
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

    },
  },
};
</script>
