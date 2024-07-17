<template>
  <v-container
    fluid
    class="pt-5 fill-height w-100 d-inline-flex flex-column align-content-center justify-center overflow-hidden"
    style="
      background-size: cover;
      background-image: url('/image/background.jpg');
    "
  >
    <v-alert
      border="left"
      colored-border
      color="warning accent-4"
      elevation="2"
      max-width="800"
    >
      <div class="subtitle-1 font-weight-bold">
        <v-icon size="25">mdi-information-slab-symbol</v-icon>{{ $t('notify') }}:
      </div>
      <ul style="list-style: number">
        <li>
          {{ $t('login.hint.1') }}
        </li>
        <li>
          {{ $t('login.hint.2') }}
        </li>
      </ul>
    </v-alert>
    <h1 class="text-center">{{ $t('app.welcome') }}</h1>
    <v-card class="w-100 py-5 px-3" max-width="400">
      <div class="subtitle-1 text-center">{{ $t('login.hint.3') }}</div>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
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

            append-icon="mdi-closed-caption"
          ></v-text-field>
          <recaptcha-canvas/>
          <div class="d-inline-flex justify-space-between w-100 align-center mt-2">
            <v-checkbox
              class="m-0"
              v-model="rememberMe"
              :label="$t('remember.me')"
            ></v-checkbox>
            <v-btn text @click="forgotPassword">{{ $t('forgot.password') }}?</v-btn>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="w-100" @click="login"
          ><v-icon color="white">mdi-login</v-icon>{{ $t('login') }}</v-btn
        >
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
      valid: false,
      email: '',
      password: '',
      recaptcha:'',
      rememberMe: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be at least 6 characters',
      ],
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        // Handle login logic
        alert('Login successful!')
      }
    },
    forgotPassword() {
      // Handle forgot password logic
      alert('Forgot Password clicked')
    },
  },
}
</script>

<style scoped>
.v-container {
  background: #f5f5f5;
}
</style>
