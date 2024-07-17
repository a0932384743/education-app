<template>
  <div class="d-inline-flex align-center">
    <canvas ref="captchaCanvas" width="200" height="50"></canvas>
    <v-btn text @click="generateCaptcha"><v-icon size="20">mdi-reload</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: 'RecaptchaCanvas',
  data() {
    return {
      captchaText: '',
      userInput: '',
    };
  },
  mounted() {
    this.generateCaptcha();
  },
  methods: {
    generateCaptcha() {
      this.captchaText = Math.random().toString(36).substring(2, 8);
      const canvas = this.$refs.captchaCanvas;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = '#f2f2f2';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw text
      ctx.font = '30px Arial';
      ctx.fillStyle = '#000';
      ctx.fillText(this.captchaText, 50, 35);

      // Draw some lines for obfuscation
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = '#ccc';
        ctx.stroke();
      }
    },
    validateCaptcha() {
      if (this.userInput.toLowerCase() === this.captchaText.toLowerCase()) {
        this.$emit('verified');
        alert('Captcha verified successfully!');
      } else {
        alert('Incorrect captcha. Please try again.');
        this.generateCaptcha();
      }
    },
  },
};
</script>
<style scoped>
canvas {
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
