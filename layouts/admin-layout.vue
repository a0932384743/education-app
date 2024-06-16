<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="aside">
      <v-list-item
        class="header"
        dark
        :style="{
          height: `${vuetify.application.top}px`,
        }"
      >
        <v-list-item-content class="py-1">
          <v-list-item-title class="text-h6 text-center font-weight-bold">
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app color="header" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div
        class="align-center justify-center flex-grow-0 d-flex px-2"
        style="gap: 0.6rem"
      >
        <v-icon size="24"> mdi-clock </v-icon>
        <span class="font-italic font-weight-bold">{{ date }}</span>
        <span>|</span>
        <span>TIME: {{ time }}</span>
      </div>
      <div class="align-center justify-center flex-grow-0 d-flex px-2">
        <v-btn text>
          <v-icon size="24"> mdi-account </v-icon> User</v-btn
        >
      </div>
      <div
        class="align-center justify-center flex-grow-0 d-flex px-2"
        style="gap: 0.6rem"
      >
        <v-btn text> Logout </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import moment from 'moment/moment'

export default {
  name: 'AdminLayout',
  layout: 'AdminLayout',
  data() {
    return {
      drawer: false,
      timer: 0,
      time: moment().format('HH:mm:ss'),
      title: 'TWAREN 100G INMS',
    }
  },
  computed: {
    vuetify() {
      return this.$vuetify
    },
    date() {
      return moment().format('ddd MMM DD YYYY')
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = moment().format('HH:mm:ss')
    }, 1000) // 每秒更新一次时间
  },
  beforeDestroy() {
    // 在组件销毁前清除定时器
    clearInterval(this.timer)
  },
}
</script>
