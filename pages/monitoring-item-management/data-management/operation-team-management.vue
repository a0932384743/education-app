<template>
  <v-row>
    <table-card title="維運團隊資料維護" :items="items">
      <template
        #default="{
          search,
          footerProps,
          itemPerPage,
          page,
          items,
          loading,
          headerProps,
        }"
      >
        <v-data-table
          :fixed-header="true"
          :headers="headers"
          :items="items"
          :search="search"
          :page="page"
          :loading="loading"
          :items-per-page="itemPerPage"
          :footer-props="footerProps"
          :header-props="headerProps"
          height="500px"
          hide-default-footer
        >
          <template #[`header.operate`]="{ header }">
            <div class="d-inline-flex align-center">
              <div>{{ header.text }}</div>
              <v-btn small color="success" @click="addUser()">
                <v-icon size="20">mdi-plus</v-icon>
              </v-btn>
            </div>
          </template>
          <template #[`header.phone`]="{ header }">
            <div class="d-inline-flex align-center flex-column">
              <div>{{ header.text }}</div>
              <div>{{ $t('placeholder.1') }}</div>
            </div>
          </template>
          <template #[`header.mobile`]="{ header }">
            <div class="d-inline-flex align-center flex-column">
              <div>{{ header.text }}</div>
              <div>{{ $t('placeholder.1') }}</div>
            </div>
          </template>
          <template #[`header.fax`]="{ header }">
            <div class="d-inline-flex align-center flex-column">
              <div>{{ header.text }}</div>
              <div>{{ $t('placeholder.1') }}</div>
            </div>
          </template>
          <template #[`item.user`]="{ item }">
            <div v-if="!item.editable">{{ item.user }}</div>
            <v-text-field
              v-else
              v-model="item.user"
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
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
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
          <template #[`item.title`]="{ item }">
            <div v-if="!item.editable">{{ item.title }}</div>
            <v-text-field
              v-else
              v-model="item.title"
              small
              label=""
              required
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
            />
          </template>
          <template #[`item.company`]="{ item }">
            <div v-if="!item.editable">{{ item.company }}</div>
            <v-text-field
              v-else
              v-model="item.company"
              small
              label=""
              required
              :rules="[
                (val) => (val || '').length > 0 || 'This field is required',
              ]"
            />
          </template>
          <template #[`item.fax`]="{ item }">
            <div v-if="!item.editable">{{ item.fax }}</div>
            <v-text-field
              v-else
              v-model="item.fax"
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
            <v-btn
              small
              :disabled="
                Object.keys(item)
                  .filter((key) => key === 'user' || key === 'company')
                  .some((key) => item[key] === '')
              "
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
  </v-row>
</template>

<script>
import items from '~/assets/json/maintenance-teams.json';

export default {
  name: 'OperationTeamManagement',
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
        {
          text: this.$t('name'),
          value: 'user',
        },
        {
          text: this.$t('company'),
          value: 'company',
        },
        {
          text: `${this.$t('job.title')}/${this.$t('job.responsible')}`,
          value: 'title',
        },

        {
          text: this.$t('mobile'),
          value: 'mobile',
        },
        {
          text: this.$t('phone'),
          value: 'phone',
        },
        {
          text: this.$t('fax'),
          value: 'fax',
        },
        {
          text: this.$t('email'),
          value: 'email',
        },
        {
          text: this.$t('remark'),
          value: 'remark',
        },
        {
          text: this.$t('operate'),
          value: 'operate',
        },
      ];
    },
  },
  methods: {
    addUser() {
      this.items.push({
        company: '',
        email: '',
        fax: '',
        id: this.items.length + 1,
        mobile: '',
        phone: '',
        remark: '',
        title: '',
        user: '',
        editable: true,
      });
    },
  },
};
</script>
