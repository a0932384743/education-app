<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="資料管理-GigaPoPs聯絡資料維護" :items="items">
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
              <div class="d-inline-flex align-center" style="gap: 0.5rem">
                <div>{{ header.text }}</div>
                <v-btn small color="success" @click="onAdd()">
                  <v-icon size="20">mdi-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template #[`item.giga_pops`]="{ item }">
              <div v-if="!item.editable">{{ item.giga_pops }}</div>
              <v-text-field
                v-else
                v-model="item.giga_pops"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>
            <template #[`item.address`]="{ item }">
              <div v-if="!item.editable">{{ item.address }}</div>
              <v-text-field
                v-else
                v-model="item.address"
                small
                label=""
                required
                :rules="[
                  (val) => (val || '').length > 0 || 'This field is required',
                ]"
              />
            </template>

            <template #[`item.contacts`]="{ item }">
              <ul
                v-if="!item.editable"
                class="d-inline-flex flex-column"
                style="list-style: none"
              >
                <li
                  v-for="contacts in item.contacts"
                  :key="contacts.name"
                  class="d-flex flex-wrap"
                  style="gap: 0.2rem"
                >
                  <div class="subtitle-2">{{ contacts.name }}</div>
                  <a class="subtitle-2" :href="'mail:' + contacts?.mail">{{
                    contacts.mail
                  }}</a>
                  <div class="subtitle-2">{{ contacts.phone }}</div>
                </li>
                <li class="d-flex flex-wrap subtitle-2" style="gap: 0.2rem">
                  {{ item.remark }}}
                </li>
              </ul>

              <ul v-else style="list-style: none">
                <li
                  v-for="(contacts, index) in item.contacts"
                  :key="index"
                  class="d-flex flex-column"
                  style="gap: 0.2rem"
                >
                  <v-text-field
                    v-model="contacts.name"
                    small
                    :label="$t('name')"
                    required
                    hide-details
                  />
                  <v-text-field
                    v-model="contacts.mail"
                    small
                    :label="$t('mail')"
                    required
                    hide-details
                  />
                  <v-text-field
                    v-model="contacts.phone"
                    small
                    :label="$t('phone')"
                    required
                    hide-details
                  />
                </li>
                <li class="d-flex flex-column subtitle-2" style="gap: 0.2rem">
                  <v-textarea
                    v-model="item.remark"
                    small
                    :label="$t('remark')"
                    required
                  />
                  <div>
                    <v-btn
                      class="flex-grow-0 mb-2"
                      small
                      color="success"
                      @click="
                        item.contacts.push({
                          name: '',
                          mail: '',
                          phone: '',
                        })
                      "
                    >
                      <v-icon size="15">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </li>
              </ul>
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
                  @click="onDelete(item)"
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
import items from '~/assets/json/giga-pops.json'

export default {
  name: 'GigapopsManagement',
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
        {
          text: this.$t('id'),
          value: 'id',
        },
        {
          text: this.$t('GigaPops'),
          value: 'giga_pops',
        },
        {
          text: this.$t('contact.info'),
          value: 'contacts',
        },

        {
          text: this.$t('address'),
          value: 'address',
        },
        { text: this.$t('operate'), value: 'operate', sortable: false },
      ]
    },
  },
  methods: {
    onAdd() {
      this.items.push({
        id: this.items.length + 1,
        address: '',
        contacts: [],
        giga_pops: '',
        remark: '',
      })
    },
    onDelet(item) {
      this.items = this.items.filter((i) => i.id !== item.id)
    },
  },
}
</script>
