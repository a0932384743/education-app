<template>
  <div class="d-flex flex-column" style="gap: 1rem">
    <div class="subtitle-1">{{ title }}</div>
    <div
class="d-flex w-100" style="gap: 1rem" :class="{
      'flex-row-reverse' : direct === 'left'
    }">
      <v-btn color="secondary" outlined class="flex-grow-1" @click="onSelectAll">
        <v-icon light>{{ 'mdi-chevron-double-' + direct }}</v-icon>
      </v-btn>
      <v-btn color="secondary" outlined class="flex-grow-1"  @click="onSelect">
        <v-icon light>{{ 'mdi-chevron-' + direct }}</v-icon>
      </v-btn>
    </div>
    <v-text-field
      v-model="filter"
      color=-info
      label="Filter"
      name="filter"
      hide-details
    ></v-text-field>
    <v-card class="py-5 flex-grow-1">
      <v-list>
        <v-list-item
          v-for="(device, index) in filterDevice"
          :key="index"
          :class="{ 'info white--text': selectDevices.includes(device) }"
        >
          <v-list-item-content @click="toggleSelect(device)">{{
            device
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DeviceList',
  props: {
    title: {
      type: String,
      default: '',
    },
    direct:{
      type: String,
      default: 'left',
    },
    devices: {
      type: Array,
      require: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      filter: '',
      selectDevices: [],
    };
  },
  computed: {
    filterDevice() {
      return this.devices.filter((d) => d.includes(this.filter));
    },
  },
  methods: {
    onSelectAll() {
      this.$emit('select-all', this.devices);
      this.selectDevices = [];
    },
    onSelect() {
      this.$emit('select', this.selectDevices);
      this.selectDevices = [];
    },
    toggleSelect(device) {
      if (this.selectDevices.includes(device)) {
        this.selectDevices = this.selectDevices.filter((d) => d !== device);
      } else {
        this.selectDevices.push(device);
      }
    },
  },
};
</script>
