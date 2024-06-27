<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="資料管理-帳號管理" :items="items">
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
                <v-btn small color="success" @click="addAccount()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.account`]="{ item }">
              <div v-if="!item.editable">{{ item.account }}</div>
              <v-text-field
                v-else
                v-model="item.account"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.group`]="{ item }">
              <div v-if="!item.editable">{{ item.group }}</div>
              <v-text-field
                v-else
                v-model="item.group"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.name`]="{ item }">
              <div v-if="!item.editable">{{ item.name }}</div>
              <v-text-field
                v-else
                v-model="item.name"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.email`]="{ item }">
              <div v-if="!item.editable">{{ item.email }}</div>
              <v-text-field
                v-else
                v-model="item.email"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.phone`]="{ item }">
              <div v-if="!item.editable">{{ item.phone }}</div>
              <v-text-field
                v-else
                v-model="item.phone"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.mobile`]="{ item }">
              <div v-if="!item.editable">{{ item.mobile }}</div>
              <v-text-field
                v-else
                v-model="item.mobile"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.status`]="{ item }">
              <div>{{ $t(item.status) }}</div>
            </template>
            <template #[`item.operate`]="{ item }">
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
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>
<script>
import items from '~/assets/json/accounts.json'
export default {
  name: 'AccountManagement',
  layout: 'admin-layout',
  data() {
    return {
      items: items.map((item) => ({
        ...item,
        editable: false,
      })),
    }
  },
  computed: {
    headers() {
      return [
        { text: this.$t('account'), value: 'account' },
        { text: this.$t('group'), value: 'group' },
        { text: this.$t('name'), value: 'name' },
        { text: this.$t('email'), value: 'email' },
        { text: this.$t('phone'), value: 'phone' },
        { text: this.$t('mobile'), value: 'mobile' },
        { text: this.$t('status'), value: 'status' },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ]
    },
  },
  methods: {
    addAccount() {
      this.items.push({
        id: this.items.length + 1,
        account: '',
        group: '',
        name: '',
        email: '',
        phone: '',
        mobile: '',
        status: 'disabled',
        editable: true,
      })
    },
  },
}
</script>
