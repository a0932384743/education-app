<template>
  <v-card class="w-100" max-width="400">
    <v-card-title class="headline">Login</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="login">Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="forgotPassword">Forgot Password?</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  layout: 'default-layout',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      rememberMe: false,
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
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        // Handle login logic
        alert('Login successful!');
      }
    },
    forgotPassword() {
      // Handle forgot password logic
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
