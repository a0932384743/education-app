<template>
  <v-container
    dark
    fluid
    class="py-6 py-md-12 px-8 px-md-16 orange justify-space-between align-center d-flex"
  >
    <h3
      class="text-md-h3 text-h5 white--text flex-grow-1 font-weight-bold text-uppercase animate__animated animate__slideInLeft"
    >
      {{ $t('message2') }}?
    </h3>
    <div class="font-weight-bold px-8 mb-0 overflow-hidden" style="font-size: 14px">
      <div class="animate__animated animate__fadeInDown">
        {{ $t('message3') }}
      </div>
      <div class="animate__animated animate__fadeInDown" style="animation-delay: 100ms">
        {{ $t('message4') }}
      </div>
    </div>
    <v-btn text color="white" class="contact-btn">{{ $t('contact.us') }}</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'ProductInquiry',
};
</script>

<style scoped lang="scss">
::v-deep .contact-btn {
  border-radius: 0 !important;
  background-color: var(--v-indigo-darken3) !important;
  height: auto;
  font-weight: bold;
}
</style>
