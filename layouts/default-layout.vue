<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid class="pt-5 fill-height w-100 d-inline-flex align-content-center justify-center overflow-hidden" style="background-size: cover;background-image: url('/image/background.jpg')">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  layout: 'DefaultLayout',

  head() {
    return {
      title: this.$t('app.welcome'),
    };
  },
};
</script>
