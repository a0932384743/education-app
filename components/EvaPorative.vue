<template>
  <v-container
    class="py-10 px-12 white bg d-flex flex-column justify-space-between"
    fluid
  >
    <div>
      <h2
        class="font-weight-bold text-md-h2 text-h4 mb-0 orange--text animate__animated animate__slideInLeft"
        style="position: relative; z-index: 5"
      >
        {{ $t('evaporative') }}
      </h2>
      <h2
        class="font-weight-bold text-md-h2 text-h4 mb-0 white--text animate__animated animate__slideInLeft"
        style="position: relative; z-index: 5; animation-delay: 100ms"
      >
        {{ $t('cooler') }}
      </h2>
    </div>
    <p
      style="font-size: 14px; max-width: 800px; z-index: 5"
      class="white--text animate__animated animate__fadeInUp"
    >
      {{ $t('message5') }}
    </p>
    <div class="overlay" />
  </v-container>
</template>

<script>
export default {
  name: 'EvaPorative',
};
</script>

<style scoped lang="scss">
.bg {
  position: relative;
  height: 55.37vw;
  background-size: 100% 100%;
  background-image: url('/image/bg2.png');

  @media screen and (max-width: 1350px) {
    height: 100%;
    min-height: 55.37vw;
  }
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
