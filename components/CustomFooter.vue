<template>
  <v-footer color="footer" dark>
    <v-container class="py-10" fluid>
      <v-row>
        <!-- 左邊公司資訊 -->
        <v-col cols="12" sm="6" md="4" class="text-left">
          <h5 class="font-weight-bold title mb-8">
            Aeropower Ventilation Co., Ltd.
          </h5>
          <p class="text-subtitle-2 mb-0">No.171, Wufu W. Rd., Wufong Dist.,</p>
          <p class="text-subtitle-2 mb-0">Taichung City 41355, Taiwan</p>
          <div class="my-14" />

          <p class="text-subtitle-1 mb-0">TEL: 04-23320088</p>
          <p class="text-subtitle-1 mb-0">FAX: 04-23320066</p>
          <p class="text-subtitle-1 mb-0">E-mail: aeropower651@gmail.com</p>
          <div class="my-4" />
          <div class="d-flex" style="gap: 1rem">
            <v-icon size="30" class="social-icon">mdi-facebook</v-icon>
            <v-icon size="30" class="social-icon">mdi-twitter</v-icon>
            <v-icon size="30" class="social-icon">mdi-pinterest</v-icon>
            <v-icon size="30" class="social-icon">mdi-instagram</v-icon>
          </div>
        </v-col>

        <!-- 中間代表資訊 -->
        <v-col cols="12"  sm="6" md="4" class="text-left">
          <h5 class="font-weight-bold title mb-8">Representative of Europe</h5>
          <p class="text-subtitle-2 mb-8">Location: London, UK</p>
          <p class="text-subtitle-2 mb-8">TEL: +44 (0) 7591-969585</p>
          <p class="text-subtitle-2 mb-8">E-Mail: aeropower.sd@gmail.com</p>
        </v-col>

        <!-- 右邊其他資訊 -->
        <v-col cols="12" sm="4" md="2" class="text-left">
          <h5 class="font-weight-bold title mb-8">Company</h5>
          <p class="text-subtitle-2 mb-8">About Us</p>
          <p class="text-subtitle-2 mb-8">Global Layout</p>
          <div class="my-8" />
          <h5 class="font-weight-bold title mb-8">Resources</h5>
          <p class="text-subtitle-2 mb-8">Articles</p>
          <p class="text-subtitle-2 mb-8">Downloads</p>
          <p class="text-subtitle-2 mb-8">FAQs</p>
        </v-col>
        <v-col cols="12" sm="4" md="2" class="text-left">
          <h5 class="font-weight-bold title mb-8">Product</h5>
          <p class="text-subtitle-2 mb-8">HVLS fan</p>
          <p class="text-subtitle-2 mb-8">EVAP fan</p>
          <p class="text-subtitle-2 mb-8">Exhaust fan</p>
          <p class="text-subtitle-2 mb-8">Air supply fan</p>
          <p class="text-subtitle-2 mb-8">Controllers</p>
          <p class="text-subtitle-2 mb-8">Accessories</p>
        </v-col>
      </v-row>
      <!-- 底部版權資訊 -->
      <v-row justify="center" class="mt-5">
        <p class="text-center text-subtitle-2">
          Copyright © 2024 AEROPOWER VENTILATION All Rights Reserved.
        </p>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
h5.title {
  font-size: 2.15rem;
  color: white;
  position: relative;
  padding: 10px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: auto;
    right: 50%;
    bottom: 0;
    height: 3px;
    background-color: orange;
    z-index: 1;
    border-radius: 0;
    opacity: 1;
    animation-name: after-slide;
    animation-duration: 500ms;
  } /* 橙色線條效果 */

  @keyframes after-slide {
    from {
      right: 0%;
    }
    to {
      right: 50%;
    }
  }
}

::v-deep .v-icon.social-icon:hover {
  color: orange; /* 滑鼠移入橙色效果 */
  cursor: pointer;
  transition: color 500ms;
}
</style>
