<template>
  <v-app id="inspire">
    <v-menu
      min-width="150px"
      transition="slide-y-transition"
      offset-y
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" class="floating-btn">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-subheader> {{ $t('language') }}</v-list-subheader>
        </v-list-item>
        <v-list-item
          :class="{ 'info white--text': currentLocale === 'zh-tw' }"
          @click="changeLanguage('zh-tw')"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-2">
              <v-icon
                size="20"
                :class="{ 'white--text': currentLocale === 'zh-tw' }"
              >
                mdi-earth </v-icon
              >{{ $t('lang.zh-tw') }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :class="{ 'info white--text': currentLocale === 'en' }"
          @click="changeLanguage('en')"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-2">
              <v-icon
                size="20"
                :class="{ 'white--text': currentLocale === 'en' }"
              >
                mdi-earth </v-icon
              >{{ $t('lang.en') }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-main>
        <Nuxt/>
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
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.setLocale(lang)
    },
  },
}
</script>
<style scoped>
.floating-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
