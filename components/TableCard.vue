<template>
  <v-card>
    <v-card-title class="flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <slot :search="search" :footer-props="footerProps" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'TableCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      footerProps: {
        itemsPerPageAllText: this.$t('all'),
        itemsPerPageText: this.$t('per.page'),
        pageText: this.$t('current.page'),
      },
    }
  },
}
</script>
