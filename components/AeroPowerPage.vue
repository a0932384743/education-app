<template>
  <v-container
    class="white px-0 py-0 d-flex flex-column"
    fluid
    style="position: relative"
  >
    <!-- Header Section -->
    <div
      class="section-1 bg d-flex flex-column py-6 py-md-12 px-8 px-md-16"
      style="position: relative"
    >
      <div class="overlay" />
      <div class="flex-grow-1">
        <h3
          class="font-weight-bold text-h6 text-md-h4 indigo--text text--darken-4 text-uppercase animate__animated animate__fadeInDown"
          style="position: relative; z-index: 5"
        >
          {{ $t('app.info') }}
        </h3>
        <p
          style="
            font-size: 14px;
            max-width: 600px;
            position: relative;
            z-index: 5;
          "
          class="indigo--text text--darken-4 animate__animated animate__fadeInUp"
        >
          {{ $t('message14') }}
        </p>
        <div class="py-md-6 py-3" />
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            position: relative;
            z-index: 5;
          "
          class="black--text text--darken-4 animate__animated animate__fadeInLeft"
        >
          {{ $t('message15') }}
        </p>
        <div class="py-md-6 py-3" />
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            margin-left: auto;
            position: relative;
            z-index: 5;
          "
          class="black--text text--darken-4 text-end animate__animated animate__fadeInRight"
        >
          {{ $t('message16') }}
        </p>
      </div>
      <div class="flex-grow-1 d-flex flex-md-row-reverse flex-column">
        <div class="d-flex justify-center right-icon">
          <v-img
            src="/image/bg5.png"
            width="300"
            height="300"
            max-width="300"
            max-height="300"
            style="z-index: 10"
            aspect-ratio="1"
            contain
          />
        </div>
        <div class="d-flex flex-grow-1 flex-column justify-center">
          <h5
            class="font-weight-bold text-h6 text-md-h5 pl-10 white--text text-uppercase title"
            style="position: relative; z-index: 5; max-width: 600px"
          >
            {{ $t('message17') }}
          </h5>
          <p
            style="
              font-size: 14px;
              max-width: 600px;
              position: relative;
              z-index: 5;
            "
            class="white--text pl-10 animate__animated animate__fadeInLeft"
          >
            {{ $t('message18') }}
          </p>
          <div class="py-md-6 py-3" />
          <h5
            class="font-weight-bold text-h6 text-md-h5 white--text text-uppercase title"
            style="position: relative; z-index: 5; max-width: 600px"
          >
            {{ $t('message19') }}
          </h5>
          <p
            style="
              font-size: 14px;
              max-width: 600px;
              position: relative;
              z-index: 5;
            "
            class="white--text animate__animated animate__fadeInLeft"
          >
            {{ $t('message20') }}
          </p>
          <div class="py-md-6 py-3" />
          <h5
            class="font-weight-bold text-h6 text-md-h5 pl-16 white--text text-uppercase title"
            style="position: relative; z-index: 5; max-width: 600px"
          >
            {{ $t('message21') }}
          </h5>
          <p
            style="
              font-size: 14px;
              max-width: 600px;
              position: relative;
              z-index: 5;
            "
            class="white--text pl-16 animate__animated animate__fadeInLeft"
          >
            {{ $t('message22') }}
          </p>
        </div>
      </div>
      <div class="overlay-bottom" />
    </div>
    <div class="section-2 white d-flex flex-column py-6 py-md-12 px-8 px-md-16">
      <div class="block text-center">
        <v-icon color="indigo darken-4" size="20" style="z-index: 5"
          >mdi-circle</v-icon
        >
        <h4
          class="font-weight-bold text-md-h4 text-h5 my-3 text-center indigo--text text--darken-4 title right mx-auto"
          style="
            position: relative;
            z-index: 5;
            width: fit-content;
            max-width: 400px;
          "
        >
          {{ $t('message7') }}?
        </h4>
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            position: relative;
            z-index: 5;
          "
          class="text-center indigo--text text--darken-4 mx-auto animate__animated animate__fadeInDown"
        >
          {{ $t('message8') }}
        </p>
      </div>
      <div class="py-md-6 py-3" />
      <div class="block text-left">
        <v-icon color="indigo darken-4" size="20" style="z-index: 5"
          >mdi-circle</v-icon
        >
        <h4
          class="font-weight-bold text-md-h4 text-h5 my-3 text-left indigo--text text--darken-4 title"
          style="
            position: relative;
            z-index: 5;
            width: fit-content;
            max-width: 400px;
          "
        >
          {{ $t('message9') }}
        </h4>
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            position: relative;
            z-index: 5;
          "
          class="text-left indigo--text text--darken-4 mr-auto animate__animated animate__fadeInLeft"
        >
          {{ $t('message11') }}
        </p>
      </div>
      <div class="py-md-6 py-3" />
      <div class="block text-end">
        <v-icon color="indigo darken-4" size="20" style="z-index: 5"
          >mdi-circle</v-icon
        >
        <h4
          class="font-weight-bold text-md-h4 text-h5 my-3 text-end indigo--text text--darken-4 title right top ml-auto"
          style="
            position: relative;
            z-index: 5;
            width: fit-content;
            max-width: 400px;
          "
        >
          {{ $t('message12') }}
        </h4>
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            position: relative;
            z-index: 5;
          "
          class="text-end indigo--text text--darken-4 ml-auto animate__animated animate__fadeInRight"
        >
          {{ $t('message13') }}
        </p>
      </div>
      <div class="py-md-6 py-3" />
      <div class="block text-center">
        <h4
          class="font-weight-bold text-md-h4 text-h5 my-3 text-center white--text mx-auto text-bg px-10 py-1"
          style="position: relative; z-index: 5; width: fit-content"
        >
          {{ $t('message23') }}
        </h4>
        <p
          style="
            font-size: 14px;
            max-width: 800px;
            position: relative;
            z-index: 5;
          "
          class="text-center indigo--text text--darken-4 ml-auto animate__animated animate__fadeInDown mx-auto"
        >
          {{ $t('message24') }}
        </p>
      </div>
      <div class="py-md-6 py-3" />
      <v-row
        style="max-width: 1200px; z-index: 5"
        class="mx-auto justify-space-between fill-width"
      >
        <v-col cols="12" sm="6" md="3">
          <v-img
            width="210"
            height="210"
            src="/image/icon1.png"
            contain
            class="mx-auto animate__animated animate__fadeInDown"
            style="z-index: 5"
          />
          <h6
            class="text-subtitle-1 font-weight-bold indigo--text text--darken-4 text-center animate__animated animate__fadeInUp"
            style="z-index: 5"
          >
            GALVANIZED BOX FAN
          </h6>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-img
            width="210"
            height="210"
            src="/image/icon2.png"
            contain
            class="mx-auto animate__animated animate__fadeInDown"
            style="z-index: 5"
          />
          <h6
            class="text-subtitle-1 font-weight-bold indigo--text text--darken-4 text-center animate__animated animate__fadeInUp"
            style="z-index: 5"
          >
            POWERSKY ® X6
          </h6>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-img
            width="210"
            height="210"
            src="/image/icon3.png"
            contain
            class="mx-auto animate__animated animate__fadeInDown"
            style="z-index: 5"
          />
          <h6
            class="text-subtitle-1 font-weight-bold indigo--text text--darken-4 text-center animate__animated animate__fadeInUp"
            style="z-index: 5"
          >
            FIBERGLASS EXHUAST FAN-BELT TYPE
          </h6>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-img
            width="210"
            height="210"
            src="/image/icon4.png"
            contain
            class="mx-auto animate__animated animate__fadeInDown"
            style="z-index: 5"
          />
          <h6
            class="text-subtitle-1 font-weight-bold indigo--text text--darken-4 text-center animate__animated animate__fadeInUp"
            style="z-index: 5"
          >
            PROTABLE EVAPORATIVE COOLER
          </h6>
        </v-col>
      </v-row>
      <div class="py-md-6 py-3" />
      <h4
        class="font-weight-bold text-md-h4 text-h5 my-3 text-center indigo--text text--darken-4 mx-auto px-10 py-1"
        style="position: relative; z-index: 5; width: fit-content"
      >
        <span class="orange--text font-weight-bold text-md-h4 text-h5"
          >HOT</span
        >
        PRODUCTS
      </h4>
      <div class="py-md-6 py-3" />
      <v-carousel
        hide-delimiters
        style="max-width: 1300px; height: fit-content; z-index: 5"
        class="mx-auto"
      >
        <v-carousel-item>
          <v-row class="fill-width px-8">
            <v-col cols="12" md="6" class="d-flex">
              <v-img
                width="300"
                height="300"
                max-width="300"
                max-height="300"
                src="/image/product1.png"
                sizes="100%"
              />
              <div class="py-10">
                <h6 class="text-subtitle-1 font-weight-bold orange--text">
                  GALVANIZED BOX FAN
                </h6>
                <p class="text-subtitle-2 black--text mb-0">
                  # EG-B36 # EG-B50
                </p>
                <span class="text-subtitle-2 orange black--text">MORE</span>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex">
              <v-img
                width="300"
                height="300"
                max-width="300"
                max-height="300"
                src="/image/product2.png"
                sizes="100%"
              />
              <div class="py-10">
                <h6 class="text-subtitle-1 font-weight-bold orange--text">
                  AIR SUPPLY FAN
                </h6>
                <p class="text-subtitle-2 black--text mb-0">
                  # EG-B36 # EG-B50
                </p>
                <span class="text-subtitle-2 orange black--text">MORE</span>
              </div>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="overlay-right-1" />
    <div class="overlay-right-2" />
    <div class="overlay-right-3" />
    <div class="overlay-right-4" />
  </v-container>
</template>

<script>
export default {
  name: 'AeroPowerPage',
};
</script>

<style scoped lang="scss">
.right-icon {
  flex: 0 0 600px;
  max-width: 600px;
  @media screen and (max-width: 1250px) {
    flex: 1 1 auto;
    max-width: 100%;
  }
}

.bg {
  position: relative;
  height: 60vw;
  background-size: cover;
  background-image: url('/image/bg3.png');
  background-position: center;
  background-attachment: fixed;

  @media screen and (max-width: 1350px) {
    height: 100%;
    min-height: 60vw;
  }
}

.title {
  position: relative;
  z-index: 5;

  &::after {
    content: '';
    position: relative;
    display: block;
    bottom: 15px;
    left: -20px;
    height: 1.2rem;
    width: 10rem;
    background-color: var(--v-orange-base);
    z-index: -1;
    border-radius: 0;
    opacity: 1;
    animation-name: after-slide;
    animation-duration: 500ms;
  }

  &.right::after {
    margin-left: auto;
    left: 20px;
  }

  &.top::after {
    position: absolute;
    right: -20px;
    top: 3px;
  }

  @keyframes after-slide {
    from {
      width: 0;
    }
    to {
      width: 10rem;
    }
  }
}

.overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

.overlay-bottom {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  height: 70%;
  width: 100%;
  border-radius: 0 !important;
  background-color: var(--v-blue-base);
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 60%);

  @media screen and (max-width: 959px) {
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 35%);
  }
}

.overlay-right-1 {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 5%;
  height: 40%;
  width: 100%;
  border-radius: 0 !important;
  background-color: rgba(179, 190, 214, 0.7);
  clip-path: polygon(100% 20%, 100% 50%, 0 90%, 0 60%);

  @media screen and (max-width: 959px) {
    clip-path: polygon(100% 20%, 100% 50%, 0 62%, 0 32%);
  }
}

.overlay-right-2 {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 25%;
  height: 30%;
  width: 50%;
  border-radius: 0 !important;
  background-color: rgba(179, 190, 214, 0.7);
  clip-path: polygon(100% 33%, 100% 63%, 0 90%, 0 60%);

  @media screen and (max-width: 959px) {
    top: 23%;
    clip-path: polygon(100% 20%, 100% 50%, 0 59%, 0 29%);
  }
}

.overlay-right-3 {
  position: absolute;
  z-index: 2;
  right: 0;
  top: 52%;
  height: 40%;
  width: 100%;
  border-radius: 0 !important;
  background-color: rgba(179, 190, 214, 0.7);
  clip-path: polygon(100% 60%, 100% 95%, 0 30%, 0 0);

  @media screen and (max-width: 959px) {
    top: 45%;
    clip-path: polygon(100% 35%, 100% 60%, 0 39%, 0 15%);
  }
}

.overlay-right-4 {
  position: absolute;
  z-index: 2;
  right: 0;
  top: 50%;
  height: 30%;
  width: 50%;
  border-radius: 0 !important;
  background-color: rgba(179, 190, 214, 0.7);
  clip-path: polygon(100% 40%, 100% 73%, 0 32%, 0 0);

  @media screen and (max-width: 959px) {
    top: 35%;
    clip-path: polygon(100% 35%, 100% 60%, 0 45%, 0 20%);
  }
}

.text-bg {
  background-image: linear-gradient(
    105deg,
    var(--v-indigo-base) 50%,
    #4786ca 50%
  );
  clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
}

::v-deep .v-carousel__item {
  height: fit-content !important;
}
</style>
