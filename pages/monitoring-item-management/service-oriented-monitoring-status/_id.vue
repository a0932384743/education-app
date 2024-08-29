<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <template v-for="n in [1, 2, 3, 4, 5]">
        <v-stepper-step
          :key="`${n}-step`"
          :complete="step === n"
          :step="n"
          color="info"
        >
          Step {{ n }}
        </v-stepper-step>
        <v-divider v-if="n !== 5" :key="n"></v-divider>
      </template>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content :step="1">
        <v-text-field
          v-model="item.orgNameZh"
          color="-info"
          label="名稱"
          name="orgNameZh"
          required
          :rules="[(val) => (val || '').length > 0 || 'This field is required']"
        ></v-text-field>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" :disabled="!item.orgNameZh" @click="nextStep(2)">
            下一步
          </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content :step="2">
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-text-field
            v-model="ping"
            color="-info"
            label="Ping測試清單"
            name="ping"
            :rules="[(v) => !v || isValidIP(v) || 'Invalid IP Address']"
          ></v-text-field>
          <v-btn
            color="info"
            :disabled="!isValidIP(ping)"
            @click="addPing(ping)"
          >
            新增
          </v-btn>
        </div>
        <v-card v-if="testPings.length > 0" class="py-5">
          <v-card-title class="subtitle-1 bold px-2">Ping目標</v-card-title>
          <v-list>
            <v-list-item v-for="(ip, index) in testPings" :key="index">
              <v-list-item-content>{{ ip }}</v-list-item-content>
              <v-list-item-action>
                <v-btn color="danger" dark @click="removeIp(index)">
                  <v-icon dark>mdi-delete</v-icon>刪除
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" @click="nextStep(1)"> 上一步 </v-btn>
          <v-btn
            color="info"
            :disabled="testPings.length === 0"
            @click="nextStep(3)"
          >
            下一步
          </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content :step="3">
        <div class="h6">設備清單</div>
        <div
          class="d-inline-flex flex-column flex-md-row w-100 mb-3"
          style="gap: 1rem"
        >
          <device-list
            title="所有設備"
            direct="right"
            :devices="deviceLeft"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendRightDevice"
            @select-all="appendRightDevice"
          ></device-list>
          <device-list
            title="與連線單位/客戶關聯設備"
            :devices="deviceRight"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendLeftDevice"
            @select-all="appendLeftDevice"
          ></device-list>
        </div>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" @click="nextStep(2)"> 上一步 </v-btn>
          <v-btn color="info" @click="nextStep(4)"> 下一步 </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content :step="4">
        <div class="h6">設備介面</div>
        <div class="subtitle-1">{{ item.interfaceDevice }}-01</div>
        <div
          class="d-inline-flex flex-column flex-md-row w-100 mb-3"
          style="gap: 1rem"
        >
          <device-list
            title="所有介面"
            direct="right"
            :devices="interfaceLeft"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendRightInterface"
            @select-all="appendRightInterface"
          ></device-list>
          <device-list
            title="與連線單位/客戶關聯介面"
            :devices="interfaceRight"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendLeftInterface"
            @select-all="appendLeftInterface"
          ></device-list>
        </div>
        <div class="subtitle-1">{{ item.interfaceDevice }}-02</div>
        <div
          class="d-inline-flex flex-column flex-md-row w-100 mb-3"
          style="gap: 1rem"
        >
          <device-list
            title="所有介面"
            direct="right"
            :devices="interfaceLeft"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendRightInterface"
            @select-all="appendRightInterface"
          ></device-list>
          <device-list
            title="關聯介面"
            :devices="interfaceRight"
            class="flex-grow-1 align-self-stretch fill-height"
            @select="appendLeftInterface"
            @select-all="appendLeftInterface"
          ></device-list>
        </div>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" @click="nextStep(3)"> 上一步 </v-btn>
          <v-btn color="info" @click="nextStep(5)"> 下一步 </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content :step="5">
        <div class="h6">設備節點連線</div>
        <div
          class="d-inline-flex w-100 justify-end mt-2 flex-column flex-sm-row"
          style="gap: 1rem"
        >
          <v-select
            v-model="node.device1"
            color="info"
            class="d-inline-block flex-grow-1"
            :items="deviceLeft"
            label="設備節點1"
          ></v-select>
          <v-select
            v-model="node.interface1"
            color="info"
            class="d-inline-block flex-grow-1"
            :items="interfaceLeft"
            label="介面1"
          ></v-select>
        </div>
        <div
          class="d-inline-flex w-100 justify-end mt-2 flex-column flex-sm-row"
          style="gap: 1rem"
        >
          <v-select
            v-model="node.device2"
            color="info"
            class="d-inline-block flex-grow-1"
            :items="deviceRight"
            label="設備節點1"
          ></v-select>
          <v-select
            v-model="node.interface2"
            color="info"
            class="d-inline-block flex-grow-1"
            :items="interfaceRight"
            label="介面1"
          ></v-select>
        </div>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" @click="addNode(node)"> 新增 </v-btn>
        </div>
        <v-card v-if="testPings.length > 0" class="py-5">
          <v-simple-table fixed-header height="300px">
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">設備節點1</th>
                  <th class="text-left">介面</th>
                  <th class="text-left">設備節點2</th>
                  <th class="text-left">介面</th>
                  <th class="text-end"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="node in testNodes" :key="JSON.stringify(node)">
                  <td>{{ node.device1 }}</td>
                  <td>{{ node.interface1 }}</td>
                  <td>{{ node.device2 }}</td>
                  <td>{{ node.interface2 }}</td>
                  <td class="text-end">
                    <v-btn color="danger" dark @click="removeNode(node)">
                      <v-icon dark>mdi-delete</v-icon>刪除
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <div class="d-inline-flex w-100 justify-end mt-2" style="gap: 1rem">
          <v-btn color="info" @click="nextStep(4)"> 上一步 </v-btn>
          <v-btn color="info" @click="onFinish"> 完成 </v-btn>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import DeviceList from '@/components/DeviceList.vue';
import items from '~/assets/json/connection-unit.json';

export default {
  name: 'ServiceOrientedMonitoringStatusDetail',
  components: { DeviceList },
  layout: 'admin-layout',
  data() {
    return {
      item: {},
      step: 1,
      ping: '',
      node: {
        device1: '',
        device2: '',
        interface1: '',
        interface2: '',
      },
      testNodes: [],
      testPings: [],
      deviceLeft: [],
      deviceRight: [],
      interfaceLeft: [],
      interfaceRight: [],
    };
  },
  computed: {
    taskId() {
      return this.$router.currentRoute.params?.id || '';
    },
  },
  watch: {
    taskId: {
      handler(value) {
        this.item = items.find((item) => item.id === Number(value || 0)) || {};
        this.deviceRight = Array.from({ length: 5 }).map((_, index) => {
          return `${this.item.interfaceDevice}_${`0${index + 1}`.substr(-2)}`;
        });
        this.interfaceRight = Array.from({ length: 5 }).map((_, index) => {
          return `Eth 2/${index}`;
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    isValidIP(ip) {
      const ipPattern =
        /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
      return ipPattern.test(ip);
    },
    nextStep(n) {
      if (n === this.steps) {
        this.step = n;
      } else {
        this.step = n;
      }
    },
    addPing(ping) {
      this.ping = '';
      this.testPings.push(ping);
    },
    addNode(node) {
      this.node = {
        device1: '',
        device2: '',
        interface1: '',
        interface2: '',
      };
      this.testNodes.push(node);
    },
    removeIp(ping) {
      this.testPings = this.testPings.filter((p) => p !== ping);
    },
    removeNode(node){
      this.testNodes = this.testNodes.filter((p) => JSON.stringify(p) !== JSON.stringify(node));
    },
    appendLeftDevice(devices) {
      this.deviceLeft = [...this.deviceLeft, ...devices];
      this.deviceRight = this.deviceRight.filter((d) => !devices.includes(d));
    },
    appendRightDevice(devices) {
      this.deviceRight = [...this.deviceRight, ...devices];
      this.deviceLeft = this.deviceLeft.filter((d) => !devices.includes(d));
    },
    appendLeftInterface(interfaces) {
      this.interfaceLeft = [...this.interfaceLeft, ...interfaces];
      this.interfaceRight = this.interfaceRight.filter(
        (d) => !interfaces.includes(d)
      );
    },
    appendRightInterface(interfaces) {
      this.interfaceRight = [...this.interfaceRight, ...interfaces];
      this.interfaceLeft = this.interfaceLeft.filter(
        (d) => !interfaces.includes(d)
      );
    },
    onFinish() {
      this.$snackbar.info('儲存成功');
    },
  },
};
</script>
