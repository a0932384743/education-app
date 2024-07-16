<template>
  <v-dialog :value="show" max-width="800px" @click:outside="onClose">
    <v-card>
      <v-card-title>
        <span class="title">檢視歷史備份</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="d-inline-flex w-100 align-center mb-2">
              <div class="subtitle-1 font-weight-bold" style="width: 100px">
                備份日期
              </div>
              <div class="info--text flex-grow-1">{{ backupDate }}</div>
            </div>
            <div class="d-inline-flex w-100 align-center mb-2">
              <div class="subtitle-1 font-weight-bold" style="width: 100px">
                組態內容
              </div>
              <div class="flex-grow-1">
                <div ref="xterm"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onClose">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { Terminal } from 'xterm';
// eslint-disable-next-line import/named
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

export default {
  name: 'BackupHistoryModel',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      backupDate: '2024-06-01 16:00',
      term: '',
      rows: 20,
      cols: 50,
      fitAddon: new FitAddon(),
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.xterm) {
        this.initXterm();
      }
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeScreen);
  },
  methods: {
    onClose() {
      this.$emit('close:show', false);
    },
    initXterm() {
      const term = new Terminal({
        rendererType: 'canvas',
        rows: this.rows,
        cols: this.cols,
        convertEol: true,
        disableStdin: false,
        cursorBlink: true,
        theme: {
          foreground: '#ECECEC',
          background: '#000000',
          cursor: 'help',
          lineHeight: 20,
        },
      });
      term.open(this.$refs.xterm);
      term.prompt();
      term.loadAddon(this.fitAddon);
      window.addEventListener('resize', this.resizeScreen);
      window.dispatchEvent(new Event('resize'));
      this.term = term;
      this.runFakeTerminal();
    },
    resizeScreen() {
      try {
        this.fitAddon.fit();
      } catch (e) {
        console.log('e', e.message);
      }
    },
    runFakeTerminal() {
      const term = this.term;
      if (term._initialized) return;
      // 初始化
      term._initialized = true;
      term.writeln('\rBuilding configuration.\r\n\r\n' +
        'Current configuration : 18990 bytes\r\n' +
        '!\r\n' +
        '! Last configuration change at 14:33:32 TWM Mon Jun 13 2023 by chtadmin\r\n' +
        '! NVRAM configure last updated at 14:33:32 TWM Mon Jun 13 2023 by chtadmin\r\n' +
        '!\r\n' +
        'version 17.3\r\n' +
        'service timestamp debug datetime localtime show-timezone\r\n' +
        'service timestamp log datetime localtime show-timezone\r\n' +
        'service password-encryption\r\n' +
        'service call-home\r\n' +
        'service unsupported-transceiver\r\n' +
        'platform punt-keepalive disable-kernel-core\r\n' +
        '!\r\n' +
        'done\r\n');

      document.querySelectorAll('.xterm-rows div').forEach((ele, index) => {
        ele.setAttribute('data-line', index + 1);
      });
      term.prompt();
    },
  },
};
</script>
<style>
.xterm-rows div::before {
  content: attr(data-line);
  color: white;
  font-weight: bold;
  width: 20px;
  display: inline-block;
  font-size: 0.8rem;
}
</style>
