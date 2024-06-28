
declare module 'vue/types/vue' {
  interface Vue {
    $snackbar: {
      info(message: string, timeout?: number): void;
      alert(message: string, timeout?: number): void;
    };
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $snackbar: {
      info(message: string, timeout?: number): void;
      alert(message: string, timeout?: number): void;
    };
  }

  interface Context {
    $snackbar: {
      info(message: string, timeout?: number): void;
      alert(message: string, timeout?: number): void;
    };
  }
}
