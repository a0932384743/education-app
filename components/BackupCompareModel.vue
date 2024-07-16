<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">檔案比對</span>
      </v-card-title>
      <v-card-text>
        <div class="d-inline-flex justify-space-between w-100">
          <v-menu
            ref="startDateMenu"
            v-model="startDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                :label="$t('create.time')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              @input="startDateMenu = false"
            ></v-date-picker>
          </v-menu>
          <v-menu
            ref="endDateMenu"
            v-model="endDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                :label="$t('create.time')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              @input="endDateMenu = false"
            ></v-date-picker>
          </v-menu>
        </div>
        <div class="diff-container" v-html="diffHtml"></div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onClose">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

import * as Diff2Html from 'diff2html';
import * as Diff from 'diff';

import 'diff2html/bundles/css/diff2html.min.css';
import moment from 'moment';

export default {
  name: 'BackupCompareModel',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      startDateMenu: false,
      endDateMenu: false,
      startDate: '2024-06-01',
      endDate: '2024-06-30',

      diffHtml: '',
    };
  },
  mounted() {
    this.generateDiffHtml();
  },
  computed:{
    text1(){
      return `!
      hostname Router-1
      version: ${moment(this.endDate).format('X')}
      !
      interface GigabitEthernet0/0
       description Connection to LAN
       ip address 192.168.1.1 255.255.255.0
       duplex auto
       speed auto
      !
      interface GigabitEthernet0/1
       description Connection to ISP
       ip address 203.0.113.1 255.255.255.0
       duplex auto
       speed auto
      !
      router ospf 1
       network 192.168.1.0 0.0.0.255 area 0
       network 203.0.113.0 0.0.0.255 area 0
      !
      ip route 0.0.0.0 0.0.0.0 203.0.113.254
      !
      end`
    },
    text2(){
      return `!
            hostname Router-1
            !
            version: ${moment(this.endDate).format('X')}
            interface GigabitEthernet0/0
             description Connection to LAN
             ip address 192.168.1.1 255.255.255.0
             duplex auto
             speed auto
            !
            interface GigabitEthernet0/1
             description Connection to ISP
             ip address 203.0.113.1 255.255.255.0
             duplex auto
             speed auto
            !
            router ospf 1
             network 192.168.1.0 0.0.0.255 area 0
             network 203.0.113.0 0.0.0.255 area 0
            !
            ip route 0.0.0.0 0.0.0.0 203.0.113.254
            !
            end`;
    },
    diffString() {
      return Diff.createTwoFilesPatch(this.startDate , this.endDate, this.text1, this.text2);
    }
  },
  methods: {
    generateDiffHtml() {
      this.diffHtml = Diff2Html.html(this.diffString, {
        inputFormat: 'diff',
        showFiles: false,
        matching: 'lines',
        drawFileList: false,
        highlight: true,
        outputFormat: 'side-by-side'
      });
    },
    onClose() {
      this.$emit('close:show', false);
    },
  }
};
</script>
<style scoped>
.diff-container {
  overflow: auto;
  border: 1px solid #ddd;
  margin: 1em 0;
}
</style>
