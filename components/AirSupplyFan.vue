<template>
  <v-container class="py-10 px-12 white bg d-flex flex-column" fluid>
    <h3 class="font-weight-bold text-md-h2 text-h4 mb-0 white--text animate__animated animate__slideInLeft text-uppercase">{{$t('air.supply.fan')}}</h3>
    <p style="font-size: 14px;max-width: 800px;z-index: 5" class="white--text animate__animated animate__fadeInUp">
      {{$t('message6')}}
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'AirSupplyFan',
};
</script>

<style scoped lang="scss">
  .bg{
    height: 61.69vw;
    background-size: 100% 100%;
    background-image: url("/image/bg1.png");

    @media screen and (max-width: 1350px) {
      height: 100%;
      min-height: 61.69vw;
    }
  }
</style>
