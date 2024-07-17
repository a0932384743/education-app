<template>
  <v-card v-show="show" class="mx-auto" :height="collapse ? 'auto' : '100%'">
    <v-card-title class="info white--text flex-nowrap">
      <span class="font-weight-bold text-truncate">{{ $t(title) }}</span>
      <v-spacer></v-spacer>
      <v-btn color="white" icon @click="collapse = !collapse">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn color="white" icon @click="show = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-if="!collapse" style="height: calc(100% - 60px)">
        <slot />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: 'ChartCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      collapse: false,
      show: true,
    };
  },
};
</script>
