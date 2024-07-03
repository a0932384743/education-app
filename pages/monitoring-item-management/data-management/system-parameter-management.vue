<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="資料管理-系統參數設定" :items="items">
        <template
          #default="{
            search,
            footerProps,
            itemPerPage,
            page,
            items,
            headerProps,
            loading,
          }"
        >
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="items"
            :search="search"
            :page="page"
            :items-per-page="itemPerPage"
            :footer-props="footerProps"
            :header-props="headerProps"
            fixed-header
            hide-default-footer
          >
            <template #[`header.operate`]="{ header }">
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="addParam()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.paramName`]="{ item }">
              <div v-if="!item.editable && !item.isNew">
                {{ item.paramName }}
              </div>
              <v-text-field
                v-else
                v-model="item.paramName"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>

            <template #[`item.param`]="{ item }">
              <div v-if="!item.editable && !item.isNew">{{ item.param }}</div>
              <v-text-field
                v-else
                v-model="item.param"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.desc`]="{ item }">
              <div v-if="!item.editable">{{ item.desc }}</div>
              <v-text-field
                v-else
                v-model="item.desc"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>

            <template #[`item.value`]="{ item }">
              <div v-if="!item.editable">{{ item.value }}</div>
              <v-text-field
                v-else
                v-model="item.value"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>

            <template #[`item.remark`]="{ item }">
              <div v-if="!item.editable">{{ item.remark }}</div>
              <v-text-field
                v-else
                v-model="item.remark"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>

            <template #[`item.operate`]="{ item }">
              <div class="d-inline-flex" style="gap: 0.8rem">
                <v-btn
                  small
                  :disabled="Object.keys(item).some((key) => item[key] === '')"
                  :color="item.editable ? 'secondary' : 'info'"
                  @click="
                    Object.keys(item).every((key) => item[key])
                      ? (item.editable = !item.editable)
                      : (item.editable = true)
                  "
                >
                  <v-icon size="20">mdi-pencil</v-icon>
                  <span class="d-none d-sm-inline-block">{{ $t('edit') }}</span>
                </v-btn>
                <v-btn
                  small
                  color="danger"
                  class="px-2"
                  @click="deleteParam(item)"
                >
                  <v-icon class="white--text" size="20"
                    >mdi-trash-can-outline</v-icon
                  ><span class="d-none d-sm-inline-block white--text">{{
                    $t('delete')
                  }}</span>
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>
<script>
import items from '~/assets/json/system-parameter.json';
export default {
  name: 'SystemParameterManagement',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
    };
  },
  computed: {
    headers() {
      return [
        { text: this.$t('param.name'), value: 'paramName' },
        { text: this.$t('param.code'), value: 'param' },
        { text: this.$t('param.desc'), value: 'desc' },
        { text: this.$t('param.value'), value: 'value' },
        { text: this.$t('remark'), value: 'remark' },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ];
    },
  },
  methods: {
    addParam() {
      this.items.push({
        id: this.items.length + 1,
        paramName: '',
        param: '',
        desc: '',
        value: '',
        remark: '',
        editable: true,
        isNew: true,
      });
    },
    deleteParam(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
};
</script>
