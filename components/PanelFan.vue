<template>
  <v-container class="py-8 px-12 white bg d-flex flex-column-reverse" fluid>
    <h3 class="font-weight-bold text-h3 mb-0 white--text text-center animate__animated animate__fadeIn">{{$t('panel.fan')}}</h3>
    <p style="font-size: 14px;" class="white--text text-center mb-0 animate__animated animate__slideInDown">
      {{$t('message1')}}
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'PanelFan',
};
</script>

<style scoped lang="scss">
  .bg{
    height: 32vw;
    min-height: 250px;
    background-size: 100% 100%;
    background-image: url("/image/bg4.png");
  }
</style>
