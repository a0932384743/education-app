<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg13.png' : '/image/mobile-bg13.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-4">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '150px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-row>
        <v-col cols="12" md="6">
          <h1>{{ $t('title2') }}</h1>
          <p>
            {{ $t('paragraph2') }}
          </p>
          <div class="py-sm-10"></div>
          <h1>{{ $t('word17') }}</h1>
          <p class="d-flex align-center" style="gap: 8px">
            <v-img
              src="/image/icon6.svg"
              :width="size1"
              :height="size1"
              contain
              class="flex-grow-0"
            />
            {{ $t('app.address1') }}
          </p>
          <div class="py-sm-10"></div>
          <h1>{{ $t('contact.info') }}</h1>
          <p class="d-flex align-center" style="gap: 8px">
            <v-img
              src="/image/icon7.svg"
              :width="size1"
              :height="size1"
              contain
              class="flex-grow-0"
            />
            yangfen7@ms78.hinet.net
          </p>
          <p class="d-flex align-center" style="gap: 8px">
            <v-img
              src="/image/icon8.svg"
              :width="size1"
              :height="size1"
              contain
              class="flex-grow-0"
            />
            +886-4-7389650 | +886-4-7385200
          </p>
          <p class="d-flex align-center" style="gap: 8px">
            <v-img
              src="/image/icon9.svg"
              :width="size1"
              :height="size1"
              contain
              class="flex-grow-0"
            />
            +886-4-7384890
          </p>
          <div class="py-sm-10"></div>
          <h1>{{ $t('customer.service') }}</h1>
          <p class="d-flex align-end" style="gap: 8px">
            <v-img
              src="/image/icon9.png"
              :width="size2"
              :height="size2"
              contain
              class="flex-grow-0"
            />
            {{ $t('word18') }}: @812vhldt
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-form>
            <div class="d-flex" style="gap: 10px">
              <div class="flex-grow-1 form-group">
                <label
                  >{{ $t('word19')
                  }}<span class="red--text mx-2">*</span></label
                >
                <v-text-field
                  :label="$t('word19')"
                  required
                  outlined
                  single-line
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
              <div class="flex-grow-1 form-group">
                <label
                  >{{ $t('tel') }}<span class="red--text mx-2">*</span></label
                >
                <v-text-field
                  :label="$t('tel')"
                  required
                  outlined
                  single-line
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
            </div>
            <div class="flex-grow-1 form-group">
              <label>mail<span class="red--text mx-2">*</span></label>
              <v-text-field
                label="E-mail"
                required
                outlined
                single-line
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <label
                >{{ $t('address') }}<span class="red--text mx-2">*</span></label
              >
              <v-text-field
                :label="$t('address')"
                outlined
                single-line
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <label
                >{{ $t('contact.desc')
                }}<span class="red--text mx-2">*</span></label
              >
              <v-textarea
                :label="$t('contact.desc')"
                required
                outlined
                single-line
                :dense="windowSize < 600"
              ></v-textarea>
            </div>
            <div class="flex-grow-1 form-group">
              <label
                >{{ $t('graphic.verify')
                }}<span class="red--text mx-2">*</span></label
              >
              <v-text-field
                :label="$t('graphic.verify')"
                required
                outlined
                single-line
                :dense="windowSize < 600"
              ></v-text-field>
              <canvas
                ref="captchaCanvas"
                width="150"
                height="40"
                class="mb-5"
                @click="generateCaptcha"
              />
            </div>
          </v-form>
          <div class="d-flex mt-5">
            <v-btn color="#D8AE5E" class="ml-auto">{{ $t('submit') }}</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-sm-16"></div>
    <div class="py-16"></div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import {
  EXTRA_SIZE,
  LARGE_SIZE,
  MEDIUM_SIZE,
  SMALL_SIZE,
} from '../utils/themes';

@Component({
  name: 'contact-us',
  layout: 'default-layout',
})
export default class contactUs extends Vue {
  windowSize: number = EXTRA_SIZE;
  size1: number = 20;
  size2: number = 160;

  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('contact.us'), disabled: true },
    ];
  }

  randomText(length: number = 5) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  @Ref('captchaCanvas') captchaCanvas!: HTMLCanvasElement;

  captchaText: string = '';

  rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCaptcha() {
    const canvas = this.captchaCanvas;
    const ctx = canvas.getContext('2d');
    this.captchaText = this.randomText();

    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 背景
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 干擾線
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${this.rand(100, 255)},${this.rand(
        100,
        255
      )},${this.rand(100, 255)},0.7)`;
      ctx.beginPath();
      ctx.moveTo(this.rand(0, canvas.width), this.rand(0, canvas.height));
      ctx.lineTo(this.rand(0, canvas.width), this.rand(0, canvas.height));
      ctx.stroke();
    }

    // CAPTCHA 字
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(this.captchaText, canvas.width / 2, canvas.height / 2);
  }

  handleResize() {
    if (window.innerWidth >= EXTRA_SIZE) {
      this.size1 = 20;
      this.size2 = 160;
    } else if (
      window.innerWidth < EXTRA_SIZE &&
      window.innerWidth >= LARGE_SIZE
    ) {
      this.size1 = 20;
      this.size2 = 160;
    } else if (
      window.innerWidth < LARGE_SIZE &&
      window.innerWidth >= MEDIUM_SIZE
    ) {
      this.size1 = 20;
      this.size2 = 160;
    } else if (
      window.innerWidth < MEDIUM_SIZE &&
      window.innerWidth >= SMALL_SIZE
    ) {
      this.size1 = 12;
      this.size2 = 95;
    } else {
      this.size1 = 12;
      this.size2 = 95;
    }
    this.windowSize = window.innerWidth;
  }

  mounted() {
    this.$nextTick(this.generateCaptcha);
    this.$nextTick(this.handleResize);
    window.addEventListener('resize', this.handleResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-family: Kufam, serif;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 5px;
  color: #ba9545;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    & {
      font-size: 20px;
    }
  }
}

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    & {
      font-size: 12px;
    }
  }
}

button {
  min-width: 145px;
  width: 145px;
  min-height: 50px;
  margin-left: auto;

  @media screen and (max-width: 600px) {
    & {
      min-width: 80px;
      width: 100px;
      min-height: 27px;
      margin: auto;
    }
  }
  ::v-deep .v-btn__content {
    font-family: Kufam, serif;
    font-weight: 700;
    font-size: 20px;
    color: white;
  }

  @media screen and (max-width: 600px) {
    & {
      ::v-deep .v-btn__content {
        font-size: 12px;
      }
    }
  }
}

label {
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 5px;

  @media screen and (max-width: 600px) {
    & {
      font-size: 12px;
    }
  }
}
</style>
