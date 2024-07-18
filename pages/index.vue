<template>
  <v-container
    fluid
    class="pt-5 fill-height w-100 d-inline-flex flex-column align-content-center justify-center overflow-hidden"
    style="
      background-size: cover;
      background-image: url('/image/background.jpg');
    "
  >
    <template v-if="!isLogin">
      <h1 class="text-center" transition="fade-transition">
        {{ $t('app.welcome') }}
      </h1>
      <v-card
        class="w-100 py-5 px-3"
        max-width="400"
        transition="fade-transition"
      >
        <div class="subtitle-1 text-center">{{ $t('login.hint.3') }}</div>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              append-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
              append-icon="mdi-lock-outline"
            ></v-text-field>
            <v-text-field
              v-model="recaptcha"
              :label="$t('recaptcha')"
              required
              :rules="recaptchaRules"
              append-icon="mdi-closed-caption"
            ></v-text-field>
            <recaptcha-canvas :recaptcha.sync="recaptchaText" />
            <div
              class="d-inline-flex justify-space-between w-100 align-center mt-2"
            >
              <v-checkbox
                v-model="rememberMe"
                class="m-0"
                :label="$t('remember.me')"
              ></v-checkbox>
              <v-btn text @click="forgotPassword"
                >{{ $t('forgot.password') }}?</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" class="w-100" @click="login"
            ><v-icon color="white">mdi-login</v-icon>{{ $t('login') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
    <v-card
      v-if="isLogin"
      class="w-100 py-5 px-3"
      max-width="400"
      transition="fade-transition"
    >
      <div class="subtitle-1 text-center">{{ $t('login.hint.4') }}</div>
      <v-card-text>
        <v-form v-model="valid">
          <v-otp-input
            v-model="otp"
            length="6"
            type="number"
            required
          ></v-otp-input>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="w-100" @click="goToHome">
          <v-icon color="white">mdi-login</v-icon>{{ $t('submit') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import RecaptchaCanvas from '@/components/RecaptchaCanvas.vue';

export default {
  name: 'Login',
  components: { RecaptchaCanvas },
  layout: 'default-layout',
  data() {
    return {
      isLogin: false,
      valid: false,
      email: '',
      otp: '',
      password: '',
      recaptcha: '',
      rememberMe: false,
      recaptchaText: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be at least 6 characters',
      ],
    };
  },
  computed: {
    recaptchaRules() {
      return [
        (v) => !!v || 'Recaptcha is required',
        (v) => v === this.recaptchaText || 'Recaptcha is not matched',
      ];
    },
  },
  methods: {
    login() {
      if (this.valid) {
        this.isLogin = true;
      }
    },
    goToHome() {
      this.$router.push('/dashboard');
    },
    forgotPassword() {
      alert('Forgot Password clicked');
    },
  },
};
</script>

<style scoped>
.v-container {
  background: #f5f5f5;
}
</style>
