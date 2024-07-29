<template>
  <v-row style="height: calc(100vh - 220px)">
    <v-col cols="3">
      <v-list dense class="fill-height">
        <v-list-group :value="true">
          <template #activator>
            <h3 class="w-100 info--text">節點</h3>
          </template>
          <v-list-item
            v-for="(node, index) in nodeList"
            :key="index"
            style="gap: 1rem"
            :class="selectedNode?.name === node?.name && 'info lighten-2'"
          >
            <img
              :src="node.img"
              width="30"
              height="30"
              style="object-fit: contain"
              draggable="true"
              @dragstart="selectedNode = node"
              @dragend="onDragEnd"
            />
            <v-list-item-content>
              <v-list-item-title>{{ node.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-col>
    <v-col cols="9" @dragenter="isDrop = true" @dragleave.stop="isDrop = false">
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
    </v-col>
  </v-row>
</template>

<script lang="js">
import { colorBrightness } from '@/utils/color';

const nodeList = [
  {
    name: '伺服器',
    img: '/image/icons/server.png',
  },
  {
    name: '交換器',
    img: '/image/icons/switch.png',
  },
  {
    name: '防火牆',
    img: '/image/icons/firewall.png',
  },
  {
    name: '負載平衡',
    img: '/image/icons/loadbalancer.png',
  },
  {
    name: '光傳輸設備',
    img: '/image/icons/device.png',
  },
  {
    name: '儲存設備',
    img: '/image/icons/database.png',
  },
  {
    name: 'Internet',
    img: '/image/icons/cloud.png',
  },
  {
    name: '邊際路由器',
    img: '/image/icons/router-2.png',
  },
  {
    name: '骨幹路由器',
    img: '/image/icons/router-1.png',
  },

];
const nodes = [
  {
    name: '光傳輸設備',
    x: 500,
    y: 100,
    img: '/image/icons/device.png',
  },
  {
    name: 'Internet1',
    x: 350,
    y: 20,
    img: '/image/icons/cloud.png',
  },
  {
    name: 'Internet2',
    x: 650,
    y: 20,
    img: '/image/icons/cloud.png',
  },
  {
    name: '邊際路由器01',
    x: 350,
    y: 150,
    img: '/image/icons/router-2.png',
  },
  {
    name: '邊際路由器02',
    x: 650,
    y: 150,
    img: '/image/icons/router-2.png',
  },
  {
    name: '骨幹路由器01',
    x: 200,
    y: 350,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器02',
    x: 400,
    y: 350,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器03',
    x: 600,
    y: 350,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器04',
    x: 800,
    y: 350,
    value: 20,
    img: '/image/icons/router-1.png',
  },
  {
    name: '骨幹路由器交換器01',
    x: 300,
    y: 450,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器02',
    x: 500,
    y: 500,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器03',
    x: 700,
    y: 450,
    img: '/image/icons/switch.png',
  },
  {
    name: '骨幹路由器交換器04',
    x: 900,
    y: 500,
    img: '/image/icons/switch.png',
  },
];
const lines = [
  {
    source: '光傳輸設備',
    target: '骨幹路由器01',
  },
  {
    source: 'Internet1',
    target: '邊際路由器01',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器01',
  },
  {
    source: '邊際路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器03',
  },
  {
    source: '邊際路由器02',
    target: '骨幹路由器04',
  },
  {
    source: 'Internet2',
    target: '邊際路由器02',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器02',
  },
  {
    source: '骨幹路由器01',
    target: '骨幹路由器交換器01',
  },
  {
    source: '骨幹路由器02',
    target: '骨幹路由器交換器02',
  },
  {
    source: '骨幹路由器交換器02',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器交換器01',
    target: '骨幹路由器交換器03',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器03',
  },
  {
    source: '光傳輸設備',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器04',
  },
  {
    source: '骨幹路由器04',
    target: '骨幹路由器交換器04',
  },
  {
    source: '骨幹路由器03',
    target: '骨幹路由器交換器03',
  },
];

export default {
  name: 'TopologicalManagementDetail',
  layout: 'admin-layout',
  data() {
    return {
      nodeList,
      nodes,
      lines,
      selectedNode: null,
      isDrop: false,
    };
  },computed:{
    options() {
      return {
        legend: {
          show: false
        },
        tooltip: {
          show: !!this.selectedNode,
          formatter(){
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
              show: true,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            links: this.lines.reduce((array, value) => {
              array.push(value, {
                source: value.target,
                target: value.source,
              });
              return array;
            }, []),
            data: this.nodes.map((data) => {
              const color = colorBrightness(
                this.$vuetify.theme.themes[
                  this.$vuetify.theme.isDark ? 'dark' : 'light'
                  ][data.name === this.selectedNode?.name ? 'success' : 'info'],
                2
              );
              return {
                ...data,
                draggable: true,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: '#aaa',
                  color,
                },
                emphasis:{
                  itemStyle:{
                    color: colorBrightness(
                      this.$vuetify.theme.themes[
                        this.$vuetify.theme.isDark ? 'dark' : 'light'
                        ][this.selectedNode ? 'danger' : 'info'],
                      this.selectedNode ? 3 : 2
                    )
                  }
                },
                label: {
                  formatter(label) {
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
                        image: data.img,
                      },
                    },
                    name: {
                      padding: [10, 0, 0, 0], // 调整标签位置
                    },
                  },
                  align: 'center',
                  offset: [0, 12],
                  color: '#aaa',
                  borderWidth: 0,
                },
              };
            }),
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      };
    }
  },
  methods:{
    onDragEnd(e){
      if(this.selectedNode){
        this.nodes.push({
          ...this.selectedNode,
          name: this.selectedNode.name + (`0${  this.nodes.filter(n=>n.name.includes(this.selectedNode.name)).length}`).substr(-2),
          x:e.x,
          y:e.y
      });
      }
      this.isDrop = false;
      this.selectedNode = null;
    },
    onNodeClick(e){
      if( this.selectedNode  && this.nodes.find(n=>n.name === this.selectedNode.name)){
        const target =  this.nodes.find(n=>n.name === e.name);
        this.lines.push({
          source: this.selectedNode .name,
          target: target.name,
        });
        this.selectedNode = null;
      }else{
        this.selectedNode = this.nodes.find(n=>n.name === e.name);
      }
    },
    onNodeDrag(e){
      const node = this.nodes.find(n=>n.name === e.name) ;
      if(node){
        if(!node.offsetX){
          node.offsetX = e.event.offsetX;
        }else{
          node.x = node.x + e.event.offsetX -  node.offsetX +1 ;
          node.offsetX = 0;
        }
        if(!node.offsetY){
          node.offsetY = e.event.offsetY;
        }else{
          node.y = node.y + e.event.offsetY -  node.offsetY +1;
          node.offsetY = 0;
        }
      }

    },
  }
};
</script>
