<template>
  <v-container class="py-10 px-12 white bg" fluid style="position: relative">
    <div class="overlay" />
    <!-- Header Section -->
    <h4
      class="font-weight-bold text-h4 mb-3 black--text"
      style="position: relative; z-index: 5"
    >
      AEROPOWER VENTILATION CO,.LTD
    </h4>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 3rem);
        position: relative;
        z-index: 5;
      "
      class="black--text mb-10"
    >
      Professional design, research and development, manufacturing, and
      after-sales service.
    </p>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 3rem);
        position: relative;
        z-index: 5;
      "
      class="black--text mb-10"
    >
      In 2004, Aeropower Ventilation Co., Ltd. was established in Taichung City,
      Taiwan. At the beginning of its establishment, Aeropower focused on the
      development and production of negative pressure exhaust fans. As well as
      insisted on Taiwan design and Taiwan manufacturing to ensure our product
      quality.
    </p>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 3rem);
        margin-left: auto;
        position: relative;
        z-index: 5;
      "
      class="black--text text-end mb-10"
    >
      Main product - Evaporative cooler, Portable evaporative cooler, Exhaust
      fan, HVLS fan, Industrial ceiling fan, Industrial ventilation system,
      Industrial circulation fan, Livestock ventilation system, Livestock fan,
      Farm ventilation ...etc.
    </p>
    <div class="py-10"/>
    <h5
      class="font-weight-bold text-h5 mb-3 white--text pl-10"
      style="position: relative; z-index: 5;max-width: calc(100% - 500px)"
    >
      About Aeropower
    </h5>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 500px);
        position: relative;
        z-index: 5;
      "
      class="white--text mb-10 pl-10"
    >
      Aeropower produces environmentally friendly air conditioning cooling
      equipment, ensuring high quality and performance in diverse applications.
    </p>
    <h5
      class="font-weight-bold text-h5 mb-3 white--text"
      style="position: relative; z-index: 5;max-width: calc(100% - 500px)"
    >
      AEROPOWER’S NETWORK
    </h5>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 500px);
        position: relative;
        z-index: 5;
      "
      class="white--text mb-10"
    >
      Aeropower produce Environmentally friendly air conditioning cooling equipment.
      We realize that the global warming ...
    </p>

    <h5
      class="font-weight-bold text-h5 mb-3 white--text pl-16"
      style="position: relative; z-index: 5;max-width: calc(100% - 500px)"
    >
      PATENT & CERTIFICATION
    </h5>
    <p
      style="
        font-size: 14px;
        max-width: calc(100% - 500px);
        position: relative;
        z-index: 5;
      "
      class="white--text mb-10 pl-16"
    >
      Aeropower produce Environmentally friendly air conditioning cooling equipment.
      We realize that the global warming ...
    </p>
    <div class="overlay-bottom" />
  </v-container>
</template>

<script>
export default {
  name: 'AeroPowerPage',
};
</script>

<style scoped lang="scss">
.bg {
  position: relative;
  height: 85vw;
  background-size: 100% auto;
  background-image: url('/image/bg3.png');
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

.overlay-bottom{
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  height: 70%;
  width: 100%;
  border-radius: 0 !important;
  background-color: var(--v-indigo-darken1);
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 60%);
}
</style>
