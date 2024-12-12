<template>
  <v-container dark fluid class="px-12 py-6 orange justify-space-between align-center d-flex">
    <h3 class="text-h3 white--text flex-grow-1 font-weight-bold">
      PRODUCT INQUIRY?
    </h3>
    <p class=" font-weight-bold px-8"  style="font-size: 14px">
      If you have any product or service question<br/>
      please contact: +886-4-23320088
    </p>
    <v-btn text color="white" class="contact-btn">CONTACT US</v-btn>
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
