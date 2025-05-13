import Vue from 'vue';
import SnackBarComponent from '../../components/AlertMessage.vue';

const Snackbar = Vue.extend(SnackBarComponent);

const snackbarPlugin = (context:Record<any, any>, inject:any) => {
  const snackbar:Record<any, any> = new Snackbar({
    vuetify: context.app.vuetify,
  });

  inject('snackbar', {
    info(message: string, timeout: number = 3000): void {
      if (document) {
        const snackbarContainer = document.querySelector('#Snackbar');
        if (snackbarContainer) {
          snackbarContainer.appendChild(snackbar.$mount().$el);
          snackbar.show(message, 'success', timeout);
          setTimeout(() => {
            snackbarContainer.innerHTML = '';
          }, timeout + 100);
        }
      }
    },
    alert(message: string, timeout: number = 3000): void {
      if (document) {
        const snackbarContainer = document.querySelector('#Snackbar');
        if (snackbarContainer) {
          snackbarContainer.appendChild(snackbar.$mount().$el);
          snackbar.show(message, 'error', timeout);
          setTimeout(() => {
            snackbarContainer.innerHTML = '';
          }, timeout + 100);
        }
      }
    },
  });
};

export default snackbarPlugin;
