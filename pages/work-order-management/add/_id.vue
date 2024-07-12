<template>
  <v-container class="fill-height">
    <v-card>
      <v-card-text class="px-5 px-md-15 py-5">
        <v-form ref="basic" v-model="form.valid">
          <v-row>
            <v-col cols="12">
              <div
                class="v-input theme--light v-text-field"
              >
                <div class="v-input__control">
                  <label
                    class="v-label v-label--active theme--light"
                  >{{ $t('processor') }}</label>
                  <input class="info--text subtitle-1" :value="work.creator" readonly style="margin-top:-20px"/>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="work.assign"
                :items="assignList"
                item-value="value"
                item-text="label"
                required
                :rules="rules.assign"
                :label="$t('work.assign')"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="work.group"
                :items="assignList"
                :rules="rules.group"
                item-value="value"
                item-text="label"
                required
                :label="$t('notify.group')"
              ></v-select>
              <b class="caption info--text">
                ※系統會自動發信通知工單指派人員及通知群組
              </b>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="work.desc"
                :label="$t('work.desc')"
                :rules="rules.desc"
                required
                outlined
              >
                <template #label>
                  {{ $t('work.desc') }}<span class="red--text">*</span>
                </template>
              </v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="info" :disabled="!form.valid" @click="onSubmit">
          <v-icon size="20"  color="white">mdi-send-variant-outline</v-icon>
          {{ $t('submit') }}
        </v-btn>
        <v-btn @click="goToWorkOrderList">
          {{ $t('cancel') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'moment/moment';

export default {
  name: 'WorkOrderAdd',
  layout: 'admin-layout',
  data() {
    return {
      form: {
        valid: false,
      },
      work: {
        id: 0,
        workId: 0,
        resource: 'EyeSee(192.168.34.196)',
        desc: '',
        source: '',
        status: 'process',
        assign: 'admin(admin)',
        process: '',
        creator: 'admin',
        group: '',
        createTime: moment().format('YYYY-MM-DD HH:mm'),
        closeTime: '',
      },
      assignList: [
        {
          value: '',
          label: '-',
        },
        {
          value: 'admin(admin)',
          label: 'admin(admin)',
        },
      ],
      groupList: [
        {
          value: '',
          label: '-',
        },
        {
          value: '管理者群組',
          label: '管理者群組',
        },
        {
          value: '一線群組',
          label: '一線群組',
        },
        {
          value: '二線群組',
          label: '二線群組',
        },
      ],
      rules: {
        assign: [(v) => !!v || '請選擇工單指派'],
        group: [(v) => !!v || '請選擇通知群組'],
        desc: [(v) => !!v || '工單描述為必填'],
      },
    };
  },
  computed: {
    eventId() {
      return this.$router.currentRoute.params?.id || '';
    },
    list() {
      return this.$store.getters['work/getWorkList'];
    },
  },
  mounted() {
    this.work.id = this.list.length + 1;
    this.work.workId = this.list.length + 1;
    this.work.source = this.eventId;
  },
  methods:{
    onSubmit(){
      this.$store.dispatch('work/addWork' , this.work);
      this.$snackbar.info('新增工單成功' , 3000);
      this.goToWorkOrderList();
    },
    goToWorkOrderList(){
      this.$router.push('/work-order-management');
    }
  }
};
</script>
