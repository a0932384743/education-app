<template>
  <v-container class="fill-height" fluid>
    <v-row class="d-flex justify-center align-center">
      <v-col class="text-center">
        <v-icon size="128" color="primary">mdi-alert-circle-outline</v-icon>
        <h1 class="display-1">404</h1>
        <h2 class="headline">Page Not Found</h2>
        <p>
          The page you are looking for doesn't exist or an other error occurred.
        </p>
        <v-btn color="primary" @click="goHome">Go Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'admin-layout',
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>
