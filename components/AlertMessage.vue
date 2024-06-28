<template>
  <v-fade-transition>
    <v-alert v-if="snackbar" dismissible :color="color" :type="color">{{
      message
    }}</v-alert>
  </v-fade-transition>
</template>

<script>
export default {
  name: 'SnackBar',
  data() {
    return {
      snackbar: false,
      message: '',
      color: 'info',
      timeout: 3000,
    };
  },
  methods: {
    show(message, color = 'info', timeout = 3000) {
      this.message = message;
      this.color = color;
      this.timeout = timeout;
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, timeout);
    },
  },
};
</script>
