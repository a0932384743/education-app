<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">設備狀態總覽</span>
        </v-card-title>
        <v-chart :options="options" class="mx-auto" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DomesticBackboneTraffic',
  layout: 'admin-layout',
  data() {
    return {
      options: {
        grid: {
          top: 0,
          bottom: 0,
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 'center',
        },
        series: [
          {
            name: '設備總覽',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: 322, name: '正常數' },
              { value: 161, name: '不正常數' },
              { value: 161, name: '不發報數' },
            ],
          },
        ],
      },
    }
  },
}
</script>
