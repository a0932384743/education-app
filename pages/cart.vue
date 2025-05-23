<template>
  <div class="flex flex-column position-relative" style="position: relative">
    <v-img
      :src="windowSize > 600 ? '/image/bg14.png' : '/image/mobile-bg14.png'"
      width="100%"
      :height="windowSize > 600 ? 360 : 195"
      position="left bottom"
    />
    <v-container class="px-0 mx-auto" style="max-width: 1360px">
      <v-breadcrumbs
        :items="menus"
        class="pt-0"
        :style="{
          marginBottom: windowSize > 600 ? '155px' : '10px',
        }"
      >
        <template #divider>
          <v-icon color="#ba9545">mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="title px-4 px-lg-0">
        <h1 class="mb-2">
          {{ $t('word20') }}
        </h1>
        <hr class="double-color-hr" />
      </div>
      <div class="cart-container">
        <v-list>
          <v-list-item
            v-for="product in products"
            :key="product.id"
            class="px-0"
          >
            <v-list-item-icon
              :style="{ padding: windowSize > 600 ? '25px 25px' : '30px 0px' }"
            >
              <v-img
                class="mx-auto"
                :src="product.img"
                :alt="product.name"
                :width="windowSize > 600 ? 200 : 150"
                :height="windowSize > 600 ? 200 : 150"
              >
              </v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <p>{{ product.name }}</p>
                <p>{{ $t('word12') }}:{{ product.desc }}</p>
              </v-list-item-title>
            </v-list-item-content>
            <v-btn
              color="#D8AE5E"
              class="align-self-start align-self-sm-center px-0 rounded-0 mt-2"
              :min-height="windowSize > 600 ? 50 : 30"
              :min-width="windowSize > 600 ? 50 : 30"
            >
              <v-icon color="white" :size="windowSize > 600 ? 50 : 24"
                >mdi-close</v-icon
              >
            </v-btn>
          </v-list-item>
        </v-list>
        <v-card rounded="0" class="form" color="#D8AE5E" outlined>
          <v-form>
            <div
              class="d-flex flex-column flex-sm-row"
              :style="{ gap: windowSize > 600 ? '10px' : '0px' }"
            >
              <div class="flex-grow-1 form-group">
                <v-text-field
                  :label="$t('word19') + ' *'"
                  required
                  outlined
                  single-line
                  light
                  color="#BA9545"
                  background-color="#FFF"
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
              <div class="flex-grow-1 form-group">
                <v-text-field
                  :label="$t('tel') + ' *'"
                  required
                  outlined
                  single-line
                  light
                  color="#BA9545"
                  background-color="#FFF"
                  :dense="windowSize < 600"
                ></v-text-field>
              </div>
            </div>
            <div class="flex-grow-1 form-group">
              <v-text-field
                label="E-mail *"
                required
                outlined
                single-line
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <v-text-field
                :label="$t('address') + ' *'"
                outlined
                single-line
                light
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-text-field>
            </div>
            <div class="flex-grow-1 form-group">
              <v-textarea
                :label="$t('word23') + ' *'"
                required
                outlined
                single-line
                light
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              ></v-textarea>
            </div>
            <div class="flex-grow-1 form-group">
              <v-text-field
                :label="$t('graphic.verify')"
                required
                outlined
                single-line
                light
                color="#BA9545"
                background-color="#FFF"
                :dense="windowSize < 600"
              >
                <template #append>
                  <canvas
                    ref="captchaCanvas"
                    width="120"
                    height="30"
                    style="margin-top: -2px;"
                    @click="generateCaptcha"
                  />
                </template>
              </v-text-field>
            </div>
          </v-form>
          <div class="d-flex btn-group" :class="lang === 'en' ? 'justify-center justify-sm-end' : 'justify-end'">
            <v-btn color="#FFF" class="rounded-0" :min-width="lang === 'en' ? '180px' : 100">{{ $t('word21') }}</v-btn>
            <v-btn color="#FFF" class="rounded-0" :min-width="lang === 'en' ? '180px' : 100">{{ $t('word22') }}</v-btn>
          </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import { EXTRA_SIZE } from '../utils/themes';
import { Product, cartProducts } from '../dummy';
import { rand, randomText } from '../utils/randomText';

@Component({
  name: 'cart',
  layout: 'default-layout',
  asyncData() {
    return {
      products: cartProducts,
    };
  },
})
export default class Cart extends Vue {
  products: Product[] = cartProducts;

  get menus() {
    return [
      { text: this.$t('home'), disabled: false, href: '/' },
      { text: this.$t('word20'), disabled: true },
    ];
  }

  get lang() {
    return this.$i18n.locale;
  }


  windowSize: number = EXTRA_SIZE;

  @Ref('captchaCanvas') captchaCanvas!: HTMLCanvasElement;

  captchaText: string = '';

  generateCaptcha() {
    const canvas = this.captchaCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.captchaText = randomText();
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 背景
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 干擾線
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${rand(100, 255)},${rand(100, 255)},${rand(
        100,
        255
      )},0.7)`;
      ctx.beginPath();
      ctx.moveTo(rand(0, canvas.width), rand(0, canvas.height));
      ctx.lineTo(rand(0, canvas.width), rand(0, canvas.height));
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
    this.windowSize = window.innerWidth;
  }

  mounted() {
    this.$nextTick(this.handleResize);
    this.$nextTick(this.generateCaptcha);
    window.addEventListener('resize', this.handleResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="scss" scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media screen and (max-width: 1360px) {
    & {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
}

h1 {
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;

  @media screen and (max-width: 780px) {
    & {
      font-size: 20px;
    }
  }
}

p {
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 5px;

  @media screen and (max-width: 780px) {
    & {
      font-size: 14px;
    }
  }
}

.form {
  padding: 70px 55px;
  margin-bottom: 250px;

  @media screen and (max-width: 600px) {
    & {
      padding: 30px 16px;
      margin-bottom: 130px;
    }
  }
}

.btn-group {
  gap: 30px;
  margin-top: 70px;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    & {
      gap: 20px;
      margin-top: 40px;
    }
  }

  button {
    min-height: 50px !important;

    @media screen and (max-width: 600px) {
      & {
        min-height: 27px !important;
      }
    }

    ::v-deep .v-btn__content {
      font-family: Kufam, serif;
      font-weight: 700;
      font-size: 20px;
      color: #ba9545;
    }

    @media screen and (max-width: 600px) {
      & {
        ::v-deep .v-btn__content {
          font-size: 12px;
        }
      }
    }
  }
}

::v-deep .v-list-item {
  border-bottom: 1px solid #d8ae5e;
}
</style>
