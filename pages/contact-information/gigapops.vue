<template>
  <v-row>
    <v-col :cols="12">
      <table-card title="GigaPoPs聯絡資料" :items="items">
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
            <template #[`item.contacts`]="{ item }">
              <ul class="d-inline-flex flex-column" style="list-style: none">
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
            </template>
          </v-data-table>
        </template>
      </table-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Gigapops',
  layout: 'admin-layout',
  data() {
    return {
      items: [],
    };
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
      ];
    },
  },
  created() {
    this.onSearch();
  },
  methods: {
    onSearch() {
      this.items = this.$store.getters['gigaPops/getGigaPopsList'].map(
        (item) => {
          return {
            ...item,
            editable: false,
          };
        }
      );
    },
  },
};
</script>
