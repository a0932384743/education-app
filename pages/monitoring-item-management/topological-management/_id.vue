<template>
  <div class="d-inline-flex w-100" style="height: calc(100vh - 250px)">
    <v-dialog v-model="showEditNodeModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">編輯【{{ selectedNode?.oldName }}】節點</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="isValid">
            <v-radio-group
              :value="selectedNode?.resource"
              row
              @change="selectedNode.resource = $event"
            >
              <v-radio label="已納管資源" :value="1" color="info"></v-radio>
              <v-radio label="自訂" :value="2" color="info"></v-radio>
            </v-radio-group>
            <v-text-field
              :value="selectedNode?.name"
              label="名稱"
              name="name"
              required
              :rules="[
                (v) =>
                  !(
                    !selectedNode?.dataType && nodes.some((n) => n.name === v)
                  ) || '名稱重複',
              ]"
              @change="selectedNode.name = $event"
            ></v-text-field>
            <v-select
              :value="selectedNode?.img"
              :items="nodeList"
              label="圖標"
              item-text="name"
              item-value="img"
              required
              @change="selectedNode.img = $event"
            >
              <template #selection="data">
                <v-avatar width="20" height="20">
                  <img :src="data.item.img" :alt="data.item.name" />
                </v-avatar>
                <span>{{ data.item.name }}</span>
              </template>
              <template #item="data">
                <v-avatar width="30" height="30">
                  <img :src="data.item.img" :alt="data.item.name" />
                </v-avatar>
                <span>{{ data.item.name }}</span>
              </template>
            </v-select>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="onCloseDialog">取消</v-btn>
          <v-btn color="info" :disabled="!isValid" @click="onSaveNode"
            >保存</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showEditLinkModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >{{ selectedNode?.dataType === 'edge' ? '編輯' : '建立' }}連線</span
          >
        </v-card-title>
        <v-card-text class="text-center">
          <div
            class="d-inline-flex mx-auto flex-nowrap justify-space-between align-center mb-2"
            style="width: 60%"
          >
            <v-avatar
              min-width="50"
              width="50"
              height="50"
              color="info lighten-4"
            >
              <v-img
                :lazy-src="
                  nodes.find((n) => n.name === selectedNode?.source)?.img
                "
                :src="nodes.find((n) => n.name === selectedNode?.source)?.img"
                :alt="nodes.find((n) => n.name === selectedNode?.source)?.name"
              />
            </v-avatar>
            <arrow-canvas
              :from-x="20"
              :from-y="20"
              :to-x="95"
              :to-y="20"
              :width="100"
              :height="30"
            />
            <arrow-canvas
              :from-x="80"
              :from-y="20"
              :to-x="5"
              :to-y="20"
              :width="100"
              :height="30"
            />
            <v-avatar
              min-width="50"
              width="50"
              height="50"
              color="info lighten-4"
            >
              <v-img
                :lazy-src="
                  nodes.find((n) => n.name === selectedNode?.target)?.img
                "
                :src="nodes.find((n) => n.name === selectedNode?.target)?.img"
                :alt="nodes.find((n) => n.name === selectedNode?.target)?.name"
              />
            </v-avatar>
          </div>
          <v-form
            v-model="isValid"
            class="d-inline-flex w-100"
            style="gap: 1rem"
          >
            <div class="flex-grow-1" style="width: 50%">
              <div class="v-input theme--light v-text-field">
                <div class="v-input__control">
                  <label class="v-label v-label--active theme--light"
                    >資源類別</label
                  >
                  <input
                    class="info--text subtitle-1"
                    :value="
                      nodes.find((n) => n.name === selectedNode?.source)?.type
                    "
                    readonly
                    style="margin-top: -20px"
                  />
                </div>
              </div>

              <v-select
                :value="selectedNode?.source"
                :items="nodes"
                label="連接埠"
                item-text="name"
                item-value="name"
                required
                @change="selectedNode.source = $event"
              />
            </div>
            <div class="flex-grow-1" style="width: 50%">
              <div class="v-input theme--light v-text-field">
                <div class="v-input__control">
                  <label class="v-label v-label--active theme--light"
                    >資源類別</label
                  >
                  <input
                    class="info--text subtitle-1"
                    :value="
                      nodes.find((n) => n.name === selectedNode?.target)?.type
                    "
                    readonly
                    style="margin-top: -20px"
                  />
                </div>
              </div>
              <v-select
                :value="selectedNode?.target"
                :items="nodes"
                label="連接埠"
                item-text="name"
                item-value="name"
                required
                @change="selectedNode.target = $event"
              />
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="onCloseDialog">取消</v-btn>
          <v-btn color="info" :disabled="!isValid" @click="onSaveLink"
            >保存</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div
      class="flex-grow-0"
      :style="{
        width: $vuetify.breakpoint.smAndUp ? '200px' : '60px',
      }"
    >
      <v-list dense class="fill-height">
        <v-list-group :value="true" color="info">
          <template #activator>
            <h4
              class="w-100 text-no-wrap"
              :class="$vuetify.theme.isDark ? 'white--text' : 'black--text'"
            >
              節點
            </h4>
          </template>
          <v-list-item
            v-for="(node, index) in nodeList"
            :key="index"
            style="gap: 1rem"
          >
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <img
                  :src="node.img"
                  width="30"
                  height="30"
                  style="object-fit: contain"
                  draggable="true"
                  v-bind="attrs"
                  v-on="on"
                  @dragstart="selectedNode = { ...node }"
                  @dragend="onDragEnd"
                />
              </template>
              <span>{{ node.name }}</span>
            </v-tooltip>
            <v-list-item-content v-if="$vuetify.breakpoint.smAndUp">
              <v-list-item-title>{{ node.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
    <div
      class="flex-grow-1"
      :style="{
        width: $vuetify.breakpoint.smAndUp
          ? 'calc(100% - 200px)'
          : 'calc(100% - 60px)',
      }"
    >
      <v-card class="fill-height" style="position: relative">
        <v-btn-toggle
          dense
          style="position: absolute; top: 5px; left: 5px; z-index: 1"
        >
          <v-btn color="info lighten-1">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-selection-ellipse-arrow-inside</v-icon
                >
              </template>
              <span>選取</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">選取</span>
          </v-btn>
          <v-btn color="info lighten-1">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-eye-outline</v-icon
                >
              </template>
              <span>顯示頻寬使用率</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">顯示頻寬使用率</span>
          </v-btn>
          <v-btn
            color="info lighten-1"
            @click="
              showNodeLabel = !showNodeLabel
              selectedNode = showNodeLabel ? null : false
            "
          >
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white">{{
                  showNodeLabel ? 'mdi-eye-off' : 'mdi-eye-outline'
                }}</v-icon>
              </template>
              <span>隱藏節點名稱</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">隱藏節點名稱</span>
          </v-btn>
          <span class="px-1" />
          <v-btn color="info lighten-1" @click="onShowEditNodeModal">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-square-edit-outline</v-icon
                >
              </template>
              <span>請點擊節點進行編輯名稱</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">編輯名稱</span>
          </v-btn>
          <v-btn color="info lighten-1" @click="onShowEditLinkModal">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-square-edit-outline</v-icon
                >
              </template>
              <span>請點擊連線進行建立連線</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">編輯連線</span>
          </v-btn>
          <v-btn color="info lighten-1" @click="onShowCreateLinkModal">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-transit-connection-horizontal</v-icon
                >
              </template>
              <span>請點擊節點進行建立連線</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">建立連線</span>
          </v-btn>
          <v-btn color="info lighten-1">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-graph</v-icon
                >
              </template>
              <span>自動拓樸</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">自動拓樸</span>
          </v-btn>
          <v-btn color="info lighten-1">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-reload</v-icon
                >
              </template>
              <span>重新整理</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">重新整理</span>
          </v-btn>
          <v-btn color="info lighten-1">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="white"
                  >mdi-content-save-all-outline</v-icon
                >
              </template>
              <span>儲存</span>
            </v-tooltip>
            <span class="d-none d-lg-inline-block">儲存</span>
          </v-btn>
        </v-btn-toggle>
        <v-chart
          ref="chart"
          :options="options"
          class="mx-auto"
          style="width: 100%; height: 100%"
          autoresize
          @click="onNodeClick"
          @mousedown="onNodeDrag"
          @mouseup="onNodeDrag"
        />
      </v-card>
    </div>
  </div>
</template>

<script lang="js">
import ArrowCanvas from '@/components/ArrowCanvas.vue';
import { colorBrightness } from '@/utils/color';

const nodeList = [
  {
    name: '伺服器',
    img: '/image/icons/server.png',
    resource: 1,
    type: '伺服器',

  },
  {
    name: '交換器',
    img: '/image/icons/switch.png',
    resource: 1,
    type: '交換器',
  },
  {
    name: '防火牆',
    img: '/image/icons/firewall.png',
    resource: 1,
    type: '防火牆',
  },
  {
    name: '負載平衡',
    img: '/image/icons/loadbalancer.png',
    resource: 1,
    type: '負載平衡',
  },
  {
    name: '光傳輸設備',
    img: '/image/icons/device.png',
    resource: 1,
    type: '光傳輸設備',
  },
  {
    name: '儲存設備',
    img: '/image/icons/database.png',
    resource: 1,
    type: '儲存設備',
  },
  {
    name: 'Internet',
    img: '/image/icons/cloud.png',
    resource: 1,
    type: 'Internet',
  },
  {
    name: '邊際路由器',
    img: '/image/icons/router-2.png',
    resource: 1,
    type: '邊際路由器',
  },
  {
    name: '骨幹路由器',
    img: '/image/icons/router-1.png',
    resource: 1  ,
    type: '骨幹路由器',

  }

];
const nodes = [
  {
    name: '光傳輸設備',
    x: 500,
    y: 100,
    img: '/image/icons/device.png',
    resource: 1,
    type: '光傳輸設備',
  },
  {
    name: 'Internet1',
    x: 350,
    y: 20,
    img: '/image/icons/cloud.png',
    resource: 1,
    type: 'Internet',
  },
  {
    name: 'Internet2',
    x: 650,
    y: 20,
    img: '/image/icons/cloud.png',
    resource: 1,
    type: 'Internet',
  },
  {
    name: '邊際路由器01',
    x: 350,
    y: 150,
    img: '/image/icons/router-2.png',
    resource: 1,
    type: '邊際路由器',
  },
  {
    name: '邊際路由器02',
    x: 650,
    y: 150,
    img: '/image/icons/router-2.png',
    resource: 1,
    type: '邊際路由器',
  },
  {
    name: '骨幹路由器01',
    x: 200,
    y: 350,
    img: '/image/icons/router-1.png',
    resource: 1,
    type: '骨幹路由器',
  },
  {
    name: '骨幹路由器02',
    x: 400,
    y: 350,
    img: '/image/icons/router-1.png',
    resource: 1,
    type: '骨幹路由器',
  },
  {
    name: '骨幹路由器03',
    x: 600,
    y: 350,
    img: '/image/icons/router-1.png',
    resource: 1,
    type: '骨幹路由器',
  },
  {
    name: '骨幹路由器04',
    x: 800,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
    resource: 1,
    type: '骨幹路由器',
  },
  {
    name: '骨幹路由器交換器01',
    x: 300,
    y: 450,
    img: '/image/icons/switch.png',
    resource: 1,
    type: '骨幹路由器交換器',
  },
  {
    name: '骨幹路由器交換器02',
    x: 500,
    y: 500,
    img: '/image/icons/switch.png',
    resource: 1,
    type: '骨幹路由器交換器',
  },
  {
    name: '骨幹路由器交換器03',
    x: 700,
    y: 450,
    img: '/image/icons/switch.png',
    resource: 1,
    type: '骨幹路由器交換器',
  },
  {
    name: '骨幹路由器交換器04',
    x: 900,
    y: 500,
    img: '/image/icons/switch.png',
    resource: 1,
    type: '骨幹路由器交換器',
  }
];


const lines = [
  {
    source: '光傳輸設備',
    target: '骨幹路由器01',
  },
  {
    source: '骨幹路由器01',
    target: '光傳輸設備',
  },
  {
    source: 'Internet1',
    target: '邊際路由器01',
  },
  {
    source: '邊際路由器01',
    target: 'Internet1',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器01',
  },
  {
    source: '骨幹路由器01',
    target: '邊際路由器01',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器02',
    target: '邊際路由器01',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器03',
  },
  {
    source: '骨幹路由器03',
    target: '邊際路由器02',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器04',
    target: '邊際路由器02',
  },
  {
    source: 'Internet2',
    target: '邊際路由器02',
  },
  {
    source: '邊際路由器02',
    target: 'Internet2',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器02',
    target: '光傳輸設備',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器02',
    target: '骨幹路由器01',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器交換器01',
  },
  {
    source: '骨幹路由器交換器01',
    target: '骨幹路由器01',
  },
  {
    source: '骨幹路由器02',
    target: '骨幹路由器交換器02',
  },
  {
    source: '骨幹路由器交換器02',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器交換器02',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器交換器04',
    target: '骨幹路由器交換器02',
  },
  {
    source: '骨幹路由器交換器01',
    target: '骨幹路由器交換器03',
  },
  {
    source: '骨幹路由器交換器03',
    target: '骨幹路由器交換器01',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器03',
  },
  {
    source: '骨幹路由器03',
    target: '光傳輸設備',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器04',
    target: '光傳輸設備',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器04',
    target: '骨幹路由器03',
  },
  {
    source: '骨幹路由器04',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器交換器04',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器交換器03',
  },
  {
    source: '骨幹路由器交換器03',
    target: '骨幹路由器03',
  },
];

export default {
  name: 'TopologicalManagementDetail',
  components: { ArrowCanvas },
  layout: 'admin-layout',
  data() {
    return {
      nodeList,
      nodes,
      lines,
      showNodeLabel: true,
      isValid:false,
      showEditNodeModal: false,
      showEditLinkModal: false,
      action: '',
      selectedNode: null
    };
  },
  computed: {
    options() {
      return {
        legend: {
          show: false
        },
        tooltip: {
          show: !!this.selectedNode,
          formatter() {
            return '請點擊進行連接';
          }
        },
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            links: this.lines.map(l=>{
              return {
                ...l,
                lineStyle:{
                  color: this.$vuetify.theme.themes[
                    this.$vuetify.theme.isDark ? 'dark' : 'light'
                    ][(l.source === this.selectedNode?.source && l.target === this.selectedNode?.target) || (l.target === this.selectedNode?.source && l.source === this.selectedNode?.target) ? 'success' : 'gray']
                }
              };
            }),
            data: this.nodes.map((data) => {
              const color = colorBrightness(
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][data.name === this.selectedNode?.name ? 'danger' : 'info'],
                2
              );
              return {
                ...data,
                draggable: true,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: this.$vuetify.theme.isDark ? '#fff' : '#aaa',
                  color
                },
                emphasis: {
                  itemStyle: {
                    color: colorBrightness(
                      this.$vuetify.theme.themes[
                        this.$vuetify.theme.isDark ? 'dark' : 'light'
                        ].danger,
                      this.selectedNode ? 3 : 2
                    )
                  }
                },
                label: {
                  formatter:(label)=> {
                    if(!this.showNodeLabel){
                      return '{img|}\n\n';
                    }
                    if (label.name.includes('Internet')) {
                      return ['{img|}', '{name|Internet}'].join('\n');
                    }
                    return ['{img|}', `{name|${label.name}}`].join('\n');
                  },
                  rich: {
                    img: {
                      height: 30,
                      width: 30,
                      backgroundColor: {
                        image: data.img
                      }
                    },
                    name: {
                      padding: [10, 0, 0, 0] // 调整标签位置
                    }
                  },
                  align: 'center',
                  offset: [0, 12],
                  color: this.$vuetify.theme.isDark ? '#fff' : '#aaa',
                  borderWidth: 0
                }
              };
            }),
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      };
    }
  },
  methods: {
    onShowCreateLinkModal(){
      if (this.selectedNode && this.selectedNode.dataType !== 'edge') {
        this.selectedNode = {
          ...this.selectedNode,
          source:this.selectedNode.name,
          target: ''
        };
        this.showEditLinkModal = true;
      }
    },
    onShowEditLinkModal(){
      if (this.selectedNode && this.selectedNode.dataType === 'edge') {
        this.selectedNode = {
          ...this.selectedNode,
          oldSource:this.selectedNode.source,
          oldTarget: this.selectedNode.target,
        };
        this.showEditLinkModal = true;
      }
    },
    onShowEditNodeModal() {
      if (this.selectedNode && this.selectedNode.dataType !== 'edge') {
        this.selectedNode.oldName = this.selectedNode.name;
        this.showEditNodeModal = true;
      }
    },
    onCloseDialog() {
      this.showEditLinkModal = false;
      this.showEditNodeModal = false;
      this.selectedNode = null;
    },
    onSaveNode() {
      if (this.selectedNode) {
        if (this.nodes.some(n => n.name === (this.selectedNode.oldName || this.selectedNode.name))) {
          this.lines = this.lines.map(l => {
            if (l.source === (this.selectedNode.oldName || this.selectedNode.name)) {
              l.source = this.selectedNode.name;
            }
            if (l.target === (this.selectedNode.oldName || this.selectedNode.name)) {
              l.target = this.selectedNode.name;
            }
            return l;
          });

          this.nodes = this.nodes.map(n => {
            if (n.name === (this.selectedNode.oldName || this.selectedNode.name)) {
              return this.selectedNode;
            } else {
              return n;
            }
          });
        } else {
          this.nodes.push(this.selectedNode);
        }
      }
      this.onCloseDialog();
    },
    onSaveLink(){
      if(this.selectedNode.dataType ==='node'){
          if(this.selectedNode.source && this.nodes.some(n=>n.name === this.selectedNode.source) && this.selectedNode.target && this.nodes.some(n=>n.name === this.selectedNode.target))  {
            this.lines.push({
              ...this.selectedNode
            });
            this.lines.push({
              ...this.selectedNode,
              source: this.selectedNode.target,
              target:this.selectedNode.source
            });
          }
      }


      if(this.selectedNode.dataType ==='edge'){
        this.lines = this.lines.map(l=>{
          if(l.source === this.selectedNode.oldSource && l.target === this.selectedNode.oldTarget){
            l.source =  this.selectedNode.source;
            l.target =  this.selectedNode.target;
          }
          if(l.source === this.selectedNode.oldTarget && l.target === this.selectedNode.oldSource){
            l.source =  this.selectedNode.target;
            l.target =  this.selectedNode.source;
          }
          return l;
        });

      }

      this.onCloseDialog();
    },
    onDragEnd(e) {
      if (this.selectedNode) {
        this.selectedNode.x = e.x;
        this.selectedNode.y = e.y;
        this.onShowEditNodeModal();
      }
    },
    onNodeClick(e) {
      this.selectedNode = e.data;
      this.selectedNode.dataType= e.dataType;
    },
    onNodeDrag(e) {
      const node = this.nodes.find(n => n.name === e.name);
      if (node) {
        if (!node.offsetX) {
          node.offsetX = e.event.offsetX;
        } else {
          node.x = node.x + e.event.offsetX - node.offsetX + 1;
          node.offsetX = 0;
        }
        if (!node.offsetY) {
          node.offsetY = e.event.offsetY;
        } else {
          node.y = node.y + e.event.offsetY - node.offsetY + 1;
          node.offsetY = 0;
        }
      }

    }
  }
};
</script>
