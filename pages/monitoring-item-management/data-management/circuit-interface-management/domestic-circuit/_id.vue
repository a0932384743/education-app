<template>
  <v-row>
    <v-col class="text-center" :cols="12">
      <stepper-card title="電路介面管理-國內電路-新增資通設備" :items="items">
        <template #step1>
          <v-form ref="basic" v-model="items[0].valid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="basic.resourceName"
                  :label="$t('resource.name')"
                  required
                  :rules="rules.resourceName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="basic.managementIP"
                  :label="$t('ip.manage')"
                  required
                  :rules="rules.managementIP"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.category"
                  :items="categories"
                  :label="$t('category')"
                  required
                  :rules="rules.category"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.brand"
                  :items="brands"
                  :label="$t('brand')"
                  required
                  :rules="rules.brand"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.model"
                  :items="models"
                  :label="$t('model')"
                  :rules="rules.model"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.dataCenter"
                  :items="dataCenters"
                  :label="$t('data.center')"
                  :rules="rules.dataCenter"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.snmpFrequency"
                  :items="minuteOptions"
                  :label="$t('snmp.monitoring.frequency')"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="basic.pingFrequency"
                  :items="minuteOptions"
                  :label="$t('ping.monitoring.frequency')"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </template>
        <template #step2>
          <v-form ref="connect" v-model="items[1].valid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.ip"
                  label="IP"
                  :rules="rules.ip"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.port"
                  :label="$t('port')"
                  :rules="rules.port"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  v-model="connect.snmpVersion"
                  :label="$t('snmp.version')"
                  :rules="rules.snmpVersion"
                  required
                  row
                >
                  <v-radio label="v1" value="v1"></v-radio>
                  <v-radio label="v2" value="v2"></v-radio>
                  <v-radio label="v3" value="v3"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="connect.securityLevel"
                  :items="securityLevels"
                  :label="$t('security.level')"
                  :rules="rules.securityLevel"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.account"
                  :label="$t('account')"
                  :rules="rules.account"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="connect.authProtocol"
                  :items="authProtocols"
                  :label="$t('auth.protocol')"
                  :rules="rules.authProtocol"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.authPassword"
                  :label="$t('auth.password')"
                  :rules="rules.authPassword"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="connect.privacyProtocol"
                  :items="privacyProtocols"
                  :label="$t('privacy.protocol')"
                  :rules="rules.privacyProtocol"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.privacyPassword"
                  :label="$t('privacy.password')"
                  :rules="rules.privacyPassword"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="connect.contextName"
                  :label="$t('context.name')"
                  :rules="rules.contextName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="text-start">
                <div class="d-inline-flex align-center">
                  <v-subheader class="px-1">{{
                    $t('snmp.protocol')
                  }}</v-subheader>
                  <label class="switch">
                    <input
                      v-model="connect.snmpProtocol"
                      type="checkbox"
                      class="switch-input"
                    />
                    <span
                      class="switch-label"
                      data-on="ON"
                      data-off="OFF"
                    ></span>
                    <span class="switch-handle"></span>
                  </label>
                </div>
              </v-col>

              <v-col cols="12">
                <div class="d-inline-flex align-center justify-center">
                  <v-subheader>
                    {{ connect.ip }}:{{ connect.port }}
                  </v-subheader>
                  <v-btn
                    :loading="loading"
                    color="primary"
                    @click="testConnection"
                  >
                    {{ $t('connect.test') }}
                    <template #loader>
                      <v-progress-circular
                        indeterminate
                        size="24"
                      ></v-progress-circular>
                    </template>
                  </v-btn>
                  <v-subheader v-if="message" :class="message + '--text'">
                    <v-icon
                      v-if="message === 'success'"
                      size="15"
                      :color="message"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon v-else size="15" :color="message"
                      >mdi-close-circle</v-icon
                    >
                    {{ $t('connect.' + message) }}
                  </v-subheader>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </template>
        <template #step3>
          <v-form ref="advance" v-model="items[2].valid">
            <v-row>
              <v-col cols="12">
                <v-file-input
                  v-model="file"
                  :label="$t('select.file')"
                  :rules="rules.file"
                  prepend-icon="mdi-paperclip"
                  hide-details
                  @change="selectFile"
                ></v-file-input>
                <v-subheader v-if="message" :class="message + '--text'">
                  <v-icon
                    v-if="message === 'success'"
                    size="15"
                    :color="message"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon v-else size="15" :color="message"
                    >mdi-close-circle</v-icon
                  >
                  {{ $t('upload.' + message) }}
                </v-subheader>
                <v-btn
                  :disabled="!file || loading"
                  :loading="loading"
                  color="primary"
                  @click="uploadFile"
                >
                  {{ $t('select.file') }}
                  <template #loader>
                    <v-progress-circular
                      indeterminate
                      size="24"
                    ></v-progress-circular>
                  </template>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </template>
      </stepper-card>
    </v-col>
  </v-row>
</template>

<script>
import StepperCard from '~/components/StepperCard.vue';

export default {
  name: 'DomesticCircuit',
  components: { StepperCard },
  layout: 'admin-layout',
  data() {
    return {
      file: null,
      loading: false,
      message: '',
      basic: {
        resourceName: '',
        managementIP: '',
        category: '',
        brand: '',
        model: '',
        dataCenter: '',
        snmpFrequency: 5,
        pingFrequency: 5,
      },
      connect: {
        snmpProtocol: false,
        ip: '127.0.0.1',
        port: '80',
        snmpVersion: 'v1',
        securityLevel: '',
        account: '',
        authProtocol: '',
        authPassword: '',
        privacyProtocol: '',
        privacyPassword: '',
        contextName: '',
      },
      rules: {
        resourceName: [
          (v) => !!v || '資源名稱為必填項目',
          (v) => (v && v.length <= 20) || '資源名稱不得超過20個字元',
        ],
        managementIP: [
          (v) => !!v || '管理IP為必填項目',
          (v) =>
            /^\d+\.\d+\.\d+\.\d+$/.test(v) ||
            '管理IP格式不正確，請輸入有效的IP地址',
        ],
        category: [(v) => !!v || '類別為必填項目'],
        brand: [(v) => !!v || '廠牌為必填項目'],
        model: [(v) => !!v || '型號為必填項目'],
        dataCenter: [(v) => !!v || '機房為必填項目'],
        ip: [
          (v) => !!v || 'Ping監控頻率為必填項目',
          (v) =>
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
              v
            ) || 'Invalid IP.',
        ],
        port: [
          (v) => !!v || 'Port為必填項目',
          (v) => (v && Number(v) > 0 && Number(v) <= 65535) || 'Invalid port.',
        ],
        snmpVersion: [(v) => !!v || 'SNMP版本為必選項目'],
        securityLevel: [(v) => !!v || '安全層級為必選項目'],
        account: [(v) => !!v || '帳號為必填項目'],
        authProtocol: [(v) => !!v || 'Auth協定為必填項目'],
        authPassword: [
          (v) => !!v || 'Auth密碼為必填項目',
          (v) =>
            (v && v.length >= 6) || 'Password must be at least 6 characters.',
        ],
        privacyProtocol: [(v) => !!v || '私有協定為必填項目'],
        privacyPassword: [
          (v) => !!v || '私有密碼為必填項目',
          (v) =>
            (v && v.length >= 6) || 'Password must be at least 6 characters.',
        ],
        contextName: [(v) => !!v || '上下文名稱為必填項目'],
        file: [
          (value) => !!value || '請上傳文件.',
          (value) =>
            !value || value.size < 5 * 1024 * 1024 || '文件大小不得超過5MB.', // 5 MB 限制
          (value) =>
            !value ||
            ['image/jpeg', 'image/png', 'application/pdf'].includes(
              value.type
            ) ||
            '僅支持JPEG,PNG和PDF格式.',
        ],
      },
      categories: ['III', 'Research', 'VPLS', 'IPv4', 'IPv6'],
      brands: ['CISCO'],
      models: ['Model X', 'Model Y', 'Model Z'],
      dataCenters: ['科技大樓', '臺北', '台大', '臺北(資策會)'],
      securityLevels: ['No Auth No Privacy', 'Auth No Privacy', 'Auth Privacy'],
      authProtocols: ['MD5', 'SHA'],
      privacyProtocols: ['DES', 'AES'],
    };
  },
  computed: {
    minuteOptions() {
      return [
        {
          value: 5,
          text: this.$t('minutes', [5]),
        },
        {
          value: 10,
          text: this.$t('minutes', [10]),
        },
        {
          value: 15,
          text: this.$t('minutes', [15]),
        },
      ];
    },
    items() {
      return [
        {
          id: 1,
          name: this.$t('basic.setting'),
          valid: false,
        },
        {
          id: 2,
          name: this.$t('connect.info'),
          valid: false,
        },
        {
          id: 3,
          name: this.$t('advance.setting'),
          valid: false,
        },
      ];
    },
  },
  watch: {
    basic: {
      handler() {
        if (this.$refs.basic) {
          this.$refs.basic.validate();
        }
      },
      deep: true,
      immediate: true,
    },
    connect: {
      handler() {
        if (this.$refs.connect) {
          this.$refs.connect.validate();
        }
      },
      deep: true,
      immediate: true,
    },
    file: {
      handler() {
        if (this.$refs.advance) {
          this.$refs.advance.validate();
        }
      },
      deep: false,
      immediate: true,
    },
  },
  mounted() {
    this.validate();
  },
  methods: {
    validate() {
      if (this.$refs.basic) {
        this.$refs.basic.validate();
      }
      if (this.$refs.connect) {
        this.$refs.connect.validate();
      }
      if (this.$refs.advance) {
        this.$refs.advance.validate();
      }
    },
    testConnection() {
      this.loading = true;
      this.message = '';
      setTimeout(() => {
        this.loading = false;
        const success = Math.random() > 0.5;
        this.message = success ? 'success' : 'error';
      }, 3000);
    },
    selectFile(file) {
      console.log(file);
      this.file = file;
      this.message = '';
    },
    uploadFile() {
      if (!this.file) return;
      this.loading = true;
      this.message = '';
      setTimeout(() => {
        this.loading = false;
        const success = Math.random() > 0.5;
        this.message = success ? 'success' : 'error';
      }, 3000);
    },
  },
};
</script>
