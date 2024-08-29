<template>
  <div class="d-inline-flex flex-column py-3 w-100" style="gap: 1rem">
    <h3 class="text-center bold">事件列表</h3>
    <v-card>
      <v-simple-table fixed-header height="300px">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">事件類型</th>
              <th class="text-left">事件描述</th>
              <th class="text-end">發生時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 離線</td>
              <td class="text-end">今天 10:02:27</td>
            </tr>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 流量異常</td>
              <td class="text-end">今天 09:02:27</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <h3 class="text-center bold">
      PING測試 <v-chip color="success" class="ma-2" label>測試</v-chip>
    </h3>
    <v-card>
      <v-simple-table fixed-header height="300px">
        <template #default>
          <thead>
            <tr>
              <th class="text-left">事件類型</th>
              <th class="text-left">事件描述</th>
              <th class="text-end">發生時間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 離線</td>
              <td class="text-end">今天 10:02:27</td>
            </tr>
            <tr>
              <td>設備離線</td>
              <td>{{ item.interfaceDevice }} 流量異常</td>
              <td class="text-end">今天 09:02:27</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <h3 class="text-center bold">設備節點</h3>
    <v-stepper alt-labels class="mb-10">
      <v-stepper-header>
        <v-stepper-step step="" color="danger" complete>
          <samll class="subtitle-2 text-no-wrap"
            >{{ item.interfaceDevice }}-01</samll
          >
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="" color="success" complete>
          <samll class="subtitle-2 text-no-wrap"
            >{{ item.interfaceDevice }}-02</samll
          >
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="" color="success" complete>
          <samll class="subtitle-2 text-no-wrap">
            {{ item.interfaceDevice }}-03</samll
          >
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <h3 class="text-center bold">{{ item.interfaceDevice }} 過往流量比較</h3>
    <div class="d-inline-flex flex-wrap" style="gap: 1rem">
      <v-select
        v-model="interface"
        color="info"
        class="d-inline-block"
        :items="interfaceOptions"
        label="介面"
      ></v-select>
      <v-select
        v-model="range"
        color="info"
        class="d-inline-block"
        :items="rangeOption"
        item-text="text"
        item-value="value"
        label="時間區間"
      ></v-select>
      <v-select
        v-model="compare"
        color="info"
        class="d-inline-block"
        :items="compareOptions"
        item-text="text"
        item-value="value"
        label="比較時間"
      ></v-select>
    </div>
    <div class="d-inline-flex flex-column flex-md-row" style="gap: 1rem">
      <v-card class="flex-grow-1 p-5">
        <small-line-chart
          color="success"
          class="w-100"
          :smooth="0"
          :height="150"
          :width="500"
          :line-width="2"
          :value="Array.from({ length: range }).map((_) => Math.random() * 10)"
          auto-draw
        ></small-line-chart>
      </v-card>
      <v-card class="flex-grow-1 p-5 text">
        <small-line-chart
          class="w-100"
          :height="150"
          :width="500"
          color="success"
          :smooth="0"
          :line-width="2"
          :value="Array.from({ length: range }).map((_) => Math.random() * 10)"
          auto-draw
        ></small-line-chart>
      </v-card>
    </div>
  </div>
</template>

<script>
import SmallLineChart from '@/components/SmallLineChart.vue';

export default {
  name: 'EventAlert',
  components: { SmallLineChart },
  props: {
    item: {
      type: Object,
      require: true,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      interface: 'Eth 1/4',
      interfaceOptions: ['Eth 1/4'],
      range: 180,
      rangeOption: [
        {
          text: '3小時',
          value: 180,
        },
        {
          text: '6小時',
          value: 360,
        },
        {
          text: '12小時',
          value: 720,
        },
      ],
      compare: '一天前',
      compareOptions: [
        {
          text: '一天前',
          value: 1,
        },
        {
          text: '一周前',
          value: 7,
        },
        {
          text: '一月前',
          value: 30,
        },
      ],
    };
  },
};
</script>
