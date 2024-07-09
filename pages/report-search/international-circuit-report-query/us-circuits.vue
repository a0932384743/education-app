<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <chart3d-pie
          :datas="data1"
          title="2024-02 國外->連線單位(TOP 10)"
          styles="width: 100%; height:300px"
        />
      </v-col>
      <v-col cols="12">
        <chart3d-pie
          :datas="data2"
          title="2024-02 連線單位->國外(TOP 10)"
          styles="width: 100%; height:300px"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart3dPie from '~/components/Chart3dPie.vue';
import items from '~/assets/json/us-circuits.json';
export default {
  name: 'ConnectionComparison',
  components: { Chart3dPie },
  layout: 'admin-layout',
  computed: {
    data1() {
      return items
        .filter((item) => {
          return item.value[0] !== null;
        })
        .map((item) => {
          return {
            name: item.name,
            value: item.value[0],
          };
        });
    },
    data2() {
      return items
        .filter((item) => {
          return item.value[1] !== null;
        })
        .map((item) => {
          return {
            name: item.name,
            value: item.value[1],
          };
        });
    },
  },
};
</script>
