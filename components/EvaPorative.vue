<template>
  <v-container class="py-10 px-12 white bg" fluid>
    <h2 class="font-weight-bold text-h2 mb-0 orange--text" style="position: relative;z-index: 2">EVAPORATIVE</h2>
    <h2 class="font-weight-bold text-h2 mb-0 white--text" style="position: relative;z-index: 2">COOLER</h2>
    <p style="font-size: 14px;max-width: calc(100% - 10rem);position: absolute;bottom: 30px;z-index: 2" class="white--text">
      Leveraging the high-temperature and corrosion resistance of FRP
      (Fiber-Reinforced Plastic), these fans are perfect for livestock
      facilities or evaporative media systems. They provide excellent air
      circulation, even in hard-to-reach areas, with easy installation and
      direct-drive motors for minimal noise. They also allow
      post-installation angle adjustments and can be upgraded to a brushless
      DC motor. Additionally, an optional mobile base offers flexible
      airflow direction.
    </p>
    <div class="overlay" />
  </v-container>
</template>

<script>
export default {
  name: 'EvaPorative'
};
</script>

<style scoped lang="scss">
.bg {
  position: relative;
  height: 55.37vw;
  background-size: 100% 100%;
  background-image: url("/image/bg2.png");
}

.overlay {
  z-index: 1;
  bottom: 0;
  left: 0;
  height: calc(100% - 4.5rem);
  width: calc(100% - 3rem);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
