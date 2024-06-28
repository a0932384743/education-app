import Vue from 'vue';
import SnackBarComponent from '../../components/AlertMessage.vue';
const Snackbar = Vue.extend(SnackBarComponent);
export default (context, inject) => {
  const snackbar = new Snackbar({
    vuetify: context.app.vuetify,
  });

  inject('snackbar', {
    info(message, timeout = 3000) {
      if (document) {
        document.querySelector('#Snackbar').appendChild(snackbar.$mount().$el);
        snackbar.show(message, 'success', timeout);
        setTimeout(() => {
          document.querySelector('#Snackbar').html('');
        }, timeout + 100);
      }
    },
    alert(message, timeout = 3000) {
      if (document) {
        document.querySelector('#Snackbar').appendChild(snackbar.$mount().$el);
        snackbar.show(message, 'error', timeout);
        setTimeout(() => {
          document.querySelector('#Snackbar').html('');
        }, timeout + 100);
      }
    },
  });
};
